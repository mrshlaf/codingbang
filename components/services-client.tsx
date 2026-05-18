"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
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

const SERVICES = [
  {
    title: "Landing Page (1 Halaman)",
    target: "Untuk Usaha Baru & Promosi",
    desc: "Situs satu halaman super cepat untuk profil usaha, promosi produk, atau brosur online agar pelanggan langsung terhubung.",
    features: ["Desain Kustom Eksklusif", "Tampilan Mobile Responsive", "Tombol WhatsApp Melayang", "SEO Google Basic"],
  },
  {
    title: "Website Profil Perusahaan",
    target: "Untuk Perusahaan & Instansi",
    desc: "Situs multi-halaman lengkap untuk membangun reputasi profesional dan memamerkan layanan bisnis Anda secara detail.",
    features: ["Multi-halaman Lengkap", "Halaman Galeri & Kontak", "Hosting Setup Gratis", "Optimasi Kecepatan Ekstrim"],
    highlight: true,
  },
  {
    title: "Portofolio Kreatif",
    target: "Untuk Desainer & Kreator",
    desc: "Situs etalase karya interaktif premium untuk menonjolkan kreativitas Anda bagi klien dan pemberi kerja.",
    features: ["Galeri Foto/Video Interaktif", "Desain Eksklusif Modern", "Sambung Domain Kustom", "Hubungan Sosial Media"],
  },
  {
    title: "Toko Online (E-Commerce)",
    target: "Untuk Penjualan Produk",
    desc: "Toko digital mandiri lengkap dengan keranjang belanja dan checkout otomatis untuk memudahkan pelanggan bertransaksi.",
    features: ["Katalog & Detail Produk", "Sistem Keranjang Belanja", "Integrasi Ongkos Kirim", "Gerbang Pembayaran Bank/QRIS"],
  },
  {
    title: "Aplikasi & Member Dashboard",
    target: "Untuk Sistem & Operasional",
    desc: "Sistem aplikasi berbasis web kustom lengkap dengan sistem login member khusus, pengelolaan database, dan manajemen internal.",
    features: ["Sistem Login Member", "Halaman Dashboard Khusus", "Penyimpanan Database Dinamis", "Manajemen Konten & Hak Akses"],
  },
];

const PROCESS = [
  { step: "01", title: "Konsultasi Cepat", desc: "Diskusikan kebutuhan proyek Anda secara santai via WhatsApp atau Email." },
  { step: "02", title: "Estimasi Transparan", desc: "Kami berikan rancangan cetak biru spesifikasi fitur dan rincian harga terbaik." },
  { step: "03", title: "Tahap Produksi", desc: "Tim pengembang kami langsung merakit website Anda dengan standar performa tertinggi." },
  { step: "04", title: "Revisi & Masukan", desc: "Proses peninjauan bersama hingga tampilan dan fungsi website benar-benar sempurna." },
  { step: "05", title: "Peluncuran Live", desc: "Penyetelan server cloud gratis, sambung domain, dan website resmi mengudara!" },
];

const FAQS = [
  { 
    q: "Kenapa biayanya bisa sangat terjangkau?", 
    a: "Kami memotong biaya overhead agensi besar yang tidak perlu. Dengan arsitektur modern seperti Vercel dan Supabase, kami dapat memangkas biaya server bulanan menjadi sangat murah bahkan gratis di awal, tanpa mengorbankan kualitas sama sekali." 
  },
  { 
    q: "Berapa lama proses pembuatan website?", 
    a: "Untuk Landing Page dan Company Profile sederhana biasanya selesai dalam 3 sampai 7 hari. Untuk sistem kustom yang lebih kompleks seperti E-Commerce atau Dashboard Member membutuhkan waktu sekitar 2 hingga 3 minggu." 
  },
  { 
    q: "Apakah saya bisa melakukan revisi?", 
    a: "Tentu saja. Kami mengutamakan kepuasan Anda. Kami menyediakan sesi revisi terstruktur agar hasil akhir website benar-benar sesuai dengan ekspektasi dan citra brand Anda." 
  },
];

export function ServicesClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col flex-1 w-full max-w-6xl mx-auto px-6 py-24 md:py-32 overflow-hidden">
      
      {/* HERO */}
      <motion.section 
        className="flex flex-col items-center text-center gap-6 mb-24"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] max-w-4xl">
          Website yang Berdampak. <br />
          <span className="text-muted-foreground font-serif italic font-light">Bukan sekadar tampilan visual.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl font-medium">
          Kami merakit setiap proyek dari baris kode nol untuk memastikan performa yang luar biasa cepat, keamanan maksimal, dan pengalaman pengguna yang mulus.
        </p>
      </motion.section>

      {/* SERVICES GRID */}
      <motion.section 
        className="mb-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={cn(
                "flex flex-col gap-6 p-10 rounded-[2.5rem] border transition-all duration-500 relative overflow-hidden group",
                service.highlight 
                  ? "border-foreground bg-foreground text-background shadow-2xl hover:scale-[1.02]" 
                  : "border-border/60 bg-card text-foreground shadow-sm hover:shadow-xl hover:border-foreground/30 hover:scale-[1.02]"
              )}
            >
              {service.highlight && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-background/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/3" />
              )}
              
              <div>
                <p className={cn("text-xs font-bold uppercase tracking-widest mb-3", service.highlight ? "text-background/60" : "text-muted-foreground")}>
                  {service.target}
                </p>
                <h3 className="text-3xl font-bold tracking-tight">{service.title}</h3>
              </div>
              <p className={cn("text-base leading-relaxed font-medium", service.highlight ? "text-background/80" : "text-muted-foreground")}>
                {service.desc}
              </p>
              
              <ul className="flex flex-col gap-4 mt-6 mb-10">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold">
                    <div className={cn("w-5 h-5 rounded-full flex items-center justify-center", service.highlight ? "bg-background text-foreground" : "bg-muted text-foreground")}>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <Link
                href="/contact"
                className={cn(
                  "group/btn mt-auto inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full font-bold text-base transition-all duration-300 shadow-lg",
                  service.highlight 
                    ? "bg-background text-foreground hover:bg-background/90 shadow-background/10" 
                    : "bg-foreground text-background hover:bg-foreground/90 shadow-foreground/10"
                )}
              >
                Mulai Konfigurasi
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROCESS */}
      <motion.section 
        className="mb-32 bg-muted/20 border border-border/40 p-12 md:p-20 rounded-[3rem]"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold tracking-tight mb-16 text-center">
          Alur Kerja Kami
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {PROCESS.map((proc, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex flex-col gap-4 relative z-10">
              <div className="text-5xl font-extrabold text-muted-foreground/20 font-serif italic">{proc.step}</div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">{proc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">{proc.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ ACCORDION */}
      <motion.section 
        className="max-w-4xl mx-auto w-full mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold tracking-tight mb-16 text-center flex items-center justify-center gap-3">
          <HelpCircle className="w-10 h-10 text-muted-foreground/80" />
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="border border-border/60 bg-card rounded-3xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left text-foreground hover:bg-muted/10 transition-colors"
                >
                  <span className="text-xl font-bold tracking-tight pr-6">{faq.q}</span>
                  <ChevronDown className={cn("w-6 h-6 text-muted-foreground flex-shrink-0 transition-transform duration-300", isOpen && "rotate-180")} />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 text-muted-foreground font-medium text-lg leading-relaxed border-t border-border/30 pt-4">
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
