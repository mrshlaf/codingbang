"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import logoImage from "@/app/images/logo-codingbang-removebg.png";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full pt-24 pb-10 px-6 border-t border-[#2e4f44]/40 bg-[#1C352D] text-[#F8F0E5] mt-auto overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col gap-20 relative z-10">
        
        {/* TOP SECTION: GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* BRAND COLUMN */}
          <div className="flex flex-col gap-6 lg:pr-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-[#254037] border border-[#2e4f44] flex items-center justify-center p-1.5 shadow-sm">
                <Image src={logoImage} alt="CODING BANG Logo" fill className="object-contain p-1" />
              </div>
              <span className="font-bold tracking-tight text-xl text-white">CODING BANG</span>
            </Link>
            <p className="text-[#F8F0E5]/80 font-medium leading-relaxed text-sm">
              Kami merakit pengalaman digital premium berbasis hand-coded untuk bisnis yang menolak berkompromi dengan templat pasaran.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://www.instagram.com/codingbang/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#F8F0E5]/30 flex items-center justify-center text-xs font-bold text-[#F8F0E5] hover:bg-[#F8F0E5] hover:text-[#1C352D] hover:border-[#F8F0E5] transition-all">
                IG
              </a>
              <a href="https://www.tiktok.com/@codingbangg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#F8F0E5]/30 flex items-center justify-center text-xs font-bold text-[#F8F0E5] hover:bg-[#F8F0E5] hover:text-[#1C352D] hover:border-[#F8F0E5] transition-all">
                TT
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-white text-base tracking-wide uppercase text-xs">Perusahaan</h3>
            <div className="flex flex-col gap-4 text-[#F8F0E5]/70 text-sm font-medium">
              <Link href="/about" className="hover:text-white transition-colors w-fit">Tentang Kami</Link>
              <Link href="/portfolio" className="hover:text-white transition-colors w-fit">Portofolio</Link>
              <Link href="/blog" className="hover:text-white transition-colors w-fit">Jurnal</Link>
              <Link href="/contact" className="hover:text-white transition-colors w-fit">Hubungi Kami</Link>
            </div>
          </div>

          {/* SERVICES */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-white text-base tracking-wide uppercase text-xs">Layanan</h3>
            <div className="flex flex-col gap-4 text-[#F8F0E5]/70 text-sm font-medium">
              <Link href="/services" className="hover:text-white transition-colors w-fit">Landing Page</Link>
              <Link href="/services" className="hover:text-white transition-colors w-fit">Website Profil Perusahaan</Link>
              <Link href="/services" className="hover:text-white transition-colors w-fit">Portofolio Kreatif</Link>
              <Link href="/services" className="hover:text-white transition-colors w-fit">Toko Online</Link>
              <Link href="/services" className="hover:text-white transition-colors w-fit">Aplikasi & Dashboard</Link>
            </div>
          </div>

          {/* CONTACT & NEWSLETTER */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-white text-base tracking-wide uppercase text-xs">Kontak Studio</h3>
            <div className="flex flex-col gap-4 text-[#F8F0E5]/70 text-sm font-medium">
              <a href="mailto:codingbangg@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#F8F0E5]/80" />
                codingbangg@gmail.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F8F0E5]/80 mt-0.5 flex-shrink-0" />
                <span>Jakarta, Indonesia <br/> (Remote Seluruh Dunia)</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: COPYRIGHT */}
        <div className="pt-8 border-t border-[#2e4f44]/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold text-[#F8F0E5]/50 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} CODING BANG. HAK CIPTA DILINDUNGI.
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-bold text-[#F8F0E5]/50 uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
