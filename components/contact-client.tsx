"use client";

import { useState, useTransition, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageSquare, Mail, Phone, Loader2, CheckCircle2, ChevronRight, ChevronLeft, ShieldCheck, Zap } from "lucide-react";
import { submitContactForm } from "@/app/contact/actions";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

// ESTIMATOR DATA
const PLATFORMS = [
  { id: "vibe", name: "Simple Static Web (Vibe Coding)", price: 250000, weeks: 1, desc: "Raw HTML & vanilla CSS page. Deploy Vercel instantly." },
  { id: "landing", name: "Single Page Application (React & Vite)", price: 750000, weeks: 1, desc: "Sleek SPA, modern client state routing." },
  { id: "business", name: "Full-Stack Serverless (Next.js)", price: 2000000, weeks: 2, desc: "Complete SSR/ISR app. Excellent SEO & server actions." },
  { id: "ecommerce", name: "E-Commerce Storefront (Next.js + Midtrans)", price: 4500000, weeks: 3, desc: "Fully integrated storefront, secure payment pipeline." },
  { id: "webapp", name: "SaaS Platform MVP (Dashboard + DB)", price: 12000000, weeks: 4, desc: "Complete dashboard system, user profiles & data backend." }
];

const ADDONS = [
  { id: "vercel", name: "Vercel Zero-Config Deploy", price: 50000, weeks: 0, desc: "Host on Vercel's global CDN with automated CI/CD pipeline." },
  { id: "domain", name: "Bespoke Domain Linking (.com / .id)", price: 250000, weeks: 1, desc: "Connect your official domain with automated active SSL setup." },
  { id: "database", name: "Supabase Realtime Database", price: 750000, weeks: 1, desc: "PostgreSQL tables, storage buckets, & secure API backend." },
  { id: "auth", name: "Passwordless Magic Link (OTP Auth)", price: 500000, weeks: 1, desc: "Secure user logins via email passwordless OTP magic links." },
  { id: "payment", name: "Midtrans/Stripe Checkout Gateway", price: 1000000, weeks: 1, desc: "Accept credit cards, bank transfers, & local e-wallets/QRIS." },
  { id: "animations", name: "Framer Motion Apple-Style Physics", price: 450000, weeks: 1, desc: "Ultra smooth spring scroll effects and custom dynamic physics." },
  { id: "instagram", name: "Instagram Social Live Feed Card", price: 150000, weeks: 0, desc: "Direct instagram live widgets & embeds automated integration." },
  { id: "tailwind", name: "Tailwind CSS Aesthetic Overhaul", price: 350000, weeks: 0, desc: "Harmonious custom palette and pristine modern typography." },
  { id: "lighthouse", name: "Lighthouse 100% Core Web Vitals", price: 500000, weeks: 1, desc: "Advanced bundle optimizations for perfect SEO and speed." },
  { id: "whatsapp", name: "WhatsApp Business Integration Hub", price: 100000, weeks: 0, desc: "Floating contact helper drawer with instant API routing." }
];

