import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ScrollProgress } from "@/components/scroll-progress";
import Script from "next/script";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  
  try {
    post = getPostBySlug(slug);
  } catch (e) {
    notFound();
  }

  return (
    <>
      <ScrollProgress />
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      <div className="flex flex-col flex-1 w-full max-w-3xl mx-auto px-6 py-24 md:py-32">
        <Link 
          href="/blog" 
          className="group text-sm font-medium text-muted-foreground hover:text-foreground mb-12 flex items-center gap-2 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Journal
        </Link>
        
        <article className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <header className="mb-12 flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              {post.meta.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground border-y border-border/40 py-5">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time>{new Date(post.meta.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
              </div>
              {post.meta.readingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.meta.readingTime}</span>
                </div>
              )}
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-foreground prose-a:underline-offset-4 hover:prose-a:text-muted-foreground prose-img:rounded-3xl prose-img:shadow-xl max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </article>

        <div className="mt-32 p-10 rounded-[3rem] bg-muted/40 border border-border/50 flex flex-col items-center text-center gap-6 shadow-sm">
          <h3 className="text-3xl font-bold text-foreground">Need a custom website?</h3>
          <p className="text-muted-foreground max-w-md text-lg">We build fast, secure, and beautiful digital experiences without relying on generic templates.</p>
          <Link href="/contact" className="mt-4 px-10 py-4 bg-foreground text-background font-bold text-base sm:text-lg rounded-full hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-foreground/10">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
