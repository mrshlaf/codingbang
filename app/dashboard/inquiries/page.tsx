import { getInquiries } from "@/lib/admin-actions";
import { StatusSelect } from "./status-select";

export const metadata = { title: "Inquiries" };

export default async function InquiriesPage() {
  const inquiries = await getInquiries();

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">Contact Inquiries</h1>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground text-xs uppercase tracking-wider">
                <th className="text-left px-4 py-3 font-medium">Client</th>
                <th className="text-left px-4 py-3 font-medium">Contact</th>
                <th className="text-left px-4 py-3 font-medium">Service</th>
                <th className="text-left px-4 py-3 font-medium">Message</th>
                <th className="text-left px-4 py-3 font-medium">Status</th>
                <th className="text-left px-4 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-muted-foreground">
                    Belum ada inquiry.
                  </td>
                </tr>
              )}
              {inquiries.map((inquiry: any) => (
                <tr key={inquiry.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">{inquiry.name}</td>
                  <td className="px-4 py-3">
                    <div className="text-foreground">{inquiry.email}</div>
                    <div className="text-muted-foreground text-xs">{inquiry.whatsapp}</div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{inquiry.service || "-"}</td>
                  <td className="px-4 py-3 max-w-xs">
                    <p className="text-muted-foreground truncate">{inquiry.message}</p>
                  </td>
                  <td className="px-4 py-3">
                    <StatusSelect id={inquiry.id} defaultValue={inquiry.status} />
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs whitespace-nowrap">
                    {new Date(inquiry.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
