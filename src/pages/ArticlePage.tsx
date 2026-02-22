import {
  useRouter,
  Breadcrumb,
  Eyebrow,
  Prose,
  ArticleCard,
  Divider,
  NewsletterBox,
  HorizontalCarousel,
} from "../components";
import { colors, serif, sans } from "../tokens";
import { BookmarkIcon, ShareIcon } from "../icons";
import { allArticles, contributors } from "../data";

export const ArticlePage = ({ id }: { id: string }) => {
  const { navigate } = useRouter();
  const article = allArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p style={{ fontFamily: serif, fontSize: "24px", color: colors.charcoal }}>
          Article not found.
        </p>
        <button
          onClick={() => navigate("home")}
          className="mt-4 hover:opacity-60 transition-opacity"
          style={{
            fontFamily: sans,
            fontSize: "14px",
            color: colors.cordovan,
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          ← Return to homepage
        </button>
      </main>
    );
  }

  const sectionLabel =
    article.section.charAt(0).toUpperCase() + article.section.slice(1);
  const contributor = contributors.find((c) => c.slug === article.authorSlug);
  const recommended = (article.recommendedArticleIds || [])
    .map((rid) => allArticles.find((a) => a.id === rid))
    .filter(Boolean);

  return (
    <main className="max-w-4xl mx-auto px-6 pt-8 pb-12">
      <Breadcrumb
        items={[
          { label: "Home", page: "home" },
          { label: sectionLabel, page: "section", params: { section: article.section } },
          { label: article.title },
        ]}
      />

      {/* Header */}
      <Eyebrow>{article.category}</Eyebrow>
      <h1
        className="mt-3 mb-4"
        style={{
          fontFamily: serif,
          fontSize: "42px",
          fontWeight: 400,
          color: colors.charcoal,
          lineHeight: 1.15,
        }}
      >
        {article.title}
      </h1>
      <p
        className="mb-4"
        style={{
          fontFamily: serif,
          fontSize: "20px",
          lineHeight: 1.5,
          color: colors.slate,
          maxWidth: "60ch",
        }}
      >
        {article.excerpt}
      </p>

      {/* Meta row */}
      <div
        className="flex items-center justify-between py-4 mb-6"
        style={{ borderTop: `1px solid ${colors.silver}`, borderBottom: `1px solid ${colors.silver}` }}
      >
        <div className="flex items-center gap-3">
          {contributor && (
            <div
              className="w-10 h-10 rounded-full overflow-hidden cursor-pointer"
              style={{ backgroundColor: colors.galleryGrey }}
              onClick={() => navigate("contributor", { slug: contributor.slug })}
            >
              <img
                src={contributor.image}
                alt={contributor.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div>
            <button
              onClick={() =>
                contributor && navigate("contributor", { slug: contributor.slug })
              }
              className="hover:opacity-60 transition-opacity"
              style={{
                fontFamily: sans,
                fontSize: "14px",
                fontWeight: 600,
                color: colors.charcoal,
              }}
            >
              {article.author}
            </button>
            <p style={{ fontFamily: sans, fontSize: "12px", color: colors.slate }}>
              {article.date} · {article.readTime}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:opacity-60 transition-opacity">
            <BookmarkIcon />
          </button>
          <button className="hover:opacity-60 transition-opacity">
            <ShareIcon />
          </button>
        </div>
      </div>

      {/* Hero image */}
      <div
        className="w-full aspect-[16/9] mb-8 overflow-hidden"
        style={{ backgroundColor: colors.galleryGrey }}
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Body */}
      <Prose text={article.fullText} />

      {/* Key Takeaways */}
      {article.keyTakeaways && article.keyTakeaways.length > 0 && (
        <>
          <Divider />
          <div className="p-6" style={{ backgroundColor: colors.galleryGrey }}>
            <Eyebrow>Key Takeaways</Eyebrow>
            <ul className="mt-3 space-y-2">
              {article.keyTakeaways.map((t, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2"
                  style={{
                    fontFamily: serif,
                    fontSize: "16px",
                    lineHeight: 1.5,
                    color: colors.charcoal,
                  }}
                >
                  <span style={{ color: colors.cordovan, fontWeight: 700 }}>—</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Recommended */}
      {recommended.length > 0 && (
        <>
          <Divider />
          <Eyebrow className="mb-4">Recommended Reading</Eyebrow>
          <HorizontalCarousel>
            {recommended.map((a: any) => (
              <ArticleCard
                key={a.id}
                article={a}
                onClick={() => navigate("article", { id: a.id })}
              />
            ))}
          </HorizontalCarousel>
        </>
      )}

      {/* Newsletter */}
      <Divider />
      <div className="max-w-md mx-auto">
        <NewsletterBox />
      </div>
    </main>
  );
};
