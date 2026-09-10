-- GuessIt schema — run this in the Supabase SQL editor.

create table global_scores (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users,
  game_id text not null,
  score integer not null,
  played_at timestamp default now()
);

-- Profiles table: the leaderboard page needs a "Username" column and a
-- stable user_id to highlight the current user's row. Exposing
-- auth.users.email directly through a public view/leaderboard isn't a great
-- idea (leaks real email addresses to every visitor), so we mint a
-- public-safe username per user instead, same pattern as the PriceDrop game.
create table profiles (
  id uuid primary key references auth.users on delete cascade,
  username text unique not null,
  created_at timestamp default now()
);

create or replace function public.handle_new_user()
returns trigger as $$
declare
  base_username text;
  final_username text;
  suffix int := 0;
begin
  base_username := coalesce(nullif(split_part(new.email, '@', 1), ''), 'player');
  final_username := base_username;

  while exists (select 1 from public.profiles where username = final_username) loop
    suffix := suffix + 1;
    final_username := base_username || suffix::text;
  end loop;

  insert into public.profiles (id, username) values (new.id, final_username);
  return new;
end;
$$ language plpgsql security definer set search_path = public;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Global leaderboard view. This replaces the version in the original spec
-- (which grouped by auth.users.email and had no user_id or best_game column)
-- with one that joins profiles instead of auth.users, and adds user_id +
-- best_game via a lateral join so the page can render everything the
-- "Rank, Username, Total Score, Games Played, Best Game" spec calls for.
create view global_leaderboard as
select
  p.id as user_id,
  p.username,
  sum(gs.score) as total_score,
  count(*) as games_played,
  max(gs.score) as best_score,
  best.game_id as best_game
from global_scores gs
join profiles p on p.id = gs.user_id
join lateral (
  select game_id
  from global_scores gs2
  where gs2.user_id = gs.user_id
  order by gs2.score desc
  limit 1
) best on true
group by p.id, p.username, best.game_id
order by total_score desc
limit 100;

-- Row Level Security
alter table global_scores enable row level security;
alter table profiles enable row level security;

create policy "global_scores are publicly readable"
  on global_scores for select
  using (true);

create policy "users can insert their own global_scores"
  on global_scores for insert
  with check (auth.uid() = user_id);

create policy "profiles are publicly readable"
  on profiles for select
  using (true);

create policy "users can update their own profile"
  on profiles for update
  using (auth.uid() = id);
