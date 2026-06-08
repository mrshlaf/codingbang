"use client";

import { useActionState } from "react";
import { createReviewAction } from "@/lib/admin-actions";

export default function NewReviewPage() {
  const [state, formAction, pending] = useActionState(createReviewAction, null);

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">Tambah Review</h1>
      <form action={formAction} className="max-w-2xl space-y-6">
        {state?.error && <div className="p-4 rounded-lg bg-accent/10 text-accent-foreground text-sm">{state.error}</div>}

        <div className="space-y-1.5">
          <label htmlFor="client_name" className="block text-sm font-medium text-foreground">Nama Klien</label>
          <input id="client_name" name="client_name" required
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="project_type" className="block text-sm font-medium text-foreground">Jenis Project</label>
          <input id="project_type" name="project_type"
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="content" className="block text-sm font-medium text-foreground">Review</label>
          <textarea id="content" name="content" required rows={4}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="rating" className="block text-sm font-medium text-foreground">Rating (1-5)</label>
          <select id="rating" name="rating"
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20">
            {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} ★</option>)}
          </select>
        </div>
        <div className="flex items-center gap-4 pt-2">
          <button type="submit" disabled={pending}
            className="px-6 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
            {pending ? "Menyimpan..." : "Buat Review"}
          </button>
          <a href="/dashboard/reviews" className="text-sm text-muted-foreground hover:text-foreground">Batal</a>
        </div>
      </form>
    </div>
  );
}
