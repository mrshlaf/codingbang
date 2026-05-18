"use client";

import { useState, useTransition, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, Mail, Phone, Loader2, CheckCircle2, ChevronRight, ChevronLeft, 
  ShieldCheck, Zap, Laptop, Layers, Paintbrush, Database, HelpCircle, AlertCircle
} from "lucide-react";
import { submitContactForm } from "@/app/contact/actions";

// EST. PRICING MATRICES
const PACKAGES = [
  { id: "custom", name: "Custom Build (Rakit Sendiri)", price: 0, desc: "Rancang sendiri website Anda fitur demi fitur sesuai kebutuhan bisnis." },
  { id: "basic", name: "Paket Basic — Rp 500.000", price: 500000, desc: "Landing page, Responsive, WhatsApp Button, SEO Basic, Free Deploy Vercel, Domain .my.id" },
  { id: "standard", name: "Paket Standard — Rp 2.000.000", price: 2000000, desc: "Company Profile, Admin Panel, Blog, SEO, Hosting Setup, Custom Design" },
  { id: "premium", name: "Paket Premium — Rp 5.000.000+", price: 5000000, desc: "Full Custom Web, Dashboard, Authentication, Payment Gateway, API Integration, VPS, Free 1 Bulan Maintenance" }
];

const WEBSITE_TYPES = [
  { id: "landing", name: "Landing Page", price: 500000, desc: "Satu halaman promosi penawaran produk atau brosur online." },
  { id: "compro", name: "Company Profile", price: 1500000, desc: "Situs multi-halaman resmi profil perusaahan & portofolio." },
  { id: "portfolio", name: "Portfolio", price: 1000000, desc: "Showcase galeri karya interaktif bagi desainer/kreator." },
  { id: "personal", name: "Personal Branding", price: 800000, desc: "Website branding profil pribadi atau CV online premium." },
  { id: "blog", name: "Blog / News", price: 1000000, desc: "Portal artikel berita mandiri dengan pembaca cepat." },
  { id: "umkm", name: "Website UMKM", price: 1500000, desc: "Profil usaha kecil terjangkau dengan katalog produk statis." },
  { id: "onlineshop", name: "Online Shop (E-Commerce)", price: 5000000, desc: "Situs toko online lengkap dengan checkout & keranjang." },
  { id: "admin", name: "Dashboard Admin", price: 4000000, desc: "Panel pengelolaan manajemen database internal khusus." },
  { id: "saas", name: "SaaS Platform", price: 10000000, desc: "Aplikasi sistem layanan berlangganan perangkat lunak custom." },
  { id: "custom", name: "Custom Website", price: 8000000, desc: "Pengembangan sistem sesuai keinginan spesifik Anda." }
];

const STACK_BUILDERS = [
  { id: "wordpress", name: "WordPress (Builder)", price: 200000, level: "Murah", benefit: "Cepat & gampang dikelola" },
  { id: "framer", name: "Framer (Builder)", price: 300000, level: "Murah", benefit: "Tampilan modern & smooth" },
  { id: "webflow", name: "Webflow (Builder)", price: 500000, level: "Menengah", benefit: "Desain visual luar biasa" },
  { id: "blogger", name: "Blogger (Builder)", price: 100000, level: "Sangat Murah", benefit: "Simple & gratis server" },
  { id: "laravel", name: "Laravel (Custom Stack)", price: 1500000, level: "Stabil", benefit: "Cocok untuk sistem/dashboard" },
  { id: "nextjs", name: "Next.js (Custom Stack)", price: 2000000, level: "Modern Edge", benefit: "Kecepatan ekstrim & SEO top" },
  { id: "mern", name: "MERN Stack (Custom Stack)", price: 2500000, level: "Flexible", benefit: "Fullstack JavaScript super cepat" },
  { id: "vue", name: "Vue + Firebase (Custom Stack)", price: 1800000, level: "Ringan", benefit: "Aplikasi realtime yang interaktif" }
];

const DATABASES = [
  { id: "mysql", name: "MySQL (Standard)", price: 200000, desc: "Cocok untuk website umum / Company Profile" },
  { id: "postgres", name: "PostgreSQL (Complex)", price: 400000, desc: "Cocok untuk Dashboard & Data relasional kompleks" },
  { id: "firebase", name: "Firebase (Realtime)", price: 300000, desc: "Cocok untuk chat, notifikasi instan (Pay as you go)" },
  { id: "mongodb", name: "MongoDB (NoSQL)", price: 400000, desc: "Cocok untuk struktur data fleksibel skala dinamis" }
];

