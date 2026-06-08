"use client";

import { useActionState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, CheckCircle2 } from "lucide-react";
import { submitContactForm } from "@/app/contact/actions";

const SERVICES = [
  "Landing Page",
  "Company Profile",
  "Web App",
  "E-Commerce",
  "Lainnya",
];

export function ContactClient() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    null
  );
  const formRef = useRef<HTMLFormElement>(null);

  if (state?.success) {
    return (
      <div className="flex flex-col flex-1 w-full max-w-lg mx-auto px-6 py-24 md:py-32">
        <motion.div
          className="flex flex-col items-center text-center gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center border border-border/40">
            <CheckCircle2 className="w-8 h-8 text-foreground" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Pesan Terkirim!
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            {state.message}
          </p>
          {state.waUrl && (
            <a
              href={state.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2.5 h-12 px-8 rounded-full bg-foreground text-background font-bold hover:scale-105 transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Lanjut Chat WhatsApp
            </a>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 w-full max-w-lg mx-auto px-6 py-24 md:py-32">
      <motion.div
        className="flex flex-col gap-2 mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Hubungi Kami
        </h1>
        <p className="text-muted-foreground font-medium">
          Konsultasi gratis. Ceritakan kebutuhan website Anda.
        </p>
      </motion.div>

      <motion.div
        className="bg-card border border-border/40 rounded-2xl p-6 md:p-8 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        {state?.error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-sm font-medium">
            {state.error}
          </div>
        )}

        <form ref={formRef} action={formAction} className="space-y-5">
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-foreground"
            >
              Nama <span className="text-red-400">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Nama lengkap Anda"
              className="w-full px-4 py-2.5 rounded-xl border border-border/50 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-foreground/15 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email@anda.com"
                className="w-full px-4 py-2.5 rounded-xl border border-border/50 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-foreground/15 transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="whatsapp"
                className="text-sm font-semibold text-foreground"
              >
                WhatsApp <span className="text-red-400">*</span>
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                required
                placeholder="085810289428"
                className="w-full px-4 py-2.5 rounded-xl border border-border/50 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-foreground/15 transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="service"
              className="text-sm font-semibold text-foreground"
            >
              Layanan yang Dibutuhkan
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-4 py-2.5 rounded-xl border border-border/50 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-foreground/15 transition-all"
            >
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-foreground"
            >
              Pesan <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Ceritakan kebutuhan website Anda..."
              className="w-full px-4 py-2.5 rounded-xl border border-border/50 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-foreground/15 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full h-12 rounded-xl bg-foreground text-background font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
          >
            {pending ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Mengirim...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Kirim Pesan
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-border/30 flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <a
            href="mailto:codingbangg@gmail.com"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            codingbangg@gmail.com
          </a>
          <span className="text-border/50">|</span>
          <a
            href="https://wa.me/6285810289428"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            +62 858-1028-9428
          </a>
        </div>
      </motion.div>
    </div>
  );
}
