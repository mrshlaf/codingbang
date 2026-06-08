import { getAllReviews } from "@/lib/admin-store";
import { deleteReviewAction } from "@/lib/admin-actions";
import Link from "next/link";
import { Plus } from "lucide-react";
import { DeleteButton } from "../delete-button";

export const metadata = { title: "Reviews | CODING BANG" };

export default async function ReviewsPage() {
  const reviews = getAllReviews();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">Reviews</h1>
        <Link
          href="/dashboard/reviews/new"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Plus className="w-4 h-4" />
          Tambah
        </Link>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground text-xs uppercase tracking-wider">
                <th className="text-left px-4 py-3 font-medium">Client</th>
                <th className="text-left px-4 py-3 font-medium">Rating</th>
                <th className="text-right px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-12 text-muted-foreground">Belum ada review.</td>
                </tr>
              )}
              {reviews.map((review) => (
                <tr key={review.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">
                    <span className="text-foreground font-medium">{review.client_name}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-muted-foreground">
                      {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <DeleteButton id={review.id} action={deleteReviewAction} />
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
