import { ProjectForm } from "../project-form";

export const metadata = { title: "Tambah Project" };

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">Tambah Project</h1>
      <ProjectForm />
    </div>
  );
}
