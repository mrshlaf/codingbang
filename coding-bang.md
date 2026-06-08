# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Project: CODING BANG — Official Website V1.0
## Kategori: Tech Education Hub + Premium Web Studio
## Status: DRAFT — Ready for Development
## Versi: 1.0.0
## Tanggal: 2025
## Author: CODING BANG Internal

---

# DAFTAR ISI

1. Executive Summary & Vision
2. Target Audience & User Personas
3. System Architecture & Tech Stack
4. Information Architecture (Sitemap)
5. Page-by-Page Feature Requirements
   - 5.1 Home / Landing Page
   - 5.2 Blog / Artikel Tech
   - 5.3 Portfolio / Showcase Proyek
   - 5.4 Halaman Jasa (Services)
   - 5.5 About / Brand Story
   - 5.6 Halaman Kontak
   - 5.7 Dashboard Automation Tool (Internal)
6. Design System & UI Specification
7. Content Strategy
8. SEO Strategy
9. Performance & Non-Functional Requirements
10. Security Requirements
11. Deployment & Infrastructure
12. Development Phases & Sprint Plan
13. Future Roadmap
14. Acceptance Criteria & Definition of Done

---

# BAB 1 — EXECUTIVE SUMMARY & VISION

## 1.1 Latar Belakang

CODING BANG adalah brand tech Indonesia yang beroperasi di persimpangan antara
edukasi teknologi dan layanan premium web development. Di tengah banjirnya
konten tech yang dangkal dan studio web berbasis template murahan, CODING BANG
hadir sebagai antitesis: konten yang menohok, sistem yang dibangun dengan tangan
(hand-coded), dan output yang bisa bicara sendiri.

Website ini bukan sekadar portfolio online. Ini adalah command center, mediaincrease the size and visual prominence of the hero logo/illustration on the right side. The current logo feels undersized and lacks visual balance compared to the headline. Scale it up appropriately across desktop, tablet, and mobile while maintaining proper proportions and spacing.
edukasi, dan storefront jasa — semuanya dalam satu sistem yang bersih, cepat,
dan efisien.

## 1.2 Primary Objectives

OBJECTIVE 1: EDUKASI
Menjadi referensi konten tech terpercaya untuk programmer pemula, mahasiswa IT,
UMKM yang butuh melek teknologi, dan publik umum yang ingin teredukasi. Konten
bersumber dari ekosistem sosial media (embed langsung dari IG/TikTok) dengan
tambahan artikel teknis pendukung.

OBJECTIVE 2: KONVERSI KLIEN
Mengubah visitor menjadi calon klien yang menghubungi CODING BANG untuk jasa
pembuatan website berbasis Next.js atau Astro. Tidak ada sistem e-commerce atau
checkout di website ini — semua inquiry diarahkan ke channel personal (WhatsApp,
Email, DM Instagram, DM TikTok).

OBJECTIVE 3: AUTHORITY BUILDING
Membangun reputasi sebagai studio web premium dengan pendekatan "No WordPress,
No Template" yang dapat dibuktikan langsung dari kualitas website-nya sendiri.
Website ini adalah kartu nama hidup yang berbicara lebih keras dari kata-kata.

## 1.3 Success Metrics (KPI V1)

- Waktu loading halaman: di bawah 2 detik (Lighthouse Performance Score > 90)
- Inquiry klien masuk melalui website: minimal 3 per bulan dalam 3 bulan pertama
- Artikel blog terpublish: minimal 8 artikel dalam bulan pertama post-launch
- Social media embed aktif: minimal 4 konten IG/TikTok tertayang di blog
- Bounce rate halaman jasa: di bawah 60%
- Core Web Vitals: semua metrik di zona hijau (LCP, FID, CLS)

## 1.4 Posisi di Pasar

CODING BANG bukan agensi besar dengan 20 developer. Ini adalah boutique studio
solo dengan standar kualitas setara kelas atas, harga yang kompetitif, dan
komunikasi langsung tanpa lapisan birokrasi. Positioning ini adalah kekuatan,
bukan kelemahan, dan harus dikomunikasikan dengan percaya diri di seluruh
konten website.

---

# BAB 2 — TARGET AUDIENCE & USER PERSONAS

## 2.1 Persona A: "Reza" — Programmer Pemula / Mahasiswa IT

Usia: 18-24 tahun
Latar: Mahasiswa informatika semester 3-6, aktif di TikTok dan YouTube,
baru mulai belajar JavaScript atau Python.

Kebutuhan di website:
- Konten edukasi yang tidak menggurui, langsung ke intinya
- Tutorial dengan konteks nyata, bukan hello world generik
- Inspirasi dari proyek nyata yang bisa dipelajari

Behavior: Masuk via embed TikTok/IG yang viral, lalu explore artikel
pendukung. Kemungkinan share ke komunitas Discord atau grup WhatsApp kampus.

Pain Points: Terlalu banyak konten tech yang terlalu panjang dan bertele-tele,
atau terlalu singkat dan tidak ada substansinya.

## 2.2 Persona B: "Budi" — Pemilik UMKM / Pebisnis

Usia: 28-45 tahun
Latar: Punya bisnis offline yang mulai sadar butuh presence digital.
Tidak paham coding sama sekali tapi melek bisnis.

Kebutuhan di website:
- Kejelasan tentang apa yang ditawarkan CODING BANG
- Bukti nyata (portfolio) bahwa CODING BANG bisa dipercaya
- Cara kontak yang mudah dan tidak ribet

Behavior: Langsung ke halaman Jasa dan Portfolio. Kalau terkesan, langsung
hubungi via WhatsApp. Tidak akan scroll blog.

Pain Points: Takut ditipu, takut hasil akhirnya jelek, takut tidak bisa
komunikasi dengan developer-nya.

## 2.3 Persona C: "Dita" — Content Creator / Digital Marketer

Usia: 22-32 tahun
Latar: Creator konten yang mulai serius membangun personal brand online
dan butuh website atau landing page profesional.

Kebutuhan di website:
- Referensi visual yang inspiring dari portfolio CODING BANG
- Konten edukasi tentang tech yang relevan dengan dunia kreatif
- Estimasi biaya yang transparan (meski harus request dulu)

Behavior: Explore portfolio section, cek Instagram CODING BANG, lalu
hubungi via DM Instagram atau TikTok.

## 2.4 Persona D: "Andi" — Developer Junior / Mid-Level

Usia: 21-30 tahun
Latar: Sudah kerja sebagai developer, penasaran dengan pendekatan teknis
CODING BANG, mungkin ingin kolaborasi atau sekadar benchmark.

Kebutuhan di website:
- Konten teknis yang tidak superfisial
- Transparansi tech stack yang digunakan
- Kredibilitas teknis yang bisa diverifikasi

Behavior: Langsung ke blog, baca artikel teknis, cek kode struktur website
(devtools), mungkin follow di GitHub.

---

# BAB 3 — SYSTEM ARCHITECTURE & TECH STACK

## 3.1 Frontend Framework

FRAMEWORK: Next.js 14+ (App Router)
RATIONALE: Server-side rendering untuk SEO optimal, React Server Components
untuk performa, dan App Router untuk routing yang bersih dan modern.
Alternatif Astro hanya digunakan untuk deliverable klien yang membutuhkan
website statis murni dengan zero JavaScript overhead.