const BASIC_FEATURES = [
  { id: "responsive", name: "Tampilan Mobile Responsive", price: 30000 },
  { id: "seo_basic", name: "SEO Basic (Mudah Masuk Google)", price: 30000 },
  { id: "contact_form", name: "Formulir Kontak Anti-Spam", price: 30000 },
  { id: "wa_button", name: "Tombol Chat WhatsApp Melayang", price: 30000 },
  { id: "gmaps", name: "Integrasi Peta Google Maps", price: 30000 },
  { id: "socmed", name: "Koneksi Feed Sosial Media", price: 30000 },
  { id: "live_chat", name: "Integrasi Widget Live Chat", price: 30000 },
  { id: "gallery", name: "Galeri Foto/Video Interaktif", price: 30000 },
  { id: "blog_art", name: "Sistem Tulis Artikel Blog", price: 30000 },
  { id: "faq", name: "Tanya Jawab Accordion FAQ", price: 30000 }
];

const MEDIUM_FEATURES = [
  { id: "login", name: "Sistem Login / Daftar Member", price: 150000 },
  { id: "user_dash", name: "Halaman Dashboard Pengguna", price: 150000 },
  { id: "admin_panel", name: "Halaman Admin Pengelola", price: 150000 },
  { id: "upload_file", name: "Fitur Unggah File / Dokumen", price: 150000 },
  { id: "booking_sys", name: "Sistem Reservasi / Booking", price: 150000 },
  { id: "payment", name: "Gerbang Pembayaran Otomatis", price: 150000 },
  { id: "invoice", name: "Pembuatan Invoice & Nota PDF", price: 150000 },
  { id: "search", name: "Pencarian Cepat & Filter Data", price: 150000 },
  { id: "notif", name: "Sistem Notifikasi Real-time", price: 150000 }
];

const ADVANCED_FEATURES = [
  { id: "ai_bot", name: "AI Chatbot Asisten Otomatis", price: 500000 },
  { id: "multi_role", name: "Hak Akses Multi-Level Admin", price: 500000 },
  { id: "live_chat_rt", name: "Chat Pengguna Real-time (P2P)", price: 500000 },
  { id: "vid_conf", name: "Integrasi Konferensi Video", price: 500000 },
  { id: "api_int", name: "Integrasi Koneksi API Pihak Ke-3", price: 500000 },
  { id: "ai_reco", name: "Rekomendasi Berbasis AI", price: 500000 },
  { id: "analytics", name: "Dashboard Grafik Analitik", price: 500000 },
  { id: "subscription", name: "Sistem Langganan Berbayar", price: 500000 },
  { id: "otp_login", name: "Login Instan Tanpa Password (OTP)", price: 500000 },
  { id: "qr_sys", name: "Generator & Scan Sistem QR Code", price: 500000 }
];

const PAYMENT_GATEWAYS = [
  { id: "midtrans", name: "Midtrans (Indonesia Standard)" },
  { id: "xendit", name: "Xendit (Indonesian Gateway)" },
  { id: "tripay", name: "Tripay (Payment Distributor)" },
  { id: "gopay_ovo", name: "E-Wallet (GoPay, OVO, Dana, QRIS)" }
];

const DOMAINS = [
  { id: "myid", name: "Domain .my.id (UMKM / Murah)", price: 20000 },
  { id: "xyz", name: "Domain .xyz (Startup / Modern)", price: 40000 },
  { id: "com", name: "Domain .com (Standar Profesional)", price: 180000 },
  { id: "id", name: "Domain .id (Identitas Indonesia)", price: 250000 },
  { id: "coid", name: "Domain .co.id (Instansi Resmi)", price: 350000 }
];

const HOSTINGS = [
  { id: "shared", name: "Shared Hosting (Hostinger/Niagahoster) - Cocok Compro/Landing Page", price: 40000 },
  { id: "vps", name: "VPS Cloud Server (Contabo/DigitalOcean) - Cocok Aplikasi/Sistem Custom", price: 180000 },
  { id: "vercel", name: "Deploy Serverless Modern (Vercel/Netlify) - Super Cepat & Gratis Awal", price: 0 }
];

const MAINTENANCES = [
  { id: "none", name: "Tanpa Maintenance Bulanan", price: 0 },
  { id: "basic", name: "Maintenance Basic (Update web, backup rutin, monitor server)", price: 100000 },
  { id: "medium", name: "Maintenance Medium (Basic + optimasi mingguan & bug fixing)", price: 500000 },
  { id: "advanced", name: "Maintenance Advanced (Layanan penuh, pemantauan 24/7 & enkripsi data)", price: 1200000 }
];

