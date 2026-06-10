import { getTeamMembers } from "@/lib/data";
import { TeamClient } from "@/components/team-client";

export const metadata = {
  title: "Team",
  description: "Kenali tim di balik CODING BANG. Developer dan designer yang mengerjakan langsung setiap proyek.",
};

export default function TeamPage() {
  const members = getTeamMembers();
  return <TeamClient members={members} />;
}
