"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, MessageCircle, Server, RefreshCw } from "lucide-react";

const BASE_PRICES: Record<string, number> = {
  "Landing Page": 1000000,
  "Company Profile": 2500000,
  "Web App": 5000000,
  "E-Commerce": 6000000,
  "Custom": 3000000,
};

const PAGE_PRICES: Record<string, number> = {
  "1-3": 0,
  "4-7": 750000,
  "8-15": 1500000,
  "16+": 2500000,
};

const FEATURE_PRICES: Record<string, number> = {
  seo: 350000,
  blog: 750000,
  admin: 1500000,
  chat: 200000,
  payment: 2000000,
  api: 1500000,
};

const ADDON_PRICES: Record<string, { label: string; price: number }> = {
  maintenance: { label: "Maintenance Bulanan (update, backup, monitoring)", price: 200000 },
  hosting: { label: "Hosting & Database (Vercel + Supabase)", price: 150000 },
  domain: { label: "Domain .com (per tahun)", price: 250000 },
};

export function CalculatorClient() {
  const [type, setType] = useState("Landing Page");
  const [pages, setPages] = useState("1-3");
  const [features, setFeatures] = useState<string[]>([]);
  const [addons, setAddons] = useState<string[]>([]);
  const [urgent, setUrgent] = useState(false);

  const toggleFeature = (id: string) => {
    setFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const basePrice = BASE_PRICES[type] || 3000000;
  const pagePrice = PAGE_PRICES[pages] || 0;
  const featurePrice = features.reduce(
    (sum, id) => sum + (FEATURE_PRICES[id] || 0),
    0
  );
  const addonPrice = addons.reduce(
    (sum, id) => sum + (ADDON_PRICES[id]?.price || 0),
    0
  );
  const urgencyFee = urgent ? 0.15 : 0;
  const subtotal = basePrice + pagePrice + featurePrice;
  const total = (subtotal + addonPrice) * (1 + urgencyFee);

  const waText = encodeURIComponent(
    `Halo CODING BANG! Saya tertarik dengan layanan pembuatan website.

Jenis: ${type}
Jumlah Halaman: ${pages}
Fitur: ${features.length > 0 ? features.join(", ") : "Basic"}
Layanan Tambahan: ${addons.length > 0 ? addons.map(a => ADDON_PRICES[a]?.label).join(", ") : "Tidak ada"}
Urgensi: ${urgent ? "Cepat (2 minggu)" : "Normal"}
Estimasi Budget: Rp ${Math.round(total).toLocaleString("id-ID")}

Mohon infonya lebih lanjut. Terima kasih!`
  );

  return (
    <div className="flex flex-col flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-32">
      <motion.div
        className="flex flex-col gap-2 mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Kalkulator Harga
        </h1>
        <p className="text-muted-foreground font-medium text-sm sm:text-base">
          Estimasi biaya pembuatan website sesuai kebutuhan Anda.
        </p>
      </motion.div>

      <motion.div
        className="bg-card border border-border/40 rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm space-y-6 sm:space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        {/* Type */}
        <div className="space-y-2.5 sm:space-y-3">
          <label className="text-xs sm:text-sm font-semibold text-foreground">Tipe Website</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {Object.keys(BASE_PRICES).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                  type === t
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background text-muted-foreground border-border/50 hover:border-foreground/30"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Pages */}
        <div className="space-y-2.5 sm:space-y-3">
          <label className="text-xs sm:text-sm font-semibold text-foreground">Jumlah Halaman</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {Object.keys(PAGE_PRICES).map((p) => (
              <button
                key={p}
                onClick={() => setPages(p)}
                className={`p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                  pages === p
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background text-muted-foreground border-border/50 hover:border-foreground/30"
                }`}
              >
                {p} Halaman
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2.5 sm:space-y-3">
          <label className="text-xs sm:text-sm font-semibold text-foreground">Fitur Tambahan</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { id: "seo", label: "SEO Optimization", price: "Rp 350rb" },
              { id: "blog", label: "Sistem Blog", price: "Rp 750rb" },
              { id: "admin", label: "Admin Panel", price: "Rp 1,5 JT" },
              { id: "chat", label: "Live Chat", price: "Rp 200rb" },
              { id: "payment", label: "Payment Gateway", price: "Rp 2 JT" },
              { id: "api", label: "Integrasi API", price: "Rp 1,5 JT" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => toggleFeature(f.id)}
                className={`flex items-center justify-between p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                  features.includes(f.id)
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background text-muted-foreground border-border/50 hover:border-foreground/30"
                }`}
              >
                <span>{f.label}</span>
                <span className="text-[10px] sm:text-xs opacity-80">{f.price}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Layanan Tambahan */}
        <div className="space-y-2.5 sm:space-y-3">
          <label className="text-xs sm:text-sm font-semibold text-foreground flex items-center gap-1.5">
            <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Layanan Tambahan (opsional)
          </label>
          <div className="flex flex-col gap-2">
            {Object.entries(ADDON_PRICES).map(([id, val]) => (
              <button
                key={id}
                onClick={() => toggleAddon(id)}
                className={`flex items-center justify-between p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                  addons.includes(id)
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background text-muted-foreground border-border/50 hover:border-foreground/30"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {id === "maintenance" && <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                  {id === "hosting" && <Server className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                  {val.label}
                </span>
                <span className="text-[10px] sm:text-xs opacity-80">
                  Rp {val.price.toLocaleString("id-ID")}
                  {id === "hosting" ? "/bln" : id === "domain" ? "/thn" : "/bln"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Urgency */}
        <div className="space-y-2.5 sm:space-y-3">
          <label className="text-xs sm:text-sm font-semibold text-foreground">Urgensi</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setUrgent(false)}
              className={`p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                !urgent
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-muted-foreground border-border/50 hover:border-foreground/30"
              }`}
            >
              Normal (4-8 minggu)
            </button>
            <button
              onClick={() => setUrgent(true)}
              className={`p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                urgent
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-muted-foreground border-border/50 hover:border-foreground/30"
              }`}
            >
              Cepat (+15%)
            </button>
          </div>
        </div>

        {/* Result */}
        <div className="pt-5 sm:pt-6 border-t border-border/40 space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-base sm:text-lg font-semibold text-foreground">Estimasi Total</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Rp {Math.round(total).toLocaleString("id-ID")}
            </span>
          </div>
          <div className="text-[11px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1">
            <p>Base ({type}): Rp {basePrice.toLocaleString("id-ID")}</p>
            {pagePrice > 0 && <p>+ Halaman ({pages}): Rp {pagePrice.toLocaleString("id-ID")}</p>}
            {featurePrice > 0 && <p>+ Fitur: Rp {featurePrice.toLocaleString("id-ID")}</p>}
            {addonPrice > 0 && <p>+ Layanan Tambahan: Rp {addonPrice.toLocaleString("id-ID")}/bln</p>}
            {urgent && <p>+ Urgensi (15%): Rp {Math.round((subtotal + addonPrice) * 0.15).toLocaleString("id-ID")}</p>}
          </div>

          <div className="text-[11px] sm:text-xs text-muted-foreground bg-muted/30 rounded-xl p-3 sm:p-4 space-y-1">
            <p className="font-semibold text-foreground">
              <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5 inline-block mr-1" />
              Biaya Bulanan (setelah website jadi):
            </p>
            <p>• Hosting & database: Rp 150rb – Rp 500rb/bln (tergantung traffic)</p>
            <p>• Maintenance (opsional): Rp 200rb/bln</p>
            <p>• Domain: Rp 150rb – Rp 500rb/tahun</p>
          </div>

          <a
            href={`https://wa.me/6285810289428?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-11 sm:h-12 rounded-xl bg-foreground text-background font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            Konsultasi via WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
}
