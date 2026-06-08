"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Check,
  HelpCircle,
  ChevronDown,
  Calculator,
  MessageCircle,
  Sparkles,
  BarChart3,
  MonitorSmartphone,
} from "lucide-react";
import { cn } from "@/lib/utils";

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

const PACKAGES = [
  {
    title: "Starter",
    target: "Cocok untuk UMKM & Personal Brand",
    desc: "Landing page 1–3 halaman. Website cepat dan profesional untuk memulai presence online.",
    features: [
      "1–3 Halaman",
      "Desain Kustom Eksklusif",
      "Mobile Responsive",
      "SEO Google Basic",
      "Tombol WhatsApp Melayang",
      "Hosting Cepat (Vercel/VPS)",
      "Domain .my.id 1 Tahun",
      "3–5 Hari Jadi",
      "Revisi 2x",
      "Gratis Konsultasi",
    ],
    highlight: false,
    icon: MonitorSmartphone,
  },
  {
    title: "Growth",
    target: "Cocok untuk Perusahaan & Bisnis",
    desc: "Company profile multi-halaman dengan fitur lengkap untuk membangun kredibilitas digital.",
    features: [
      "5–10 Halaman",
      "Desain Kustom Eksklusif",
      "Mobile Responsive",
      "SEO Lengkap",
      "CMS/Admin Panel",
      "Blog Sederhana",
      "Hosting VPS Premium",
      "Domain .com 1 Tahun",
      "7–14 Hari Jadi",
      "Revisi 5x",
      "Bantuan Setup Domain & Email",
    ],
    highlight: true,
    icon: BarChart3,
  },
  {
    title: "Custom",
    target: "Cocok untuk Sistem & Aplikasi",
    desc: "Web app, toko online, dashboard, atau sistem custom sesuai kebutuhan spesifik Anda.",
    features: [
      "Halaman & Fitur Tak Terbatas",
      "Full Custom Development",
      "Dashboard Admin",
      "Database Dinamis (PostgreSQL)",
      "Sistem Login & Roles",
      "Integrasi API Pihak Ketiga",
      "Hosting VPS Premium",
      "Domain Pilihan",
      "Sesuai Scope",
      "Revisi Unlimited",
      "Maintenance Bulanan",
    ],
    highlight: false,
    icon: Sparkles,
  },
];

const FAQS = [
  {
    q: "Bagaimana cara memulainya?",
    a: "Cukup hubungi kami via WhatsApp atau isi form konsultasi. Kami akan diskusi santai dulu tentang kebutuhan Anda, lalu kirimkan proposal lengkap tanpa tekanan.",
  },
  {
    q: "Berapa lama proses pembuatan website?",
    a: "Tergantung kompleksitas. Landing page sederhana bisa 3–5 hari. Company profile 7–14 hari. Untuk web app atau custom, umumnya 2–6 minggu. Timeline pasti akan kami infokan di awal.",
  },
  {
    q: "Apakah ada biaya maintenance setelah website jadi?",
    a: "Tidak wajib, tapi kami sarankan paket maintenance bulanan (mulai Rp 200rb/bln) untuk backup, update keamanan, dan monitoring performa. Biaya hosting & domain terpisah sesuai usage.",
  },
  {
    q: "Apakah hosting dan domain sudah termasuk?",
    a: "Untuk paket Starter dan Growth, hosting dan domain 1 tahun sudah include. Untuk paket Custom, menyesuaikan kebutuhan — kami bantu pilihkan yang paling efisien.",
  },
  {
    q: "Bagaimana kalau saya tidak puas dengan hasilnya?",
    a: "Kami memberikan revisi sesuai paket. Tujuan kami adalah membuat Anda puas — kami akan iterasi sampai hasilnya sesuai ekspektasi. Untuk Custom, revisi tidak terbatas.",
  },
  {
    q: "Teknologi apa yang digunakan?",
    a: "Kami menggunakan Next.js, Tailwind CSS, PostgreSQL, dan Vercel — stack modern yang cepat, aman, dan mudah dikembangkan ke depannya.",
  },
];

