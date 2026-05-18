"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import logoImage from "@/app/images/logo-codingbang-removebg.png";
import { useEffect } from "react";

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
  useEffect(() => {
    try {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <section className="w-full min-h-[92vh] flex items-center justify-center px-6 lg:px-12 relative overflow-hidden bg-background">
      
      {/* Premium Tech Grid & Ambient Radial Light */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(28,53,45,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,53,45,0.04)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none" />
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
            Website yang Berdampak, <br />
            <span className="text-muted-foreground font-serif italic font-light tracking-normal block mt-1">bukan sekadar indah.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium"
          >
            Kami merakit setiap proyek dari baris kode nol. Tanpa templat pasaran, kecepatan mutlak, keamanan maksimal, dan estetika premium untuk bisnis yang menolak berkompromi.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
          >
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-full font-bold text-base bg-foreground text-background hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-foreground/10"
            >
              <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Jelajahi Layanan
            </Link>
            <Link
              href="/portfolio"
              className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full font-bold text-base bg-transparent text-foreground border-2 border-border hover:border-foreground/40 hover:bg-foreground/[0.02] active:scale-95 transition-all duration-300"
            >
              Lihat Karya Kami
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
 
        {/* IMAGE COLUMN */}
        <motion.div 
          className="lg:col-span-5 relative w-full max-w-sm lg:max-w-full aspect-square mx-auto lg:ml-auto order-1 lg:order-2 flex items-center justify-center"
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
            <div className="absolute w-[80%] h-[80%] bg-foreground/[0.04] rounded-full blur-[80px] group-hover:bg-foreground/[0.08] transition-colors duration-700 pointer-events-none" />
            
            <Image 
              src={logoImage} 
              alt="CODING BANG Logo" 
              width={400}
              height={400}
              className="object-contain drop-shadow-[0_20px_50px_rgba(28,53,45,0.12)] transition-transform duration-700 group-hover:rotate-3"
              priority
            />
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
