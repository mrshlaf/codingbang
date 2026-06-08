import { PROJECTS, TEAM_MEMBERS, REVIEWS, type Project, type TeamMember, type Review } from "@/lib/data";

// In-memory store — resets on server restart
let projects = [...PROJECTS];
let teamMembers = [...TEAM_MEMBERS];
let reviews = [...REVIEWS];

// ============================================================
// PROJECTS
// ============================================================

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

let nextProjectId = PROJECTS.length + 1;

export function createProject(data: Omit<Project, "id">): Project {
  const project: Project = { id: String(nextProjectId++), ...data };
  projects.push(project);
  return project;
}

export function updateProject(id: string, data: Partial<Project>): Project | null {
  const idx = projects.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  projects[idx] = { ...projects[idx], ...data };
  return projects[idx];
}

export function deleteProject(id: string): boolean {
  const idx = projects.findIndex((p) => p.id === id);
  if (idx === -1) return false;
  projects.splice(idx, 1);
  return true;
}

// ============================================================
// TEAM MEMBERS
// ============================================================

export function getAllTeamMembers(): TeamMember[] {
  return teamMembers;
}

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find((m) => m.id === id);
}

let nextMemberId = TEAM_MEMBERS.length + 1;

export function createTeamMember(data: Omit<TeamMember, "id">): TeamMember {
  const member: TeamMember = { id: String(nextMemberId++), ...data };
  teamMembers.push(member);
  return member;
}

export function deleteTeamMember(id: string): boolean {
  const idx = teamMembers.findIndex((m) => m.id === id);
  if (idx === -1) return false;
  teamMembers.splice(idx, 1);
  return true;
}

// ============================================================
// REVIEWS
// ============================================================

export function getAllReviews(): Review[] {
  return reviews;
}

let nextReviewId = REVIEWS.length + 1;

export function createReview(data: Omit<Review, "id">): Review {
  const review: Review = { id: String(nextReviewId++), ...data };
  reviews.push(review);
  return review;
}

export function deleteReview(id: string): boolean {
  const idx = reviews.findIndex((r) => r.id === id);
  if (idx === -1) return false;
  reviews.splice(idx, 1);
  return true;
}