export function ServicesClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32 overflow-hidden">

      {/* HERO */}
      <motion.section
        className="flex flex-col items-center text-center gap-4 sm:gap-6 mb-16 sm:mb-24"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] max-w-4xl">
          Layanan Kami
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl font-medium">
          Dari landing page sederhana hingga sistem kompleks — kami bangun
          solusi digital yang tepat untuk kebutuhan Anda.
        </p>
      </motion.section>

      {/* CALCULATOR HIGHLIGHT */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center gap-6 sm:gap-8 p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-br from-foreground to-foreground/90 text-background mb-16 sm:mb-24 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-background/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-background/5 rounded-full blur-[50px] translate-y-1/3 -translate-x-1/4" />

        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-background/10 border border-background/20 flex items-center justify-center relative z-10">
          <Calculator className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight relative z-10">
          Coba Kalkulator Harga
        </h2>
        <p className="text-background/80 text-sm sm:text-base md:text-lg max-w-xl relative z-10 font-medium">
          Dapatkan estimasi biaya secara instan. Pilih jenis website, fitur, dan
          kebutuhan Anda — hasilnya langsung terlihat.
        </p>

        <Link
          href="/calculator"
          className="group relative z-10 mt-2 inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-6 sm:px-8 rounded-full font-bold text-sm sm:text-base bg-background text-foreground hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl"
        >
          <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
          Hitung Estimasi Sekarang
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full max-w-2xl relative z-10 mt-4 sm:mt-8 pt-6 sm:pt-8 border-t border-background/10">
          {[
            { label: "Bandingkan Paket", desc: "Lihat fitur tiap paket" },
            { label: "Fitur Tambahan", desc: "SEO, Admin Panel, dll" },
            { label: "Estimasi Total", desc: "Harga langsung muncul" },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <p className="font-bold text-sm sm:text-base">{item.label}</p>
              <p className="text-background/60 text-xs sm:text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* PACKAGES GRID */}
      <motion.section
        className="mb-20 sm:mb-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center"
        >
          Pilih Paket yang Sesuai
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-center max-w-xl mx-auto mb-10 sm:mb-14 text-sm sm:text-base"
        >
          Setiap paket bisa disesuaikan — konsultasi dulu, kami bantu tentukan yang terbaik.
        </motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={cn(
                "flex flex-col gap-5 sm:gap-6 p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] border transition-all duration-500 relative overflow-hidden group",
                pkg.highlight
                  ? "border-foreground bg-foreground text-background shadow-2xl hover:scale-[1.02]"
                  : "border-border/60 bg-card text-foreground shadow-sm hover:shadow-xl hover:border-foreground/30 hover:scale-[1.02]"
              )}
            >
              {pkg.highlight && (
                <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-background/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/3" />
              )}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className={cn("text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1.5", pkg.highlight ? "text-background/60" : "text-muted-foreground")}>
                    {pkg.target}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{pkg.title}</h3>
                </div>
                <div className={cn("w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0", pkg.highlight ? "bg-background/10" : "bg-muted")}>
                  <pkg.icon className={cn("w-5 h-5 sm:w-6 sm:h-6", pkg.highlight ? "text-background" : "text-foreground")} />
                </div>
              </div>

              {pkg.highlight && (
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest bg-background/20 text-background px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full w-fit">
                  Paling Populer
                </span>
              )}

              <p className={cn("text-sm sm:text-base leading-relaxed font-medium", pkg.highlight ? "text-background/80" : "text-muted-foreground")}>
                {pkg.desc}
              </p>

              <ul className="flex flex-col gap-2 sm:gap-3 mt-2 mb-4 sm:mb-8">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium">
                    <div className={cn("w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0", pkg.highlight ? "bg-background/20" : "bg-muted")}>
                      <Check className={cn("w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[3]", pkg.highlight ? "text-background" : "text-foreground")} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              {pkg.title === "Custom" ? (
                <a
                  href="https://wa.me/6285810289428?text=Halo%20CODING%20BANG%2C%20saya%20tertarik%20dengan%20paket%20Custom.%20Mohon%20infonya%20lebih%20lanjut."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group/btn mt-auto inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-6 sm:px-8 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 shadow-lg",
                    pkg.highlight
                      ? "bg-background text-foreground hover:bg-background/90 shadow-background/10"
                      : "bg-foreground text-background hover:bg-foreground/90 shadow-foreground/10"
                  )}
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Konsultasi Sekarang
                </a>
              ) : (
                <Link
                  href="/calculator"
                  className={cn(
                    "group/btn mt-auto inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-6 sm:px-8 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 shadow-lg",
                    pkg.highlight
                      ? "bg-background text-foreground hover:bg-background/90 shadow-background/10"
                      : "bg-foreground text-background hover:bg-foreground/90 shadow-foreground/10"
                  )}
                >
                  <Calculator className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Hitung Estimasi
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA KONSULTASI */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center gap-4 sm:gap-6 p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem] bg-muted/30 border border-border/40 mb-16 sm:mb-24"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Bingung mau pilih yang mana?
        </h2>
        <p className="text-muted-foreground max-w-lg text-sm sm:text-base md:text-lg font-medium">
          Ceritakan kebutuhan Anda, kami rekomendasikan paket yang paling sesuai — gratis.
        </p>
        <a
          href="https://wa.me/6285810289428?text=Halo%20CODING%20BANG%2C%20saya%20mau%20konsultasi%20soal%20website"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-6 sm:px-8 rounded-full font-bold text-sm sm:text-base bg-foreground text-background hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          Konsultasi Sekarang
        </a>
      </motion.section>

      {/* FAQ ACCORDION */}
      <motion.section
        className="max-w-4xl mx-auto w-full mb-8 sm:mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-10 sm:mb-16 text-center flex items-center justify-center gap-2 sm:gap-3">
          <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground/80" />
          Pertanyaan Umum
        </h2>
        <div className="flex flex-col gap-3 sm:gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-border/60 bg-card rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 md:p-8 text-left text-foreground hover:bg-muted/10 transition-colors"
                >
                  <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight pr-4 sm:pr-6">
                    {faq.q}
                  </span>
                  <ChevronDown className={cn("w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground flex-shrink-0 transition-transform duration-300", isOpen && "rotate-180")} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-4 sm:px-6 md:px-8 sm:pb-6 md:pb-8 text-muted-foreground font-medium text-sm sm:text-base leading-relaxed border-t border-border/30 pt-3 sm:pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
}
