import { getProjectById } from "@/lib/admin-store";
import { redirect } from "next/navigation";
import { ProjectForm } from "../../project-form";

export const metadata = { title: "Edit Project" };

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) redirect("/dashboard/projects");

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">Edit Project</h1>
      <ProjectForm project={project} />
    </div>
  );
}
