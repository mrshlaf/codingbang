import { AboutClient } from "@/components/about-client";
import { getAllProjects } from "@/lib/portfolio";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "About | CODING BANG",
  description: "The origin story, principles, and technical expertise behind CODING BANG.",
};

// SERVER COMPONENT
export default function AboutPage() {
  // BACKEND DATA FETCHING SIMULATION
  // In a real scenario with a database, you would query Supabase here:
  // const { count: projectsCount } = await supabase.from('portfolio_projects').select('*', { count: 'exact', head: true })
  
  // Here we use our file-system/mock backend logic to get the real counts
  const projectsCount = getAllProjects().length;
  const blogCount = getAllPosts().length;

  const stats = {
    projectsCount,
    blogCount
  };

  return <AboutClient stats={stats} />;
}
