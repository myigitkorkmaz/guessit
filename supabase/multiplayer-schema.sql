-- GuessIt multiplayer rooms schema — run this in the Supabase SQL editor
-- (already applied via the Supabase Management API as of this commit).
--
-- Writes go through server-side API routes using the service role key
-- (anti-cheat: clients never write scores/answers directly).
--
-- RLS: `rooms` and `room_participants` are publicly readable — no secrets,
-- and the lobby/spectator UI needs to read them directly. `room_rounds`
-- (holds correct_answer) and `round_guesses` (holds each guess amount) get
-- RLS enabled with *no* client policies at all, so the anon key cannot read
-- them under any circumstance — only the service role (which bypasses RLS)
-- can. This isn't an oversight: those two tables are exactly the "hide
-- until reveal" data, and the app never reads them from the client anyway —
-- round info reaches clients via the round_start broadcast (question_data
-- only, no answer) and reveal info via the round_reveal broadcast (the
-- server pushes the full payload once it's no longer secret). A public
-- SELECT policy on either table would let anyone query the answer or other
-- players' guesses mid-round straight through the REST API, bypassing the
-- broadcast-only design entirely.

create table rooms (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  host_user_id uuid references auth.users,
  game_id text not null default 'pricedrop',
  status text default 'lobby',
  current_round integer default 0,
  total_rounds integer default 5,
  round_duration_seconds integer default 45,
  max_players integer default 50,
  created_at timestamp default now(),
  started_at timestamp,
  finished_at timestamp
);

create table room_participants (
  id uuid primary key default gen_random_uuid(),
  room_id uuid references rooms on delete cascade,
  user_id uuid references auth.users,
  display_name text not null,
  role text default 'player',
  total_score integer default 0,
  joined_at timestamp default now(),
  is_ready boolean default false
);

create table room_rounds (
  id uuid primary key default gen_random_uuid(),
  room_id uuid references rooms on delete cascade,
  round_number integer not null,
  question_data jsonb not null,
  correct_answer numeric not null,
  started_at timestamp,
  revealed_at timestamp
);

create table round_guesses (
  id uuid primary key default gen_random_uuid(),
  round_id uuid references room_rounds on delete cascade,
  room_id uuid references rooms on delete cascade,
  user_id uuid references auth.users,
  display_name text not null,
  guess numeric not null,
  score integer,
  percentage_off numeric,
  submitted_at timestamp default now()
);

create index room_participants_room_id_idx on room_participants (room_id);
create index room_rounds_room_id_idx on room_rounds (room_id);
create index round_guesses_room_id_idx on round_guesses (room_id);
create index round_guesses_round_id_idx on round_guesses (round_id);

alter table rooms enable row level security;
alter table room_participants enable row level security;
alter table room_rounds enable row level security;
alter table round_guesses enable row level security;

create policy "rooms are publicly readable"
  on rooms for select
  using (true);

create policy "room_participants are publicly readable"
  on room_participants for select
  using (true);

-- Intentionally no policies on room_rounds or round_guesses — see comment
-- above. RLS is enabled with zero policies, which denies all client access;
-- only server-side code using the service role key can read these.
