"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  getAllTeamMembers,
  createTeamMember,
  deleteTeamMember,
  getAllReviews,
  createReview,
  deleteReview,
} from "@/lib/admin-store";
import {
  checkCredentials,
  createSessionToken,
  validateSessionToken,
} from "@/lib/auth";
import {
  getInquiries as getFileInquiries,
  updateInquiryStatus as updateFileStatus,
} from "@/lib/inquiries";

// ============================================================
// AUTH
// ============================================================

export async function login(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email dan password wajib diisi." };
  }

  if (!checkCredentials(email, password)) {
    return { error: "Email atau password salah." };
  }

  const token = createSessionToken(email);
  const cookieStore = await cookies();
  cookieStore.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24, // 24 hours
  });

  redirect("/dashboard");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_token");
  redirect("/auth/login");
}

// ============================================================
// SCHEMAS
// ============================================================

const projectSchema = z.object({
  title: z.string().min(1, "Judul wajib diisi"),
  slug: z.string().min(1, "Slug wajib diisi"),
  description: z.string().min(1, "Deskripsi wajib diisi"),
  full_description: z.string().optional().default(""),
  category: z.string().min(1, "Kategori wajib diisi"),
  thumbnail_url: z.string().optional().default(""),
  tech_stack: z.string().optional().default(""),
  client_name: z.string().optional().default(""),
  is_featured: z.string().optional().default("false"),
});

const teamSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  role: z.string().optional().default("Team Member"),
  bio: z.string().optional().default(""),
  skills: z.string().optional().default(""),
});

const reviewSchema = z.object({
  client_name: z.string().min(1, "Nama klien wajib diisi"),
  rating: z.string().min(1, "Rating wajib diisi"),
  content: z.string().min(1, "Konten review wajib diisi"),
  project_type: z.string().optional().default(""),
});

// ============================================================
// PROJECTS
// ============================================================

export async function createProjectAction(
  prevState: any,
  formData: FormData
) {
  const parsed = projectSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return {
      error: parsed.error.issues.map((e: any) => e.message).join(", "),
    };
  }

  const d = parsed.data;
  createProject({
    title: d.title,
    slug: d.slug,
    description: d.description,
    full_description: d.full_description,
    category: d.category,
    thumbnail_url: d.thumbnail_url,
    images: [],
    tech_stack: d.tech_stack
      ? d.tech_stack.split(",").map((s: string) => s.trim()).filter(Boolean)
      : [],
    client_name: d.client_name,
    client_url: "",
    is_featured: d.is_featured === "true",
    completed_at: null,
  });

  revalidatePath("/dashboard/projects");
  revalidatePath("/portfolio");
  redirect("/dashboard/projects");
}

export async function updateProjectAction(
  id: string,
  prevState: any,
  formData: FormData
) {
  const parsed = projectSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return {
      error: parsed.error.issues.map((e: any) => e.message).join(", "),
    };
  }

  const existing = getProjectById(id);
  if (!existing) return { error: "Project not found" };

  const d = parsed.data;
  updateProject(id, {
    title: d.title,
    slug: d.slug,
    description: d.description,
    full_description: d.full_description,
    category: d.category,
    thumbnail_url: d.thumbnail_url,
    tech_stack: d.tech_stack
      ? d.tech_stack.split(",").map((s: string) => s.trim()).filter(Boolean)
      : [],
    client_name: d.client_name,
    is_featured: d.is_featured === "true",
  });

  revalidatePath("/dashboard/projects");
  revalidatePath("/portfolio");
  redirect("/dashboard/projects");
}

export async function deleteProjectAction(id: string) {
  deleteProject(id);
  revalidatePath("/dashboard/projects");
  revalidatePath("/portfolio");
}

// ============================================================
// TEAM
// ============================================================

export async function createTeamAction(prevState: any, formData: FormData) {
  const parsed = teamSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return {
      error: parsed.error.issues.map((e: any) => e.message).join(", "),
    };
  }

  const d = parsed.data;
  const members = getAllTeamMembers();
  createTeamMember({
    name: d.name,
    role: d.role,
    bio: d.bio,
    skills: d.skills
      ? d.skills.split(",").map((s: string) => s.trim()).filter(Boolean)
      : [],
    social: {},
    display_order: members.length + 1,
  });

  revalidatePath("/dashboard/team");
  revalidatePath("/team");
  redirect("/dashboard/team");
}

export async function deleteTeamAction(id: string) {
  deleteTeamMember(id);
  revalidatePath("/dashboard/team");
  revalidatePath("/team");
}

// ============================================================
// REVIEWS
// ============================================================

export async function createReviewAction(
  prevState: any,
  formData: FormData
) {
  const parsed = reviewSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return {
      error: parsed.error.issues.map((e: any) => e.message).join(", "),
    };
  }

  const d = parsed.data;
  const reviews = getAllReviews();
  createReview({
    client_name: d.client_name,
    client_role: "",
    client_company: "",
    rating: parseInt(d.rating),
    content: d.content,
    project_type: d.project_type,
    display_order: reviews.length + 1,
    created_at: new Date().toISOString().split("T")[0],
  });

  revalidatePath("/dashboard/reviews");
  revalidatePath("/reviews");
  redirect("/dashboard/reviews");
}

export async function deleteReviewAction(id: string) {
  deleteReview(id);
  revalidatePath("/dashboard/reviews");
  revalidatePath("/reviews");
}

// ============================================================
// INQUIRIES
// ============================================================

export async function getInquiries() {
  return getFileInquiries();
}

export async function updateInquiryStatusAction(
  id: string,
  status: "new" | "read" | "replied"
) {
  updateFileStatus(id, status);
  revalidatePath("/dashboard/inquiries");
}

// ============================================================
// AUTH CHECK
// ============================================================

export async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) return false;
  const email = validateSessionToken(token);
  return !!email;
}
