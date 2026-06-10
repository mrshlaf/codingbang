import { getProjects } from "@/lib/data";
import { PortfolioClient } from "@/components/portfolio-client";

export const metadata = {
  title: "Portfolio",
  description: "Lihat karya terbaik kami — dari landing page hingga web app kompleks.",
};

export default function PortfolioPage() {
  const projects = getProjects();
  return <PortfolioClient projects={projects} />;
}
