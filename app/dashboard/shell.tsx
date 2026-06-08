"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  FolderKanban,
  Star,
  Users,
  MessageSquareText,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/projects", label: "Projects", icon: FolderKanban },
  { href: "/dashboard/reviews", label: "Reviews", icon: Star },
  { href: "/dashboard/team", label: "Team", icon: Users },
  { href: "/dashboard/inquiries", label: "Inquiries", icon: MessageSquareText },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed md:sticky top-0 md:top-16 left-0 z-50 h-screen md:h-[calc(100vh-4rem)] w-64 bg-card border-r border-border transform transition-transform duration-200 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex items-center justify-between md:hidden">
          <span className="font-semibold text-foreground">Menu</span>
          <button onClick={() => setSidebarOpen(false)} className="text-muted-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-3 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}

          <div className="pt-4 mt-4 border-t border-border">
            <form action="/auth/login" method="get" className="block">
              <button
                type="submit"
                formAction={"/api/logout"}
                onClick={async () => {
                  await fetch("/api/logout", { method: "POST" });
                  window.location.href = "/auth/login";
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-500/10 w-full transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Keluar
              </button>
            </form>
          </div>
        </nav>
      </aside>

      <div className="flex-1 min-w-0">
        <div className="sticky top-16 z-30 md:hidden bg-background/80 backdrop-blur border-b border-border px-4 py-3 flex items-center gap-3">
          <button onClick={() => setSidebarOpen(true)} className="text-muted-foreground">
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-medium text-sm text-foreground">Dashboard</span>
        </div>

        <div className="p-4 md:p-8">{children}</div>
      </div>
    </div>
  );
}
