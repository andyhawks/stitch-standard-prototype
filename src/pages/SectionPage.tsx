import { useRouter, Breadcrumb, SectionLabel, ArticleListItem } from "../components";
import { colors, serif } from "../tokens";
import { allArticles } from "../data";

export const SectionPage = ({ section }: { section: string }) => {
  const { navigate } = useRouter();
  const sectionArticles = allArticles.filter(
    (a) => a.section === section
  );
  const label = section.charAt(0).toUpperCase() + section.slice(1);

  return (
    <main className="max-w-6xl mx-auto px-6 pt-8 pb-12">
      <Breadcrumb
        items={[
          { label: "Home", page: "home" },
          { label: label },
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
        {label}
      </h1>
      <p
        className="mb-8"
        style={{
          fontFamily: serif,
          fontSize: "18px",
          color: colors.slate,
          lineHeight: 1.5,
          maxWidth: "60ch",
        }}
      >
        Essays, reflections, and considered perspectives on{" "}
        {section.toLowerCase()}.
      </p>

      <SectionLabel>{sectionArticles.length} Articles</SectionLabel>

      {sectionArticles.length === 0 ? (
        <p
          style={{
            fontFamily: serif,
            fontSize: "16px",
            color: colors.slate,
          }}
        >
          No articles in this section yet. Check back soon.
        </p>
      ) : (
        <div>
          {sectionArticles.map((article) => (
            <ArticleListItem
              key={article.id}
              article={article}
              onClick={() => navigate("article", { id: article.id })}
            />
          ))}
        </div>
      )}
    </main>
  );
};
