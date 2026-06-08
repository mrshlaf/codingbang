# CODINGBANG — Product Requirements Document

## Marketplace Web Development (Tim Internal) + Blog Edukasi

**Stack:** Next.js 16 + Supabase + Tailwind v4  
**Bahasa:** Indonesia  
**Status:** Final — Siap Eksekusi  
**Otorisasi:** Codingbang Internal

---

## Daftar Isi

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Goals & Success Metrics](#3-goals--success-metrics)
4. [Target Audience](#4-target-audience)
5. [Sitemap & Arsitektur Halaman](#5-sitemap--arsitektur-halaman)
6. [Feature Priority](#6-feature-priority)
7. [Spesifikasi Halaman](#7-spesifikasi-halaman)
8. [Design System](#8-design-system)
9. [Database Schema](#9-database-schema)
10. [Tech Stack](#10-tech-stack)
11. [Sprint Plan](#11-sprint-plan)
12. [Non-Functional Requirements](#12-non-functional-requirements)
13. [Acceptance Criteria](#13-acceptance-criteria)
14. [Out of Scope](#14-out-of-scope)
15. [Roadmap](#15-roadmap)

---

## 1. Executive Summary

Codingbang adalah **studio web development internal** yang menyediakan jasa pembuatan website profesional untuk semua segmen — UMKM, startup, personal brand, hingga perusahaan menengah di Indonesia. Bukan marketplace terbuka, bukan platform freelancer.

Dua fungsi utama yang saling menguatkan:

- **Jualan** — menampilkan paket layanan, portofolio nyata, kalkulator estimasi harga, dan pipeline inquiry langsung ke WhatsApp. Tidak ada transaksi di platform; semua deal dilakukan di luar via chat.
- **Edukasi** — blog artikel yang me-repurpose konten Instagram Codingbang. Membangun otoritas SEO, mengedukasi calon klien, dan mendatangkan traffic organik.

---

## 2. Problem Statement

### 2.1 Masalah Website Sebelumnya

- **Portfolio pasif** — tidak ada harga, tidak ada CTA kuat, visitor datang lalu pergi tanpa konversi.
- **Blog minim konten** — hanya 1 artikel, potensi SEO tidak tergarap.
- **Form kontak generik** — tidak ada brief proyek terstruktur, lead tidak terkualifikasi.
- **Social proof tidak ada** — ulasan klien dan hasil proyek nyata tidak terekspos.
- **Tim tidak terlihat** — tidak ada halaman profil yang membangun kepercayaan.
- **Konten Instagram tidak di-repurpose** — SEO wasted.

### 2.2 Apa yang Berubah

- Dari portfolio pasif menjadi **mesin inquiry aktif**.
- Dari "hubungi untuk tau harga" menjadi **estimasi harga transparan** via kalkulator interaktif.
- Dari tidak ada social proof menjadi **ulasan & rating klien** yang tampil di halaman.
- Dari blog seadanya menjadi **blog edukasi** yang menarik traffic organik.

---

## 3. Goals & Success Metrics

### 3.1 Business Goals

1. Meningkatkan inquiry klien 3x lipat dalam 90 hari pertama.
2. Menjadi referensi pertama saat calon klien mencari "jasa pembuatan website" di Indonesia.
3. Membangun pipeline klien terkualifikasi lewat form brief terstruktur.

### 3.2 Key Metrics

| Metrik | Baseline | Target 90 Hari | Cara Ukur |
|--------|----------|----------------|-----------|
| Inquiry masuk / bulan | < 5 | ≥ 15 | Supabase contact_inquiries |
| Bounce rate landing page | N/A | < 55% | Vercel Analytics |
| Avg session duration | N/A | > 2 menit | Vercel Analytics |
| Kalkulator digunakan | 0 | > 40% visitor | Custom event |
| Artikel blog terpublish | 1 | ≥ 8 | MDX file count |
| Lighthouse Performance | ~70 | ≥ 90 | Lighthouse CI |

---

## 4. Target Audience

### Persona A — Budi, Pemilik UMKM (37 tahun)

- **Pain:** Tahu butuh website, tidak tahu biaya, takut ditipu.
- **Goal:** Lihat harga jelas + contoh nyata + bisa langsung tanya WA.
- **Behavior:** Buka HP, search Google, scroll Instagram.
- **Touchpoint:** Landing → Halaman Paket → Kalkulator → WhatsApp.

### Persona B — Sinta, Startup Founder (28 tahun)

- **Pain:** Butuh web app custom, mau lihat track record.
- **Goal:** Portofolio relevan + kenali tim + kirim brief detail.
- **Behavior:** Buka desktop, baca case study, isi form panjang.
- **Touchpoint:** Portofolio → Detail Proyek → Tim → Form Brief.

### Persona C — Andi, Personal Brand / Kreator (24 tahun)

- **Pain:** Butuh landing page, budget terbatas.
- **Goal:** Cek paket affordable + lihat contoh mirip.
- **Behavior:** Dari link Instagram story Codingbang → buka website.
- **Touchpoint:** Blog → Landing Page → Paket Starter → WA.

---

## 5. Sitemap & Arsitektur Halaman

| Route | Halaman | Konten Utama |
|-------|---------|--------------|
| `/` | Beranda | Hero, angka kredibilitas, highlight paket, portofolio, testimonial, CTA |
| `/layanan` | Paket & Layanan | Kartu paket harga, perbandingan fitur, FAQ, CTA WA |
| `/kalkulator` | Kalkulator Harga | Form interaktif estimasi harga otomatis |
| `/portofolio` | Portofolio | Grid proyek, filter kategori, CTA |
| `/portofolio/[slug]` | Detail Proyek | Problem, solusi, tech stack, hasil, galeri |
| `/tim` | Tim Kami | Profil anggota internal, skill, link sosial |
| `/ulasan` | Ulasan Client | Review & rating, rata-rata rating |
| `/blog` | Blog Edukasi | Grid artikel + embed Instagram, search, filter tag |
| `/blog/[slug]` | Detail Artikel | MDX content + embed IG + related posts |
| `/kontak` | Form Brief | Multi-step form → simpan ke Supabase + notif WA |
| `/dashboard` | Admin Dashboard | CRUD portofolio, blog, ulasan (protected) |

---

## 6. Feature Priority

| Prioritas | Fitur | Alasan |
|-----------|-------|--------|
| P0 | Halaman Paket & Harga | Inti bisnis — visitor harus langsung paham layanan |
| P0 | Kalkulator Harga Estimasi | Interaktif, reduce bounce, lead ke WA |
| P0 | Portfolio Grid + Detail | Social proof utama untuk konversi |
| P0 | Kontak / Form Brief | Pipeline inquiry |
| P1 | Halaman Tim | Trust builder |
| P1 | Blog + Embed Instagram | SEO + repurpose konten IG |
| P1 | Ulasan & Rating Client | Social proof tambahan |
| P2 | Admin Dashboard (CRUD) | Kelola konten tanpa sentuh kode |
| P2 | Dark/Light Toggle | UX, sudah ada, pertahankan |
| P2 | Sitemap & SEO meta | Sebagian sudah ada, sempurnakan |

---

## 7. Spesifikasi Halaman

### 7.1 `/` — Beranda

Tujuan: Konversi visitor dingin jadi warm lead dalam < 10 detik.

Urutan section (top to bottom):

1. **Hero** — Headline utama, sub-headline value prop, 2 CTA: "Lihat Paket" + "WhatsApp Sekarang".
2. **Angka Kredibilitas** — 3 counter: Proyek Selesai, Client Puas, Tahun Pengalaman.
3. **Highlight Paket** — 3 kartu ringkasan paket dengan harga mulai dari... dan CTA ke `/layanan`.
4. **Potongan Portofolio** — Grid 4 proyek terbaik + tombol "Lihat Semua".
5. **Testimonial** — 3–5 ulasan client dengan nama, foto, rating.
6. **CTA Final** — Banner: "Siap punya website?" + tombol WA.

### 7.2 `/layanan` — Paket & Layanan

Tujuan: Transparansi layanan dan harga untuk mengurangi barrier.

**Tabel perbandingan paket:**

| Atribut | Starter | Growth | Custom |
|---------|---------|--------|--------|
| Harga | Mulai Rp 1,5 jt | Mulai Rp 4 jt | Konsultasi |
| Halaman | 1–3 halaman | 5–10 halaman | Sesuai kebutuhan |
| Revisi | 2x | 5x | Unlimited |
| Mobile-ready | Ya | Ya | Ya |
| CMS/Admin | Tidak | Opsional | Ya |
| Durasi | 3–5 hari | 7–14 hari | Sesuai scope |

- Setiap kartu paket punya CTA ke kalkulator dengan paket pre-selected.
- Bagian FAQ accordion di bawah tabel.

### 7.3 `/kalkulator` — Kalkulator Harga

Tujuan: Warm lead yang teredukasi sebelum kontak.

Form multi-step:
- **Step 1** — Tipe proyek: Landing Page / Company Profile / Toko Online / Web App / Blog
- **Step 2** — Jumlah halaman: slider 1–20+
- **Step 3** — Fitur tambahan: multi-select (login user, CMS, SEO, dll)
- **Step 4** — Urgensi: Normal / Cepat (+30%) / Ekspres (+50%)
- **Hasil** — Range harga estimasi + tombol "Diskusikan di WhatsApp" dengan pre-filled message

Kalkulasi client-side dengan React state, simpan ke localStorage.

### 7.4 `/portofolio` — Portofolio

- Grid responsive 2–3 kolom.
- Setiap kartu: thumbnail, nama proyek, kategori, tech stack badges.
- Filter kategori: Semua / Landing Page / E-Commerce / Web App / Company Profile.
- Klik → `/portofolio/[slug]`.

### 7.5 `/portofolio/[slug]` — Detail Proyek

- Hero: nama proyek + thumbnail full-width.
- Sidebar: Client, Industri, Tahun, Tech Stack, Durasi, Link Live.
- Body: Problem → Solusi → Proses → Hasil.
- Galeri: 3–5 screenshot.
- CTA: "Mau proyek serupa? Hubungi kami."

### 7.6 `/tim` — Tim Kami

- Grid kartu anggota tim internal.
- Setiap kartu: foto, nama, role, skill tags, link GitHub/LinkedIn/Instagram.
- Bio singkat per member.

### 7.7 `/ulasan` — Ulasan Client

- Grid/list kartu ulasan.
- Setiap ulasan: rating bintang (1–5), nama, proyek, foto, teks, tanggal.
- Rata-rata rating di bagian atas.
- Data dari Supabase, bisa CRUD dari dashboard.

### 7.8 `/blog` — Blog Edukasi

- Grid artikel: thumbnail, judul, tanggal, tags, reading time, excerpt.
- Embed Instagram post/reel via blockquote IG oembed.
- Search Fuse.js (already in project).
- Filter tag: Tips Web / Tutorial / Inspirasi / Insight Bisnis.

### 7.9 `/kontak` — Form Brief

Multi-step (5 langkah):
- **Step 1** — Info dasar: nama, perusahaan, email, WhatsApp
- **Step 2** — Deskripsi proyek: tipe, tujuan, referensi URL
- **Step 3** — Fitur & requirement: multi-select
- **Step 4** — Budget range & timeline
- **Step 5** — Konfirmasi + submit → simpan ke Supabase + notif WA

### 7.10 `/dashboard` — Admin Dashboard

- Auth: Supabase Auth, hanya admin.
- CRUD: Portofolio, Blog (MDX), Ulasan.
- Tabel inquiry + mark as read.
- Upload gambar ke Supabase Storage.

---

## 8. Design System

### 8.1 Palet Warna

| Token | Light | Dark | Penggunaan |
|-------|-------|------|------------|
| `--background` | `#F8F0E5` | `#1C352D` | Background halaman |
| `--foreground` | `#1C352D` | `#F8F0E5` | Teks utama |
| `--card` | `#FFFFFF` | `#254037` | Background kartu |
| `--border` | `#eae3d8` | `#2e4f44` | Garis border |
| `--muted` | `#eae3d8` | `#244238` | Background muted |
| `--muted-foreground` | `#4a6358` | `#c2baaf` | Teks sekunder |
| `--accent` | `#1C352D` | `#F8F0E5` | CTA, badge, highlight |

Konsep: Cream + Dark Green. Dark mode membalikkan peran.

### 8.2 Tipografi

| Role | Font |
|------|------|
| Body / UI | Geist Sans |
| Monospace / Kode | Geist Mono |
| Scale | 12px / 14px / 16px / 20px / 24px / 32px / 48px / 64px |

### 8.3 Komponen Kunci

- `PriceCard` — kartu paket dengan badge "Terpopuler", harga, fitur, CTA
- `ProjectCard` — thumbnail + hover overlay + kategori + slug link
- `ReviewCard` — avatar, nama, bintang, proyek, teks ulasan
- `TeamCard` — foto rounded, nama, role, skill tags, social links
- `BlogCard` — thumbnail, judul, excerpt, tags, reading time
- `Calculator` — multi-step form estimasi harga
- `InstagramEmbed` — wrapper blockquote IG + lazy load
- `WhatsAppCTA` — floating button + pre-filled message builder

---

## 9. Database Schema

### `projects` (Portofolio)

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | uuid PK | Primary key |
| slug | text unique | URL slug |
| title | text | Nama proyek |
| category | text | Landing Page / E-Commerce / Company Profile / Web App |
| client | text | Nama klien |
| description | text | Deskripsi singkat |
| content | text | MDX untuk halaman detail |
| tech_stack | text[] | Array tech |
| thumbnail_url | text | URL gambar utama (Supabase Storage) |
| gallery_urls | text[] | Array URL galeri |
| live_url | text | Link website (opsional) |
| year | int4 | Tahun pengerjaan |
| is_featured | bool | Tampil di beranda |
| created_at | timestamptz | Auto |

### `reviews`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | uuid PK | Primary key |
| client_name | text | Nama klien |
| client_photo_url | text | Foto klien |
| project_title | text | Nama proyek |
| rating | int2 | 1–5 |
| content | text | Isi ulasan |
| is_published | bool | Tampil di halaman |
| created_at | timestamptz | Auto |

### `team_members`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | uuid PK | Primary key |
| name | text | Nama lengkap |
| role | text | Jabatan |
| bio | text | Bio singkat |
| photo_url | text | URL foto |
| skills | text[] | Array skill |
| github_url | text | Opsional |
| linkedin_url | text | Opsional |
| instagram_url | text | Opsional |
| order_index | int4 | Urutan tampil |

### `contact_inquiries` (existing + tambahan)

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| ... | ... | (kolom existing) |
| estimated_budget | text | Dari kalkulator |
| project_type | text | Dari form brief |
| status | text | new / in_review / contacted / closed |

---

## 10. Tech Stack

| Layer | Teknologi | Keterangan |
|-------|-----------|------------|
| Framework | Next.js 16 (App Router) | Server Components, Server Actions, ISR |
| UI | React 19 + Tailwind v4 | CSS vars cream/green, Framer Motion |
| Database | Supabase (PostgreSQL) | Auth, Storage, Realtime, RLS |
| Blog | MDX + gray-matter | File-based di `content/blog/` |
| Search | Fuse.js | Client-side fuzzy search |
| Cache | Upstash Redis | Rate limiting form |
| Validasi | Zod | Schema validasi form + Server Actions |
| Deploy | Vercel | Image optimization, analytics |
| Font | Geist + Geist Mono | Via `next/font/google` |

---

## 11. Sprint Plan

### Sprint 1 — Fondasi (2 minggu)

- Setup ulang struktur & design tokens
- Navbar, Footer, Dark/Light toggle
- Halaman Beranda (Hero, value prop, highlight paket)
- Halaman Paket & Layanan
- Komponen CTA → WhatsApp

### Sprint 2 — Core Product (2 minggu)

- Kalkulator Harga interaktif
- Portofolio grid + filter + detail [slug]
- Halaman Tim

### Sprint 3 — Trust & Lead (2 minggu)

- Form Brief multi-step (simpan ke Supabase)
- Halaman Ulasan & Rating
- Blog index + MDX rendering
- Embed Instagram di artikel blog

### Sprint 4 — Admin & Polish (2 minggu)

- Admin Dashboard: CRUD portofolio, blog, ulasan
- Auth Supabase (admin only)
- SEO: meta tags, OG image, sitemap, robots
- Performance audit & image optimization

### Sprint 5 — QA & Launch (2 minggu)

- UAT seluruh halaman
- Lighthouse audit ≥ 90
- Deploy ke Vercel + custom domain
- Monitoring (Upstash, analytics)

---

## 12. Non-Functional Requirements

### Performance

- Lighthouse Performance Score ≥ 90
- LCP ≤ 2.5 detik, CLS < 0.1, FID < 100ms
- Gambar: WebP, lazy load, `next/image`

### SEO

- Meta title & description unik per halaman
- OG image dinamis
- JSON-LD: LocalBusiness, Service, Review, BlogPosting
- Sitemap otomatis (`sitemap.ts`)

### Security

- Rate limiting form via Upstash (max 5 submit/IP/jam)
- Dashboard admin: hanya email terdaftar
- RLS di Supabase
- Environment variables tidak exposed ke client

### Accessibility

- Kontras warna min AA (WCAG 2.1)
- Alt text semua gambar
- Keyboard navigasi semua form

---

## 13. Acceptance Criteria

### Per Halaman

- Render tanpa error di Chrome, Firefox, Safari (desktop & mobile)
- Dark & light mode tanpa layout shift
- Tidak ada broken links

### Fungsional

- Form brief tersimpan ke Supabase + notif muncul
- Kalkulator menghasilkan estimasi harga logis
- Filter portofolio client-side tanpa reload
- Blog search menemukan artikel relevan
- Instagram embed tampil tanpa block rendering

### Admin

- Login non-admin gagal
- CRUD proyek, ulasan, tim berfungsi end-to-end
- Gambar upload tersimpan di Supabase Storage

---

## 14. Out of Scope

- Marketplace terbuka untuk freelancer eksternal
- Kelas online atau sistem LMS
- Transaksi online / payment gateway (cukup WhatsApp)
- Live chat / chatbot
- Multi-bahasa
- Mobile app

---

## 15. Roadmap

| Fase | Rencana |
|------|---------|
| Rilis | Landing, Paket, Kalkulator, Portofolio, Tim, Ulasan, Blog, Kontak, Dashboard |
| Selanjutnya | Notifikasi WhatsApp API, invoice otomatis, client portal tracking proyek |
| Pengembangan | AI brief analyzer, portfolio generator otomatis |

---

*Dokumen ini bersifat living document dan akan diperbarui seiring perkembangan.*

**codingbang.dev — Juni 2026**
