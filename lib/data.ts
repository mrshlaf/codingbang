export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  full_description: string;
  category: string;
  thumbnail_url: string;
  images: string[];
  tech_stack: string[];
  client_name: string;
  client_url: string;
  is_featured: boolean;
  completed_at: string | null;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  social: Record<string, string>;
  display_order: number;
};

export type Review = {
  id: string;
  client_name: string;
  client_role: string;
  client_company: string;
  rating: number;
  content: string;
  project_type: string;
  display_order: number;
  created_at: string;
};

export const CATEGORIES = [
  "E-Commerce",
  "Web App",
  "Landing Page",
  "Company Profile",
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: "1", name: "Marshal Aufa Diliyana", role: "Founder & Lead Developer", bio: "Mengarsiteki arsitektur sistem, memimpin tim teknis, dan memastikan setiap proyek deliver-nya sesuai standar tertinggi.", skills: ["Next.js", "PostgreSQL", "System Design", "DevOps"], social: { github: "https://github.com/marshalauf", linkedin: "#", instagram: "#" }, display_order: 1 },
  { id: "2", name: "Yusri Sukur", role: "Full-Stack Developer", bio: "Mengembangkan fitur end-to-end dari frontend hingga backend dengan fokus pada performa dan skalabilitas.", skills: ["React", "Node.js", "TypeScript", "MongoDB"], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 2 },
  { id: "3", name: "Zahir", role: "Frontend Developer", bio: "Menerjemahkan desain menjadi antarmuka yang responsif, cepat, dan nyaman digunakan.", skills: ["React", "Tailwind CSS", "Framer Motion", "Figma"], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 3 },
  { id: "4", name: "M. Rifqi Fadil Itsnain", role: "Full-Stack Developer", bio: "Mengelola logika backend dan integrasi API untuk memastikan data flow berjalan mulus.", skills: ["Node.js", "PostgreSQL", "REST API", "Redis"], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 4 },
  { id: "5", name: "Tubagus Dafa Izza Fariz", role: "UI/UX Designer", bio: "Merancang pengalaman pengguna yang intuitif dan tampilan visual yang selaras dengan brand klien.", skills: ["Figma", "UI Design", "Prototyping", "Design System"], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 5 },
  { id: "6", name: "David Alexander", role: "Backend Developer", bio: "Membangun dan mengoptimalkan server-side logic, database schema, dan infrastruktur cloud.", skills: ["Go", "PostgreSQL", "Docker", "AWS"], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 6 },
  { id: "7", name: "Nicholas Edmund Tanaka", role: "Frontend Developer", bio: "Mengembangkan komponen UI yang reusable dengan performa tinggi dan aksesibilitas yang baik.", skills: ["Next.js", "TypeScript", "Tailwind CSS", "Storybook"], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 7 },
  { id: "8", name: "Caesar Nur Falah", role: "Project Manager", bio: "Menjaga komunikasi dengan klien, mengawal timeline, dan memastikan setiap kebutuhan terpenuhi tepat waktu.", skills: ["Project Management", "Agile", "Client Relations", "QA"], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 8 },
  { id: "9", name: "M. Hashif Jade", role: "DevOps Engineer", bio: "Mengelola deployment pipeline, monitoring server, dan optimasi infrastruktur untuk kestabilan maksimal.", skills: ["Docker", "CI/CD", "Linux", "Cloud Computing"], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 9 },
  { id: "10", name: "Zulfahmi Fajri", role: "Mobile Developer", bio: "Mengembangkan aplikasi mobile cross-platform yang terintegrasi erat dengan web platform.", skills: ["React Native", "Flutter", "Firebase", "Mobile UI"], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 10 },
  { id: "11", name: "Naziehan Labieb", role: "Quality Assurance", bio: "Memastikan setiap fitur terbebas dari bug dan memberikan pengalaman yang mulus bagi pengguna akhir.", skills: ["Manual Testing", "Automation", "Cypress", "Performance Testing"], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 11 },
  { id: "12", name: "M. Zaki Al Khairi", role: "Backend Developer", bio: "Menulis API yang bersih, terdokumentasi, dan siap melayani ribuan permintaan bersamaan.", skills: ["Node.js", "GraphQL", "PostgreSQL", "Microservices"], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 12 },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Toko Online Sejahtera",
    slug: "toko-online-sejahtera",
    description: "E-commerce platform dengan katalog produk, keranjang, dan checkout untuk brand fashion premium.",
    full_description: "Proyek ini dibangun untuk mengatasi masalah performa yang umum ditemui di template Shopify. Dengan migrasi ke arsitektur headless menggunakan Next.js, kami mencapai waktu muat di bawah 1 detik dan antarmuka yang sepenuhnya khusus.",
    category: "E-Commerce",
    thumbnail_url: "/placeholder-1.jpg",
    images: [],
    tech_stack: ["Next.js", "Tailwind CSS", "Supabase", "Midtrans"],
    client_name: "Sejahtera Corp",
    client_url: "",
    is_featured: true,
    completed_at: null,
  },
  {
    id: "2",
    title: "Dashboard Operasional Maju Jaya",
    slug: "dashboard-maju-jaya",
    description: "Internal dashboard untuk perusahaan logistik yang menggabungkan 3 sistem lama jadi satu.",
    full_description: "Nexus Dashboard menggabungkan data dari 3 sistem warisan yang berbeda ke dalam satu dashboard real-time yang sangat cepat. Dibangun dengan Supabase untuk langganan real-time dan Next.js App Router untuk performa optimal.",
    category: "Web App",
    thumbnail_url: "/placeholder-2.jpg",
    images: [],
    tech_stack: ["Next.js", "Supabase", "PostgreSQL", "Recharts"],
    client_name: "Maju Jaya Logistics",
    client_url: "",
    is_featured: true,
    completed_at: null,
  },
  {
    id: "3",
    title: "Aura Landing Page",
    slug: "aura-landing",
    description: "Landing page konversi tinggi untuk startup AI dengan desain modern gelap.",
    full_description: "Aura membutuhkan landing page yang mengomunikasikan teknologi AI mutakhir mereka tanpa terasa seperti template SaaS generik. Kami mendesain antarmuka mode gelap minimalis dengan glassmorphism halus dan elemen WebGL.",
    category: "Landing Page",
    thumbnail_url: "/placeholder-3.jpg",
    images: [],
    tech_stack: ["Astro", "Tailwind CSS", "Three.js"],
    client_name: "Aura AI",
    client_url: "",
    is_featured: true,
    completed_at: null,
  },
  {
    id: "4",
    title: "PT Maju Bersama — Company Profile",
    slug: "pt-maju-bersama",
    description: "Website company profile multi-halaman dengan CMS dan blog untuk perusahaan konstruksi.",
    full_description: "Website company profile lengkap dengan 8 halaman, sistem blog, galeri proyek, dan admin panel. Dibangun dengan fokus pada kecepatan dan kemudahan pengelolaan konten oleh tim internal klien.",
    category: "Company Profile",
    thumbnail_url: "/placeholder-4.jpg",
    images: [],
    tech_stack: ["Next.js", "Tailwind CSS", "Supabase", "Framer Motion"],
    client_name: "PT Maju Bersama",
    client_url: "",
    is_featured: false,
    completed_at: null,
  },
  {
    id: "5",
    title: "Landing Page Startup GreenEarth",
    slug: "greenearth-landing",
    description: "Landing page konversi tinggi untuk startup AI dengan desain modern gelap.",
    full_description: "Landing page untuk startup lingkungan yang membutuhkan website cepat dan modern untuk campaign fundraising mereka.",
    category: "Landing Page",
    thumbnail_url: "/placeholder-3.jpg",
    images: [],
    tech_stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    client_name: "GreenEarth Startup",
    client_url: "",
    is_featured: true,
    completed_at: null,
  },
];

