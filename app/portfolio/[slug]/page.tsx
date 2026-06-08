import { getProjects, getProjectBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import { PortfolioDetailClient } from "@/components/portfolio-detail-client";

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function PortfolioDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <PortfolioDetailClient project={project} />;
}
