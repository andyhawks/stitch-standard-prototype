import { useState } from "react";
import {
  useRouter,
  Breadcrumb,
  SectionLabel,
  StandardIssueCard,
  TagPill,
} from "../components";
import { colors, serif, sans } from "../tokens";
import { standardIssueItems } from "../data";

export const StandardIssuePage = () => {
  const { navigate } = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(standardIssueItems.map((i) => i.category))),
  ];

  const filtered =
    activeFilter === "All"
      ? standardIssueItems
      : standardIssueItems.filter((i) => i.category === activeFilter);

  return (
    <main className="max-w-6xl mx-auto px-6 pt-8 pb-12">
      <Breadcrumb
        items={[
          { label: "Home", page: "home" },
          { label: "The Standard Issue" },
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
        The Standard Issue
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
        A curated collection of objects evaluated for durability, repairability,
        and timeless design. Each item has been tested, maintained, and
        reconsidered over time.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <TagPill
            key={cat}
            label={cat}
            active={activeFilter === cat}
            onClick={() => setActiveFilter(cat)}
          />
        ))}
      </div>

      <SectionLabel>{filtered.length} Objects</SectionLabel>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item) => (
          <StandardIssueCard
            key={item.id}
            item={item}
            onClick={() =>
              navigate("standard-issue-detail", { id: item.id })
            }
          />
        ))}
      </div>
    </main>
  );
};
