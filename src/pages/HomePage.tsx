import {
  useRouter,
  Eyebrow,
  SectionLabel,
  ArticleCard,
  NewsletterBox,
  HorizontalCarousel,
  ContributorCard,
  SocialLedgerEventItem,
} from "../components";
import { colors, serif, sans } from "../tokens";
import {
  allArticles,
  socialLedgerEvents,
  standardIssueItems,
  contributors,
} from "../data";

export const HomePage = () => {
  const { navigate } = useRouter();
  const featured = allArticles.find((a) => a.featured)!;
  const recentArticles = allArticles.filter((a) => !a.featured).slice(0, 5);
  const essayArticles = allArticles.slice(5, 10);
  const measuredMan = allArticles.find((a) => a.id === "measured-man")!;

  return (
    <main>
      {/* ===== FEATURED HERO ===== */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Featured */}
          <div className="lg:col-span-3">
            <Eyebrow>Featured</Eyebrow>
            <div
              className="w-full aspect-[16/10] mt-3 mb-6 overflow-hidden cursor-pointer"
              style={{ backgroundColor: colors.galleryGrey }}
              onClick={() => navigate("article", { id: featured.id })}
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <h2
              className="mb-4 cursor-pointer hover:opacity-70 transition-opacity"
              onClick={() => navigate("article", { id: featured.id })}
              style={{
                fontFamily: serif,
                fontSize: "36px",
                fontWeight: 400,
                lineHeight: 1.15,
                color: colors.charcoal,
              }}
            >
              {featured.title}
            </h2>
            <p
              className="mb-4"
              style={{
                fontFamily: serif,
                fontSize: "18px",
                lineHeight: 1.6,
                color: colors.charcoal,
              }}
            >
              {featured.excerpt}
            </p>
            <p
              style={{ fontFamily: sans, fontSize: "13px", color: colors.slate }}
            >
              <button
                onClick={() =>
                  navigate("contributor", { slug: featured.authorSlug })
                }
                className="hover:opacity-60 transition-opacity"
                style={{ color: colors.slate }}
              >
                {featured.author}, {featured.authorRole}
              </button>{" "}
              · {featured.date} · {featured.readTime}
            </p>
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <NewsletterBox />
            <div>
              <Eyebrow>The Social Ledger</Eyebrow>
              <div className="mt-2">
                {socialLedgerEvents.slice(0, 4).map((event, i) => (
                  <SocialLedgerEventItem
                    key={i}
                    event={event}
                    onClick={() =>
                      navigate("social-ledger-detail", { id: event.id })
                    }
                  />
                ))}
              </div>
              <button
                onClick={() => navigate("social-ledger")}
                className="inline-block mt-3 hover:opacity-60 transition-opacity"
                style={{
                  fontFamily: sans,
                  fontSize: "12px",
                  fontWeight: 600,
                  color: colors.cordovan,
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                View Full Calendar →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RECENT ARTICLES ===== */}
      <section
        className="py-10 border-t"
        style={{ borderColor: colors.silver }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Recent</SectionLabel>
          <HorizontalCarousel>
            {recentArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => navigate("article", { id: article.id })}
              />
            ))}
          </HorizontalCarousel>
        </div>
      </section>

      {/* ===== STANDARD ISSUE + MEASURED MAN ===== */}
      <section
        className="py-10 border-t"
        style={{ borderColor: colors.silver }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Standard Issue */}
            <div>
              <SectionLabel>The Standard Issue</SectionLabel>
              <HorizontalCarousel>
                {standardIssueItems.map((item) => (
                  <div
                    key={item.id}
                    className="w-44 flex-shrink-0 cursor-pointer group"
                    onClick={() =>
                      navigate("standard-issue-detail", { id: item.id })
                    }
                  >
                    <div
                      className="w-full aspect-[3/4] mb-3 overflow-hidden relative"
                      style={{ backgroundColor: colors.galleryGrey }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      {item.legacy && (
                        <span
                          className="absolute top-2 left-2 px-2 py-1 uppercase tracking-widest"
                          style={{
                            fontFamily: sans,
                            fontSize: "9px",
                            fontWeight: 700,
                            letterSpacing: "1.5px",
                            backgroundColor: colors.white,
                            border: `1px solid ${colors.silver}`,
                            color: colors.charcoal,
                          }}
                        >
                          ★ Legacy
                        </span>
                      )}
                    </div>
                    <Eyebrow>PREVIEW</Eyebrow>
                    <p
                      className="mt-1 group-hover:opacity-70 transition-opacity"
                      style={{
                        fontFamily: serif,
                        fontSize: "15px",
                        fontWeight: 500,
                        color: colors.charcoal,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.name}
                    </p>
                  </div>
                ))}
              </HorizontalCarousel>
              <button
                onClick={() => navigate("standard-issue")}
                className="inline-block mt-4 hover:opacity-60 transition-opacity"
                style={{
                  fontFamily: sans,
                  fontSize: "12px",
                  fontWeight: 600,
                  color: colors.cordovan,
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                View Full Collection →
              </button>
            </div>

            {/* Right: Measured Man */}
            <div>
              <SectionLabel>The Measured Man</SectionLabel>
              <div
                className="p-6 cursor-pointer group"
                style={{ backgroundColor: colors.galleryGrey }}
                onClick={() => navigate("article", { id: measuredMan.id })}
              >
                <Eyebrow>{measuredMan.category}</Eyebrow>
                <h3
                  className="mt-2 mb-3 group-hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: serif,
                    fontSize: "22px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    color: colors.charcoal,
                  }}
                >
                  {measuredMan.title}
                </h3>
                <p
                  className="mb-4"
                  style={{
                    fontFamily: serif,
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: colors.charcoal,
                  }}
                >
                  {measuredMan.excerpt}
                </p>
                <div
                  className="w-full aspect-[16/9] overflow-hidden"
                  style={{ backgroundColor: colors.silver }}
                >
                  <img
                    src={measuredMan.image}
                    alt={measuredMan.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: sans,
                    fontSize: "12px",
                    color: colors.slate,
                  }}
                >
                  {measuredMan.author} · {measuredMan.date} ·{" "}
                  {measuredMan.readTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ESSAYS ===== */}
      <section
        className="py-10 border-t"
        style={{ borderColor: colors.silver }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Essays</SectionLabel>
          <HorizontalCarousel>
            {essayArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => navigate("article", { id: article.id })}
              />
            ))}
          </HorizontalCarousel>
        </div>
      </section>

      {/* ===== CONTRIBUTORS ===== */}
      <section
        className="py-10 border-t"
        style={{ borderColor: colors.silver }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Contributors</SectionLabel>
          <HorizontalCarousel>
            {contributors.map((c) => (
              <ContributorCard
                key={c.slug}
                contributor={c}
                onClick={() => navigate("contributor", { slug: c.slug })}
              />
            ))}
          </HorizontalCarousel>
        </div>
      </section>
    </main>
  );
};
