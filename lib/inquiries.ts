import fs from "fs";
import path from "path";

const INQUIRIES_FILE = path.join(process.cwd(), "data", "inquiries.json");

export type Inquiry = {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  service: string;
  message: string;
  status: "new" | "read" | "replied";
  created_at: string;
};

function ensureFile(): void {
  const dir = path.dirname(INQUIRIES_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(INQUIRIES_FILE)) {
    fs.writeFileSync(INQUIRIES_FILE, "[]", "utf-8");
  }
}

export function saveInquiry(data: Omit<Inquiry, "id" | "status" | "created_at">): Inquiry {
  ensureFile();
  const inquiries = getInquiries();
  const inquiry: Inquiry = {
    ...data,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    status: "new",
    created_at: new Date().toISOString(),
  };
  inquiries.unshift(inquiry);
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), "utf-8");
  return inquiry;
}

export function getInquiries(): Inquiry[] {
  ensureFile();
  try {
    const raw = fs.readFileSync(INQUIRIES_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function updateInquiryStatus(id: string, status: "new" | "read" | "replied"): boolean {
  const inquiries = getInquiries();
  const idx = inquiries.findIndex((i) => i.id === id);
  if (idx === -1) return false;
  inquiries[idx].status = status;
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), "utf-8");
  return true;
}
