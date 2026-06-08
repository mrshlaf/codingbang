"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Users,
} from "lucide-react";
import type { TeamMember } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function TeamClient({ members }: { members: TeamMember[] }) {
  const team = members.map((m) => ({
    ...m,
    initials: m.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase(),
  }));

  return (
    <div className="flex flex-col flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32 overflow-hidden">
      {/* HERO */}
      <motion.section
        className="flex flex-col items-center text-center gap-4 sm:gap-6 mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/40 text-xs font-semibold text-muted-foreground mb-2">
          <Users className="w-3.5 h-3.5" />
          Bersama Kami
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
          Tim Kami
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl font-medium">
          Kami adalah tim kecil dengan standar besar. Setiap proyek dikerjakan
          langsung oleh tangan yang sama — dari konsultasi hingga deploy.
        </p>
      </motion.section>

      {/* TEAM GRID */}
      <motion.section
        className="mb-20 sm:mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-4 sm:gap-5 lg:gap-6">
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="flex flex-col gap-4 sm:gap-5 p-6 sm:p-6 lg:p-7 rounded-2xl border border-border/40 bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-foreground to-foreground/70 text-background flex items-center justify-center text-lg sm:text-xl font-bold flex-shrink-0">
                {member.initials}
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground tracking-tight leading-tight">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-muted-foreground mt-1">
                  {member.role}
                </p>
              </div>
              {member.bio && (
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {member.bio}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center gap-6 sm:gap-8 p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[2.5rem] bg-foreground text-background relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-background/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/3" />
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight relative z-10">
          Ada proyek yang mau dikerjakan?
        </h2>
        <p className="text-background/80 text-sm sm:text-base md:text-lg max-w-2xl relative z-10 font-medium">
          Diskusi santai dulu. Ceritakan kebutuhan Anda, kami siap membantu.
        </p>
        <a
          href="https://wa.me/6285810289428?text=Halo%20CODING%20BANG%2C%20saya%20mau%20konsultasi%20soal%20website"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative z-10 mt-2 inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-6 sm:px-8 rounded-full font-bold text-sm sm:text-base bg-background text-foreground hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          Hubungi Kami
        </a>
      </motion.section>
    </div>
  );
}
