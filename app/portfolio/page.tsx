import { getAllProjects } from "@/lib/portfolio";
import { PortfolioClient } from "@/components/portfolio-client";

export const metadata = {
  title: "Portfolio | CODING BANG",
  description: "A showcase of our premium web development projects.",
};

export default function PortfolioIndex() {
  const projects = getAllProjects();

  return <PortfolioClient projects={projects} />;
}
