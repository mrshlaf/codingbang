import { getAllProjects } from "@/lib/admin-store";
import { deleteProjectAction } from "@/lib/admin-actions";
import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { DeleteButton } from "../delete-button";

export const metadata = { title: "Projects | CODING BANG" };

export default async function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">Projects</h1>
        <Link
          href="/dashboard/projects/new"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Plus className="w-4 h-4" />
          Tambah
        </Link>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground text-xs uppercase tracking-wider">
                <th className="text-left px-4 py-3 font-medium">Title</th>
                <th className="text-left px-4 py-3 font-medium">Category</th>
                <th className="text-left px-4 py-3 font-medium">Featured</th>
                <th className="text-right px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-12 text-muted-foreground">
                    Belum ada project.
                  </td>
                </tr>
              )}
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">
                    <div>
                      <span className="text-foreground font-medium">{project.title}</span>
                      <span className="block text-muted-foreground text-xs mt-0.5">/{project.slug}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                      {project.category}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {project.is_featured ? (
                      <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 text-xs">Featured</span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full bg-gray-500/10 text-gray-600 text-xs">No</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/dashboard/projects/${project.id}/edit`}
                        className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Pencil className="w-4 h-4" />
                      </Link>
                      <DeleteButton id={project.id} action={deleteProjectAction} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
