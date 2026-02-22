import {
  useRouter,
  Breadcrumb,
  Eyebrow,
  ArticleCard,
  Divider,
  HorizontalCarousel,
} from "../components";
import { colors, serif, sans } from "../tokens";
import { contributors, allArticles } from "../data";

export const ContributorPage = ({ slug }: { slug: string }) => {
  const { navigate } = useRouter();
  const contributor = contributors.find((c) => c.slug === slug);

  if (!contributor) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p
          style={{
            fontFamily: serif,
            fontSize: "24px",
            color: colors.charcoal,
          }}
        >
          Contributor not found.
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

  const authorArticles = allArticles.filter(
    (a) => a.authorSlug === contributor.slug
  );
  const featuredEssay = allArticles.find(
    (a) => a.id === contributor.featuredEssayId
  );
  const otherArticles = authorArticles.filter(
    (a) => a.id !== contributor.featuredEssayId
  );

  return (
    <main className="max-w-4xl mx-auto px-6 pt-8 pb-12">
      <Breadcrumb
        items={[
          { label: "Home", page: "home" },
          { label: "Contributors" },
          { label: contributor.name },
        ]}
      />

      {/* ===== PROFILE HEADER ===== */}
      <div className="flex items-start gap-8 mb-8">
        <div
          className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0"
          style={{ backgroundColor: colors.galleryGrey }}
        >
          <img
            src={contributor.image}
            alt={contributor.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <Eyebrow>{contributor.role}</Eyebrow>
          <h1
            className="mt-2 mb-3"
            style={{
              fontFamily: serif,
              fontSize: "36px",
              fontWeight: 400,
              color: colors.charcoal,
              lineHeight: 1.15,
            }}
          >
            {contributor.name}
          </h1>
          <p
            style={{
              fontFamily: serif,
              fontSize: "18px",
              lineHeight: 1.6,
              color: colors.charcoal,
              maxWidth: "55ch",
            }}
          >
            {contributor.bio}
          </p>
        </div>
      </div>

      {/* ===== FEATURED ESSAY ===== */}
      {featuredEssay && (
        <>
          <Divider />
          <Eyebrow className="mb-4">Featured Essay</Eyebrow>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 cursor-pointer group"
            style={{ backgroundColor: colors.galleryGrey }}
            onClick={() => navigate("article", { id: featuredEssay.id })}
          >
            <div
              className="aspect-[4/3] overflow-hidden"
              style={{ backgroundColor: colors.silver }}
            >
              <img
                src={featuredEssay.image}
                alt={featuredEssay.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center">
              <Eyebrow>{featuredEssay.category}</Eyebrow>
              <h3
                className="mt-2 mb-2 group-hover:opacity-70 transition-opacity"
                style={{
                  fontFamily: serif,
                  fontSize: "22px",
                  fontWeight: 500,
                  lineHeight: 1.25,
                  color: colors.charcoal,
                }}
              >
                {featuredEssay.title}
              </h3>
              <p
                className="mb-3"
                style={{
                  fontFamily: serif,
                  fontSize: "15px",
                  lineHeight: 1.5,
                  color: colors.charcoal,
                }}
              >
                {featuredEssay.excerpt}
              </p>
              <p
                style={{
                  fontFamily: sans,
                  fontSize: "12px",
                  color: colors.slate,
                }}
              >
                {featuredEssay.date} · {featuredEssay.readTime}
              </p>
            </div>
          </div>
        </>
      )}

      {/* ===== ALL ARTICLES BY THIS CONTRIBUTOR ===== */}
      {otherArticles.length > 0 && (
        <>
          <Divider />
          <Eyebrow className="mb-4">
            All Articles ({authorArticles.length})
          </Eyebrow>
          <HorizontalCarousel>
            {otherArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => navigate("article", { id: article.id })}
              />
            ))}
          </HorizontalCarousel>
        </>
      )}

      {/* ===== ARTICLE LIST (fallback if only 1-2 articles) ===== */}
      {otherArticles.length === 0 && authorArticles.length > 0 && !featuredEssay && (
        <>
          <Divider />
          <Eyebrow className="mb-4">
            Articles ({authorArticles.length})
          </Eyebrow>
          <HorizontalCarousel>
            {authorArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => navigate("article", { id: article.id })}
              />
            ))}
          </HorizontalCarousel>
        </>
      )}

      {/* ===== OTHER CONTRIBUTORS ===== */}
      <Divider />
      <Eyebrow className="mb-4">Other Contributors</Eyebrow>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {contributors
          .filter((c) => c.slug !== contributor.slug)
          .slice(0, 4)
          .map((c) => (
            <div
              key={c.slug}
              className="text-center cursor-pointer group"
              onClick={() => navigate("contributor", { slug: c.slug })}
            >
              <div
                className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden"
                style={{ backgroundColor: colors.galleryGrey }}
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                />
              </div>
              <p
                className="group-hover:opacity-70 transition-opacity"
                style={{
                  fontFamily: serif,
                  fontSize: "14px",
                  fontWeight: 500,
                  color: colors.charcoal,
                  lineHeight: 1.3,
                }}
              >
                {c.name}
              </p>
              <p
                style={{
                  fontFamily: sans,
                  fontSize: "11px",
                  color: colors.slate,
                  marginTop: "2px",
                }}
              >
                {c.role}
              </p>
            </div>
          ))}
      </div>
    </main>
  );
};
