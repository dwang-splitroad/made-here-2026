"use client"

const NAVY = "oklch(0.15 0.04 264)"
const ORANGE = "lab(54.8% 66.8 56.8)"
const FONT =
  'var(--font-roboto-condensed), "Avenir Next Condensed", "Avenir", -apple-system, BlinkMacSystemFont, sans-serif'

interface Tier {
  name: string
  price: string
  highlight?: boolean
  description?: string
  benefits: string[]
}

const tiers: Tier[] = [
  {
    name: "Titanium Sponsorship",
    price: "$10,000",
    highlight: true,
    benefits: [
      "Eight (8) tickets to the event & dinner",
      "Reserved dinner table",
      "Ability to showcase and have an exhibition table in a premium location",
      "Priority logo placement on signage, website, and marketing materials",
      "Recognition in the event program",
      "Social media and digital promotion",
      "Verbal recognition during event",
    ],
  },
  {
    name: "Stainless Steel Sponsorship",
    price: "$7,500",
    benefits: [
      "Six (6) tickets to the event & dinner",
      "Ability to showcase and have an exhibition table",
      "Logo placement on signage, website, and marketing materials",
      "Recognition in the event program",
      "Social media mention",
    ],
  },
  {
    name: "Nitinol Sponsorship",
    price: "$5,000",
    benefits: [
      "Four (4) tickets to the event & dinner",
      "Logo placement on signage and website",
      "Recognition in the event program",
    ],
  },
  {
    name: "Polyethylene Sponsorship",
    price: "$2,500",
    benefits: [
      "Two (2) tickets to the event & dinner",
      "Logo placement on signage and website",
      "Recognition in the event program",
    ],
  },
  {
    name: "Showcase Team",
    price: "$1,000",
    description:
      "Showcasing teams will have the opportunity to take the stage and showcase their capabilities, expertise, and unique value to the orthopedic ecosystem. Each team will mill a unique component to help tell their story. To highlight the collaborative spirit that makes the Orthopedic Capital of the World® unique, each team is encouraged to partner with 2–3 additional ecosystem companies in the production of their unique component.",
    benefits: [
      "Exhibition display booth",
      "8-foot table",
      "Black table cover (you may bring your own branded cover)",
      "Two (2) tickets to the event and dinner",
    ],
  },
]

export default function SponsorTiers() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h2
          className="text-4xl sm:text-5xl font-bold uppercase mb-3"
          style={{ fontFamily: FONT, color: NAVY, letterSpacing: "0.02em" }}
        >
          Become a Sponsor
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Partner with Made Here 2026 and connect your brand with Indiana's most
          innovative manufacturers. Sponsorships support the event and showcase
          your commitment to local industry.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="rounded-2xl p-6 flex flex-col transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-lg"
            style={{
              border: `2px solid ${tier.highlight ? ORANGE : "oklch(0.88 0 0)"}`,
              backgroundColor: tier.highlight ? "oklch(0.97 0.01 25)" : "white",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = ORANGE
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = tier.highlight ? ORANGE : "oklch(0.88 0 0)"
            }}
          >
            <div className="mb-4">
              {tier.highlight && (
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: ORANGE }}
                >
                  ★ Featured
                </span>
              )}
              <h3
                className="text-2xl font-bold uppercase mt-1"
                style={{ fontFamily: FONT, color: NAVY }}
              >
                {tier.name}
              </h3>
              <p
                className="text-3xl font-bold mt-2"
                style={{ color: tier.highlight ? ORANGE : NAVY }}
              >
                {tier.price}
              </p>
            </div>

            {tier.description && (
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {tier.description}
              </p>
            )}

            <p
              className="text-xs font-bold uppercase tracking-wider mb-2"
              style={{ color: NAVY }}
            >
              Includes:
            </p>
            <ul className="flex-1 space-y-2 mb-6">
              {tier.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <span style={{ color: ORANGE }} className="mt-0.5 shrink-0">
                    ✓
                  </span>
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3">
        <a
          href="https://www.zeffy.com/en-US/ticketing/made-here-2026-sponsorships"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 text-white font-bold uppercase text-lg rounded-xl transition-opacity hover:opacity-90"
          style={{
            fontFamily: FONT,
            backgroundColor: NAVY,
            letterSpacing: "0.04em",
          }}
        >
          Become a Sponsor
        </a>
        <p className="text-sm text-muted-foreground">
          Sponsorship questions? Contact{" "}
          <a href="mailto:dwilkinson@kosciuskoedc.com" className="underline hover:no-underline" style={{ color: NAVY }}>
            dwilkinson@kosciuskoedc.com
          </a>
          <br />
          General questions?{" "}
          <a href="mailto:madehereindiana@gmail.com" className="underline hover:no-underline" style={{ color: NAVY }}>
            madehereindiana@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