export function ContactClient() {
  // STATE MANAGEMENT
  const [step, setStep] = useState(1);
  const [selectedPlatform, setSelectedPlatform] = useState(PLATFORMS[0]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [timelineMode, setTimelineMode] = useState<"standard" | "express">("standard");
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userNotes, setUserNotes] = useState("");

  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState<{ success?: boolean; message?: string; error?: string } | null>(null);

  // Mouse Spotlight Coordinates
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // CALCULATE LIVE ESTIMATE
  const addonsPrice = ADDONS.filter(a => selectedAddons.includes(a.id)).reduce((sum, item) => sum + item.price, 0);
  const basePrice = selectedPlatform.price;
  const rawPrice = basePrice + addonsPrice;
  const finalPrice = Math.round(timelineMode === "express" ? rawPrice * 1.3 : rawPrice);

  const baseWeeks = selectedPlatform.weeks;
  const addonsWeeks = ADDONS.filter(a => selectedAddons.includes(a.id)).reduce((sum, item) => sum + item.weeks, 0);
  const rawWeeks = baseWeeks + addonsWeeks;
  const finalWeeks = timelineMode === "express" ? Math.max(1, Math.round(rawWeeks * 0.7)) : rawWeeks;

  // COMPILE DETAILED BLUEPRINT TO SUBMIT
  const compileBlueprintMessage = () => {
    const addonsNames = ADDONS.filter(a => selectedAddons.includes(a.id)).map(a => a.name).join(", ");
    return `[Project Blueprint Configurator]
Platform: ${selectedPlatform.name}
Add-ons: ${addonsNames || "None"}
Delivery Model: ${timelineMode === "express" ? "Express (Fast-track 30% speedup)" : "Standard Timeline"}
Estimated Investment: Rp ${finalPrice.toLocaleString("id-ID")}
Estimated Timeline: ~${finalWeeks} Weeks

[Additional Notes from Client]:
${userNotes || "No additional notes provided."}`;
  };

  const handleAddonClick = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // FORM SUBMISSION HANDLE
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setState({ error: "Name and Email are required fields." });
      return;
    }

    const compiledMessage = compileBlueprintMessage();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("service", selectedPlatform.name);
    formData.append("message", compiledMessage);

    startTransition(async () => {
      try {
        const response = await submitContactForm(null, formData);
        setState(response);
        if (response.success) {
          setStep(4); // Success step
        }
      } catch (err) {
        setState({ error: "Something went wrong. Please try again." });
      }
    });
  };

  return (
    <div className="flex flex-col flex-1 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: BRAND INFO */}
        <motion.div 
          className="flex flex-col gap-8 lg:col-span-5"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Let's craft your <br />digital blueprint.
            </h1>
            <p className="text-lg text-muted-foreground font-medium max-w-md leading-relaxed">
              Configure your requirements in real-time, view your investment estimate, and submit your blueprint directly to our engineers.
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-4" variants={itemVariants}>
            <a 
              href="https://wa.me/6285810289428?text=Halo%20CODING%20BANG,%20saya%20tertarik%20diskusi%20soal%20project%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-5 rounded-3xl border border-border/40 bg-card hover:border-foreground/20 hover:bg-muted/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">WhatsApp Chat</h3>
                <p className="text-sm text-muted-foreground mt-0.5">Instant business inquiries.</p>
              </div>
            </a>

            <a 
              href="mailto:codingbangg@gmail.com"
              className="flex items-center gap-5 p-5 rounded-3xl border border-border/40 bg-card hover:border-foreground/20 hover:bg-muted/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">Email Studio</h3>
                <p className="text-sm text-muted-foreground mt-0.5">codingbangg@gmail.com</p>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: INTERACTIVE ESTIMATOR & FORM */}
        <motion.div 
          className="lg:col-span-7 flex flex-col bg-card border border-border/40 shadow-xl rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight Glow Effect */}
          <div 
            className="absolute pointer-events-none inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, var(--spotlight-glow), transparent 40%)`
            }}
          />

          {/* STEP INDICATORS */}
          {step <= 3 && (
            <div className="flex justify-between items-center mb-8 border-b border-border/40 pb-5 relative z-10">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    step === s 
                      ? "bg-foreground text-background scale-110 shadow-lg shadow-foreground/10" 
                      : step > s 
                        ? "bg-foreground/10 text-foreground" 
                        : "bg-muted text-muted-foreground border border-border/40"
                  }`}>
                    {s}
                  </div>
                  <span className={`text-xs font-bold tracking-tight hidden sm:inline ${
                    step === s ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {s === 1 ? "Platform" : s === 2 ? "Power-Ups" : "Blueprint"}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* LIVE SUMMARY HEADER (Sticky within card) */}
          {step <= 3 && (
            <div className="bg-muted/40 border border-border/30 rounded-2xl p-4 mb-6 flex justify-between items-center gap-4 relative z-10">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground block">EST. INVESTMENT</span>
                <span className="text-2xl font-extrabold text-foreground tracking-tight">
                  Rp {finalPrice.toLocaleString("id-ID")}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground block">EST. TIMELINE</span>
                <span className="text-lg font-bold text-foreground">
                  ~{finalWeeks} {finalWeeks === 1 ? "Week" : "Weeks"}
                </span>
              </div>
            </div>
          )}

          {/* DYNAMIC FORM STEPS CONTENT */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            
            {state?.error && (
              <div className="p-4 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium border border-red-200 dark:border-red-800">
                {state.error}
              </div>
            )}

            <AnimatePresence mode="wait">
              {/* STEP 1: CHOOSE PLATFORM */}
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-4"
                >
                  <div className="mb-2">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                      <Zap className="w-6 h-6 text-foreground" />
                      Select your core blueprint
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">Choose the architectural foundation for your digital product.</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    {PLATFORMS.map((platform) => {
                      const isSelected = selectedPlatform.id === platform.id;
                      return (
                        <div
                          key={platform.id}
                          onClick={() => setSelectedPlatform(platform)}
                          className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 text-left relative ${
                            isSelected 
                              ? "bg-foreground/[0.02] border-foreground" 
                              : "bg-muted/10 border-border/40 hover:border-border"
                          }`}
                        >
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <h3 className="font-extrabold text-foreground text-lg">{platform.name}</h3>
                              <p className="text-sm text-muted-foreground mt-1 leading-relaxed max-w-sm">{platform.desc}</p>
                            </div>
                            <span className="font-bold text-foreground text-base whitespace-nowrap">
                              Rp {platform.price.toLocaleString("id-ID")}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full font-bold bg-foreground text-background hover:scale-105 active:scale-95 transition-all shadow-lg shadow-foreground/10"
                    >
                      Next Step
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: CHOOSE ADD-ONS */}
              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-4"
                >
                  <div className="mb-2">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                      <Zap className="w-6 h-6 text-foreground" />
                      Configure Power-Ups
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">Supercharge your product with premium stack integrations.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ADDONS.map((addon) => {
                      const isSelected = selectedAddons.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => handleAddonClick(addon.id)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 text-left flex flex-col justify-between gap-3 ${
                            isSelected 
                              ? "bg-foreground/[0.02] border-foreground" 
                              : "bg-muted/10 border-border/40 hover:border-border"
                          }`}
                        >
                          <div>
                            <h3 className="font-extrabold text-foreground text-base">{addon.name}</h3>
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{addon.desc}</p>
                          </div>
                          <div className="flex justify-between items-center mt-2 border-t border-border/20 pt-2">
                            <span className="text-[10px] text-muted-foreground font-bold">+ {addon.weeks} {addon.weeks === 1 ? "Week" : "Weeks"}</span>
                            <span className="text-sm font-bold text-foreground">+ Rp {addon.price.toLocaleString("id-ID")}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center justify-center gap-1 h-12 px-6 rounded-full font-bold border border-border/60 text-foreground hover:bg-muted/10 transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full font-bold bg-foreground text-background hover:scale-105 active:scale-95 transition-all shadow-lg shadow-foreground/10"
                    >
                      Next Step
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: DETAILS & NOTES */}
              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-4"
                >
                  <div className="mb-2">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                      <Zap className="w-6 h-6 text-foreground" />
                      Finalize & Send Blueprint
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">Select your velocity and let our builders do the rest.</p>
                  </div>

                  {/* TIMELINE MODE SELECTOR */}
                  <div className="flex flex-col gap-2 mb-2">
                    <span className="text-xs font-bold text-foreground tracking-tight ml-1">Speed Delivery</span>
                    <div className="grid grid-cols-2 gap-3">
                      <div 
                        onClick={() => setTimelineMode("standard")}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 text-left ${
                          timelineMode === "standard" 
                            ? "bg-foreground/[0.02] border-foreground" 
                            : "bg-muted/10 border-border/40"
                        }`}
                      >
                        <span className="font-bold text-sm text-foreground block">Standard Velocity</span>
                        <span className="text-xs text-muted-foreground mt-0.5 block">Standard timeline & cost</span>
                      </div>
                      <div 
                        onClick={() => setTimelineMode("express")}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 text-left ${
                          timelineMode === "express" 
                            ? "bg-foreground/[0.02] border-foreground" 
                            : "bg-muted/10 border-border/40"
                        }`}
                      >
                        <span className="font-bold text-sm text-foreground block flex items-center gap-1.5">
                          Express Delivery
                          <Zap className="w-3.5 h-3.5 fill-foreground text-foreground" />
                        </span>
                        <span className="text-xs text-muted-foreground mt-0.5 block">30% faster / +30% cost</span>
                      </div>
                    </div>
                  </div>

                  {/* CLIENT PERSONAL INFO */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="name" className="text-xs font-bold text-foreground ml-1">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe" 
                        className="w-full bg-muted/30 border border-border/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:bg-background transition-all"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="email" className="text-xs font-bold text-foreground ml-1">Your Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com" 
                        className="w-full bg-muted/30 border border-border/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:bg-background transition-all"
                      />
                    </div>
                  </div>

                  {/* USER ADDITIONAL NOTES */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="notes" className="text-xs font-bold text-foreground ml-1">Additional Project Brief (Optional)</label>
                    <textarea 
                      id="notes" 
                      rows={3} 
                      value={userNotes}
                      onChange={(e) => setUserNotes(e.target.value)}
                      placeholder="Describe target audience, visual style preferences, or custom requirements..." 
                      className="w-full bg-muted/30 border border-border/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:bg-background transition-all resize-none"
                    />
                  </div>

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center justify-center gap-1 h-12 px-6 rounded-full font-bold border border-border/60 text-foreground hover:bg-muted/10 transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back
                    </button>
                    
                    <button 
                      type="submit" 
                      disabled={isPending}
                      className="group flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-foreground text-background font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-lg shadow-foreground/10 disabled:opacity-75"
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Send Blueprint
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* SUCCESS STATE STEP */}
              {step === 4 && (
                <motion.div
                  key="step-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 gap-5 text-center"
                >
                  <div className="w-20 h-20 bg-foreground/5 text-foreground rounded-full flex items-center justify-center border border-border/40 shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-foreground tracking-tight">Blueprint Saved!</h3>
                    <p className="text-muted-foreground mt-2 text-base max-w-sm mx-auto">
                      Thank you, {name}! Your customized blueprint configurations have been recorded dynamically to our team database. We will analyze the specs and reach out shortly.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 px-4 py-2 border border-border/40 rounded-full bg-muted/30 text-xs font-bold text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 text-foreground" />
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
