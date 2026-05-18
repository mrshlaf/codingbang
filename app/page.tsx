"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HeroClient } from "@/components/hero-client";
import Script from "next/script";
import comingSoonImage from "@/app/images/coming soon.png";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Laptop, Rocket } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full overflow-hidden">
      <HeroClient />

      {/* QUICK VALUE PROPOSITION */}
      <section className="w-full py-24 px-6 border-t border-[#2e4f44]/30 bg-background relative">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              title: "Hand-Coded. Tanpa Templat.",
              description: "Setiap piksel dan baris kode dirancang eksklusif untuk keunikan identitas brand Anda.",
              icon: Sparkles
            },
            {
              title: "Arsitektur Modern.",
              description: "Didukung oleh Next.js dan Supabase. Mengabaikan sistem lambat WordPress.",
              icon: Laptop
            },
            {
              title: "Kecepatan Ekstrim.",
              description: "Kami menghormati waktu klien Anda. Website yang lambat adalah kerugian bisnis nyata.",
              icon: Rocket
            }
          ].map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div 
                key={i} 
                className="flex flex-col gap-5 p-8 rounded-3xl border border-border/40 bg-card/50 hover:bg-muted/10 hover:border-[#2e4f44]/40 hover:-translate-y-2 transition-all duration-500 group shadow-sm hover:shadow-xl"
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-foreground font-semibold group-hover:scale-110 group-hover:bg-[#1C352D] group-hover:text-white transition-all duration-500 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground tracking-tight">{val.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* INSTAGRAM JOURNAL SPOTLIGHT */}
      <Script 
        src="https://www.instagram.com/embed.js" 
        strategy="lazyOnload" 
      />
      <section className="w-full py-24 px-6 bg-card border-y border-border/40 relative overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-foreground/[0.01] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Text Info */}
          <motion.div 
            className="flex flex-col items-start gap-6 lg:col-span-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#4a6358] bg-[#eae3d8]/40 dark:bg-[#244238] px-3.5 py-1.5 rounded-full">Jurnal Kami</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Kami berbagi wawasan <br />
              <span className="text-muted-foreground font-serif italic font-light">langsung di Instagram.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Kami menulis tentang optimasi performa web, desain sistem, arsitektur headless, dan mengapa website hand-coded mendominasi kredibilitas bisnis modern. Ikuti akun kami untuk belajar bersama.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <a 
                href="https://www.instagram.com/codingbang/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full font-bold bg-[#1C352D] text-[#F8F0E5] hover:bg-[#1C352D]/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#1C352D]/10"
              >
                Ikuti @codingbang
              </a>
              <Link 
                href="/blog"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full font-bold border border-border/60 text-foreground hover:bg-muted/10 transition-all"
              >
                Lihat Semua Artikel
              </Link>
            </div>
          </motion.div>
          
          {/* Live Instagram Embed Card */}
          <motion.div 
            className="lg:col-span-6 flex justify-center w-full relative z-10"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-[450px]">
              <blockquote className="instagram-media mx-auto" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DYfPR_jkwBQ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: "#FFF", border: "none", borderRadius: "24px", boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)", margin: "1px", maxWidth: "540px", minWidth: "326px", padding: 0, width: "calc(100% - 2px)" }}>
                <div style={{ padding: "16px" }}>
                  <a href="https://www.instagram.com/p/DYfPR_jkwBQ/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: "#FFFFFF", lineHeight: 0, padding: "0", textAlign: "center", textDecoration: "none", width: "100%" }} target="_blank" rel="noopener noreferrer">
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                      <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", flexGrow: 0, height: "40px", marginRight: "14px", width: "40px" }}></div>
                      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
                        <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", flexGrow: 0, height: "14px", marginBottom: "6px", width: "100px" }}></div>
                        <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", flexGrow: 0, height: "14px", width: "60px" }}></div>
                      </div>
                    </div>
                  </a>
                </div>
              </blockquote>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="w-full py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <motion.div 
            className="flex flex-col items-center text-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground">Karya Pilihan</h2>
            <p className="text-muted-foreground max-w-2xl text-base font-medium">Portofolio terbaru dari pengalaman digital berkinerja tinggi yang kami bangun untuk brand-brand visioner.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[1, 2].map((i) => (
              <motion.div key={i} variants={itemVariants}>
                <Link href="/portfolio" className="group relative w-full aspect-[4/3] bg-card rounded-3xl overflow-hidden border border-border/40 block shadow-sm hover:shadow-2xl hover:border-[#2e4f44]/30 transition-all duration-500">
                  <div className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out">
                    <Image 
                      src={comingSoonImage} 
                      alt="Proyek Unggulan" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/95 via-background/60 to-transparent z-20">
                    <h3 className="text-2xl font-extrabold text-foreground group-hover:text-[#1C352D] dark:group-hover:text-[#F8F0E5] transition-colors">Proyek Unggulan</h3>
                    <p className="text-muted-foreground mt-1 font-medium text-sm">Aplikasi Web &middot; Next.js &middot; Framer Motion</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex justify-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="/portfolio"
              className={cn(
                "inline-flex items-center justify-center h-12 px-8 rounded-full font-bold text-base transition-all duration-300",
                "bg-transparent text-foreground border border-border",
                "hover:bg-[#1C352D] hover:text-[#F8F0E5] hover:border-[#1C352D]"
              )}
            >
              Lihat Seluruh Portofolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="w-full py-24 px-6 border-t border-[#2e4f44]/30 bg-[#1C352D] text-[#F8F0E5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <motion.div 
          className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">Siap mewujudkan mahakarya website Anda?</h2>
          <p className="text-lg text-[#F8F0E5]/80 max-w-2xl font-medium leading-relaxed">
            Mari diskusikan bagaimana kami dapat meningkatkan otoritas digital bisnis Anda. Diskusi santai, tanpa tekanan, murni merumuskan solusi terbaik.
          </p>
          <Link
            href="/contact"
            className={cn(
              "group inline-flex items-center justify-center gap-2.5 h-14 px-10 rounded-full font-bold text-lg mt-4",
              "bg-[#F8F0E5] text-[#1C352D]",
              "hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl"
            )}
          >
            <span>Mulai Konsultasi</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
