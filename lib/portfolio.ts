export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  tech_stack: string[];
  thumbnail_url: string;
  live_url?: string;
  github_url?: string;
  is_featured: boolean;
  is_mock: boolean;
};

export const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Project Alpha",
    slug: "project-alpha",
    description: "A premium e-commerce experience designed for a luxury fashion brand.",
    content: "Project Alpha was built to solve the performance issues commonly found in Shopify templates. By migrating to a headless architecture using Next.js and Shopify Storefront API, we achieved sub-second load times and a completely bespoke, butter-smooth user interface.",
    tech_stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Shopify"],
    thumbnail_url: "/placeholder-1.jpg",
    live_url: "https://example.com",
    is_featured: true,
    is_mock: true,
  },
  {
    id: "2",
    title: "Nexus Dashboard",
    slug: "nexus-dashboard",
    description: "Internal automation dashboard for a logistics company.",
    content: "The Nexus Dashboard consolidates data from 3 different legacy systems into one blazing-fast, real-time dashboard. Built with Supabase for real-time subscriptions and Next.js App Router for optimal performance.",
    tech_stack: ["Next.js", "Supabase", "PostgreSQL", "Recharts"],
    thumbnail_url: "/placeholder-2.jpg",
    is_featured: false,
    is_mock: true,
  },
  {
    id: "3",
    title: "Aura Landing Page",
    slug: "aura-landing",
    description: "High-converting landing page for an AI startup.",
    content: "Aura needed a landing page that communicated their cutting-edge AI technology without feeling like a generic SaaS template. We designed a dark-mode, minimalist interface with subtle glassmorphism and WebGL elements.",
    tech_stack: ["Astro", "Tailwind CSS", "Three.js"],
    thumbnail_url: "/placeholder-3.jpg",
    live_url: "https://example.com",
    is_featured: true,
    is_mock: true,
  }
];

export function getAllProjects() {
  return MOCK_PROJECTS;
}

export function getProjectBySlug(slug: string) {
  return MOCK_PROJECTS.find(p => p.slug === slug);
}
