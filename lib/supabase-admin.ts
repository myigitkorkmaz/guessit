import { createClient } from "@supabase/supabase-js";

// Service-role client for server-side routes only — bypasses RLS. Never
// import this from client components; it must stay inside API routes /
// server actions where SUPABASE_SERVICE_ROLE_KEY is available.
export function createAdminSupabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}
