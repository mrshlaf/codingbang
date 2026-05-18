"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Code2, AlertTriangle } from "lucide-react";
import Image from "next/image";
import comingSoonImage from "@/app/images/coming soon.png";
import type { Project } from "@/lib/portfolio";

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

export function PortfolioClient({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col flex-1 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
      <motion.div 
        className="flex flex-col items-center text-center gap-6 mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">Selected Works</h1>
        <p className="text-xl text-muted-foreground max-w-2xl font-medium">
          A glimpse into the digital experiences we've engineered. Every project is built from scratch without templates.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants} className="h-full">
            <Link 
              href={`/portfolio/${project.slug}`}
              className="group flex flex-col gap-6 h-full"
            >
              <div className="w-full aspect-[4/3] rounded-3xl bg-muted overflow-hidden relative border-2 border-border/40 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:border-foreground/30 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                
                {/* Simulated Image Placeholder */}
                <div className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out">
                  <Image 
                    src={comingSoonImage} 
                    alt={project.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>

                {project.is_mock && (
                  <div className="absolute top-5 right-5 px-4 py-2 bg-background/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-muted-foreground border border-border/50 z-20 flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3" />
                    Concept
                  </div>
                )}
                
                <div className="absolute bottom-5 right-5 w-12 h-12 bg-background rounded-full flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20 shadow-xl">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>

              <div className="flex flex-col gap-3 px-2">
                <h2 className="text-3xl font-bold text-foreground tracking-tight group-hover:text-muted-foreground transition-colors">
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
    </div>
  );
}
