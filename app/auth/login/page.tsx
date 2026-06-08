"use client";

import { useActionState } from "react";
import { login } from "@/lib/admin-actions";
import { MessageCircle } from "lucide-react";

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground">CODING BANG</h1>
          <p className="text-muted-foreground mt-1">Admin Dashboard</p>
        </div>

        <form action={formAction} className="space-y-4">
          {state?.error && (
            <p className="text-red-500 text-sm text-center bg-red-500/10 rounded-lg px-4 py-2">{state.error}</p>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="admin@codingbang.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full py-2.5 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {pending ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Belum punya akun?{" "}
          <a
            href="https://wa.me/6285810289428?text=Halo%20CODING%20BANG%2C%20saya%20ingin%20mendaftarkan%20akun%20admin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1"
          >
            <MessageCircle className="w-3 h-3" />
            Hubungi Admin
          </a>
        </p>
      </div>
    </div>
  );
}
