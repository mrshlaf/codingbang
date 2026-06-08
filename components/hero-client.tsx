"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import logoImage from "@/app/images/logo-codingbang-removebg.png";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function HeroClient() {
  return (
    <section className="w-full min-h-[92vh] flex items-center justify-center px-6 lg:px-12 relative overflow-hidden bg-background">
      
      {/* Premium Tech Grid & Ambient Radial Light */}
      <div className="absolute inset-0 bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)' }} />
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-foreground/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-foreground/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 py-16 md:py-24">
        
        {/* TEXT COLUMN */}
        <motion.div 
          className="flex flex-col items-start text-left gap-6 lg:col-span-7 order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-foreground leading-[1.05]"
          >
            Website Kencang, <br />
            <span className="text-muted-foreground font-serif italic font-light tracking-normal block mt-1">Tampil Beda.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium"
          >
            Dibangun dari nol tanpa template. Cepat di mata, ringan di kantong. 
            Konsultasi dulu, baru deal — tanpa tekanan.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
          >
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-full font-bold text-base bg-foreground text-background hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-foreground/10"
            >
              Lihat Layanan Kami
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/6285810289428?text=Halo%20CODING%20BANG%2C%20saya%20mau%20konsultasi%20soal%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full font-bold text-base bg-transparent text-foreground border-2 border-border hover:border-foreground/40 hover:bg-foreground/[0.02] active:scale-95 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Sekarang
            </a>
          </motion.div>
        </motion.div>
 
        {/* IMAGE COLUMN */}
        <motion.div 
          className="lg:col-span-5 relative w-full max-w-md lg:max-w-lg aspect-square mx-auto lg:ml-auto order-1 lg:order-2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Continuous elegant floating container */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full h-full flex items-center justify-center cursor-pointer group"
            whileHover={{ scale: 1.03 }}
          >
            {/* Pulsing glow behind the logo */}
            <div className="absolute w-[90%] h-[90%] bg-foreground/[0.05] rounded-full blur-[100px] group-hover:bg-foreground/[0.1] transition-colors duration-700 pointer-events-none" />
            
            <Image 
              src={logoImage} 
              alt="CODING BANG Logo" 
              width={600}
              height={600}
              className="object-contain w-full h-full transition-transform duration-700 group-hover:rotate-3 scale-90 sm:scale-100" style={{ filter: 'drop-shadow(var(--logo-shadow))' }}
              priority
            />
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
