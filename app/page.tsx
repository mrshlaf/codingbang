"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { HeroClient } from "@/components/hero-client";
import { motion } from "framer-motion";
import { ArrowRight, Code, Users, Award, Star, MessageCircle } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { ScreenshotThumbnail } from "@/components/screenshot-thumbnail";

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

const MOCK_REVIEWS = [
  {
    name: "Rina Wijaya",
    project: "Toko Online Sejahtera",
    rating: 5,
    text: "Hasilnya超出 ekspektasi. Website toko online saya jadi lebih cepat dan profesional. Prosesnya juga cepat banget!",
    initial: "RW",
  },
  {
    name: "Doni Prasetyo",
    project: "Company Profile PT Maju",
    rating: 5,
    text: "Akhirnya nemu developer yang ngerti kebutuhan bisnis. Bukan cuma bikin website cantik, tapi juga cepat dan SEO-friendly.",
    initial: "DP",
  },
  {
    name: "Sari Amalia",
    project: "Landing Page Kreator",
    rating: 4,
    text: "Desainnya premium banget. Suka sama hasil portfolionya. Pasti recommended ke temen-temen!",
    initial: "SA",
  },
];

const featuredProjects = PROJECTS.filter(p => p.is_featured);

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full overflow-hidden">
      <HeroClient />

      {/* ANGKA KREDIBILITAS */}
      <section className="w-full py-16 px-6 bg-card border-y border-border/40">
        <motion.div 
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { angka: "50+", label: "Proyek Selesai", icon: Code },
            { angka: "40+", label: "Client Puas", icon: Users },
            { angka: "3+", label: "Tahun Pengalaman", icon: Award },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} variants={itemVariants} className="flex flex-col items-center text-center gap-2 p-6">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">{item.angka}</span>
                <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* HIGHLIGHT PAKET */}
      <section className="w-full py-24 px-6 bg-background">
        <motion.div 
          className="max-w-7xl mx-auto flex flex-col gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground bg-muted/40 px-3.5 py-1.5 rounded-full">Layanan</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">Pilih Sesuai Kebutuhan</h2>
            <p className="text-muted-foreground max-w-2xl text-base font-medium">Konsultasi dulu, baru deal — tanpa tekanan.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Starter",
                desc: "Landing page 1–3 halaman. Website cepat dan profesional untuk memulai presence online.",
                features: ["1–3 Halaman", "Mobile Responsive", "SEO Basic", "Tombol WhatsApp", "3–5 Hari Jadi"],
                href: "/services",
                highlight: false,
              },
              {
                title: "Growth",
                desc: "Company profile multi-halaman dengan fitur lengkap untuk membangun kredibilitas digital.",
                features: ["5–10 Halaman", "CMS/Admin Opsional", "SEO Lengkap", "Blog Sederhana", "7–14 Hari Jadi"],
                href: "/services",
                highlight: true,
              },
              {
                title: "Custom",
                desc: "Web app, toko online, atau sistem custom sesuai kebutuhan spesifik Anda.",
                features: ["Tak Terbatas", "Full Custom Fitur", "Dashboard Admin", "Database Dinamis", "Sesuai Scope"],
                href: "/calculator",
                highlight: false,
              },
            ].map((pkg, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={cn(
                  "flex flex-col gap-6 p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden group",
                  pkg.highlight
                    ? "border-foreground bg-foreground text-background shadow-2xl hover:scale-[1.02]"
                    : "border-border/40 bg-card text-foreground shadow-sm hover:shadow-xl hover:border-foreground/30 hover:-translate-y-1"
                )}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-background/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3" />
                )}
                <div className="flex items-center justify-between">
                  <h3 className={cn("text-2xl font-extrabold tracking-tight")}>{pkg.title}</h3>
                  {pkg.highlight && (
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-background/20 text-background px-3 py-1 rounded-full">Terpopuler</span>
                  )}
                </div>
                <p className={cn("text-sm leading-relaxed font-medium", pkg.highlight ? "text-background/80" : "text-muted-foreground")}>{pkg.desc}</p>
                <ul className="flex flex-col gap-3 mt-2">
                  {pkg.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2.5 text-sm font-medium">
                      <div className={cn("w-1.5 h-1.5 rounded-full", pkg.highlight ? "bg-background/60" : "bg-foreground/40")} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={pkg.href}
                  className={cn(
                    "mt-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full font-bold text-sm transition-all duration-300",
                    pkg.highlight
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  )}
                >
                  Konsultasi Sekarang
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* POTONGAN PORTOFOLIO */}
      <section className="w-full py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <motion.div 
            className="flex flex-col items-center text-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">Karya Terpilih</h2>
            <p className="text-muted-foreground max-w-2xl text-base font-medium">Beberapa proyek yang baru saja kami selesaikan.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Link href={`/portfolio/${project.slug}`} className="group relative w-full aspect-[4/3] bg-card rounded-3xl overflow-hidden border border-border/40 block shadow-sm hover:shadow-2xl hover:border-foreground/30 transition-all duration-500">
                  <div className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out">
                    {project.client_url ? (
                      <ScreenshotThumbnail url={project.client_url} title={project.title} />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10" />
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/95 via-background/60 to-transparent z-20">
                    <h3 className="text-2xl font-extrabold text-foreground group-hover:text-foreground transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground mt-1 font-medium text-sm">{project.tech_stack.slice(0, 3).join(" · ")}</p>
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
              className="inline-flex items-center justify-center h-12 px-8 rounded-full font-bold text-base transition-all duration-300 bg-transparent text-foreground border border-border hover:bg-foreground hover:text-background hover:border-foreground"
            >
              Lihat Semua Karya
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="w-full py-24 px-6 bg-background">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center text-center gap-3 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground bg-muted/40 px-3.5 py-1.5 rounded-full">Testimonial</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">Kata Mereka</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-5 p-8 rounded-3xl border border-border/40 bg-card shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">{review.project}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, ri) => (
                    <Star key={ri} className="w-4 h-4 fill-foreground text-foreground" />
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, ri) => (
                    <Star key={ri} className="w-4 h-4 text-muted-foreground/30" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">&ldquo;{review.text}&rdquo;</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex justify-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/reviews"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full font-bold text-base transition-all duration-300 bg-transparent text-foreground border border-border hover:bg-foreground hover:text-background hover:border-foreground"
            >
              Lihat Semua Ulasan
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full py-24 px-6 border-t border-border bg-foreground text-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-background/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <motion.div 
          className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">Siap Punya Website Impian?</h2>
          <p className="text-lg text-background/80 max-w-2xl font-medium leading-relaxed">
            Konsultasi gratis. Tanpa tekanan. Ceritakan kebutuhan Anda, kami siap membantu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="https://wa.me/6285810289428?text=Halo%20CODING%20BANG%2C%20saya%20mau%20konsultasi%20soal%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 h-14 px-10 rounded-full font-bold text-base sm:text-lg bg-background text-foreground hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Sekarang</span>
            </a>
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full font-bold text-base sm:text-lg border-2 border-background/30 text-background hover:bg-background/10 transition-all"
            >
              Hitung Estimasi
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
