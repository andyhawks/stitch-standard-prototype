import { useState, useEffect, useRef, ReactNode, createContext, useContext } from "react";
import { colors, serif, sans } from "./tokens";
import { ChevronLeft, ChevronRight } from "./icons";

// ============================================================
// ROUTER
// ============================================================
export type Route = { page: string; params?: Record<string, string> };

export const RouterContext = createContext<{
  route: Route;
  navigate: (page: string, params?: Record<string, string>) => void;
}>({ route: { page: "home" }, navigate: () => {} });

export const useRouter = () => useContext(RouterContext);

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const [route, setRoute] = useState<Route>({ page: "home" });
  const navigate = (page: string, params?: Record<string, string>) => {
    setRoute({ page, params });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <RouterContext.Provider value={{ route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

// ============================================================
// HORIZONTAL CAROUSEL
// ============================================================
export const HorizontalCarousel = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative group ${className}`}>
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto carousel-scroll"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            backgroundColor: colors.white,
            border: `1px solid ${colors.silver}`,
          }}
        >
          <ChevronLeft />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            backgroundColor: colors.white,
            border: `1px solid ${colors.silver}`,
          }}
        >
          <ChevronRight />
        </button>
      )}
    </div>
  );
};

// ============================================================
// TYPOGRAPHY COMPONENTS
// ============================================================
export const Eyebrow = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <p
    className={`uppercase tracking-widest ${className}`}
    style={{
      fontFamily: sans,
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "1.5px",
      color: colors.slate,
    }}
  >
    {children}
  </p>
);

export const SectionLabel = ({ children }: { children: ReactNode }) => (
  <Eyebrow className="mb-6">{children}</Eyebrow>
);

// ============================================================
// ARTICLE CARD
// ============================================================
export const ArticleCard = ({
  article,
  width = "w-64",
  onClick,
}: {
  article: {
    category: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    image?: string;
  };
  width?: string;
  onClick?: () => void;
}) => (
  <div
    className={`${width} flex-shrink-0 cursor-pointer group`}
    onClick={onClick}
  >
    <div
      className="w-full aspect-[4/3] mb-3 overflow-hidden"
      style={{ backgroundColor: colors.galleryGrey }}
    >
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      )}
    </div>
    <Eyebrow>{article.category}</Eyebrow>
    <h3
      className="mt-2 mb-2 group-hover:opacity-70 transition-opacity"
      style={{
        fontFamily: serif,
        fontSize: "18px",
        fontWeight: 500,
        lineHeight: 1.25,
        color: colors.charcoal,
      }}
    >
      {article.title}
    </h3>
    <p
      className="mb-2"
      style={{
        fontFamily: serif,
        fontSize: "14px",
        lineHeight: 1.5,
        color: colors.slate,
      }}
    >
      {article.excerpt}
    </p>
    <p style={{ fontFamily: sans, fontSize: "12px", color: colors.slate }}>
      {article.date} · {article.readTime}
    </p>
  </div>
);

// ============================================================
// NEWSLETTER BOX
// ============================================================
export const NewsletterBox = () => (
  <div className="p-6" style={{ backgroundColor: colors.galleryGrey }}>
    <Eyebrow>Join the S&S Club</Eyebrow>
    <p
      className="mt-3 mb-4"
      style={{
        fontFamily: serif,
        fontSize: "15px",
        lineHeight: 1.5,
        color: colors.charcoal,
      }}
    >
      One curated edition per month. No noise. No urgency. Just considered
      writing on objects, culture, and the pursuit of competence.
    </p>
    <input
      type="email"
      placeholder="EMAIL INPUT"
      className="w-full px-3 py-2 mb-3 outline-none"
      style={{
        fontFamily: sans,
        fontSize: "13px",
        border: `1px solid ${colors.silver}`,
        backgroundColor: colors.white,
        color: colors.charcoal,
      }}
    />
    <button
      className="w-full py-3 uppercase tracking-widest text-center transition-opacity hover:opacity-80"
      style={{
        fontFamily: sans,
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "1.5px",
        backgroundColor: colors.charcoal,
        color: colors.white,
      }}
    >
      Subscribe
    </button>
  </div>
);

// ============================================================
// BREADCRUMB
// ============================================================
export const Breadcrumb = ({
  items,
}: {
  items: { label: string; page?: string; params?: Record<string, string> }[];
}) => {
  const { navigate } = useRouter();
  return (
    <div
      className="flex items-center gap-2 mb-6 flex-wrap"
      style={{ fontFamily: sans, fontSize: "13px", color: colors.slate }}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span style={{ color: colors.silver }}>|</span>}
          {item.page ? (
            <button
              onClick={() => navigate(item.page!, item.params)}
              className="hover:opacity-60 transition-opacity"
              style={{ color: colors.charcoal }}
            >
              {item.label}
            </button>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
};

// ============================================================
// DIVIDER
// ============================================================
export const Divider = () => (
  <hr
    className="my-8"
    style={{ border: "none", borderTop: `1px solid ${colors.silver}` }}
  />
);

// ============================================================
// TAG PILL
// ============================================================
export const TagPill = ({
  label,
  active = false,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="px-4 py-2 uppercase tracking-widest transition-all hover:opacity-80"
    style={{
      fontFamily: sans,
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "1.5px",
      backgroundColor: active ? colors.charcoal : colors.white,
      color: active ? colors.white : colors.charcoal,
      border: `1px solid ${active ? colors.charcoal : colors.silver}`,
    }}
  >
    {label}
  </button>
);

// ============================================================
// ARTICLE LIST ITEM (for section/list views)
// ============================================================
export const ArticleListItem = ({
  article,
  onClick,
}: {
  article: {
    category: string;
    title: string;
    excerpt: string;
    author?: string;
    date: string;
    readTime: string;
    image?: string;
  };
  onClick?: () => void;
}) => (
  <div
    className="grid grid-cols-1 md:grid-cols-4 gap-6 py-6 cursor-pointer group"
    style={{ borderBottom: `1px solid ${colors.silver}` }}
    onClick={onClick}
  >
    <div className="md:col-span-3">
      <Eyebrow>{article.category}</Eyebrow>
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
        {article.title}
      </h3>
      <p
        className="mb-3"
        style={{
          fontFamily: serif,
          fontSize: "16px",
          lineHeight: 1.6,
          color: colors.charcoal,
          maxWidth: "65ch",
        }}
      >
        {article.excerpt}
      </p>
      <p style={{ fontFamily: sans, fontSize: "13px", color: colors.slate }}>
        {article.author && `${article.author} · `}
        {article.date} · {article.readTime}
      </p>
    </div>
    {article.image && (
      <div
        className="aspect-[4/3] overflow-hidden"
        style={{ backgroundColor: colors.galleryGrey }}
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>
    )}
  </div>
);

// ============================================================
// STANDARD ISSUE GRID CARD
// ============================================================
export const StandardIssueCard = ({
  item,
  onClick,
}: {
  item: {
    name: string;
    maker: string;
    category: string;
    legacy: boolean;
    image: string;
    description: string;
  };
  onClick?: () => void;
}) => (
  <div className="cursor-pointer group" onClick={onClick}>
    <div
      className="w-full aspect-[4/3] mb-3 overflow-hidden relative"
      style={{ backgroundColor: colors.galleryGrey }}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
      />
      {item.legacy && (
        <span
          className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-1 uppercase tracking-widest"
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
    </div>
    <Eyebrow>{item.category.toUpperCase()}</Eyebrow>
    <h3
      className="mt-2 mb-1 group-hover:opacity-70 transition-opacity"
      style={{
        fontFamily: serif,
        fontSize: "18px",
        fontWeight: 500,
        lineHeight: 1.25,
        color: colors.charcoal,
      }}
    >
      {item.name}
    </h3>
    <p
      style={{
        fontFamily: sans,
        fontSize: "13px",
        color: colors.slate,
      }}
    >
      {item.maker}
    </p>
    <p
      className="mt-2"
      style={{
        fontFamily: serif,
        fontSize: "14px",
        lineHeight: 1.5,
        color: colors.slate,
      }}
    >
      {item.description}
    </p>
  </div>
);

// ============================================================
// CONTRIBUTOR CARD
// ============================================================
export const ContributorCard = ({
  contributor,
  onClick,
}: {
  contributor: {
    name: string;
    role: string;
    image: string;
  };
  onClick?: () => void;
}) => (
  <div
    className="w-36 flex-shrink-0 text-center cursor-pointer group"
    onClick={onClick}
  >
    <div
      className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden"
      style={{ backgroundColor: colors.galleryGrey }}
    >
      <img
        src={contributor.image}
        alt={contributor.name}
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
      {contributor.name}
    </p>
    <p
      style={{
        fontFamily: sans,
        fontSize: "11px",
        color: colors.slate,
        marginTop: "2px",
      }}
    >
      {contributor.role}
    </p>
  </div>
);

// ============================================================
// SOCIAL LEDGER EVENT ITEM
// ============================================================
export const SocialLedgerEventItem = ({
  event,
  onClick,
}: {
  event: {
    label: string;
    title: string;
    location: string;
  };
  onClick?: () => void;
}) => (
  <div
    className="py-3 cursor-pointer hover:opacity-70 transition-opacity"
    style={{ borderBottom: `1px solid ${colors.silver}` }}
    onClick={onClick}
  >
    <p
      className="uppercase tracking-widest mb-1"
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
    <p
      style={{
        fontFamily: serif,
        fontSize: "15px",
        fontWeight: 400,
        color: colors.charcoal,
        lineHeight: 1.3,
      }}
    >
      {event.title}
    </p>
    <p
      style={{
        fontFamily: sans,
        fontSize: "12px",
        color: colors.slate,
        marginTop: "2px",
      }}
    >
      {event.location}
    </p>
  </div>
);

// ============================================================
// PROSE RENDERER (renders \n\n as paragraphs, ## as headings)
// ============================================================
export const Prose = ({ text }: { text: string }) => {
  const paragraphs = text.split("\n\n");
  return (
    <div>
      {paragraphs.map((p, i) => {
        if (p.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mt-8 mb-4"
              style={{
                fontFamily: serif,
                fontSize: "24px",
                fontWeight: 500,
                color: colors.charcoal,
                lineHeight: 1.25,
              }}
            >
              {p.replace("## ", "")}
            </h2>
          );
        }
        return (
          <p
            key={i}
            className="mb-5"
            style={{
              fontFamily: serif,
              fontSize: "18px",
              lineHeight: 1.75,
              color: colors.charcoal,
              maxWidth: "65ch",
            }}
          >
            {p}
          </p>
        );
      })}
    </div>
  );
};
