"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScreenshotThumbnail } from "@/components/screenshot-thumbnail";
import type { Project } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CATEGORIES = ["Semua", "E-Commerce", "Web App", "Landing Page", "Company Profile"];

export function PortfolioClient({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered = activeCategory === "Semua"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col flex-1 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
      <motion.div 
        className="flex flex-col items-center text-center gap-6 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">Portofolio</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl font-medium">
          Setiap proyek dibangun dari nol tanpa template. Ini adalah hasil kerja kami.
        </p>
      </motion.div>

      {/* FILTER */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-16"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all",
              activeCategory === cat
                ? "bg-foreground text-background shadow-lg"
                : "bg-muted/30 text-muted-foreground border border-border/40 hover:border-foreground/30"
            )}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        key={activeCategory}
      >
        {filtered.map((project) => (
          <motion.div key={project.id} variants={itemVariants} className="h-full">
            <Link 
              href={`/portfolio/${project.slug}`}
              className="group flex flex-col gap-6 h-full"
            >
              <div className="w-full aspect-video rounded-3xl bg-foreground/5 overflow-hidden relative border-2 border-border/40 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:border-foreground/30 group-hover:-translate-y-2">
                <div className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out">
                  {project.client_url ? (
                    <ScreenshotThumbnail url={project.client_url} title={project.title} />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm font-medium">Preview</span>
                    </div>
                  )}
                </div>

                {/* CATEGORY BADGE */}
                <div className="absolute top-5 left-5 px-3 py-1.5 bg-background/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-foreground border border-border/50 z-20">
                  {project.category}
                </div>

                <div className="absolute bottom-5 right-5 w-12 h-12 bg-background rounded-full flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20 shadow-xl">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>

              <div className="flex flex-col gap-3 px-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight group-hover:text-muted-foreground transition-colors">
                  {project.title}
                </h2>
                <p className="text-lg text-muted-foreground line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech_stack.map(tech => (
                    <span key={tech} className="text-xs font-bold uppercase tracking-wider text-background bg-foreground px-3 py-1.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">Belum ada proyek di kategori ini.</p>
        </div>
      )}
    </div>
  );
}
