import {
  useRouter,
  Breadcrumb,
  SectionLabel,
  Eyebrow,
  ArticleCard,
  HorizontalCarousel,
} from "../components";
import { colors, serif, sans } from "../tokens";
import { socialLedgerEvents, socialLedgerArticles } from "../data";

export const SocialLedgerPage = () => {
  const { navigate } = useRouter();
  const featuredArticle = socialLedgerArticles.find((a) => a.featured);
  const otherArticles = socialLedgerArticles.filter((a) => !a.featured);

  return (
    <main className="max-w-6xl mx-auto px-6 pt-8 pb-12">
      <Breadcrumb
        items={[
          { label: "Home", page: "home" },
          { label: "The Social Ledger" },
        ]}
      />

      <h1
        className="mb-2"
        style={{
          fontFamily: serif,
          fontSize: "42px",
          fontWeight: 400,
          color: colors.charcoal,
          lineHeight: 1.15,
        }}
      >
        The Social Ledger
      </h1>
      <p
        className="mb-10"
        style={{
          fontFamily: serif,
          fontSize: "18px",
          color: colors.slate,
          lineHeight: 1.5,
          maxWidth: "60ch",
        }}
      >
        Events, gatherings, and reflections on the art of bringing people
        together with intention and generosity.
      </p>

      {/* Featured article */}
      {featuredArticle && (
        <section className="mb-10">
          <SectionLabel>Featured</SectionLabel>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 cursor-pointer group"
            onClick={() =>
              navigate("article", { id: featuredArticle.id })
            }
          >
            {featuredArticle.image && (
              <div
                className="aspect-[16/10] overflow-hidden"
                style={{ backgroundColor: colors.galleryGrey }}
              >
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            )}
            <div>
              <Eyebrow>{featuredArticle.category}</Eyebrow>
              <h2
                className="mt-2 mb-3 group-hover:opacity-70 transition-opacity"
                style={{
                  fontFamily: serif,
                  fontSize: "28px",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: colors.charcoal,
                }}
              >
                {featuredArticle.title}
              </h2>
              <p
                className="mb-3"
                style={{
                  fontFamily: serif,
                  fontSize: "16px",
                  lineHeight: 1.6,
                  color: colors.charcoal,
                }}
              >
                {featuredArticle.excerpt}
              </p>
              <p
                style={{
                  fontFamily: sans,
                  fontSize: "13px",
                  color: colors.slate,
                }}
              >
                {featuredArticle.author} · {featuredArticle.date} ·{" "}
                {featuredArticle.readTime}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Events Calendar */}
      <section
        className="py-10 border-t"
        style={{ borderColor: colors.silver }}
      >
        <SectionLabel>Upcoming Events</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLedgerEvents.map((event) => (
            <div
              key={event.id}
              className="p-5 cursor-pointer group hover:opacity-80 transition-opacity"
              style={{
                backgroundColor: colors.galleryGrey,
                border: `1px solid ${colors.silver}`,
              }}
              onClick={() =>
                navigate("social-ledger-detail", { id: event.id })
              }
            >
              <p
                className="uppercase tracking-widest mb-2"
                style={{
                  fontFamily: sans,
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  color: colors.slate,
                }}
              >
                {event.label}
              </p>
              <h3
                className="mb-2"
                style={{
                  fontFamily: serif,
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: 1.25,
                  color: colors.charcoal,
                }}
              >
                {event.title}
              </h3>
              <p
                style={{
                  fontFamily: sans,
                  fontSize: "13px",
                  color: colors.slate,
                }}
              >
                {event.location} · {event.dates}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section
        className="py-10 border-t"
        style={{ borderColor: colors.silver }}
      >
        <SectionLabel>Essays on Gathering</SectionLabel>
        <HorizontalCarousel>
          {otherArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={() => navigate("article", { id: article.id })}
            />
          ))}
        </HorizontalCarousel>
      </section>
    </main>
  );
};
