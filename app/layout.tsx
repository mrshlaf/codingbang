import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CODING BANG - Premium Web Studio",
    template: "%s | CODING BANG",
  },
  description: "Web studio & tech education hub. Hand-coded from scratch. Zero templates. We build fast, scalable, and premium digital experiences.",
  openGraph: {
    title: "CODING BANG - Premium Web Studio",
    description: "Hand-coded from scratch. Zero templates. Fast, scalable, and premium digital experiences.",
    url: "https://codingbang.vercel.app",
    siteName: "CODING BANG",
    locale: "id_ID",
    type: "website",
    // images: [{ url: "https://codingbang.vercel.app/og-image.jpg" }] // Uncomment saat OG Image sudah siap
  },
  twitter: {
    card: "summary_large_image",
    title: "CODING BANG - Premium Web Studio",
    description: "Premium web development and tech education hub.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col pt-16" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
