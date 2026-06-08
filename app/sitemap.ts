import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";
import { getProjects } from "@/lib/data";

const baseUrl = "https://codingbang.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const projects = getProjects();

  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.meta.publishedAt).toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const portfolioRoutes = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const routes = [
    "",
    "/services",
    "/calculator",
    "/portfolio",
    "/team",
    "/reviews",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.9,
  }));

  return [...routes, ...blogRoutes, ...portfolioRoutes];
}
