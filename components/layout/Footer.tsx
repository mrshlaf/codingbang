"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import logoImage from "@/app/images/logo-codingbang-removebg.png";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full pt-24 pb-10 px-6 border-t border-border/40 bg-background mt-auto overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col gap-20 relative z-10">
        
        {/* TOP SECTION: GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* BRAND COLUMN */}
          <div className="flex flex-col gap-6 lg:pr-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-muted flex items-center justify-center p-1.5 shadow-sm">
                <Image src={logoImage} alt="CODING BANG Logo" fill className="object-contain p-1" />
              </div>
              <span className="font-bold tracking-tight text-xl">CODING BANG</span>
            </Link>
            <p className="text-muted-foreground font-medium leading-relaxed">
              We build premium, hand-coded digital experiences for businesses that refuse to settle for templates.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://www.instagram.com/codingbang/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-xs font-bold text-foreground hover:bg-foreground hover:text-background transition-all">
                IG
              </a>
              <a href="https://www.tiktok.com/@codingbangg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-xs font-bold text-foreground hover:bg-foreground hover:text-background transition-all">
                TT
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-foreground text-lg">Company</h3>
            <div className="flex flex-col gap-4 text-muted-foreground font-medium">
              <Link href="/about" className="hover:text-foreground transition-colors w-fit">About Us</Link>
              <Link href="/portfolio" className="hover:text-foreground transition-colors w-fit">Portfolio</Link>
              <Link href="/blog" className="hover:text-foreground transition-colors w-fit">Journal</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors w-fit">Contact</Link>
            </div>
          </div>

          {/* SERVICES */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-foreground text-lg">Services</h3>
            <div className="flex flex-col gap-4 text-muted-foreground font-medium">
              <Link href="/services" className="hover:text-foreground transition-colors w-fit">Landing Pages</Link>
              <Link href="/services" className="hover:text-foreground transition-colors w-fit">Web Applications</Link>
              <Link href="/services" className="hover:text-foreground transition-colors w-fit">E-Commerce</Link>
              <Link href="/services" className="hover:text-foreground transition-colors w-fit">Performance Audit</Link>
            </div>
          </div>

          {/* CONTACT & NEWSLETTER */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-foreground text-lg">Get in Touch</h3>
            <div className="flex flex-col gap-4 text-muted-foreground font-medium">
              <a href="mailto:codingbangg@gmail.com" className="flex items-center gap-3 hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
                codingbangg@gmail.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Jakarta, Indonesia <br/> (Remote Worldwide)</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: COPYRIGHT */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
            &copy; {new Date().getFullYear()} CODING BANG. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold text-muted-foreground uppercase tracking-widest">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
