"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue, useMotionValueEvent, animate } from "framer-motion";
import { TEAM_MEMBERS } from "@/lib/data";
import { Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function TeamMarquee() {
  const team = TEAM_MEMBERS.map((m) => ({
    ...m,
    initials: m.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase(),
  }));

  // Duplicate team array 4 times to ensure seamless infinite scroll during dragging
  const marqueeItems = [...team, ...team, ...team, ...team];

  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);

  const handleSkip = (direction: "left" | "right") => {
    const currentX = x.get();
    const skipAmount = 340; // Approx one card width + gap
    const targetX = direction === "left" ? currentX + skipAmount : currentX - skipAmount;
    
    animate(x, targetX, {
      type: "spring",
      stiffness: 150,
      damping: 20
    });
  };

  useEffect(() => {
    const calculateWidth = () => {
      if (containerRef.current) {
        // We have 4 sets. The width of one set is scrollWidth / 4
        setContentWidth(containerRef.current.scrollWidth / 4);
      }
    };

    // Calculate initially and on window resize
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  useAnimationFrame((t, delta) => {
    if (isDragging || isHovered || contentWidth === 0) return;

    // If framer motion is animating x (e.g., drag momentum), let it finish
    if (x.isAnimating()) return;

    let currentX = x.get();
    // Speed: 70 pixels per second
    let moveBy = -70 * (delta / 1000);

    x.set(currentX + moveBy);
  });

  useMotionValueEvent(x, "change", (latest) => {
    if (contentWidth === 0) return;

    // Seamless wrapping
    if (latest <= -contentWidth) {
      x.set(latest + contentWidth);
    } else if (latest > 0) {
      x.set(latest - contentWidth);
    }
  });

  return (
    <section className="w-full py-24 px-6 bg-card border-t border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <motion.div
          className="flex flex-col items-center text-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground bg-muted/40 px-3.5 py-1.5 rounded-full">
            Tim Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Meet Your Developers
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base font-medium">
            Para ahli di balik layar yang merancang dan membangun solusi digital untuk bisnis Anda.
          </p>
        </motion.div>

        {/* Marquee Container with Side Buttons */}
        <div className="relative flex items-center w-full group/marquee">
          {/* Left Button */}
          <div className="absolute left-2 sm:left-6 z-10 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => handleSkip("left")}
              className="p-3 rounded-full border border-border/40 bg-background/80 backdrop-blur-md text-foreground hover:bg-foreground hover:text-background shadow-lg transition-all duration-200"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            ref={containerRef}
            className="flex w-max gap-6 py-4 cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {marqueeItems.map((member, idx) => (
              <div
                key={`${member.id}-${idx}`}
                className="flex flex-col w-[300px] sm:w-[320px] shrink-0 gap-4 p-6 rounded-2xl border border-border/40 bg-background shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-foreground to-foreground/70 text-background flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground tracking-tight leading-tight whitespace-normal">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-muted-foreground mt-0.5 whitespace-normal">
                      {member.role}
                    </p>
                  </div>
                </div>

                {member.bio && (
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 whitespace-normal mb-2">
                    {member.bio}
                  </p>
                )}

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/40">
                  {member.social?.github && member.social.github !== "#" && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      title="GitHub"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  )}
                  {member.social?.website && member.social.website !== "#" && (
                    <a
                      href={member.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors ml-auto flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold bg-muted/40 px-3 py-1.5 rounded-full hover:bg-muted"
                      title="Portfolio"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      Portfolio
                    </a>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

          {/* Right Button */}
          <div className="absolute right-2 sm:right-6 z-10 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => handleSkip("right")}
              className="p-3 rounded-full border border-border/40 bg-background/80 backdrop-blur-md text-foreground hover:bg-foreground hover:text-background shadow-lg transition-all duration-200"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
