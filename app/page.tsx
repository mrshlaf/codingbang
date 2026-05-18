import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HeroClient } from "@/components/hero-client";
import Script from "next/script";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <HeroClient />

      {/* QUICK VALUE PROPOSITION */}
      <section className="w-full py-24 px-6 border-t border-border/40 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {[
            {
              title: "Hand-Coded. Zero Template.",
              description: "Every pixel and line of code is crafted specifically for your brand's unique needs."
            },
            {
              title: "Modern Tech Stack.",
              description: "Powered by Next.js and state-of-the-art tools. No bloated WordPress setups."
            },
            {
              title: "Fast & Respectful.",
              description: "We respect your visitors' time. A slow website is a cost, not just an aesthetic issue."
            }
          ].map((val, i) => (
            <div key={i} className="flex flex-col gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-foreground font-semibold group-hover:scale-110 transition-transform duration-300">
                0{i + 1}
              </div>
              <h3 className="text-xl font-semibold text-foreground tracking-tight">{val.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM JOURNAL SPOTLIGHT */}
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      <section className="w-full py-24 px-6 bg-card border-y border-border/40 relative overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-foreground/[0.01] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Text Info */}
          <div className="flex flex-col items-start gap-6 lg:col-span-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">Our Journal</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              We share insights <br />
              <span className="text-muted-foreground font-serif italic font-light">directly on Instagram.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We write about web performance, architecture, design systems, and why hand-coded websites command higher authority. Follow our official account to join the conversation.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <a 
                href="https://www.instagram.com/codingbang/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full font-bold bg-foreground text-background hover:scale-105 active:scale-95 transition-all shadow-lg shadow-foreground/10"
              >
                Follow @codingbang
              </a>
              <Link 
                href="/blog"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full font-bold border border-border/60 text-foreground hover:bg-muted/10 transition-all"
              >
                View Journal Embed
              </Link>
            </div>
          </div>
          
          {/* Live Instagram Embed Card */}
          <div className="lg:col-span-6 flex justify-center w-full relative z-10">
            <div className="w-full max-w-[450px]">
              <blockquote className="instagram-media mx-auto" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DYfPR_jkwBQ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: "#FFF", border: "none", borderRadius: "24px", boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)", margin: "1px", maxWidth: "540px", minWidth: "326px", padding: 0, width: "calc(100% - 2px)" }}>
                <div style={{ padding: "16px" }}>
                  <a href="https://www.instagram.com/p/DYfPR_jkwBQ/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: "#FFFFFF", lineHeight: 0, padding: "0", textAlign: "center", textDecoration: "none", width: "100%" }} target="_blank" rel="noopener noreferrer">
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                      <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", flexGrow: 0, height: "40px", marginRight: "14px", width: "40px" }}></div>
                      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
                        <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", flexGrow: 0, height: "14px", marginBottom: "6px", width: "100px" }}></div>
                        <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", flexGrow: 0, height: "14px", width: "60px" }}></div>
                      </div>
                    </div>
                  </a>
                </div>
              </blockquote>
            </div>
          </div>
          
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="w-full py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Selected Works</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">A glimpse into our recent digital experiences built for forward-thinking brands.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <Link key={i} href="/portfolio" className="group relative w-full aspect-[4/3] bg-card rounded-3xl overflow-hidden border border-border/40">
                <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 via-background/50 to-transparent">
                  <h3 className="text-2xl font-bold text-foreground">Project Alpha</h3>
                  <p className="text-muted-foreground mt-1">E-Commerce &middot; Next.js &middot; Framer Motion</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="flex justify-center mt-4">
            <Link
              href="/portfolio"
              className={cn(
                "inline-flex items-center justify-center h-12 px-8 rounded-full font-medium text-base",
                "bg-transparent text-foreground border border-border",
                "hover:bg-muted transition-all duration-300"
              )}
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="w-full py-24 px-6 border-t border-border/40 bg-foreground text-background">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to build something different?</h2>
          <p className="text-lg text-background/80 max-w-2xl">
            Let's discuss how we can elevate your digital presence. No pressure, just a conversation about your goals.
          </p>
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center justify-center h-14 px-10 rounded-full font-medium text-lg mt-4",
              "bg-background text-foreground",
              "hover:scale-105 active:scale-95 transition-transform duration-300 shadow-2xl"
            )}
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
