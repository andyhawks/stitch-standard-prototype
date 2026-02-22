import {
  useRouter,
  Breadcrumb,
  Eyebrow,
  Prose,
  Divider,
  NewsletterBox,
} from "../components";
import { colors, serif, sans } from "../tokens";
import { socialLedgerEvents } from "../data";

export const SocialLedgerDetailPage = ({ id }: { id: string }) => {
  const { navigate } = useRouter();
  const event = socialLedgerEvents.find((e) => e.id === id);

  if (!event) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p style={{ fontFamily: serif, fontSize: "24px", color: colors.charcoal }}>
          Event not found.
        </p>
        <button
          onClick={() => navigate("social-ledger")}
          className="mt-4 hover:opacity-60 transition-opacity"
          style={{
            fontFamily: sans,
            fontSize: "14px",
            color: colors.cordovan,
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          ← Return to The Social Ledger
        </button>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 pt-8 pb-12">
      <Breadcrumb
        items={[
          { label: "Home", page: "home" },
          { label: "The Social Ledger", page: "social-ledger" },
          { label: event.title },
        ]}
      />

      <Eyebrow>{event.label}</Eyebrow>
      <h1
        className="mt-3 mb-3"
        style={{
          fontFamily: serif,
          fontSize: "42px",
          fontWeight: 400,
          color: colors.charcoal,
          lineHeight: 1.15,
        }}
      >
        {event.title}
      </h1>

      {/* Meta */}
      <div
        className="py-4 mb-6"
        style={{
          borderTop: `1px solid ${colors.silver}`,
          borderBottom: `1px solid ${colors.silver}`,
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
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
              Location
            </p>
            <p
              style={{
                fontFamily: sans,
                fontSize: "14px",
                color: colors.charcoal,
              }}
            >
              {event.location}
            </p>
          </div>
          <div>
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
              Dates
            </p>
            <p
              style={{
                fontFamily: sans,
                fontSize: "14px",
                color: colors.charcoal,
              }}
            >
              {event.dates}
            </p>
          </div>
          <div>
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
              Venue
            </p>
            <p
              style={{
                fontFamily: sans,
                fontSize: "14px",
                color: colors.charcoal,
              }}
            >
              {event.venue}
            </p>
          </div>
          {event.socialEditor && (
            <div>
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
                Social Editor
              </p>
              <p
                style={{
                  fontFamily: sans,
                  fontSize: "14px",
                  color: colors.charcoal,
                }}
              >
                {event.socialEditor}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <Prose text={event.description} />

      {/* Programme */}
      {event.programStructure && (
        <>
          <Divider />
          <Eyebrow className="mb-4">Programme & Structure</Eyebrow>
          <Prose text={event.programStructure} />
        </>
      )}

      {/* Dress Code */}
      {event.dressCode && (
        <>
          <Divider />
          <Eyebrow className="mb-4">Dress Code & Conduct</Eyebrow>
          <Prose text={event.dressCode} />
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
