"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, Zap, GraduationCap, ShieldCheck, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PRINCIPLES = [
  {
    title: "Hand-Coded is Non-Negotiable",
    desc: "No templates. No page builders. We build from the ground up to ensure maximum control and zero bloat.",
    icon: Code2,
  },
  {
    title: "Speed as Respect",
    desc: "A slow website is a sign of disrespect to the visitor. Performance is not a feature; it's the foundation.",
    icon: Zap,
  },
  {
    title: "Education is Output",
    desc: "We don't gatekeep knowledge. Our process, insights, and technical decisions are shared openly.",
    icon: GraduationCap,
  },
  {
    title: "Full Accountability",
    desc: "As a specialized studio, there is no bureaucracy. You communicate directly with the engineer.",
    icon: ShieldCheck,
  },
];

const SKILLS = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", 
  "Astro", "Supabase", "PostgreSQL", "Node.js", "UI/UX Design", "Web Performance"
];

export function AboutClient({ stats }: { stats: { projectsCount: number, blogCount: number } }) {
  return (
    <div className="flex flex-col flex-1 w-full max-w-5xl mx-auto px-6 py-24 md:py-32 overflow-hidden">
      
      {/* HERO / ORIGIN STORY */}
      <motion.section 
        className="flex flex-col gap-10 mb-32"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
          Not just another <br className="hidden md:block" />
          <span className="text-muted-foreground font-serif italic font-light">web agency.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 lg:gap-24 items-start">
          <div className="prose prose-lg dark:prose-invert text-foreground/80 leading-relaxed max-w-none">
            <p>
              CODING BANG started from a simple frustration: the internet is becoming bloated. 
              Everywhere you look, businesses are settling for sluggish, cookie-cutter templates that look exactly like their competitors. 
              We realized there was a severe lack of high-quality, handcrafted digital experiences that actually respect the user's time.
            </p>
            <p className="mt-6">
              We are a boutique studio operating at the intersection of tech education and premium web development. 
              We don't use WordPress. We don't use page builders. Every line of code is written with intent, optimizing for speed, accessibility, and absolute aesthetic precision.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 p-8 rounded-3xl bg-card border border-border/50">
            <div>
              <div className="text-4xl font-bold text-foreground mb-1">{stats.projectsCount}+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="h-px w-full bg-border/50" />
            <div>
              <div className="text-4xl font-bold text-foreground mb-1">{stats.blogCount}+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Articles Published</div>
            </div>
            <div className="h-px w-full bg-border/50" />
            <div>
              <div className="text-4xl font-bold text-foreground mb-1">100%</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Hand-coded</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* PRINCIPLES */}
      <motion.section 
        className="mb-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight mb-12">
          Core Principles
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PRINCIPLES.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="group flex flex-col gap-4 p-8 rounded-3xl border border-border/40 bg-card hover:bg-muted/20 transition-colors shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground tracking-tight">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* EXPERTISE */}
      <motion.section 
        className="mb-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight mb-10 text-center">
          Our Arsenal
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {SKILLS.map((skill, idx) => (
            <motion.span 
              key={skill} 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full border border-border/60 bg-card text-sm md:text-base font-medium text-foreground shadow-sm hover:shadow-md hover:border-foreground/30 transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center gap-8 p-12 md:p-20 rounded-[3rem] bg-foreground text-background relative overflow-hidden"
      >
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-background/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/3" />
        
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative z-10">Have a project in mind?</h2>
        <p className="text-background/80 text-xl max-w-2xl relative z-10 font-medium">
          Whether you need a high-converting landing page or a complex web application, let's talk about how we can build it right.
        </p>
        <Link
          href="/contact"
          className="group relative z-10 mt-4 inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full font-bold text-lg bg-background text-foreground hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl"
        >
          <span>Start a Conversation</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.section>
    </div>
  );
}
