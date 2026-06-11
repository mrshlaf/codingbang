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
  { id: "1", name: "Marshal Aufa Diliyana", role: "Full-Stack Developer", bio: "Mengarsiteki arsitektur sistem dan memimpin pengembangan teknis setiap proyek.", skills: [], social: { github: "https://github.com/mrshlaf", linkedin: "#", instagram: "#", website: "https://marshal-aufa.vercel.app" }, display_order: 1 },
  { id: "2", name: "Yusri Sukur", role: "Full-Stack Developer", bio: "Mengembangkan fitur end-to-end dari frontend hingga backend.", skills: [], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 2 },
  { id: "3", name: "Zahir", role: "Full-Stack Developer", bio: "Membangun antarmuka yang responsif dan cepat dengan performa tinggi.", skills: [], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 3 },
  { id: "4", name: "M. Rifqi Fadil Itsnain", role: "Full-Stack Developer", bio: "Mengelola logika backend dan integrasi API untuk data flow yang mulus.", skills: [], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 4 },
  { id: "5", name: "Tubagus Dafa Izza Fariz", role: "Full-Stack Developer", bio: "Merancang dan membangun pengalaman digital yang intuitif dan engaging.", skills: [], social: { github: "https://github.com/yourpis", linkedin: "#", instagram: "#", website: "https://tubagusdafa.vercel.app/" }, display_order: 5 },
  { id: "6", name: "David Alexander", role: "Full-Stack Developer", bio: "Membangun dan mengoptimalkan sistem backend serta infrastruktur cloud.", skills: [], social: { github: "https://github.com/davidalexander24", linkedin: "#", instagram: "#", website: "https://dapid.vercel.app/" }, display_order: 6 },
  { id: "7", name: "Nicholas Edmund Tanaka", role: "Full-Stack Developer", bio: "Mengembangkan komponen UI reusable dengan performa dan aksesibilitas tinggi.", skills: [], social: { github: "https://github.com/niconett18", linkedin: "#", instagram: "#", website: "https://niconet.site" }, display_order: 7 },
  { id: "8", name: "Caesar Nur Falah", role: "Full-Stack Developer", bio: "Menjaga kualitas kode dan memastikan setiap fitur berjalan sesuai kebutuhan.", skills: [], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 8 },
  { id: "9", name: "M. Hashif Jade", role: "Full-Stack Developer", bio: "Mengelola deployment dan infrastruktur untuk kestabilan aplikasi maksimal.", skills: [], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 9 },
  { id: "10", name: "Zulfahmi Fajri", role: "Full-Stack Developer", bio: "Mengembangkan aplikasi yang terintegrasi antara web dan mobile platform.", skills: [], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 10 },
  { id: "11", name: "Naziehan Labieb", role: "Full-Stack Developer", bio: "Memastikan kualitas dan keandalan aplikasi melalui pengujian menyeluruh.", skills: [], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 11 },
  { id: "12", name: "M. Zaki Al Khairi", role: "Full-Stack Developer", bio: "Menulis API yang bersih dan handal untuk melayani ribuan pengguna.", skills: [], social: { github: "#", linkedin: "#", instagram: "#" }, display_order: 12 },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Lapak UI",
    slug: "lapak-ui",
    description: "Marketplace dan komunitas khusus mahasiswa Universitas Indonesia — jual beli barang, jasa, dan kebutuhan kampus.",
    full_description: "Lapak UI adalah platform marketplace premium yang dirancang khusus untuk civitas akademika Universitas Indonesia. Pengguna dapat membeli dan menjual berbagai barang mulai dari buku, elektronik, pakaian, hingga makanan. Dilengkapi fitur katalog produk, sistem chat, dan komunitas mahasiswa terintegrasi.",
    category: "Web App",
    thumbnail_url: "",
    images: [],
    tech_stack: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
    client_name: "Lapak UI",
    client_url: "https://lapak-ui.vercel.app",
    is_featured: true,
    completed_at: null,
  },
  {
    id: "2",
    title: "Prime Capital Ledger",
    slug: "prime-capital-ledger",
    description: "Portfolio management platform untuk retail investor — lacak aset IDR & USD dalam satu dashboard real-time.",
    full_description: "Prime Capital Ledger adalah aplikasi portfolio management yang memungkinkan investor retail melacak kepemilikan saham IDR dan USD dalam satu tempat. Fitur utamanya meliputi multi-currency tracking, impor PDF broker otomatis, real-time P&L, historical valuation, dan transaction ledger. Dibangun dengan arsitektur modern dan autentikasi JWT.",
    category: "Web App",
    thumbnail_url: "",
    images: [],
    tech_stack: ["Next.js", "React", "TailwindCSS", "Vercel", "Supabase", "Recharts", "JWT"],
    client_name: "Prime Capital Ledger",
    client_url: "https://primecapitaledger.site",
    is_featured: true,
    completed_at: "2025",
  },
  {
    id: "3",
    title: "Nicholas Edmund Tanaka — Portfolio",
    slug: "niconet",
    description: "Portfolio website personal untuk Fullstack Developer dengan AI assistant interaktif dan desain modern.",
    full_description: "Portfolio website milik Nicholas Edmund Tanaka, mahasiswa Computer Engineering Universitas Indonesia. Dibangun dengan fitur unik AI assistant yang bisa menjawab pertanyaan tentang pengalaman, tech stack, dan proyek secara real-time. Desain bersih dengan navigasi smooth dan dark mode.",
    category: "Landing Page",
    thumbnail_url: "",
    images: [],
    tech_stack: ["Next.js", "Tailwind CSS", "Framer Motion", "AI"],
    client_name: "Nicholas Edmund Tanaka",
    client_url: "https://niconet.site",
    is_featured: true,
    completed_at: null,
  },
  {
    id: "4",
    title: "Marshal Aufa — Portfolio",
    slug: "marshal-aufa",
    description: "Portfolio website untuk Systems & Software Engineer dengan showcase proyek full-stack, embedded systems, dan ML.",
    full_description: "Portfolio website milik Marshal Aufa yang menampilkan perjalanan karir dari assembly bare metal hingga distributed systems. Dilengkapi dengan sistem scroll-based navigation interaktif, proyek showcase mencakup full-stack apps, embedded systems, FPGA, dan machine learning models. Download CV, kontak langsung via berbagai platform.",
    category: "Landing Page",
    thumbnail_url: "",
    images: [],
    tech_stack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    client_name: "Marshal Aufa",
    client_url: "https://marshal-aufa.vercel.app",
    is_featured: true,
    completed_at: null,
  },
  {
    id: "5",
    title: "Folio — Book Discovery",
    slug: "folio",
    description: "Platform rekomendasi dan discovery buku dengan antarmuka modern dan interaktif.",
    full_description: "Folio adalah platform discovery buku yang membantu pengguna menemukan bacaan yang sesuai dengan minat mereka. Dibangun dengan antarmuka yang bersih, responsif, dan fokus pada pengalaman eksplorasi buku yang menyenangkan.",
    category: "Web App",
    thumbnail_url: "",
    images: [],
    tech_stack: ["Next.js", "Tailwind CSS", "Vercel"],
    client_name: "Folio",
    client_url: "https://folio-mini-project.vercel.app",
    is_featured: true,
    completed_at: null,
  },
  {
    id: "6",
    title: "sumopower.id",
    slug: "sumopower-id",
    description: "E-commerce platform for an Indonesian retail brand.",
    full_description: "E-commerce platform for an Indonesian retail brand. Owned the full project lifecycle — client requirements, UI/UX, implementation, and domain & hosting setup.",
    category: "E-Commerce",
    thumbnail_url: "",
    images: [],
    tech_stack: ["Next.js", "React", "TailwindCSS"],
    client_name: "Sumopower",
    client_url: "https://sumopower.id",
    is_featured: true,
    completed_at: "2024",
  },
  {
    id: "7",
    title: "cloudream.id",
    slug: "cloudream-id",
    description: "Company platform for a B2B cloud-services provider.",
    full_description: "Company platform for a B2B cloud-services provider, designed and developed from scratch — services catalog, value-proposition pages, and lead generation.",
    category: "Company Profile",
    thumbnail_url: "",
    images: [],
    tech_stack: ["Next.js", "React", "TailwindCSS"],
    client_name: "Cloudream",
    client_url: "https://cloudream.id",
    is_featured: true,
    completed_at: "2024",
  },
  {
    id: "8",
    title: "Idzhar Dwi Karya",
    slug: "idzhar-dwi-karya",
    description: "Corporate profile site for a local business — services, track record, and contact.",
    full_description: "Corporate profile site for a local business — services, track record, and contact, tuned for fast loads and clean presentation.",
    category: "Company Profile",
    thumbnail_url: "",
    images: [],
    tech_stack: ["Next.js", "React", "Vercel"],
    client_name: "Idzhar Dwi Karya",
    client_url: "https://idzhardwikarya.vercel.app",
    is_featured: false,
    completed_at: "2025",
  },
  {
    id: "9",
    title: "Fore Nico",
    slug: "fore-nico",
    description: "Coffee-ordering concept app modeled on a modern F&B brand.",
    full_description: "Coffee-ordering concept app modeled on a modern F&B brand — menu browsing, product detail, and a polished mobile-first interface.",
    category: "Web App",
    thumbnail_url: "",
    images: [],
    tech_stack: ["Next.js", "React", "Vercel"],
    client_name: "Fore Nico",
    client_url: "https://fore-nico.vercel.app",
    is_featured: false,
    completed_at: "2025",
  },
  {
    id: "10",
    title: "G2M Church",
    slug: "g2m-church",
    description: "Website for a church community — schedules, events, and announcements.",
    full_description: "Website for a church community — schedules, events, and announcements presented in one clear, accessible place.",
    category: "Company Profile",
    thumbnail_url: "",
    images: [],
    tech_stack: ["Next.js", "React", "Vercel"],
    client_name: "G2M Church",
    client_url: "https://g2mchurch.vercel.app",
    is_featured: false,
    completed_at: "2024",
  },
  {
    id: "11",
    title: "TaskFlow",
    slug: "taskflow",
    description: "Minimalist task manager for students — quick capture, clean lists, and a distraction-free interface.",
    full_description: "Minimalist task manager for students — quick capture, clean lists, and a distraction-free interface.",
    category: "Web App",
    thumbnail_url: "",
    images: [],
    tech_stack: ["React", "Vite", "Vercel"],
    client_name: "TaskFlow",
    client_url: "https://todolistbynico.vercel.app",
    is_featured: false,
    completed_at: "2024",
  },
  {
    id: "12",
    title: "Tubagus Dafa — Portfolio",
    slug: "tubagus-dafa",
    description: "Portfolio website personal untuk Full-Stack Developer.",
    full_description: "Portfolio website personal untuk menampilkan karya dan pengalaman Tubagus Dafa.",
    category: "Landing Page",
    thumbnail_url: "",
    images: [],
    tech_stack: ["Next.js", "Tailwind CSS"],
    client_name: "Tubagus Dafa Izza Fariz",
    client_url: "https://tubagusdafa.vercel.app/",
    is_featured: true,
    completed_at: null,
  },
  {
    id: "13",
    title: "David Alexander — Portfolio",
    slug: "david-alexander",
    description: "Portfolio website personal untuk Full-Stack Developer.",
    full_description: "Portfolio website personal untuk menampilkan keahlian dan karya David Alexander.",
    category: "Landing Page",
    thumbnail_url: "",
    images: [],
    tech_stack: ["Next.js", "Tailwind CSS"],
    client_name: "David Alexander",
    client_url: "https://dapid.vercel.app/",
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