export const REVIEWS: Review[] = [
  { id: "1", client_name: "Budi Santoso", client_role: "Owner", client_company: "Sejahtera Corp", rating: 5, content: "Pelayanan sangat profesional! Website kami jadi jauh lebih cepat dan mudah dikelola. CODING BANG benar-benar paham kebutuhan bisnis.", project_type: "E-Commerce", display_order: 1, created_at: "2026-05-15" },
  { id: "2", client_name: "Sari Indah", client_role: "Operations Director", client_company: "Maju Jaya Logistics", rating: 5, content: "Dashboard yang mereka buat menggabungkan 3 sistem lama kami jadi satu. Sekarang tim bisa lihat data real-time tanpa bolak-balik aplikasi.", project_type: "Web App", display_order: 2, created_at: "2026-04-20" },
  { id: "3", client_name: "Dimas Pratama", client_role: "CEO", client_company: "Aura AI", rating: 5, content: "Landing page kami conversion rate-nya naik 40% setelah diremake oleh CODING BANG. Desainnya modern dan loading-nya super cepat.", project_type: "Landing Page", display_order: 3, created_at: "2026-03-10" },
  { id: "4", client_name: "Rina Wijaya", client_role: "Marketing Manager", client_company: "PT Maju Bersama", rating: 4, content: "Company profile website yang rapi dan profesional. Tim marketing kami jadi lebih percaya diri presentasi ke klien.", project_type: "Company Profile", display_order: 4, created_at: "2026-02-05" },
  { id: "5", client_name: "Hendra Gunawan", client_role: "Founder", client_company: "GreenEarth Startup", rating: 5, content: "Sangat puas! Proses cepat, komunikasi lancar, dan hasilnya melebihi ekspektasi. Pasti balik lagi untuk project selanjutnya.", project_type: "Landing Page", display_order: 5, created_at: "2026-01-18" },
  { id: "6", client_name: "Anisa Putri", client_role: "Project Manager", client_company: "Digital Creative", rating: 5, content: "Tim CODING BANG sangat responsif dan detail-oriented. Mereka tidak hanya bikin website, tapi juga kasih masukan strategis untuk UX.", project_type: "Web App", display_order: 6, created_at: "2025-12-22" },
];

// ============================================================
// HELPERS
// ============================================================

export function getProjects(): Project[] {
  return PROJECTS;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.is_featured);
}

export function getProjectCount(): number {
  return PROJECTS.length;
}

export function getTeamMembers(): TeamMember[] {
  return TEAM_MEMBERS;
}

export function getReviews(): Review[] {
  return REVIEWS;
}

export function getReviewStats(): { average: number; total: number; distribution: Record<number, number> } {
  const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  REVIEWS.forEach((r) => distribution[r.rating]++);
  const total = REVIEWS.length;
  const average = total > 0 ? REVIEWS.reduce((sum, r) => sum + r.rating, 0) / total : 0;
  return { average: Math.round(average * 10) / 10, total, distribution };
}

export function getCategories(): string[] {
  return CATEGORIES;
}
