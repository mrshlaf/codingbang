"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImage from "@/app/images/logo-codingbang-removebg.png";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Theme Sync on Mount
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark") || 
                   localStorage.theme === "dark" || 
                   (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    if (isDark) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-4" : "py-6"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={cn(
            "flex items-center justify-between transition-all duration-500 rounded-full",
            isScrolled 
              ? "bg-background/80 backdrop-blur-xl border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-6 py-3" 
              : "bg-transparent border-transparent px-0 py-2"
          )}>
            
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-muted/50 group-hover:bg-muted transition-colors">
                <Image src={logoImage} alt="CODING BANG Logo" fill className="object-contain p-1 dark:invert" />
              </div>
              <span className="font-bold tracking-tight text-lg group-hover:text-muted-foreground transition-colors">
                CODING BANG
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className={cn(
                      "text-sm font-bold transition-all hover:-translate-y-0.5",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2.5 rounded-full border border-border/60 text-foreground hover:bg-foreground hover:text-background transition-all"
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
              
              <Link 
                href="/contact"
                className="group flex items-center gap-2 text-sm font-bold px-6 py-2.5 rounded-full bg-foreground text-background hover:scale-105 active:scale-95 transition-all shadow-lg shadow-foreground/10"
              >
                Contact
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl pt-32 px-6 pb-6 flex flex-col md:hidden h-[100dvh]"
          >
            <div className="flex flex-col gap-6 flex-1">
              {navLinks.map((link, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link 
                    href={link.href}
                    className="text-4xl font-bold tracking-tight text-foreground block py-2 border-b border-border/40"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pt-6 flex flex-col gap-4"
            >
              <button
                onClick={toggleTheme}
                className="flex items-center justify-between w-full p-4 rounded-2xl border border-border/60 text-foreground font-bold text-base"
              >
                <span>Theme Mode</span>
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>

              <Link 
                href="/contact"
                className="flex items-center justify-between w-full p-6 rounded-3xl bg-foreground text-background font-bold text-xl"
              >
                Start a project
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