FILE STRUCTURE CONVENTION:
```
coding-bang/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx              # Home
│   │   ├── about/page.tsx        # About
│   │   ├── services/page.tsx     # Jasa
│   │   ├── contact/page.tsx      # Kontak
│   │   └── portfolio/
│   │       ├── page.tsx          # Portfolio Index
│   │       └── [slug]/page.tsx   # Portfolio Detail
│   ├── blog/
│   │   ├── page.tsx              # Blog Index
│   │   ├── [slug]/page.tsx       # Blog Post Detail
│   │   └── tag/[tag]/page.tsx    # Blog by Tag
│   ├── dashboard/                # Internal only
│   │   └── page.tsx
│   ├── api/
│   │   ├── contact/route.ts      # Contact form handler
│   │   └── search/route.ts       # Blog search endpoint
│   ├── layout.tsx                # Root layout
│   └── globals.css
├── components/
│   ├── ui/                       # Reusable UI atoms
│   ├── sections/                 # Page section components
│   ├── blog/                     # Blog-specific components
│   └── layout/                   # Navbar, Footer, etc.
├── content/
│   └── blog/                     # MDX files untuk artikel
├── lib/
│   ├── supabase.ts               # Supabase client
│   └── utils.ts
├── public/
│   └── images/
├── .env.local                    # Environment variables
└── next.config.ts
```

## 3.2 Styling Engine

