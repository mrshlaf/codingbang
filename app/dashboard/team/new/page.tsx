"use client";

import { useActionState } from "react";
import { createTeamAction } from "@/lib/admin-actions";

export default function NewTeamPage() {
  const [state, formAction, pending] = useActionState(createTeamAction, null);

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">Tambah Anggota Tim</h1>
      <form action={formAction} className="max-w-2xl space-y-6">
        {state?.error && <div className="p-4 rounded-lg bg-accent/10 text-accent-foreground text-sm">{state.error}</div>}

        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-sm font-medium text-foreground">Nama</label>
          <input id="name" name="name" required
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="role" className="block text-sm font-medium text-foreground">Role</label>
          <input id="role" name="role" defaultValue="Team Member"
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="bio" className="block text-sm font-medium text-foreground">Bio</label>
          <textarea id="bio" name="bio" rows={3}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="skills" className="block text-sm font-medium text-foreground">Skills (koma)</label>
          <input id="skills" name="skills"
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" />
        </div>
        <div className="flex items-center gap-4 pt-2">
          <button type="submit" disabled={pending}
            className="px-6 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
            {pending ? "Menyimpan..." : "Tambah Anggota"}
          </button>
          <a href="/dashboard/team" className="text-sm text-muted-foreground hover:text-foreground">Batal</a>
        </div>
      </form>
    </div>
  );
}
