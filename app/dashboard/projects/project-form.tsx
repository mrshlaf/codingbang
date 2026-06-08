"use client";

import { useActionState } from "react";
import { createProjectAction, updateProjectAction } from "@/lib/admin-actions";
import type { Project } from "@/lib/data";

const CATEGORIES = ["E-Commerce", "Web App", "Landing Page", "Company Profile"];

export function ProjectForm({ project }: { project?: Project }) {
  const action = project
    ? updateProjectAction.bind(null, project.id)
    : createProjectAction;
  const [state, formAction, pending] = useActionState(action, null);

  return (
    <form action={formAction} className="max-w-2xl space-y-6">
      {state?.error && (
        <div className="p-4 rounded-lg bg-red-500/10 text-red-500 text-sm">{state.error}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="title" className="block text-sm font-medium text-foreground">Judul</label>
          <input id="title" name="title" defaultValue={project?.title} required
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="slug" className="block text-sm font-medium text-foreground">Slug</label>
          <input id="slug" name="slug" defaultValue={project?.slug} required
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="description" className="block text-sm font-medium text-foreground">Deskripsi</label>
        <textarea id="description" name="description" defaultValue={project?.description} required rows={2}
          className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="full_description" className="block text-sm font-medium text-foreground">Deskripsi Lengkap</label>
        <textarea id="full_description" name="full_description" defaultValue={project?.full_description} rows={4}
          className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="category" className="block text-sm font-medium text-foreground">Kategori</label>
          <select id="category" name="category" defaultValue={project?.category}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20">
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="client_name" className="block text-sm font-medium text-foreground">Nama Klien</label>
          <input id="client_name" name="client_name" defaultValue={project?.client_name}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="thumbnail_url" className="block text-sm font-medium text-foreground">Thumbnail URL</label>
        <input id="thumbnail_url" name="thumbnail_url" defaultValue={project?.thumbnail_url}
          className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="tech_stack" className="block text-sm font-medium text-foreground">Tech Stack (koma)</label>
        <input id="tech_stack" name="tech_stack" defaultValue={project?.tech_stack?.join(", ")}
          className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20" />
      </div>

      <label className="flex items-center gap-2 text-sm text-foreground">
        <input type="checkbox" name="is_featured" value="true" defaultChecked={project?.is_featured} />
        Featured
      </label>

      <div className="flex items-center gap-4 pt-2">
        <button type="submit" disabled={pending}
          className="px-6 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
          {pending ? "Menyimpan..." : project ? "Simpan" : "Buat Project"}
        </button>
        <a href="/dashboard/projects" className="text-sm text-muted-foreground hover:text-foreground">Batal</a>
      </div>
    </form>
  );
}
