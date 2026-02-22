import { useState } from "react";
import { useRouter, Eyebrow } from "./components";
import { colors, serif, sans } from "./tokens";
import { HamburgerIcon, CloseIcon, SearchIcon, UserIcon } from "./icons";
import { sections } from "./data";

export const Header = () => {
  const { navigate } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <header
        className="w-full border-b"
        style={{ borderColor: colors.silver, backgroundColor: colors.archivalWhite }}
      >
        {/* Utility bar */}
        <div
          className="flex items-center justify-between px-6 py-2 border-b text-xs"
          style={{
            borderColor: colors.silver,
            fontFamily: sans,
            fontWeight: 500,
            fontSize: "13px",
            color: colors.charcoal,
          }}
        >
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setSearchOpen(false);
              }}
              className="hover:opacity-70 transition-opacity"
            >
              {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
            <button
              onClick={() => navigate("standard-issue")}
              className="hover:opacity-70 transition-opacity"
            >
              The Standard Issue
            </button>
            <button
              onClick={() => navigate("social-ledger")}
              className="hover:opacity-70 transition-opacity"
            >
              The Social Ledger
            </button>
          </div>
          <div className="flex items-center gap-5">
            <button className="hover:opacity-70 transition-opacity">
              Subscribe
            </button>
            <span style={{ color: colors.silver }}>|</span>
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                setMenuOpen(false);
              }}
              className="hover:opacity-70 transition-opacity"
            >
              <SearchIcon />
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <UserIcon />
            </button>
            <button
              className="hover:opacity-70 transition-opacity"
              style={{ fontWeight: 500 }}
            >
              Start Here
            </button>
          </div>
        </div>

        {/* Masthead */}
        <div
          className="text-center py-5 cursor-pointer"
          onClick={() => navigate("home")}
        >
          <p
            className="uppercase tracking-widest mb-1"
            style={{
              fontFamily: sans,
              fontSize: "10px",
              letterSpacing: "2px",
              color: colors.slate,
            }}
          >
            [Logotype]
          </p>
          <h1
            className="tracking-wide"
            style={{
              fontFamily: serif,
              fontSize: "28px",
              fontWeight: 400,
              color: colors.charcoal,
              letterSpacing: "3px",
            }}
          >
            THE STITCH & STANDARD
          </h1>
          <p
            className="uppercase tracking-widest mt-1"
            style={{
              fontFamily: sans,
              fontSize: "9px",
              letterSpacing: "2.5px",
              color: colors.slate,
            }}
          >
            A Digital Magazine for the Measured Gentleman
          </p>
        </div>

        {/* Section nav */}
        <nav
          className="flex justify-center gap-8 pb-4"
          style={{
            fontFamily: sans,
            fontSize: "15px",
            fontWeight: 500,
            color: colors.charcoal,
          }}
        >
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => navigate("section", { section: s })}
              className="hover:opacity-60 transition-opacity capitalize"
            >
              {s}
            </button>
          ))}
        </nav>
      </header>

      {/* Search overlay */}
      {searchOpen && (
        <div
          className="w-full py-6 px-6 border-b"
          style={{
            backgroundColor: colors.archivalWhite,
            borderColor: colors.silver,
          }}
        >
          <div className="max-w-2xl mx-auto">
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{ border: `1px solid ${colors.silver}` }}
            >
              <SearchIcon />
              <input
                type="text"
                placeholder="Search articles, objects, contributors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none"
                style={{
                  fontFamily: sans,
                  fontSize: "15px",
                  color: colors.charcoal,
                }}
                autoFocus
              />
            </div>
          </div>
        </div>
      )}

      {/* Menu overlay */}
      {menuOpen && (
        <div
          className="w-full py-8 px-6 border-b"
          style={{
            backgroundColor: colors.archivalWhite,
            borderColor: colors.silver,
          }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12">
            <div>
              <Eyebrow>Sections</Eyebrow>
              <ul className="space-y-3 mt-4">
                {sections.map((s) => (
                  <li key={s}>
                    <button
                      onClick={() => {
                        navigate("section", { section: s });
                        setMenuOpen(false);
                      }}
                      className="hover:opacity-60 transition-opacity capitalize"
                      style={{
                        fontFamily: sans,
                        fontSize: "15px",
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
              <ul className="space-y-3 mt-4">
                <li>
                  <button
                    onClick={() => {
                      navigate("standard-issue");
                      setMenuOpen(false);
                    }}
                    className="hover:opacity-60 transition-opacity"
                    style={{
                      fontFamily: sans,
                      fontSize: "15px",
                      color: colors.charcoal,
                    }}
                  >
                    The Standard Issue
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("social-ledger");
                      setMenuOpen(false);
                    }}
                    className="hover:opacity-60 transition-opacity"
                    style={{
                      fontFamily: sans,
                      fontSize: "15px",
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
              <ul className="space-y-3 mt-4">
                {["Our Philosophy", "Masthead", "Correspondence Directory"].map(
                  (item) => (
                    <li key={item}>
                      <button
                        className="hover:opacity-60 transition-opacity"
                        style={{
                          fontFamily: sans,
                          fontSize: "15px",
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
          </div>
        </div>
      )}
    </>
  );
};
