import React from "react";
import { RouterProvider, useRouter } from "./components";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HomePage } from "./pages/HomePage";
import { SectionPage } from "./pages/SectionPage";
import { ArticlePage } from "./pages/ArticlePage";
import { StandardIssuePage } from "./pages/StandardIssuePage";
import { StandardIssueDetailPage } from "./pages/StandardIssueDetailPage";
import { SocialLedgerPage } from "./pages/SocialLedgerPage";
import { SocialLedgerDetailPage } from "./pages/SocialLedgerDetailPage";
import { ContributorPage } from "./pages/ContributorPage";
import { colors } from "./tokens";

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap');
`;

function PageRouter() {
  const { route } = useRouter();

  switch (route.page) {
    case "home":
      return <HomePage />;

    case "section":
      return <SectionPage section={route.params?.section || "culture"} />;

    case "article":
      return <ArticlePage id={route.params?.id || ""} />;

    case "standard-issue":
      return <StandardIssuePage />;

    case "standard-issue-detail":
      return <StandardIssueDetailPage id={route.params?.id || ""} />;

    case "social-ledger":
      return <SocialLedgerPage />;

    case "social-ledger-detail":
      return <SocialLedgerDetailPage id={route.params?.id || ""} />;

    case "contributor":
      return <ContributorPage slug={route.params?.slug || ""} />;

    default:
      return <HomePage />;
  }
}

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen" style={{ backgroundColor: colors.archivalWhite }}>
        <style>{`
          ${fontStyles}
          * { box-sizing: border-box; }
          ::selection { background-color: ${colors.financialPink}; }
          a { text-decoration: none; }
          .carousel-scroll::-webkit-scrollbar { display: none; }
        `}</style>
        <Header />
        <PageRouter />
        <Footer />
      </div>
    </RouterProvider>
  );
}
