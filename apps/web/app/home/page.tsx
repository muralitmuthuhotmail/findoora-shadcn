import { summaryPageMetadata } from "@/app/metadata";
import { LoadingSpinner } from "@workspace/ui/components/loading-spinner";
import dynamic from "next/dynamic";

export const metadata = summaryPageMetadata;

const SummaryPage = dynamic(
  () =>
    import("@/components/pages/home/portfolio-summary").then(
      (mod) => mod.PortfolioSummaryPage
    ),
  {
    loading: () => <LoadingSpinner />,
  }
);

export default function HomePage() {
  return <SummaryPage />;
}
