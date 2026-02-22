import {
  useRouter,
  Breadcrumb,
  Eyebrow,
  Prose,
  Divider,
  NewsletterBox,
} from "../components";
import { colors, serif, sans } from "../tokens";
import { BookmarkIcon, ShareIcon } from "../icons";
import { standardIssueItems } from "../data";

export const StandardIssueDetailPage = ({ id }: { id: string }) => {
  const { navigate } = useRouter();
  const item = standardIssueItems.find((i) => i.id === id);

  if (!item) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p style={{ fontFamily: serif, fontSize: "24px", color: colors.charcoal }}>
          Object not found.
        </p>
        <button
          onClick={() => navigate("standard-issue")}
          className="mt-4 hover:opacity-60 transition-opacity"
          style={{
            fontFamily: sans,
            fontSize: "14px",
            color: colors.cordovan,
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          ← Return to The Standard Issue
        </button>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 pt-8 pb-12">
      <Breadcrumb
        items={[
          { label: "Home", page: "home" },
          { label: "The Standard Issue", page: "standard-issue" },
          { label: item.name },
        ]}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <Eyebrow>{item.category.toUpperCase()}</Eyebrow>
          <h1
            className="mt-2"
            style={{
              fontFamily: serif,
              fontSize: "42px",
              fontWeight: 400,
              color: colors.charcoal,
              lineHeight: 1.15,
            }}
          >
            {item.name}
          </h1>
          <p
            className="mt-1"
            style={{ fontFamily: sans, fontSize: "16px", color: colors.slate }}
          >
            {item.maker}
          </p>
        </div>
        <div className="flex items-center gap-3 mt-4">
          {item.legacy && (
            <span
              className="px-3 py-1 uppercase tracking-widest"
              style={{
                fontFamily: sans,
                fontSize: "10px",
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
          <button className="hover:opacity-60 transition-opacity">
            <BookmarkIcon />
          </button>
          <button className="hover:opacity-60 transition-opacity">
            <ShareIcon />
          </button>
        </div>
      </div>

      {/* Tags */}
      <div className="flex gap-2 mb-6">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 uppercase tracking-widest"
            style={{
              fontFamily: sans,
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "1.5px",
              border: `1px solid ${colors.silver}`,
              color: colors.slate,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hero image */}
      <div
        className="w-full aspect-[16/9] mb-8 overflow-hidden"
        style={{ backgroundColor: colors.galleryGrey }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Description */}
      <p
        className="mb-6"
        style={{
          fontFamily: serif,
          fontSize: "20px",
          lineHeight: 1.6,
          color: colors.charcoal,
          maxWidth: "65ch",
        }}
      >
        {item.description}
      </p>

      {/* Specs table */}
      {(item.origin || item.construction || item.retailPrice) && (
        <>
          <Divider />
          <Eyebrow className="mb-4">Specifications</Eyebrow>
          <div
            className="p-6"
            style={{ backgroundColor: colors.galleryGrey }}
          >
            <table className="w-full" style={{ fontFamily: sans, fontSize: "14px" }}>
              <tbody>
                {[
                  ["Maker", item.maker],
                  ["Origin", item.origin],
                  ["Construction", item.construction],
                  ["Material", item.materialDetail],
                  ["Color", item.color],
                  ["Sole", item.sole],
                  ["Last", item.last],
                  ["Fitting", item.fitting],
                  ["Availability", item.availability],
                  ["Supply Risk", item.supplyRisk],
                  ["Retail Price", item.retailPrice],
                ]
                  .filter(([, val]) => val)
                  .map(([label, val], i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: `1px solid ${colors.silver}`,
                      }}
                    >
                      <td
                        className="py-3 pr-6"
                        style={{
                          fontWeight: 600,
                          color: colors.charcoal,
                          width: "40%",
                        }}
                      >
                        {label}
                      </td>
                      <td className="py-3" style={{ color: colors.slate }}>
                        {val}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Material & Construction */}
      {item.materialConstruction && (
        <>
          <Divider />
          <Eyebrow className="mb-4">Material & Construction</Eyebrow>
          <Prose text={item.materialConstruction} />
        </>
      )}

      {/* Detail images */}
      {item.detailImages && item.detailImages.length > 0 && (
        <>
          <Divider />
          <div className="grid grid-cols-3 gap-4">
            {item.detailImages.map((img, i) => (
              <div
                key={i}
                className="aspect-[4/3] overflow-hidden"
                style={{ backgroundColor: colors.galleryGrey }}
              >
                <img
                  src={img}
                  alt={`${item.name} detail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </>
      )}

      {/* Ten Year Test */}
      {item.tenYearTest && (
        <>
          <Divider />
          <Eyebrow className="mb-4">The Ten-Year Test</Eyebrow>
          <Prose text={item.tenYearTest} />
        </>
      )}

      {/* Verdict */}
      {item.verdict && (
        <>
          <Divider />
          <div className="p-6" style={{ backgroundColor: colors.galleryGrey }}>
            <Eyebrow className="mb-3">The Verdict</Eyebrow>
            <p
              style={{
                fontFamily: serif,
                fontSize: "18px",
                lineHeight: 1.6,
                color: colors.charcoal,
                maxWidth: "65ch",
              }}
            >
              {item.verdict}
            </p>
          </div>
        </>
      )}

      {/* Author / date */}
      {item.author && (
        <>
          <Divider />
          <p style={{ fontFamily: sans, fontSize: "13px", color: colors.slate }}>
            Reviewed by {item.author}, {item.authorRole} · {item.date} ·{" "}
            {item.readTime}
          </p>
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
