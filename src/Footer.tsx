import { useRouter, Eyebrow, NewsletterBox } from "./components";
import { colors, sans } from "./tokens";
import { sections } from "./data";

export const Footer = () => {
  const { navigate } = useRouter();

  return (
    <footer
      className="border-t py-12"
      style={{ borderColor: colors.silver, backgroundColor: colors.archivalWhite }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <Eyebrow>Sections</Eyebrow>
            <ul className="space-y-2 mt-4">
              {sections.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => navigate("section", { section: s })}
                    className="hover:opacity-60 transition-opacity capitalize"
                    style={{
                      fontFamily: sans,
                      fontSize: "14px",
                      color: colors.charcoal,
                    }}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Tools</Eyebrow>
            <ul className="space-y-2 mt-4">
              <li>
                <button
                  onClick={() => navigate("standard-issue")}
                  className="hover:opacity-60 transition-opacity"
                  style={{
                    fontFamily: sans,
                    fontSize: "14px",
                    color: colors.charcoal,
                  }}
                >
                  The Standard Issue
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("social-ledger")}
                  className="hover:opacity-60 transition-opacity"
                  style={{
                    fontFamily: sans,
                    fontSize: "14px",
                    color: colors.charcoal,
                  }}
                >
                  The Social Ledger
                </button>
              </li>
            </ul>
          </div>
          <div>
            <Eyebrow>About</Eyebrow>
            <ul className="space-y-2 mt-4">
              {["Our Philosophy", "Correspondence Directory", "Masthead"].map(
                (item) => (
                  <li key={item}>
                    <button
                      className="hover:opacity-60 transition-opacity"
                      style={{
                        fontFamily: sans,
                        fontSize: "14px",
                        color: colors.charcoal,
                      }}
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <Eyebrow>Legal</Eyebrow>
            <ul className="space-y-2 mt-4">
              {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map(
                (item) => (
                  <li key={item}>
                    <button
                      className="hover:opacity-60 transition-opacity"
                      style={{
                        fontFamily: sans,
                        fontSize: "14px",
                        color: colors.charcoal,
                      }}
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <NewsletterBox />
          </div>
        </div>
        <div
          className="mt-12 pt-6 text-right border-t"
          style={{ borderColor: colors.silver }}
        >
          <p
            style={{
              fontFamily: sans,
              fontSize: "12px",
              color: colors.slate,
            }}
          >
            © 2026 The Stitch & Standard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
