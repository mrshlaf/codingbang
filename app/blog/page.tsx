import { BlogClient } from "@/components/blog-client";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog | CODING BANG",
  description: "Artikel dan wawasan seputar web development, performa, dan digital bisnis.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return <BlogClient posts={posts} />;
}