FRAMEWORK: Tailwind CSS v4
FONTS: 
  - Display Font: Space Mono atau JetBrains Mono (untuk heading, terminal vibe)
  - Body Font: Geist (Vercel's font, bersih dan modern)
ICONS: Lucide React

## 3.3 Database

DATABASE: Supabase (PostgreSQL)
RATIONALE: Dipilih karena built-in Auth (untuk dashboard internal), real-time
capabilities, dan free tier yang generous untuk skala V1.

SCHEMA TABLES:
```sql
-- Table: contact_inquiries
CREATE TABLE contact_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  service_interest VARCHAR(100),
  message TEXT NOT NULL,
  source VARCHAR(50),           -- 'website', 'whatsapp', 'instagram', etc.
  status VARCHAR(20) DEFAULT 'new', -- 'new', 'read', 'replied', 'closed'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table: portfolio_projects
CREATE TABLE portfolio_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(200) UNIQUE NOT NULL,
  description TEXT,
  tech_stack TEXT[],            -- ['Next.js', 'Tailwind', 'Supabase']
  thumbnail_url TEXT,
  live_url TEXT,
  github_url TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  is_mock BOOLEAN DEFAULT FALSE, -- tandai proyek dummy
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table: blog_views (opsional, untuk analytics sederhana)
CREATE TABLE blog_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug VARCHAR(200) NOT NULL,
  viewed_at TIMESTAMPTZ DEFAULT NOW(),
  user_agent TEXT
);
```

## 3.4 Content Management

APPROACH: Hybrid Content System
- Artikel blog: MDX files di dalam folder /content/blog/ (Git-based, version
  controlled, dan tidak butuh CMS tambahan untuk solo operator)
- Portfolio: Data tersimpan di Supabase agar bisa dikelola dari dashboard
  internal tanpa harus push code setiap kali update
- Konten sosmed: Embed langsung via Instagram dan TikTok oEmbed API

MDX FRONTMATTER STANDARD:
```yaml
---
title: "Judul Artikel yang Menarik"
description: "Meta deskripsi untuk SEO, maksimal 160 karakter"
publishedAt: "2025-01-15"
updatedAt: "2025-01-20"
tags: ["Next.js", "Automation", "AI"]
category: "Tutorial"
thumbnail: "/images/blog/nama-file.webp"
readingTime: 8
isFeatured: false
embedType: "instagram"          # "instagram" | "tiktok" | null
embedUrl: "https://www.instagram.com/p/XXXXX/"
---
```

## 3.5 Deployment & Hosting

PLATFORM: Vercel
DOMAIN: Subdomain Vercel untuk V1 (*.vercel.app)
CI/CD: Otomatis via Vercel GitHub Integration (setiap push ke main = deploy)
ENVIRONMENT: Production + Preview deployments

## 3.6 Third-Party Integrations

- Supabase: Database dan Auth untuk dashboard internal
- Instagram oEmbed API: Embed konten IG di blog
- TikTok oEmbed API: Embed konten TikTok di blog
- Vercel Analytics: Traffic dan performance monitoring (built-in, gratis)
- Vercel Speed Insights: Core Web Vitals monitoring

---

# BAB 4 — INFORMATION ARCHITECTURE (SITEMAP)

```
codingbang.vercel.app/
│
├── /                           # Home / Landing Page
├── /about                      # About / Brand Story
├── /services                   # Halaman Jasa
├── /portfolio                  # Portfolio Index
│   └── /portfolio/[slug]       # Portfolio Detail
├── /blog                       # Blog Index
│   ├── /blog/[slug]            # Blog Post Detail
│   └── /blog/tag/[tag]         # Blog by Tag
├── /contact                    # Halaman Kontak
└── /dashboard                  # Internal Dashboard (protected)
    └── /dashboard/portfolio    # Kelola portfolio entries
```

NAVBAR LINKS (Primary Navigation):
Home | Blog | Portfolio | Jasa | About | Kontak

FOOTER LINKS:
Kolom 1 (Brand): Logo, tagline singkat, social media icons
Kolom 2 (Navigasi): Home, Blog, Portfolio, Jasa, About, Kontak
Kolom 3 (Kontak): WA Button, Email, IG link, TikTok link

---

# BAB 5 — PAGE-BY-PAGE FEATURE REQUIREMENTS

## 5.1 HOME / LANDING PAGE

### 5.1.1 Tujuan Halaman
Memberikan kesan pertama yang tak terlupakan, mengkomunikasikan identitas
CODING BANG dalam 10 detik, dan mendorong visitor ke dua jalur utama:
(1) Baca konten blog, atau (2) Tanya jasa.

### 5.1.2 Section Breakdown

SECTION 1: HERO
Konten:
  - Headline utama: Teks besar, bold, dan provocative sesuai brand voice
    Contoh: "WEB YANG LAMBAT ITU BIAYA, BUKAN ESTETIKA."
  - Sub-headline: 1-2 kalimat yang langsung explain value proposition
  - Dua CTA button: "Lihat Jasa Kami" (primary) + "Baca Blog" (secondary)
  - Background: Animasi partikel atau grid cyberpunk dengan aksen neon green
  - Elemen visual: ASCII art atau terminal-style text animation

Behavior:
  - Typing animation pada headline (opsional, tidak boleh ganggu performance)
  - Scroll indicator di bagian bawah hero
  - Full viewport height (100vh)

SECTION 2: QUICK VALUE PROPOSITION (3 KOLOM)
Konten: Tiga kartu singkat yang menjelaskan keunggulan utama:
  - "Hand-Coded. Zero Template." — Semua dibangun dari nol
  - "Next.js + Astro. Bukan WordPress." — Tech stack modern
  - "Sat-Set. Deadline Dihormati." — Profesionalisme
Format: 3 kartu horizontal dengan ikon minimalis, teks pendek, border neon green

SECTION 3: FEATURED BLOG POSTS
Konten: 3 artikel terbaru atau terfeatured dari blog
Format: Card grid dengan thumbnail, judul, tag, dan reading time
CTA: "Baca Semua Artikel" → redirect ke /blog
Logic: Fetch 3 artikel terbaru dari MDX metadata, sorted by publishedAt DESC

SECTION 4: PORTFOLIO PREVIEW
Konten: 2-3 proyek terbaik (termasuk mock jika proyek nyata belum cukup)
Format: Mosaic atau bento grid dengan thumbnail, nama proyek, tech stack pills
CTA: "Lihat Semua Proyek" → redirect ke /portfolio

SECTION 5: SOCIAL PROOF / ABOUT TEASER
Konten:
  - Quote singkat yang mencerminkan filosofi CODING BANG
  - Stats kecil (jika ada): "X proyek selesai", "X klien puas", dll.
  - Mini bio 2-3 kalimat tentang CODING BANG
  - Link "Kenali Lebih Jauh" → /about

SECTION 6: CTA BANNER (KONTAK)
Konten: Full-width banner dengan background dark/neon
  - Teks: "Siap bikin website yang beda dari yang lain?"
  - Sub-teks: "Reach out via WA, Email, atau DM sosmed."
  - Button: "Hubungi Sekarang" → /contact

SECTION 7: FOOTER (GLOBAL COMPONENT)

### 5.1.3 SEO Requirements
  - Title tag: "CODING BANG — Premium Web Studio & Tech Education Hub Indonesia"
  - Meta description: ≤ 160 karakter, mengandung kata kunci utama
  - OG image: Custom branded 1200x630px
  - Schema.org: Organization markup

---

## 5.2 BLOG / ARTIKEL TECH

### 5.2.1 Tujuan Halaman
Menjadi pusat edukasi tech yang jujur dan punchy. Traffic utama datang dari
redirect sosial media (IG/TikTok), dan blog memperkuat konten tersebut dengan
konteks lebih dalam, embed media, dan artikel teknis pendukung.

### 5.2.2 Blog Index Page (/blog)

Layout:
  - Header section: Judul "[ BLOG ]" dengan sub-teks singkat
  - Search bar: Input field dengan debounce 300ms, query ke /api/search
  - Featured post: 1 artikel featured dalam format hero card besar (full width)
  - Article grid: 2-3 kolom, card format
  - Filtering: Tag pills di atas grid untuk filter by category/tag

Article Card Component (wajib mengandung):
  - Thumbnail image (lazy loaded, WebP format)
  - Tag/kategori badge
  - Judul artikel
  - Deskripsi singkat (max 120 karakter)
  - Reading time
  - Tanggal publish
  - Embed indicator (ikon IG atau TikTok jika artikel punya embed)

Pagination atau Infinite Scroll:
  - Pagination standar untuk V1 (lebih SEO-friendly)
  - 9 artikel per halaman

### 5.2.3 Blog Post Detail Page (/blog/[slug])

LAYOUT STRUCTURE:
```
┌─────────────────────────────────┐
│ BACK TO BLOG LINK               │
├─────────────────────────────────┤
│ TAG BADGE                       │
│ JUDUL ARTIKEL (H1)              │
│ Meta: Tanggal | Reading Time    │
├─────────────────────────────────┤
│ THUMBNAIL IMAGE (full width)    │
├─────────────────────────────────┤
│ [EMBED IG/TIKTOK — jika ada]    │
│ Ini sumber konten aslinya.      │
│ Follow untuk konten harian.     │
├─────────────────────────────────┤
│ ARTIKEL BODY (MDX content)      │
│ Konten pendukung, konteks,      │
│ dan pembahasan lebih dalam.     │
├─────────────────────────────────┤
│ TAGS                            │
├─────────────────────────────────┤
│ CTA BOX: "Butuh website?"       │
│ → Hubungi via WA                │
├─────────────────────────────────┤
│ RELATED ARTICLES (3 artikel)    │
└─────────────────────────────────┘
```

EMBED COMPONENT SPECIFICATION:
  - Embed Instagram: Menggunakan Instagram oEmbed endpoint
    URL: https://api.instagram.com/oembed?url={embedUrl}&maxwidth=480
    Render: iframe atau blockquote Instagram standard
  - Embed TikTok: Menggunakan TikTok oEmbed endpoint
    URL: https://www.tiktok.com/oembed?url={embedUrl}
    Render: blockquote TikTok standard
  - Fallback: Jika embed gagal load, tampilkan link teks biasa ke konten asli
  - Disclaimer teks di bawah embed: "Konten asli dari [platform]. Follow
    @codingbang untuk update harian."

MDX RENDERING:
  - Custom component untuk code blocks dengan syntax highlighting
    (menggunakan Shiki atau Prism)
  - Copy button pada setiap code block
  - Custom heading dengan anchor links (#)
  - Callout/alert box component (info, warning, tip)
  - Image component dengan lazy loading dan blur placeholder

READING PROGRESS:
  - Progress bar di bagian atas halaman (thin bar, neon green)
  - Bergerak sesuai scroll position

TABLE OF CONTENTS:
  - Sidebar sticky (desktop only) yang menampilkan H2 dan H3
  - Auto-generated dari heading di MDX content
  - Highlight heading yang sedang aktif di viewport

DARK/LIGHT MODE:
  - Toggle button di navbar (global)
  - State tersimpan di localStorage
  - Respects system preference sebagai default
  - Smooth transition 200ms antar mode
  - Blog code blocks harus tetap readable di kedua mode

SEARCH FUNCTIONALITY:
  - Search bar di halaman /blog
  - Client-side search menggunakan Fuse.js (search di MDX metadata)
  - Real-time result muncul tanpa page reload
  - Highlight keyword yang cocok di hasil pencarian
  - Minimum 2 karakter sebelum search aktif

SEO per Post:
  - Dynamic title: "[Judul Artikel] — CODING BANG"
  - Dynamic meta description dari frontmatter.description
  - OG image: Bisa custom per artikel atau auto-generated
  - Schema.org: Article markup dengan author, datePublished, dateModified
  - Canonical URL
  - Sitemap: Auto-generated dari semua MDX files

### 5.2.4 Tag System
  - Tags didefinisikan di frontmatter setiap MDX file
  - Halaman /blog/tag/[tag] menampilkan semua artikel dengan tag tersebut
  - Tag yang disarankan untuk V1:
    Next.js | Astro | Automation | AI Tools | Tutorial | Career | UMKM Tech

---

## 5.3 PORTFOLIO / SHOWCASE PROYEK

### 5.3.1 Tujuan Halaman
Memberikan bukti konkret tentang kemampuan teknis CODING BANG. Di fase V1
dengan 1-2 proyek nyata, halaman ini harus tetap terlihat kredibel dengan
kombinasi proyek nyata dan mock proyek yang diberi label jelas.

### 5.3.2 Portfolio Index Page (/portfolio)

Layout:
  - Header: "[ PORTFOLIO ]" + deskripsi singkat pendekatan CODING BANG
  - Filter bar: All | Website Bisnis | Landing Page | Web App | Automation
  - Project grid: Bento grid atau masonry layout (bukan plain 3-kolom biasa)

Project Card Component:
  - Thumbnail / Screenshot (hover: overlay dengan detail singkat)
  - Project title
  - Tech stack pills (Next.js, Tailwind, Supabase, dll.)
  - Category badge
  - Label "MOCK PROJECT" jika is_mock = true (dengan styling berbeda,
    tidak menyembunyikan tapi tidak memalukan)
  - "Lihat Detail" link

Sorting: Featured projects tampil pertama (is_featured = true), lalu
sorted by order_index.

### 5.3.3 Portfolio Detail Page (/portfolio/[slug])

Content Structure:
  - Project title (H1)
  - Live URL button + GitHub button (jika tersedia)
  - Full-width hero screenshot/mockup
  - "Tentang Proyek" section: deskripsi panjang, konteks, dan tujuan proyek
  - Tech stack yang digunakan (dengan icon jika tersedia)
  - Screenshots / mockup carousel (minimal 2-3 gambar)
  - "Tantangan & Solusi" section: menunjukkan problem-solving ability
  - Related services CTA: "Butuh website serupa? Hubungi kami."

Mock Project Disclaimer:
  - Jika is_mock = true, tampilkan notice box di atas halaman:
    "Proyek ini adalah demonstrasi konsep yang dibuat oleh CODING BANG
    untuk showcase kemampuan teknis, bukan proyek klien nyata."

Data Source: Portfolio data di-fetch dari Supabase table portfolio_projects

---

## 5.4 HALAMAN JASA (SERVICES)

### 5.4.1 Tujuan Halaman
Mengkonversi visitor yang sudah tertarik menjadi inquiry aktif. Halaman ini
harus menjawab 3 pertanyaan utama calon klien: "Apa yang kalian buat?",
"Untuk siapa?", dan "Bagaimana cara order?"

### 5.4.2 Page Structure

HERO SECTION:
  - Headline: "WEBSITE YANG KERJA, BUKAN YANG CANTIK DOANG."
  - Sub-headline: Penjelasan singkat filosofi Hand-Coded CODING BANG

LAYANAN SECTION (3 Paket Utama):

LAYANAN 1: LANDING PAGE PROFESIONAL
  Target: UMKM, pebisnis, kreator yang butuh online presence cepat
  Tech: Astro atau Next.js (tergantung kebutuhan)
  Fitur standar:
    - Design custom (bukan template)
    - Responsive mobile-first
    - SEO on-page setup
    - Loading time < 2 detik
    - Contact section dengan redirect WA/sosmed
    - Deployment ke Vercel
  Harga: "Request estimasi" (tombol CTA ke /contact atau WA)

LAYANAN 2: WEBSITE BISNIS / COMPANY PROFILE
  Target: Bisnis yang butuh credibility online lebih dalam
  Tech: Next.js
  Fitur standar:
    - Semua fitur Landing Page
    - Multi-page structure
    - Blog/news section (opsional)
    - Admin panel sederhana (opsional)
    - Custom domain setup
    - Google Analytics integration
  Harga: "Request estimasi"

LAYANAN 3: WEB APP / AUTOMATION SYSTEM
  Target: Bisnis yang butuh sistem digital custom
  Tech: Next.js + Supabase + API integrations
  Fitur standar:
    - Full-stack web application
    - Authentication system
    - Database design dan setup
    - API integrations (WhatsApp, payment, dll.)
    - Dashboard admin
    - Custom automation workflow
  Harga: "Request estimasi"

PROCESS SECTION (How It Works):
  Step 1: KONSULTASI → Cerita kebutuhan lu via WA atau email
  Step 2: ESTIMASI → Gua kirim proposal scope dan timeline
  Step 3: PRODUKSI → Build dimulai setelah deal
  Step 4: REVISI → Iterasi sampai lu puas
  Step 5: LAUNCH → Deploy dan selesai

TECH STACK SECTION:
  Visual: Logo grid dari teknologi yang dikuasai
  Items: Next.js | Astro | TypeScript | Tailwind CSS | Supabase | Vercel |
         React | PostgreSQL | Node.js | Git

FAQ SECTION:
  Q: "Kenapa gak pakai WordPress?"
  A: "WordPress bagus buat nulis blog. Bukan buat performance dan security
     maksimal. Sistem yang gua bangun lebih cepat, lebih aman, dan lebih
     fleksibel karena setiap baris kode ditulis dengan tujuan spesifik."

  Q: "Berapa lama waktu pengerjaan?"
  A: "Tergantung scope. Landing page: 3-7 hari. Company profile: 1-2 minggu.
     Web app: diskusi dulu. Timeline selalu dikomunikasikan di awal."

  Q: "Apakah bisa revisi?"
  A: "Tentu. Revisi termasuk dalam paket dengan batas yang disepakati di
     awal. Gua kerja sampai lu beneran puas."

  Q: "Gimana cara mulainya?"
  A: "Langsung WA atau DM. Gak perlu form ribet. Cerita aja dulu."

CLOSING CTA:
  Full-width section dengan: "Siap mulai? Satu pesan bisa mengubah segalanya."
  Button: "WhatsApp Sekarang" (link ke WA dengan pesan pre-fill)
  Sub: "Atau DM di Instagram / TikTok"

---

## 5.5 ABOUT / BRAND STORY

### 5.5.1 Tujuan Halaman
Membangun koneksi personal antara visitor dan brand CODING BANG. Halaman ini
bukan CV, ini manifesto.

### 5.5.2 Page Structure

HERO: Full-width dengan foto/ilustrasi + headline brand statement

ORIGIN STORY SECTION:
  - Narasi tentang kenapa CODING BANG ada
  - Tone: First-person, jujur, tidak sok formal
  - Konten: Background, masalah yang dilihat di industri, dan mengapa
    pendekatan CODING BANG berbeda

NILAI & PRINSIP SECTION:
  3-4 kartu dengan prinsip utama:
  - "Hand-Coded is non-negotiable" — Tidak ada template, tidak ada
    page builder, tidak ada WordPress.
  - "Speed as respect" — Website lambat adalah bentuk tidak menghormati
    pengunjung. Performance bukan opsional.
  - "Pendidikan adalah output, bukan byproduct" — Konten edukasi bukan
    filler. Ini bagian inti dari apa yang CODING BANG lakukan.
  - "Satu orang, full accountability" — Solo studio berarti tidak ada
    yang disalahkan selain yang bikin. Itu keunggulan.

SKILL & EXPERTISE SECTION:
  - Tech stack visual (icon grid)
  - Area keahlian: Frontend, Full-Stack, Automation, Performance Optimization

SOCIAL MEDIA SECTION:
  - Link ke semua channel aktif: Instagram, TikTok, GitHub
  - Preview follower count (opsional, bisa di-hardcode jika tidak mau API)

CLOSING CTA:
  "Ada proyek yang mau dikerjain bareng? Atau sekadar mau ngobrol soal tech?"
  Button: "Hubungi Gua"

---

## 5.6 HALAMAN KONTAK

### 5.6.1 Tujuan Halaman
Memudahkan calon klien atau siapapun untuk menghubungi CODING BANG melalui
channel yang paling nyaman buat mereka.

### 5.6.2 Page Structure

HEADLINE: "[ NGOBROL YUK ]" atau "[ GET IN TOUCH ]"
SUB-HEADLINE: Teks santai yang menurunkan barrier untuk kontak

CONTACT OPTIONS (PRIMARY):

Option 1: WhatsApp
  Icon + teks: "WhatsApp"
  Number: 085810289428
  Pre-filled message template: "Halo CODING BANG, gua tertarik diskusi soal
  [isi kebutuhan]"
  Link: https://wa.me/6285810289428?text=[encoded-message]
  Style: Button besar, paling prominent

Option 2: Email
  Icon + teks: "Email"
  Address: [email CODING BANG — diisi nanti]
  Action: Mailto link atau copy-to-clipboard

Option 3: Instagram DM
  Icon + teks: "DM Instagram"
  Link: https://instagram.com/[handle]
  Sub: "@codingbang atau handle aktif"

Option 4: TikTok DM
  Icon + teks: "DM TikTok"
  Link: https://tiktok.com/@[handle]

INQUIRY FORM (SECONDARY, OPSIONAL):
  Untuk visitor yang prefer form daripada direct contact.
  Fields:
    - Nama (required)
    - Email (required, validasi format)
    - Jenis Layanan yang Diminati (dropdown: Landing Page | Company Profile |
      Web App | Automation | Konsultasi | Lainnya)
    - Pesan / Deskripsi Kebutuhan (textarea, required)
    - Submit button: "Kirim Pesan"
  
  On Submit:
    - POST ke /api/contact
    - Data tersimpan di Supabase table contact_inquiries
    - Response sukses: "Pesan terkirim. Gua akan balas dalam 24 jam."
    - Response error: "Ada yang salah. Coba lagi atau langsung WA ya."
  
  Catatan: Form ini pelengkap. Channel utama tetap WA dan DM sosmed.

RESPONSE TIME EXPECTATION:
  Teks kecil: "Biasanya gua balas dalam 2-24 jam. Kalau urgent,
  WhatsApp adalah yang tercepat."

---

## 5.7 DASHBOARD AUTOMATION TOOL (INTERNAL)

### 5.7.1 Tujuan
Dashboard internal yang hanya bisa diakses oleh CODING BANG (authenticated).
Di V1, fungsi utamanya adalah mengelola portfolio entries di Supabase tanpa
perlu akses langsung ke database.

### 5.7.2 Authentication
  - Menggunakan Supabase Auth (email + password)
  - Route /dashboard/* diproteksi dengan middleware Next.js
  - Unauthorized redirect ke halaman login custom

### 5.7.3 Dashboard Features (V1)

PORTFOLIO MANAGER:
  - Tabel list semua portfolio entries
  - Form tambah proyek baru (semua field dari schema)
  - Edit proyek yang sudah ada
  - Toggle featured / is_mock status
  - Reorder proyek (drag-and-drop opsional, manual order_index sebagai fallback)
  - Hapus proyek (dengan konfirmasi)

INQUIRY VIEWER:
  - List semua contact_inquiries dari Supabase
  - Filter by status (new / read / replied / closed)
  - Mark as read / replied
  - Tampilkan detail pesan

CATATAN: Dashboard ini tidak perlu indah. Functional dan cepat sudah cukup.

---

# BAB 6 — DESIGN SYSTEM & UI SPECIFICATION

## 6.1 Color Palette

```css
:root {
  /* Primary Colors */
  --color-bg-primary: #000000;          /* Pure black background */
  --color-bg-secondary: #0a0a0a;        /* Slightly lifted black */
  --color-bg-card: #111111;             /* Card backgrounds */
  --color-bg-hover: #1a1a1a;           /* Hover states */

  /* Accent Colors */
  --color-accent-primary: #39ff14;      /* Neon green — primary accent */
  --color-accent-secondary: #00ff88;   /* Mint neon — secondary accent */
  --color-accent-dim: #1a4d1a;         /* Dimmed neon for subtle use */

  /* Text Colors */
  --color-text-primary: #f0f0f0;        /* Near-white body text */
  --color-text-secondary: #888888;      /* Muted/secondary text */
  --color-text-muted: #444444;          /* Very muted text, labels */
  --color-text-accent: #39ff14;         /* Highlighted / linked text */

  /* Border Colors */
  --color-border-default: #222222;      /* Standard borders */
  --color-border-accent: #39ff14;       /* Neon borders */
  --color-border-subtle: #1a1a1a;      /* Barely visible borders */

  /* Semantic Colors */
  --color-success: #39ff14;
  --color-warning: #ffaa00;
  --color-error: #ff3333;
  --color-info: #00aaff;
}

/* Light Mode Override */
[data-theme="light"] {
  --color-bg-primary: #f8f8f8;
  --color-bg-secondary: #ffffff;
  --color-bg-card: #ffffff;
  --color-bg-hover: #f0f0f0;
  --color-text-primary: #111111;
  --color-text-secondary: #555555;
  --color-text-muted: #999999;
  --color-border-default: #e0e0e0;
  --color-accent-primary: #16a34a;      /* Darker green for light mode */
  --color-text-accent: #16a34a;
}
```

## 6.2 Typography Scale

```css
/* Font Import (Google Fonts atau self-hosted) */
/* Display: JetBrains Mono — terminal, techy, authority */
/* Body: Geist — clean, modern, highly legible */

--font-display: 'JetBrains Mono', monospace;
--font-body: 'Geist', sans-serif;

/* Type Scale */
--text-xs: 0.75rem;     /* 12px — labels, captions */
--text-sm: 0.875rem;    /* 14px — secondary text */
--text-base: 1rem;      /* 16px — body text */
--text-lg: 1.125rem;    /* 18px — lead text */
--text-xl: 1.25rem;     /* 20px — small headings */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px — hero headings */
--text-6xl: 3.75rem;    /* 60px — hero headings */
--text-7xl: 4.5rem;     /* 72px — maximum impact */
```

## 6.3 Spacing System

Menggunakan Tailwind spacing scale (4px base unit).
Konsisten menggunakan kelipatan 4: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.

## 6.4 Component Specifications

### BUTTON COMPONENTS:

Primary Button:
  - Background: var(--color-accent-primary) [neon green]
  - Text: #000000 [pure black — contrast]
  - Padding: 12px 24px
  - Font: JetBrains Mono, font-weight 600
  - Border-radius: 2px [sharp, tidak rounded]
  - Hover: brightness 110%, slight scale(1.02)
  - Transition: 150ms ease

Secondary Button:
  - Background: transparent
  - Text: var(--color-accent-primary)
  - Border: 1px solid var(--color-accent-primary)
  - Hover: Background neon green dengan teks hitam

Ghost Button:
  - Background: transparent
  - Text: var(--color-text-secondary)
  - Border: 1px solid var(--color-border-default)
  - Hover: border-color neon green, text neon green

### CARD COMPONENTS:

Standard Card:
  - Background: var(--color-bg-card)
  - Border: 1px solid var(--color-border-default)
  - Border-radius: 4px
  - Padding: 24px
  - Hover: border-color neon green, subtle glow box-shadow
  - Transition: 200ms ease

### NAVIGATION:

Navbar:
  - Position: Fixed top, full width
  - Background: rgba(0,0,0,0.85) dengan backdrop-blur: 12px
  - Height: 64px
  - Logo: Di kiri, klik ke /
  - Links: Di kanan, spacing 32px antar link
  - Dark/Light toggle: Ikon bulan/matahari, paling kanan
  - Mobile: Hamburger menu, slide-down drawer

### CODE BLOCK:

- Background: #0d0d0d (lebih gelap dari card)
- Font: JetBrains Mono
- Syntax highlighting: Shiki dengan theme "tokyo-night"
- Copy button: Top-right corner, ikon clipboard
- Language badge: Top-left, label bahasa (tsx, bash, sql, dll.)

## 6.5 Animation Guidelines

HERO SECTION:
  - Staggered text reveal: Setiap kata/baris muncul dengan delay bertahap
  - Duration: 600ms per elemen, delay 100ms antar elemen
  - Easing: cubic-bezier(0.16, 1, 0.3, 1)
  - Background: Subtle animated grid atau scanline effect (CSS only)

SCROLL ANIMATIONS (menggunakan Intersection Observer):
  - Cards: Fade-in dari bawah saat masuk viewport
  - Duration: 400ms, threshold 0.1
  - Delay stagger: 100ms per card dalam grid

PAGE TRANSITIONS:
  - Simple fade transition antar halaman
  - Duration: 200ms

HOVER STATES:
  - Semua interactive elements: 150-200ms transition
  - Cards: Subtle lift (translateY -2px) + border color change
  - Buttons: Scale dan brightness change

ATURAN: Tidak ada animasi yang berjalan lebih dari 1 detik.
Tidak ada infinite loop yang tidak berguna. Performance > eye candy.

---

# BAB 7 — CONTENT STRATEGY

## 7.1 Content Pillars

PILLAR 1: TUTORIAL & HOW-TO (40% konten)
  Sub-topik: Next.js, Astro, TypeScript, Tailwind CSS, Supabase,
  deployment, performance optimization, API integration

PILLAR 2: INDUSTRI & PERSPEKTIF (30% konten)
  Sub-topik: State of web dev di Indonesia, perbedaan tech stack,
  mengapa WordPress bukan pilihan terbaik untuk semua kasus,
  cara memilih developer yang tepat

PILLAR 3: TOOLS & WORKFLOW (20% konten)
  Sub-topik: AI tools untuk developer, automation, productivity setup,
  VSCode config, Git workflow

PILLAR 4: BISNIS & UMKM TECH (10% konten)
  Sub-topik: Kenapa UMKM butuh website proper, ROI dari investasi web,
  digital presence 101

## 7.2 Content Calendar Minimum (Bulan Pertama Post-Launch)

Minggu 1:
  - Artikel 1: "Kenapa Gua Pilih Next.js bukan WordPress untuk Semua Proyek"
  - Artikel 2: [Embed TikTok/IG yang sudah ada] + konteks teknis

Minggu 2:
  - Artikel 3: "Cara Setup Next.js + Supabase dari Nol (2025)"
  - Artikel 4: [Embed TikTok/IG] + pembahasan

Minggu 3:
  - Artikel 5: "Perbedaan Next.js vs Astro: Kapan Pakai Mana?"
  - Artikel 6: "Website UMKM Wajib Punya Ini (Bukan Fitur Asal Ada)"

Minggu 4:
  - Artikel 7: "Performance Audit: Cara Cek Kecepatan Website Lu"
  - Artikel 8: [Embed TikTok/IG] + tutorial pendukung

## 7.3 MDX Writing Standards

Setiap artikel MDX harus:
  - Minimal 600 kata (bukan padding, tapi substansi)
  - Ada minimal 1 code example (jika artikel teknis)
  - Ada struktur heading yang jelas (H2 untuk section utama, H3 untuk sub)
  - Gaya bahasa sesuai PRD Persona: casual-edukatif, tidak menggurui
  - Ada CTA di akhir artikel (minimal 1 kalimat ajak interaksi atau kontak)
  - Semua gambar dalam format WebP dengan alt text deskriptif

---

# BAB 8 — SEO STRATEGY

## 8.1 Technical SEO

SITEMAP:
  - Auto-generated via next-sitemap package
  - Include: semua halaman statis + semua blog posts + semua portfolio pages
  - Exclude: /dashboard/* (internal only)
  - Update otomatis setiap build baru

ROBOTS.TXT:
  ```
  User-agent: *
  Allow: /
  Disallow: /dashboard/
  Sitemap: https://[domain]/sitemap.xml
  ```

CANONICAL URLS:
  - Setiap halaman punya canonical tag yang benar
  - Blog posts: canonical ke /blog/[slug] saja

STRUCTURED DATA (Schema.org):
  - Homepage: Organization
  - Blog Posts: Article + BreadcrumbList
  - Portfolio Pages: CreativeWork
  - Services Page: Service

PERFORMANCE (Core Web Vitals Targets):
  - LCP (Largest Contentful Paint): < 2.5 detik
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
  - TTFB (Time to First Byte): < 800ms

## 8.2 On-Page SEO Standard

Setiap halaman dan artikel WAJIB punya:
  - Unique title tag (50-60 karakter)
  - Meta description (140-160 karakter)
  - H1 yang unik dan deskriptif
  - Alt text pada semua gambar
  - Internal linking minimal 2 link ke halaman/artikel lain di website
  - OG tags: og:title, og:description, og:image, og:url

## 8.3 Target Keywords (Fase Awal)

PRIMARY:
  - "jasa pembuatan website Next.js"
  - "web developer Next.js Indonesia"
  - "buat website profesional Jakarta"

SECONDARY:
  - "tutorial Next.js bahasa Indonesia"
  - "perbedaan Next.js Astro"
  - "website UMKM profesional"

LONG-TAIL:
  - "cara deploy Next.js ke Vercel gratis"
  - "Next.js vs WordPress mana yang lebih baik"
  - "harga jasa pembuatan website company profile"

---

# BAB 9 — PERFORMANCE & NON-FUNCTIONAL REQUIREMENTS

## 9.1 Performance Targets

Loading Time:
  - First Contentful Paint: < 1.2 detik
  - Time to Interactive: < 2.5 detik
  - Total page weight (homepage): < 500KB (gzipped)
  
Lighthouse Score Minimum:
  - Performance: ≥ 90
  - Accessibility: ≥ 85
  - Best Practices: ≥ 90
  - SEO: ≥ 95

## 9.2 Image Optimization Rules

  - Semua gambar menggunakan Next.js Image component
  - Format: WebP (dengan fallback JPEG/PNG untuk browser lama)
  - Lazy loading: enabled untuk semua gambar di bawah fold
  - Blur placeholder: enabled untuk gambar hero dan thumbnail
  - Sizes attribute: dikonfigurasi per konteks penggunaan
  - Max upload size untuk portfolio screenshots: 2MB pre-optimization

## 9.3 Caching Strategy

  - Static pages: Revalidate setiap 3600 detik (ISR)
  - Blog posts: Revalidate setiap 1800 detik
  - Portfolio pages: Revalidate setiap 3600 detik
  - API routes: No-cache untuk contact form, cache 60 detik untuk search

## 9.4 Accessibility Requirements

  - Semua interactive elements accessible via keyboard
  - Semua gambar memiliki alt text deskriptif
  - Color contrast ratio minimum 4.5:1 untuk teks body
  - Focus styles visible pada semua interactive elements
  - Semantic HTML (nav, main, section, article, aside, footer)

## 9.5 Browser Support

  - Chrome 90+ (prioritas utama)
  - Firefox 88+
  - Safari 14+
  - Edge 90+
  - Mobile Chrome dan Safari (iOS 14+, Android 10+)
  - Internet Explorer: Tidak didukung

## 9.6 Responsive Breakpoints

  ```css
  /* Mobile first */
  xs: 320px   /* Minimum supported width */
  sm: 640px   /* Mobile landscape */
  md: 768px   /* Tablet */
  lg: 1024px  /* Small desktop */
  xl: 1280px  /* Standard desktop */
  2xl: 1536px /* Large desktop */
  ```

---

# BAB 10 — SECURITY REQUIREMENTS

## 10.1 Environment Variables

WAJIB disimpan di .env.local (development) dan Vercel Environment Variables
(production). DILARANG KERAS hardcoded di codebase.

Variabel yang wajib diproteksi:
  ```
  NEXT_PUBLIC_SUPABASE_URL=
  NEXT_PUBLIC_SUPABASE_ANON_KEY=
  SUPABASE_SERVICE_ROLE_KEY=        # Server-side only, NEVER exposed ke client
  DASHBOARD_EMAIL=                   # Admin email untuk Supabase Auth
  ```

## 10.2 API Route Protection

  - /api/contact: Rate limiting menggunakan Vercel Rate Limit atau
    custom implementation (max 5 requests per IP per menit)
  - /api/search: Rate limiting (max 30 requests per IP per menit)
  - /dashboard/*: Protected via Supabase Auth middleware

## 10.3 Input Validation & Sanitization

  - Semua input form divalidasi di client-side (feedback cepat)
  - Semua input form JUGA divalidasi di server-side (keamanan)
  - Gunakan Zod untuk schema validation di API routes
  - Sanitasi HTML input untuk mencegah XSS
  - Parameter slug di URL: validasi format kebab-case, reject karakter aneh

## 10.4 Content Security

  - Nomor WhatsApp (085810289428) di-encode di link, bukan exposed sebagai
    plain text yang mudah di-scrape
  - Email: Gunakan contact form sebagai layer pertama, atau format
    [nama] at [domain] dot com untuk display

---

# BAB 11 — DEPLOYMENT & INFRASTRUCTURE

## 11.1 Vercel Configuration

```json
// vercel.json
{
  "regions": ["sin1"],
  "framework": "nextjs",
  "buildCommand": "next build",
  "devCommand": "next dev",
  "installCommand": "npm install",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

REGION: sin1 (Singapore) — closest to Indonesia untuk latency minimal.

## 11.2 GitHub Workflow

```
main branch      → Auto-deploy ke Production
feature/* branch → Auto-deploy ke Preview URL
```

Commit convention:
  - feat: fitur baru
  - fix: bug fix
  - content: tambah/edit konten MDX
  - style: perubahan styling
  - perf: performance improvement
  - docs: update dokumentasi

## 11.3 Supabase Setup

  - Project region: Southeast Asia (Singapore)
  - Row Level Security (RLS): Enabled di semua tables
  - Policies:
    - contact_inquiries: INSERT untuk anonymous (public), SELECT/UPDATE
      hanya untuk authenticated admin
    - portfolio_projects: SELECT untuk anonymous (public read), semua
      operasi lain hanya untuk authenticated admin
    - blog_views: INSERT untuk anonymous, SELECT hanya untuk admin

---

# BAB 12 — DEVELOPMENT PHASES & SPRINT PLAN

## PHASE 1: FOUNDATION (Minggu 1-2)

Sprint 1A: Project Setup
  - Init Next.js 14 dengan App Router dan TypeScript
  - Setup Tailwind CSS v4
  - Install dependencies: next-mdx-remote, shiki, lucide-react, zod, fuse.js
  - Setup Supabase project dan buat semua tables
  - Configure Vercel project dan GitHub integration
  - Setup environment variables
  - Buat root layout dengan navbar dan footer (skeleton)
  - Implement dark/light mode toggle (CSS variables approach)

Sprint 1B: Design System
  - Definisikan semua CSS custom properties (color, typography, spacing)
  - Buat komponen Button (primary, secondary, ghost)
  - Buat komponen Card
  - Buat komponen Badge/Tag
  - Buat komponen CodeBlock dengan copy button
  - Buat komponen Navbar (desktop + mobile responsive)
  - Buat komponen Footer
  - Buat komponen SocialLinks

## PHASE 2: CORE PAGES (Minggu 3-4)

Sprint 2A: Content Pages
  - Homepage: Semua 6 section
  - About page: Full content
  - Services page: Full content + FAQ
  - Contact page: Channel options + form

Sprint 2B: Blog System
  - Setup MDX pipeline dengan next-mdx-remote
  - Blog index page dengan filter tags
  - Blog post detail page dengan semua fitur
  - Instagram embed component
  - TikTok embed component
  - Table of contents component
  - Reading progress bar
  - Search implementation dengan Fuse.js
  - Related articles component
  - Tulis 3 artikel MDX pertama

## PHASE 3: PORTFOLIO & DASHBOARD (Minggu 5-6)

Sprint 3A: Portfolio
  - Portfolio index page dengan filter
  - Portfolio detail page
  - Supabase integration untuk fetch portfolio data
  - Upload dan setup minimal 2 portfolio entries (nyata atau mock)

Sprint 3B: Dashboard Internal
  - Setup Supabase Auth
  - Dashboard layout dengan middleware protection
  - Portfolio manager CRUD
  - Inquiry viewer

## PHASE 4: POLISH & LAUNCH (Minggu 7-8)

Sprint 4A: Performance & SEO
  - Optimasi semua gambar ke WebP
  - Setup next-sitemap
  - Tambahkan semua meta tags dan OG tags
  - Implementasi Schema.org markup
  - Lighthouse audit dan fix semua issue
  - Core Web Vitals optimization

Sprint 4B: Testing & Launch
  - Cross-browser testing (Chrome, Firefox, Safari, mobile)
  - Accessibility audit
  - Form testing (contact form end-to-end)
  - Dashboard testing
  - Deploy ke production Vercel
  - Announce di IG dan TikTok

---

# BAB 13 — FUTURE ROADMAP

## Phase 2 (Bulan 4-6 Post-Launch)

DOMAIN UPGRADE:
  - Beli custom domain (codingbang.id atau codingbang.dev)
  - Setup email profesional ([nama]@codingbang.id)

BLOG ENHANCEMENTS:
  - Newsletter subscription dengan Resend atau Mailchimp
  - RSS Feed
  - Giscus comments (GitHub-based, gratis)
  - View counter per artikel (dari blog_views table)
  - "Artikel terpopuler" section berdasarkan view count

PORTFOLIO EXPANSION:
  - Video demo embed untuk setiap proyek
  - Client testimonials section di portfolio detail
  - "Before/After" comparison untuk proyek redesign

AI CONTENT PIPELINE INTEGRATION:
  - Integrasi dengan AI Content Pipeline dari PRD sebelumnya
  - Auto-generate draft artikel dari video YouTube atau sosmed
  - Admin bisa review, edit, dan publish dari dashboard
  - Menggunakan Gemini atau Claude API untuk transformasi konten

## Phase 3 (Bulan 7-12 Post-Launch)

MONETISASI SEKUNDER:
  - Digital products: Template atau boilerplate code
  - Workshop atau mentoring booking system
  - Affiliate tech tools (hosting, domain, tools)

ANALYTICS UPGRADE:
  - Custom analytics dashboard di /dashboard/analytics
  - Track conversion funnel dari blog ke inquiry
  - Heatmap integration (opsional)

MULTI-BAHASA:
  - Opsi konten berbahasa Inggris untuk reach internasional
  - Toggle bahasa di navbar

---

# BAB 14 — ACCEPTANCE CRITERIA & DEFINITION OF DONE

## 14.1 Global Definition of Done (Per Halaman)

Setiap halaman dianggap selesai dan siap production jika:
  ✓ Semua konten tampil dengan benar di desktop (1280px)
  ✓ Semua konten tampil dengan benar di mobile (375px)
  ✓ Dark mode dan Light mode berfungsi tanpa layout break
  ✓ Semua link berfungsi (tidak ada 404)
  ✓ Lighthouse Performance score ≥ 85
  ✓ Tidak ada console error di browser
  ✓ Semua gambar punya alt text
  ✓ Meta tags lengkap (title, description, OG)

## 14.2 Blog System — Acceptance Criteria

  ✓ MDX artikel berhasil di-render dengan syntax highlighting
  ✓ Instagram embed tampil atau fallback link muncul dengan benar
  ✓ TikTok embed tampil atau fallback link muncul dengan benar
  ✓ Search berfungsi dengan hasil yang relevan
  ✓ Dark/Light mode tidak merusak readability artikel
  ✓ Table of contents scroll ke heading yang benar
  ✓ Reading progress bar bergerak sinkron dengan scroll
  ✓ Tags berfungsi sebagai filter di halaman /blog
  ✓ Related articles menampilkan artikel yang relevan (sama tag)

## 14.3 Contact System — Acceptance Criteria

  ✓ WhatsApp button membuka WA dengan nomor benar (085810289428)
  ✓ Pre-filled message muncul di WA (jika di-implement)
  ✓ Contact form validasi berjalan di client-side
  ✓ Contact form submit berhasil menyimpan ke Supabase
  ✓ Success message muncul setelah submit
  ✓ Error message muncul jika submit gagal
  ✓ Rate limiting berfungsi (tidak bisa spam submit)

## 14.4 Dashboard — Acceptance Criteria

  ✓ Unauthorized user redirect ke login page
  ✓ Login dengan email/password Supabase Auth berfungsi
  ✓ Portfolio CRUD berfungsi (Create, Read, Update, Delete)
  ✓ Inquiry list tampil dan bisa di-filter by status
  ✓ Logout berfungsi

## 14.5 Performance — Acceptance Criteria (Production)

  ✓ Homepage LCP < 2.5 detik
  ✓ Homepage CLS < 0.1
  ✓ Semua halaman Lighthouse Performance ≥ 85
  ✓ Semua gambar di-serve dalam format WebP
  ✓ Tidak ada gambar tanpa dimensi eksplisit (layout shift)
  ✓ Sitemap.xml accessible di /sitemap.xml
  ✓ Robots.txt accessible di /robots.txt

---

# APPENDIX A — DEPENDENCY LIST

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "typescript": "^5.4.0",
    "@supabase/supabase-js": "^2.43.0",
    "@supabase/ssr": "^0.4.0",
    "next-mdx-remote": "^5.0.0",
    "shiki": "^1.6.0",
    "lucide-react": "^0.383.0",
    "fuse.js": "^7.0.0",
    "zod": "^3.23.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "tailwindcss": "^4.0.0",
    "next-sitemap": "^4.2.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0"
  }
}
```

---

# APPENDIX B — BRAND VOICE CHEAT SHEET

Gunakan ini sebagai referensi cepat saat menulis konten:

BOLEH:
  - "Sat-set, langsung eksekusi."
  - "Website yang lambat itu biaya, bukan estetika."
  - "Hand-coded. Zero template. Zero WordPress."
  - "Gua" (bukan "saya" atau "kami" untuk brand solo)
  - Istilah tech dalam Inggris tanpa terjemahan kaku
  - Kalimat pendek. Langsung ke poin.

DILARANG:
  - "Dengan hormat, kami dari perusahaan kami yang terhormat..."
  - Emoji berlebihan (maksimal 1-2 per post, hanya jika perlu)
  - Em-dash panjang (—) — ganti dengan koma atau titik
  - Kata "mohon", "sekiranya", "kami ucapkan terima kasih atas"
  - Jargon yang dibuat-buat untuk terlihat pintar

FORMAT JUDUL ARTIKEL:
  [ JUDUL DALAM HURUF KAPITAL SEMUANYA ]
  Atau: Judul Normal Dengan Capital Case Proper

---

# APPENDIX C — CONTACT CHANNELS REFERENCE

WhatsApp: 085810289428
  Link format: https://wa.me/6285810289428
  Pre-filled: https://wa.me/6285810289428?text=Halo%20CODING%20BANG%2C%20gua%20mau%20konsultasi%20soal%20[isi]

Email: [diisi saat siap]

Instagram: [handle dikonfirmasi saat setup]
  Link format: https://instagram.com/[handle]

TikTok: [handle dikonfirmasi saat setup]
  Link format: https://tiktok.com/@[handle]

---

# APPENDIX D — CONTENT YANG BELUM DIPUTUSKAN (TODO PRE-LAUNCH)

Item yang harus dikonfirmasi sebelum launch:

  [ ] Email resmi CODING BANG untuk kontak
  [ ] Instagram handle aktif
  [ ] TikTok handle aktif
  [ ] Custom domain (jika mau upgrade dari Vercel subdomain)
  [ ] Minimal 1 proyek nyata dengan screenshot siap tampil
  [ ] Foto atau ilustrasi untuk halaman About
  [ ] 3 artikel MDX pertama ditulis dan siap publish
  [ ] Embed URL dari minimal 2 konten IG/TikTok yang mau ditampilkan
  [ ] Logo final CODING BANG (SVG format) + favicon
  [ ] OG image branded (1200x630px)

---

*DOKUMEN INI BERSIFAT LIVING DOCUMENT.*
*Update sesuai perkembangan development dan feedback.*
*Versi berikutnya: PRD V1.1 setelah Phase 2 selesai.*

---

PRD CODING BANG WEBSITE V1.0 — END OF DOCUMENT
Total: ~1050 lines | Status: Ready for Development