"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Script from "next/script";
import Link from "next/link";
import { Search, Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BlogPostMetadata } from "@/lib/mdx";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type Post = {
  slug: string;
  meta: BlogPostMetadata;
};

export function BlogClient({ posts }: { posts: Post[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState("Semua");

  // Get unique tags from all posts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach(p => p.meta.tags?.forEach(t => tagSet.add(t)));
    return ["Semua", ...Array.from(tagSet)];
  }, [posts]);

  // Filter posts by search and tag
  const filtered = useMemo(() => {
    return posts.filter(post => {
      const matchesTag = activeTag === "Semua" || post.meta.tags?.includes(activeTag);
      const matchesSearch = !searchQuery || 
        post.meta.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.meta.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [posts, activeTag, searchQuery]);

  return (
    <>
      <Script 
        src="https://www.instagram.com/embed.js" 
        strategy="lazyOnload" 
        onReady={() => {
          try {
            if ((window as any).instgrm) {
              (window as any).instgrm.Embeds.process();
            }
          } catch (e) {
            console.error(e);
          }
        }}
      />
      <div className="flex flex-col flex-1 w-full max-w-5xl mx-auto px-6 py-24 md:py-32">
        <motion.div 
          className="flex flex-col items-center text-center gap-6 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">Blog Edukasi</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl font-medium">
            Artikel dan wawasan seputar web development, performa, dan digital bisnis — langsung dari Instagram Codingbang.
          </p>
        </motion.div>

        {/* SEARCH BAR */}
        <motion.div 
          className="relative max-w-xl mx-auto w-full mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari artikel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-14 pl-12 pr-6 rounded-full bg-card border border-border/60 text-foreground placeholder:text-muted-foreground/60 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
          />
        </motion.div>

        {/* TAG FILTER */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={cn(
                "px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all",
                activeTag === tag
                  ? "bg-foreground text-background shadow-lg"
                  : "bg-muted/30 text-muted-foreground border border-border/40 hover:border-foreground/30"
              )}
            >
              {tag === "Semua" ? tag : `#${tag}`}
            </button>
          ))}
        </motion.div>

        {/* POSTS GRID */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={`${activeTag}-${searchQuery}`}
        >
          {filtered.map((post, idx) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-4 p-6 rounded-3xl border border-border/40 bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-center gap-3">
                  {post.meta.tags?.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight group-hover:text-muted-foreground transition-colors line-clamp-2">
                  {post.meta.title}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {post.meta.description}
                </p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/30 text-xs text-muted-foreground font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.meta.publishedAt).toLocaleDateString("id-ID", { month: "long", day: "numeric", year: "numeric" })}
                  </div>
                  {post.meta.readingTime && (
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.meta.readingTime}
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground text-lg">Tidak ada artikel yang ditemukan.</p>
          </motion.div>
        )}
      </div>
    </>
  );
}
