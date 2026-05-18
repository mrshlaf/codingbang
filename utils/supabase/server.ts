import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    console.warn("Supabase server credentials missing! Safely falling back to mock client.");
    return {
      from: () => ({
        insert: async () => ({ error: new Error("Supabase is not configured on server.") }),
        select: async () => ({ data: [], error: null }),
      }),
      auth: {
        signUp: async () => ({ data: null, error: new Error("Supabase is not configured.") }),
        signInWithOtp: async () => ({ data: null, error: new Error("Supabase is not configured.") }),
      }
    } as any;
  }

  const cookieStore = await cookies()

  return createServerClient(
    url,
    key,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Can be ignored
          }
        },
      },
    }
  )
}
