import { getProjectCount } from "@/lib/data";
import { getAllTeamMembers, getAllReviews } from "@/lib/admin-store";
import { getInquiries } from "@/lib/inquiries";
import { FolderKanban, Star, Users, MessageSquareText } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const projectCount = getProjectCount();
  const teamCount = getAllTeamMembers().length;
  const reviews = getAllReviews();
  const inquiries = getInquiries();
  const newInquiries = inquiries.filter((i) => i.status === "new").length;

  const cards = [
    { label: "Projects", value: projectCount, icon: FolderKanban, color: "text-foreground", href: "/dashboard/projects" },
    { label: "Reviews", value: reviews.length, icon: Star, color: "text-foreground", href: "/dashboard/reviews" },
    { label: "Team Members", value: teamCount, icon: Users, color: "text-foreground", href: "/dashboard/team" },
    { label: "New Inquiries", value: newInquiries, icon: MessageSquareText, color: "text-foreground", href: "/dashboard/inquiries" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-8">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.label} href={card.href} className="block bg-card border border-border rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Icon className={`w-4 h-4 ${card.color}`} />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {card.label}
                </span>
              </div>
              <p className="text-3xl font-bold text-foreground">{card.value}</p>
            </Link>
          );
        })}
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href="/dashboard/projects"
            className="block p-4 rounded-lg border border-border hover:border-accent/30 transition-colors text-sm"
          >
            <span className="font-medium text-foreground">Kelola Projects</span>
            <p className="text-muted-foreground text-xs mt-1">{projectCount} project tersedia</p>
          </Link>
          <Link
            href="/dashboard/reviews"
            className="block p-4 rounded-lg border border-border hover:border-accent/30 transition-colors text-sm"
          >
            <span className="font-medium text-foreground">Kelola Reviews</span>
            <p className="text-muted-foreground text-xs mt-1">{reviews.length} review tersedia</p>
          </Link>
          <Link
            href="/dashboard/team"
            className="block p-4 rounded-lg border border-border hover:border-accent/30 transition-colors text-sm"
          >
            <span className="font-medium text-foreground">Kelola Tim</span>
            <p className="text-muted-foreground text-xs mt-1">{teamCount} anggota tim</p>
          </Link>
          <Link
            href="/dashboard/inquiries"
            className="block p-4 rounded-lg border border-border hover:border-accent/30 transition-colors text-sm"
          >
            <span className="font-medium text-foreground">Lihat Inquiries</span>
            <p className="text-muted-foreground text-xs mt-1">{newInquiries} pesan baru</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
