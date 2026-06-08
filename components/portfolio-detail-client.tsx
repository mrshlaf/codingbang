"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ArrowUpRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import comingSoonImage from "@/app/images/coming soon.png";
import type { Project } from "@/lib/data";
import { ScrollProgress } from "@/components/scroll-progress";

export function PortfolioDetailClient({ project }: { project: Project }) {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200]);

  const hasLink = project.client_url;

  return (
    <>
      <ScrollProgress />
      <div className="flex flex-col flex-1 w-full max-w-5xl mx-auto px-6 py-24 md:py-32">
        <Link 
          href="/portofolio" 
          className="group text-sm font-bold text-muted-foreground hover:text-foreground mb-12 flex items-center gap-2 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Portofolio
        </Link>

        <motion.header 
          className="flex flex-col gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
            {project.title}
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl leading-relaxed font-medium">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            {hasLink && (
              <a 
                href={project.client_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-14 px-8 rounded-full font-bold text-lg bg-foreground text-background hover:scale-105 active:scale-95 transition-all shadow-xl shadow-foreground/10"
              >
                Kunjungi Website <ExternalLink className="w-5 h-5" />
              </a>
            )}
            <a
              href={`https://wa.me/6285810289428?text=Halo%20CODING%20BANG%2C%20saya%20tertarik%20dengan%20project%20${encodeURIComponent(project.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full font-bold text-lg border-2 border-border/60 bg-background text-foreground hover:border-foreground transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> Buat Project Serupa
            </a>
          </div>
        </motion.header>

        {/* PARALLAX MOCKUP IMAGE */}
        <div className="w-full aspect-[16/9] lg:aspect-[21/9] bg-muted rounded-[2.5rem] mb-24 overflow-hidden border-2 border-border/40 relative shadow-2xl">
          <motion.div 
            style={{ y: yParallax }}
            className="absolute -inset-[10%] w-[120%] h-[120%]"
          >
            <Image 
              src={comingSoonImage} 
              alt={project.title} 
              fill 
              className="object-cover" 
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-16 lg:gap-24">
          <motion.section 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight">Tentang Proyek</h2>
            <div className="prose prose-xl dark:prose-invert text-muted-foreground leading-relaxed font-medium">
              <p>{project.full_description}</p>
            </div>
          </motion.section>

          <motion.aside 
            className="flex flex-col gap-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-8 rounded-3xl bg-muted/30 border border-border/50">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                Tech Stack
              </h3>
              <ul className="flex flex-wrap gap-3">
                {project.tech_stack.map(tech => (
                  <li key={tech} className="font-bold text-background bg-foreground px-4 py-2 rounded-full text-sm">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {project.client_name && (
              <div className="p-8 rounded-3xl bg-muted/30 border border-border/50">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Klien</h3>
                <p className="text-foreground font-bold text-lg">{project.client_name}</p>
              </div>
            )}
          </motion.aside>
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-32 p-12 lg:p-20 rounded-[3rem] bg-foreground text-background flex flex-col items-center text-center gap-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-background/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <h3 className="text-4xl md:text-5xl font-bold relative z-10">Butuh Project Serupa?</h3>
          <p className="text-background/80 max-w-2xl text-xl font-medium relative z-10">
            Konsultasi gratis dulu. Ceritakan kebutuhan Anda, kami siap membantu mewujudkannya.
          </p>
          <a
            href={`https://wa.me/6285810289428?text=Halo%20CODING%20BANG%2C%20saya%20tertarik%20dengan%20project%20${encodeURIComponent(project.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative z-10 mt-4 inline-flex items-center gap-3 px-10 py-5 bg-background text-foreground font-bold text-lg rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl"
          >
            <MessageCircle className="w-5 h-5" /> Konsultasi Sekarang
          </a>
        </motion.div>
      </div>
    </>
  );
}
