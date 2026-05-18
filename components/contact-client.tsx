"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare, Mail, Phone, Loader2, CheckCircle2 } from "lucide-react";
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

export function ContactClient() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  return (
    <div className="flex flex-col flex-1 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: CONTACT INFO */}
        <motion.div 
          className="flex flex-col gap-10"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Let's talk about <br />your project.
            </h1>
            <p className="text-xl text-muted-foreground font-medium max-w-md">
              Have a specific requirement or just exploring options? Reach out via your preferred channel. We usually respond within a few hours.
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            <a 
              href="https://wa.me/6285810289428?text=Halo%20CODING%20BANG,%20saya%20tertarik%20diskusi%20soal%20project%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 rounded-3xl border border-border/60 bg-muted/30 hover:bg-muted/60 transition-colors group"
            >
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-white fill-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground tracking-tight">WhatsApp</h3>
                <p className="text-muted-foreground mt-1 font-medium">The fastest way to get a response.</p>
              </div>
            </a>

            <a 
              href="mailto:codingbangg@gmail.com"
              className="flex items-center gap-4 p-6 rounded-3xl bg-muted/30 border border-border/50 hover:border-foreground transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Email Us</h3>
                <p className="text-muted-foreground mt-1 font-medium">codingbangg@gmail.com</p>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: INQUIRY FORM */}
        <motion.div 
          className="flex flex-col bg-background border-2 border-border/60 shadow-2xl shadow-foreground/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-foreground/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-foreground flex items-center gap-3">
            <MessageSquare className="w-8 h-8" />
            Send a message
          </h2>
          
          {state?.success ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-full gap-4 text-center py-10"
            >
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
              <p className="text-muted-foreground text-lg">{state.message}</p>
            </motion.div>
          ) : (
            <form action={formAction} className="flex flex-col gap-6 relative z-10">
              {state?.error && (
                <div className="p-4 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium border border-red-200 dark:border-red-800">
                  {state.error}
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-foreground ml-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  placeholder="John Doe" 
                  className="w-full bg-muted/50 border border-border/60 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:bg-background transition-all"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-foreground ml-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  placeholder="john@example.com" 
                  className="w-full bg-muted/50 border border-border/60 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:bg-background transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-bold text-foreground ml-1">Service of Interest</label>
                <select 
                  id="service" 
                  name="service"
                  className="w-full bg-muted/50 border border-border/60 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:bg-background transition-all appearance-none font-medium text-foreground"
                >
                  <option value="Landing Page">Landing Page</option>
                  <option value="Business Website">Business Website</option>
                  <option value="Web Application">Web Application</option>
                  <option value="Consultation">Consultation</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-foreground ml-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4} 
                  placeholder="Tell us a bit about your project..." 
                  className="w-full bg-muted/50 border border-border/60 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:bg-background transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isPending}
                className="group mt-4 flex items-center justify-center gap-2 w-full bg-foreground text-background font-bold text-lg h-16 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-foreground/10 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
              <p className="text-sm text-center text-muted-foreground mt-2 font-medium">
                We'll never share your information with anyone else.
              </p>
            </form>
          )}
        </motion.div>

      </div>
    </div>
  );
}
