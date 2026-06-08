import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { validateSessionToken } from "@/lib/auth";
import { DashboardShell } from "./shell";

export const metadata = { title: "Dashboard | CODING BANG" };

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;
    if (!token) redirect("/auth/login");
    const email = validateSessionToken(token);
    if (!email) redirect("/auth/login");
    return <DashboardShell>{children}</DashboardShell>;
  } catch {
    redirect("/auth/login");
  }
}
