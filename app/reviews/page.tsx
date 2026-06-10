import { getReviews, getReviewStats } from "@/lib/data";
import { ReviewsClient } from "@/components/reviews-client";

export const metadata = {
  title: "Reviews",
  description: "Lihat apa kata klien tentang pengalaman mereka menggunakan jasa pembuatan website CODING BANG.",
};

export default function ReviewsPage() {
  const reviews = getReviews();
  const stats = getReviewStats();
  return (
    <ReviewsClient
      reviews={reviews}
      averageRating={stats.average}
      totalReviews={stats.total}
      distribution={stats.distribution}
    />
  );
}
