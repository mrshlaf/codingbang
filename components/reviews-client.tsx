"use client";

import { motion } from "framer-motion";
import { Star, Quote, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Review } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ReviewsClient({
  reviews,
  averageRating,
  totalReviews,
}: {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
  distribution?: Record<number, number>;
}) {
  const items = reviews;
  const avg = averageRating;

  return (
    <div className="flex flex-col flex-1 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
      <motion.div
        className="flex flex-col items-center text-center gap-6 mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
          Ulasan Klien
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl font-medium">
          Apa kata mereka tentang pengalaman bekerja sama dengan kami.
        </p>
      </motion.div>

      {/* RATING OVERVIEW */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-6 justify-center mb-16 p-8 rounded-3xl bg-card border border-border/40 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="text-center">
          <div className="text-5xl font-extrabold text-foreground">
            {avg.toFixed(1)}
          </div>
          <div className="flex gap-1 mt-2 justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-5 h-5",
                  i < Math.round(avg)
                    ? "fill-foreground text-foreground"
                    : "text-muted-foreground/30"
                )}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2 font-medium">
            Dari {totalReviews} ulasan
          </p>
        </div>
        <div className="hidden sm:block w-px h-16 bg-border/60" />
        <a
          href="https://wa.me/6285810289428?text=Halo%20CODING%20BANG%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20websitenya"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 h-12 px-6 rounded-full font-bold bg-foreground text-background hover:scale-105 transition-all shadow-lg"
        >
          <MessageCircle className="w-4 h-4" /> Jadilah Klien Berikutnya
        </a>
      </motion.div>

      {/* REVIEWS GRID */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {items.map((review, idx) => {
          const initials = review.client_name
            .split(" ")
            .map((n: string) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();
          const projectLabel =
            review.project_type || review.client_company || "";
          const dateStr = review.created_at
            ? new Date(review.created_at).toLocaleDateString("id-ID", {
                month: "long",
                year: "numeric",
              })
            : "";
          return (
            <motion.div
              key={review.id || idx}
              variants={itemVariants}
              className="flex flex-col gap-5 p-8 rounded-3xl border border-border/40 bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                    {initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">
                      {review.client_name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {projectLabel}
                    </p>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-muted-foreground/20" />
              </div>
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, ri) => (
                  <Star
                    key={ri}
                    className="w-4 h-4 fill-foreground text-foreground"
                  />
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, ri) => (
                  <Star
                    key={ri}
                    className="w-4 h-4 text-muted-foreground/30"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &ldquo;{review.content}&rdquo;
              </p>
              {dateStr && (
                <p className="text-xs font-medium text-muted-foreground/60 mt-auto">
                  {dateStr}
                </p>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
