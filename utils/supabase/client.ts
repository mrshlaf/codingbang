import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    console.warn("Supabase client credentials missing! Safely falling back to mock client.");
    return {
      from: () => ({
        insert: async () => ({ error: new Error("Supabase is not configured on client.") }),
        select: async () => ({ data: [], error: null }),
      }),
      auth: {
        signUp: async () => ({ data: null, error: new Error("Supabase is not configured.") }),
        signInWithOtp: async () => ({ data: null, error: new Error("Supabase is not configured.") }),
      }
    } as any;
  }

  return createBrowserClient(url, key)
}