export function ContactClient() {
  const [step, setStep] = useState(1);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Estimator States
  const [projectName, setProjectName] = useState("");
  const [clientName, setClientName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [purposes, setPurposes] = useState<string[]>([]);
  const [customPurpose, setCustomPurpose] = useState("");

  const [selectedPackage, setSelectedPackage] = useState("custom");
  const [selectedWebType, setSelectedWebType] = useState<string>("landing");
  const [selectedStyles, setSelectedStyles] = useState<string[]>(["clean", "minimalist"]);
  const [references, setReferences] = useState<string[]>(["", "", ""]);
  const [dominantColor, setDominantColor] = useState("Putih");
  const [customColor, setCustomColor] = useState("");
  const [fontPreference, setFontPreference] = useState("Modern");

  const [selectedStack, setSelectedStack] = useState<string>("nextjs");
  const [selectedDatabase, setSelectedDatabase] = useState<string>("mysql");
  const [selectedBasicFeatures, setSelectedBasicFeatures] = useState<string[]>(["responsive", "seo_basic", "contact_form", "wa_button"]);
  const [selectedMediumFeatures, setSelectedMediumFeatures] = useState<string[]>([]);
  const [selectedAdvancedFeatures, setSelectedAdvancedFeatures] = useState<string[]>([]);
  const [selectedPayment, setSelectedPayment] = useState<string>("midtrans");
  const [selectedDomain, setSelectedDomain] = useState<string>("com");
  const [selectedHosting, setSelectedHosting] = useState<string>("vercel");
  const [selectedMaintenance, setSelectedMaintenance] = useState<string>("none");

  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState<{ success?: boolean; message?: string; error?: string } | null>(null);

  // AUTO-APPLY PRESETS IF A QUICK PACKAGE IS CHOSEN
  useEffect(() => {
    if (selectedPackage === "basic") {
      setSelectedWebType("landing");
      setSelectedStack("wordpress");
      setSelectedDatabase("mysql");
      setSelectedBasicFeatures(["responsive", "seo_basic", "wa_button", "contact_form"]);
      setSelectedMediumFeatures([]);
      setSelectedAdvancedFeatures([]);
      setSelectedDomain("myid");
      setSelectedHosting("shared");
      setSelectedMaintenance("none");
    } else if (selectedPackage === "standard") {
      setSelectedWebType("compro");
      setSelectedStack("laravel");
      setSelectedDatabase("mysql");
      setSelectedBasicFeatures(["responsive", "seo_basic", "contact_form", "wa_button", "gallery", "faq"]);
      setSelectedMediumFeatures(["admin_panel", "search"]);
      setSelectedAdvancedFeatures([]);
      setSelectedDomain("com");
      setSelectedHosting("shared");
      setSelectedMaintenance("basic");
    } else if (selectedPackage === "premium") {
      setSelectedWebType(" saas");
      setSelectedStack("nextjs");
      setSelectedDatabase("postgres");
      setSelectedBasicFeatures(["responsive", "seo_basic", "contact_form", "wa_button", "gallery", "faq"]);
      setSelectedMediumFeatures(["login", "user_dash", "admin_panel", "payment", "invoice"]);
      setSelectedAdvancedFeatures(["api_int", "otp_login", "analytics"]);
      setSelectedDomain("id");
      setSelectedHosting("vps");
      setSelectedMaintenance("medium");
    }
  }, [selectedPackage]);

  // LIVE PRICE CALCULATION
  const calculateTotal = () => {
    if (selectedPackage !== "custom") {
      const pkgPrice = PACKAGES.find(p => p.id === selectedPackage)?.price || 0;
      return pkgPrice;
    }

    const typePrice = WEBSITE_TYPES.find(w => w.id === selectedWebType)?.price || 0;
    const stackPrice = STACK_BUILDERS.find(s => s.id === selectedStack)?.price || 0;
    const dbPrice = DATABASES.find(d => d.id === selectedDatabase)?.price || 0;
    
    const basicPrice = BASIC_FEATURES.filter(f => selectedBasicFeatures.includes(f.id)).reduce((sum, item) => sum + item.price, 0);
    const medPrice = MEDIUM_FEATURES.filter(f => selectedMediumFeatures.includes(f.id)).reduce((sum, item) => sum + item.price, 0);
    const advPrice = ADVANCED_FEATURES.filter(f => selectedAdvancedFeatures.includes(f.id)).reduce((sum, item) => sum + item.price, 0);
    
    const domainPrice = DOMAINS.find(d => d.id === selectedDomain)?.price || 0;
    const hostPrice = HOSTINGS.find(h => h.id === selectedHosting)?.price || 0;
    const maintPrice = MAINTENANCES.find(m => m.id === selectedMaintenance)?.price || 0;

    return typePrice + stackPrice + dbPrice + basicPrice + medPrice + advPrice + domainPrice + hostPrice + maintPrice;
  };

  const calculateWeeks = () => {
    if (selectedPackage === "basic") return 1;
    if (selectedPackage === "standard") return 2;
    if (selectedPackage === "premium") return 3;

    const baseWeeks = 1;
    let addWeeks = 0;
    if (["onlineshop", "admin", "saas", "custom"].includes(selectedWebType)) addWeeks += 2;
    if (selectedMediumFeatures.length > 3) addWeeks += 1;
    if (selectedAdvancedFeatures.length > 0) addWeeks += 1;

    return baseWeeks + addWeeks;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const toggleSelection = (id: string, list: string[], setter: (val: string[]) => void) => {
    if (list.includes(id)) {
      setter(list.filter(x => x !== id));
    } else {
      setter([...list, id]);
    }
  };

  const compileBlueprintMessage = () => {
    const styleString = selectedStyles.join(", ");
    const basicString = BASIC_FEATURES.filter(f => selectedBasicFeatures.includes(f.id)).map(f => f.name).join(", ");
    const medString = MEDIUM_FEATURES.filter(f => selectedMediumFeatures.includes(f.id)).map(f => f.name).join(", ");
    const advString = ADVANCED_FEATURES.filter(f => selectedAdvancedFeatures.includes(f.id)).map(f => f.name).join(", ");

    return `[SPESIFIKASI KEBUTUHAN WEBSITE - INDONESIA]
A. Informasi Dasar
Brand: ${projectName || "-"}
Tujuan: ${purposes.join(", ") || "-"} ${customPurpose ? `(${customPurpose})` : ""}

B. Jenis Website
Pilihan: ${WEBSITE_TYPES.find(w => w.id === selectedWebType)?.name || "-"}

C. Desain Website
Style: ${styleString}
Dominan Warna: ${dominantColor === "Custom" ? customColor : dominantColor}
Font Preference: ${fontPreference}
Referensi: ${references.filter(Boolean).join(" | ") || "-"}

D. Platform & Database
Teknologi: ${STACK_BUILDERS.find(s => s.id === selectedStack)?.name || "-"}
Database: ${DATABASES.find(d => d.id === selectedDatabase)?.name || "-"}

E. Fitur Terpilih
Basic: ${basicString || "None"}
Medium: ${medString || "None"}
Advanced: ${advString || "None"}
Payment Gateway: ${PAYMENT_GATEWAYS.find(p => p.id === selectedPayment)?.name || "-"}

F. Layanan Tambahan
Domain: ${DOMAINS.find(d => d.id === selectedDomain)?.name || "-"}
Server / Hosting: ${HOSTINGS.find(h => h.id === selectedHosting)?.name || "-"}
Maintenance: ${MAINTENANCES.find(m => m.id === selectedMaintenance)?.name || "-"}

G. Estimasi
Total Biaya Proyek: Rp ${calculateTotal().toLocaleString("id-ID")}
Estimasi Waktu Pengerjaan: ~${calculateWeeks()} Minggu`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !whatsapp || !email) {
      setState({ error: "Nama Klien, No. WhatsApp, dan Alamat Email wajib diisi." });
      return;
    }

    const compiledMessage = compileBlueprintMessage();
    const formData = new FormData();
    formData.append("name", clientName);
    formData.append("email", email);
    formData.append("whatsapp", whatsapp);
    formData.append("service", WEBSITE_TYPES.find(w => w.id === selectedWebType)?.name || "Website Proyek");
    formData.append("message", compiledMessage);

    startTransition(async () => {
      try {
        const response = await submitContactForm(null, formData);
        setState(response);
        if (response.success) {
          setStep(5); // Success step
        }
      } catch (err) {
        setState({ error: "Terjadi gangguan server. Mohon coba beberapa saat lagi." });
      }
    });
  };

  return (
    <div className="flex flex-col flex-1 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* LEFT COLUMN: BRAND INFO */}
        <motion.div 
          className="flex flex-col gap-6 lg:col-span-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-4">
              Rencana & <br />Spesifikasi Proyek.
            </h1>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-sm">
              Rumuskan struktur fitur, pilihan teknologi, dan estimasi investasi proyek digital Anda secara transparan dan akurat.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a 
              href="https://wa.me/6285810289428"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl border border-border/40 bg-card hover:border-foreground/20 hover:bg-muted/10 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white">
                <Phone className="w-4 h-4 text-white fill-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">Konsultasi Cepat</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Hubungi tim teknis kami via WhatsApp.</p>
              </div>
            </a>

            <a 
              href="mailto:codingbangg@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl border border-border/40 bg-card hover:border-foreground/20 hover:bg-muted/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">Layanan Surat</h3>
                <p className="text-xs text-muted-foreground mt-0.5">codingbangg@gmail.com</p>
              </div>
            </a>
          </div>

          {/* SECTION R: CLIENT EDUCATION TIPS */}
          <div className="p-5 rounded-3xl border border-border/30 bg-muted/20 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-foreground font-bold text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Panduan Perencanaan Digital:</span>
            </div>
            <ul className="text-xs text-muted-foreground flex flex-col gap-2 list-disc list-inside">
              <li>Biaya sewa domain & hosting wajib diperpanjang secara berkala tiap tahun.</li>
              <li>Pemeliharaan rutin diperlukan secara periodik untuk mencegah bug & celah keamanan.</li>
              <li>Optimalisasi aset gambar & scripts sangat krusial demi kecepatan pemuatan halaman.</li>
              <li>Infrastruktur web berskala kecil membutuhkan optimasi khusus saat menerima lonjakan trafik besar.</li>
            </ul>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: MAIN FORM CARD */}
        <motion.div 
          className="lg:col-span-8 flex flex-col bg-card border border-border/40 shadow-xl rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          onMouseMove={handleMouseMove}
        >
          {/* Mouse Spotlight */}
          <div 
            className="absolute pointer-events-none inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, var(--spotlight-glow), transparent 40%)`
            }}
          />

          {/* STEPS HEADERS */}
          {step <= 4 && (
            <div className="flex justify-between items-center mb-8 border-b border-border/40 pb-5 relative z-10">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                    step === s 
                      ? "bg-foreground text-background scale-110 shadow-lg shadow-foreground/10" 
                      : step > s 
                        ? "bg-foreground/10 text-foreground" 
                        : "bg-muted text-muted-foreground border border-border/40"
                  }`}>
                    {s}
                  </div>
                  <span className={`text-[10px] font-bold tracking-tight hidden sm:inline ${
                    step === s ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {s === 1 ? "Info & Paket" : s === 2 ? "Desain & Tech" : s === 3 ? "Fitur Web" : "Selesai"}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* STICKY LIVE RECEIPT HEADER */}
          {step <= 4 && (
            <div className="bg-muted/40 border border-border/30 rounded-2xl p-4 mb-6 flex justify-between items-center gap-4 relative z-10">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground block">ESTIMASI BIAYA</span>
                <span className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight">
                  Rp {calculateTotal().toLocaleString("id-ID")}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground block">ESTIMASI WAKTU</span>
                <span className="text-base md:text-lg font-bold text-foreground">
                  ~{calculateWeeks()} {calculateWeeks() === 1 ? "Minggu" : "Minggu"}
                </span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            {state?.error && (
              <div className="p-4 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold border border-red-200 dark:border-red-850">
                {state.error}
              </div>
            )}

            <AnimatePresence mode="wait">
              
              {/* STEP 1: INFORMASI DASAR, PAKET CEPAT, & TIPE WEB */}
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-5 text-left"
                >
                  <div>
                    <h2 className="text-xl font-extrabold text-foreground flex items-center gap-2">
                      <Laptop className="w-5 h-5" />
                      Informasi Projek & Jenis Website
                    </h2>
                    <p className="text-xs text-muted-foreground mt-0.5">Lengkapi data dasar projek serta tipe website yang Anda inginkan.</p>
                  </div>

                  {/* QUICK PACKAGES SELECTOR */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-bold text-foreground">Pilih Paket Cepat Jasa (Opsi Instan):</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {PACKAGES.map((pkg) => (
                        <div 
                          key={pkg.id}
                          onClick={() => setSelectedPackage(pkg.id)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                            selectedPackage === pkg.id 
                              ? "bg-foreground/[0.02] border-foreground" 
                              : "bg-muted/10 border-border/40 hover:border-border"
                          }`}
                        >
                          <span className="font-extrabold text-sm text-foreground">{pkg.name}</span>
                          <span className="text-[10px] text-muted-foreground mt-1 leading-relaxed">{pkg.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedPackage === "custom" && (
                    <div className="flex flex-col gap-3 mt-1">
                      <span className="text-xs font-bold text-foreground">A. Pilih Jenis Website Kustom:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1 border border-border/30 rounded-xl p-2 bg-muted/10">
                        {WEBSITE_TYPES.map((w) => (
                          <div 
                            key={w.id}
                            onClick={() => setSelectedWebType(w.id)}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              selectedWebType === w.id 
                                ? "bg-foreground/[0.03] border-foreground" 
                                : "bg-card border-border/40 hover:border-border"
                            }`}
                          >
                            <div className="flex justify-between items-center gap-2">
                              <span className="text-xs font-bold text-foreground">{w.name}</span>
                              <span className="text-[10px] font-bold text-muted-foreground">Rp {w.price.toLocaleString("id-ID")}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* BASIC INFOS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="projName" className="text-xs font-bold text-foreground">Nama Projek / Brand</label>
                      <input 
                        type="text" 
                        id="projName" 
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder="Contoh: Toko Kopi Sejahtera" 
                        className="w-full bg-muted/30 border border-border/40 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:bg-background transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-foreground">Tujuan Website</label>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {["Branding", "Jualan", "Company Profile", "Portofolio"].map(purp => {
                          const isSelected = purposes.includes(purp);
                          return (
                            <div 
                              key={purp}
                              onClick={() => toggleSelection(purp, purposes, setPurposes)}
                              className={`p-2 rounded-lg border text-center text-xs font-bold cursor-pointer transition-all ${
                                isSelected ? "bg-foreground text-background" : "bg-muted/30 border-border/40"
                              }`}
                            >
                              {purp}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full font-bold bg-foreground text-background hover:scale-105 transition-all shadow-lg shadow-foreground/10"
                    >
                      Langkah 2: Desain & Tech
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: DESIGN & TECHNOLOGY */}
              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-5 text-left"
                >
                  <div>
                    <h2 className="text-xl font-extrabold text-foreground flex items-center gap-2">
                      <Paintbrush className="w-5 h-5" />
                      Desain Tampilan & Teknologi Platform
                    </h2>
                    <p className="text-xs text-muted-foreground mt-0.5">Tentukan gaya desain, preferensi warna, serta basis mesin teknologi pembuat web.</p>
                  </div>

                  {/* DESIGN STYLE */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold text-foreground">1. Style Desain Website (Bisa Pilih Beberapa):</span>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {["Minimalis", "Modern", "Corporate", "Futuristik", "Clean", "Elegant", "Dark Mode", "Colorful", "Brutalist", "Bento UI"].map(style => {
                        const isSelected = selectedStyles.includes(style.toLowerCase());
                        return (
                          <div 
                            key={style}
                            onClick={() => toggleSelection(style.toLowerCase(), selectedStyles, setSelectedStyles)}
                            className={`p-2 rounded-lg border text-center text-[10px] font-bold cursor-pointer transition-all ${
                              isSelected ? "bg-foreground text-background" : "bg-muted/30 border-border/40"
                            }`}
                          >
                            {style}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* DYNAMIC TECH STACKS - Custom Package Only */}
                  {selectedPackage === "custom" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold text-foreground">2. Opsi Website Builder / Custom Stack:</span>
                        <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto pr-1">
                          {STACK_BUILDERS.map((s) => (
                            <div 
                              key={s.id}
                              onClick={() => setSelectedStack(s.id)}
                              className={`p-2.5 rounded-lg border cursor-pointer transition-all flex justify-between items-center ${
                                selectedStack === s.id ? "bg-foreground/[0.03] border-foreground" : "bg-card border-border/40"
                              }`}
                            >
                              <div>
                                <span className="text-xs font-bold text-foreground block">{s.name}</span>
                                <span className="text-[9px] text-muted-foreground">{s.benefit} • Tingkat: {s.level}</span>
                              </div>
                              <span className="text-xs font-bold text-foreground">Rp {s.price.toLocaleString("id-ID")}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold text-foreground">3. Opsi Database (Penyimpan Data):</span>
                        <div className="grid grid-cols-1 gap-2">
                          {DATABASES.map((db) => (
                            <div 
                              key={db.id}
                              onClick={() => setSelectedDatabase(db.id)}
                              className={`p-2 rounded-lg border cursor-pointer transition-all flex justify-between items-center ${
                                selectedDatabase === db.id ? "bg-foreground/[0.03] border-foreground" : "bg-card border-border/40"
                              }`}
                            >
                              <div>
                                <span className="text-xs font-bold text-foreground block">{db.name}</span>
                                <span className="text-[9px] text-muted-foreground">{db.desc}</span>
                              </div>
                              <span className="text-xs font-bold text-foreground">Rp {db.price.toLocaleString("id-ID")}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 rounded-2xl bg-muted/20 border border-border/30 text-xs text-muted-foreground leading-relaxed mt-2">
                      <span className="font-bold text-foreground block mb-1">Teknologi & Database Terkunci Paket:</span>
                      Paket yang Anda pilih menggunakan optimalisasi standar stack terbaik (<strong>{STACK_BUILDERS.find(s => s.id === selectedStack)?.name}</strong> + database <strong>{DATABASES.find(d => d.id === selectedDatabase)?.name}</strong>). Untuk menyesuaikan database atau framework secara manual, silakan ubah paket ke <strong>"Custom Build"</strong> di Langkah ke-1.
                    </div>
                  )}

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center justify-center gap-1 h-11 px-5 rounded-full font-bold border border-border/60 text-foreground hover:bg-muted/10 transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Kembali
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full font-bold bg-foreground text-background hover:scale-105 transition-all shadow-lg shadow-foreground/10"
                    >
                      Langkah 3: Fitur Web
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: WEBSITE FEATURES & INTEGRATIONS */}
              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-5 text-left"
                >
                  <div>
                    <h2 className="text-xl font-extrabold text-foreground flex items-center gap-2">
                      <Layers className="w-5 h-5" />
                      Fitur Khusus & Integrasi Sistem
                    </h2>
                    <p className="text-xs text-muted-foreground mt-0.5">Pilih modul fungsionalitas tambahan untuk melengkapi fitur operasional website.</p>
                  </div>

                  {selectedPackage === "custom" ? (
                    <div className="flex flex-col gap-4">
                      {/* BASIC FEATURES */}
                      <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-bold text-foreground">1. Fitur Standar (Rp 30.000 / fitur):</span>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {BASIC_FEATURES.map((f) => {
                            const isSelected = selectedBasicFeatures.includes(f.id);
                            return (
                              <div 
                                key={f.id}
                                onClick={() => toggleSelection(f.id, selectedBasicFeatures, setSelectedBasicFeatures)}
                                className={`p-2 rounded-lg border text-left text-[10px] font-bold cursor-pointer transition-all ${
                                  isSelected ? "bg-foreground text-background border-foreground" : "bg-muted/10 border-border/40"
                                }`}
                              >
                                {f.name}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* MEDIUM FEATURES */}
                      <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-bold text-foreground">2. Fitur Fungsional Menengah (+ Rp 150.000 / fitur):</span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {MEDIUM_FEATURES.map((f) => {
                            const isSelected = selectedMediumFeatures.includes(f.id);
                            return (
                              <div 
                                key={f.id}
                                onClick={() => toggleSelection(f.id, selectedMediumFeatures, setSelectedMediumFeatures)}
                                className={`p-2.5 rounded-lg border text-left text-[10px] font-bold cursor-pointer transition-all ${
                                  isSelected ? "bg-foreground text-background border-foreground" : "bg-muted/10 border-border/40"
                                }`}
                              >
                                {f.name}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* ADVANCED FEATURES */}
                      <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-bold text-foreground">3. Fitur Sistem Canggih (+ Rp 500.000 / fitur):</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {ADVANCED_FEATURES.map((f) => {
                            const isSelected = selectedAdvancedFeatures.includes(f.id);
                            return (
                              <div 
                                key={f.id}
                                onClick={() => toggleSelection(f.id, selectedAdvancedFeatures, setSelectedAdvancedFeatures)}
                                className={`p-2.5 rounded-lg border text-left text-xs font-bold cursor-pointer transition-all ${
                                  isSelected ? "bg-foreground text-background border-foreground" : "bg-muted/10 border-border/40"
                                }`}
                              >
                                <div className="flex justify-between items-center gap-2">
                                  <span>{f.name}</span>
                                  <span className="text-[9px] opacity-75">Rp 500k</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-5 rounded-2xl bg-muted/20 border border-border/30 text-xs text-muted-foreground leading-relaxed">
                      <span className="font-bold text-foreground block mb-2">Daftar Fitur Bawaan Paket Anda:</span>
                      <ul className="list-disc list-inside flex flex-col gap-1">
                        <li>Fitur Standar Terpilih: {selectedBasicFeatures.map(id => BASIC_FEATURES.find(b => b.id === id)?.name).join(", ")}</li>
                        {selectedMediumFeatures.length > 0 && (
                          <li>Fitur Menengah Terpilih: {selectedMediumFeatures.map(id => MEDIUM_FEATURES.find(m => m.id === id)?.name).join(", ")}</li>
                        )}
                        {selectedAdvancedFeatures.length > 0 && (
                          <li>Fitur Canggih Terpilih: {selectedAdvancedFeatures.map(id => ADVANCED_FEATURES.find(a => a.id === id)?.name).join(", ")}</li>
                        )}
                      </ul>
                      <p className="mt-3 text-[10px] text-muted-foreground border-t border-border/20 pt-2">
                        Ingin menambah/mengurangi fitur secara spesifik? Silakan ubah paket ke <strong>"Custom Build"</strong> pada Langkah ke-1.
                      </p>
                    </div>
                  )}

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center justify-center gap-1 h-11 px-5 rounded-full font-bold border border-border/60 text-foreground hover:bg-muted/10 transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Kembali
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full font-bold bg-foreground text-background hover:scale-105 transition-all shadow-lg shadow-foreground/10"
                    >
                      Langkah Akhir: Kontak & Deploy
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: CLIENT CONTACTS, DOMAINS, SERVERS & SUBMIT */}
              {step === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-4 text-left"
                >
                  <div>
                    <h2 className="text-xl font-extrabold text-foreground flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5" />
                      Domain, Server & Kontak Klien
                    </h2>
                    <p className="text-xs text-muted-foreground mt-0.5">Lengkapi identitas domain kustom, tipe hosting, dan data kontak Anda untuk pencatatan.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* DOMAINS */}
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-bold text-foreground">1. Pilih Domain Tambahan:</span>
                      <div className="grid grid-cols-1 gap-2">
                        {DOMAINS.map(d => (
                          <div 
                            key={d.id}
                            onClick={() => setSelectedDomain(d.id)}
                            className={`p-2 rounded-lg border cursor-pointer transition-all flex justify-between items-center ${
                              selectedDomain === d.id ? "bg-foreground/[0.03] border-foreground" : "bg-card border-border/40"
                            }`}
                          >
                            <span className="text-xs font-bold text-foreground">{d.name}</span>
                            <span className="text-xs font-bold text-foreground">Rp {d.price.toLocaleString("id-ID")}/th</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* HOSTING */}
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-bold text-foreground">2. Pilih Infrastruktur Server:</span>
                      <div className="grid grid-cols-1 gap-2">
                        {HOSTINGS.map(h => (
                          <div 
                            key={h.id}
                            onClick={() => setSelectedHosting(h.id)}
                            className={`p-2 rounded-lg border cursor-pointer transition-all flex flex-col gap-1 ${
                              selectedHosting === h.id ? "bg-foreground/[0.03] border-foreground" : "bg-card border-border/40"
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-bold text-foreground">{h.id === "vercel" ? "Serverless Modern" : h.id === "shared" ? "Shared Hosting" : "VPS Server"}</span>
                              <span className="text-xs font-bold text-foreground">{h.price > 0 ? `Rp ${h.price.toLocaleString("id-ID")}` : "Gratis Setup"}</span>
                            </div>
                            <span className="text-[9px] text-muted-foreground leading-tight">{h.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* MAINTENANCE SELECTOR */}
                  <div className="flex flex-col gap-2 mt-1">
                    <span className="text-xs font-bold text-foreground">3. Opsi Pemeliharaan Bulanan (Maintenance):</span>
                    <div className="grid grid-cols-1 gap-2">
                      {MAINTENANCES.map(m => (
                        <div 
                          key={m.id}
                          onClick={() => setSelectedMaintenance(m.id)}
                          className={`p-2.5 rounded-lg border cursor-pointer transition-all flex justify-between items-center ${
                            selectedMaintenance === m.id ? "bg-foreground/[0.03] border-foreground" : "bg-card border-border/40"
                          }`}
                        >
                          <div>
                            <span className="text-xs font-bold text-foreground block">{m.id === "none" ? "Tanpa Pemeliharaan" : m.id === "basic" ? "Paket Pemeliharaan Basic" : m.id === "medium" ? "Paket Pemeliharaan Medium" : "Paket Pemeliharaan Advanced"}</span>
                            <span className="text-[9px] text-muted-foreground">{m.name}</span>
                          </div>
                          <span className="text-xs font-bold text-foreground">{m.price > 0 ? `Rp ${m.price.toLocaleString("id-ID")}/bln` : "Rp 0"}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CLIENT PERSONAL INFO */}
                  <div className="flex flex-col gap-3 border-t border-border/30 pt-4 mt-2">
                    <span className="text-xs font-extrabold text-foreground">4. Data Kontak Klien Pemesan:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="clientName" className="text-[10px] font-bold text-muted-foreground ml-1">Nama Lengkap Klien</label>
                        <input 
                          type="text" 
                          id="clientName" 
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="John Doe" 
                          className="w-full bg-muted/30 border border-border/40 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:bg-background transition-all"
                        />
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <label htmlFor="clientWa" className="text-[10px] font-bold text-muted-foreground ml-1">No. WhatsApp Aktif</label>
                        <input 
                          type="tel" 
                          id="clientWa" 
                          required
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="085810289428" 
                          className="w-full bg-muted/30 border border-border/40 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:bg-background transition-all"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label htmlFor="clientMail" className="text-[10px] font-bold text-muted-foreground ml-1">Alamat Email Aktif</label>
                        <input 
                          type="email" 
                          id="clientMail" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@company.com" 
                          className="w-full bg-muted/30 border border-border/40 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:bg-background transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center justify-center gap-1 h-11 px-5 rounded-full font-bold border border-border/60 text-foreground hover:bg-muted/10 transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Kembali
                    </button>
                    
                    <button 
                      type="submit" 
                      disabled={isPending}
                      className="group flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-foreground text-background font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-foreground/10 disabled:opacity-75"
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          Memproses...
                        </>
                      ) : (
                        <>
                          Kirim Cetak Biru
                          <Send className="w-3.5 h-3.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 5: SUCCESS STATE */}
              {step === 5 && (
                <motion.div
                  key="step-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 gap-5 text-center"
                >
                  <div className="w-16 h-16 bg-foreground/5 text-foreground rounded-full flex items-center justify-center border border-border/40 shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-foreground tracking-tight">Cetak Biru Terkirim!</h3>
                    <p className="text-muted-foreground mt-2 text-xs max-w-sm mx-auto leading-relaxed">
                      Terima kasih, <strong>{clientName}</strong>! Simulasi blueprint spesifikasi website Anda telah berhasil terenkripsi dan tercatat langsung ke sistem database internal kami. Tim pengembang kami akan menganalisis kebutuhan Anda dan segera menghubungi Anda dalam waktu 1x24 jam.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 px-3 py-1.5 border border-border/40 rounded-full bg-muted/30 text-[10px] font-bold text-muted-foreground">
                    <ShieldCheck className="w-3.5 h-3.5 text-foreground" />
                    Supabase Encrypted Submission
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
