const NAVY = "oklch(0.15 0.04 264)"
const RED = "oklch(0.55 0.22 25)"
const FONT =
  'var(--font-roboto-condensed), "Avenir Next Condensed", "Avenir", -apple-system, BlinkMacSystemFont, sans-serif'

interface Tier {
  name: string
  price: string
  highlight?: boolean
  benefits: string[]
}

const tiers: Tier[] = [
  {
    name: "Title Sponsor",
    price: "$10,000",
    highlight: true,
    benefits: [
      "Exclusive title naming rights to the event",
      "Premier booth placement",
      "Logo on all event materials, signage, and digital media",
      "Featured in press releases and social media campaigns",
      "VIP table for 10 at the showcase",
      "Speaking opportunity during the event",
      "Full-page ad in the event program",
      "Logo on event t-shirts",
      "Post-event highlight video feature",
    ],
  },
  {
    name: "Gold Sponsor",
    price: "$5,000",
    benefits: [
      "Logo on event signage and digital media",
      "Prominent booth placement",
      "Half-page ad in the event program",
      "VIP table for 6 at the showcase",
      "Logo on event t-shirts",
      "Social media recognition",
      "Post-event recap mention",
    ],
  },
  {
    name: "Silver Sponsor",
    price: "$2,500",
    benefits: [
      "Logo on event signage",
      "Booth space at the showcase",
      "Quarter-page ad in the event program",
      "4 tickets to the showcase",
      "Social media recognition",
    ],
  },
  {
    name: "Bronze Sponsor",
    price: "$1,000",
    benefits: [
      "Name listed on event signage",
      "2 tickets to the showcase",
      "Name in the event program",
      "Social media shout-out",
    ],
  },
  {
    name: "Supporter",
    price: "$500",
    benefits: [
      "Name listed in the event program",
      "2 tickets to the showcase",
      "Social media recognition",
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
          Partner with Made Here 2026 and connect your brand with Indiana's
          most innovative manufacturers. Sponsorships support the event and
          showcase your commitment to local industry.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="rounded-2xl border p-6 flex flex-col"
            style={{
              borderColor: tier.highlight ? RED : "oklch(0.88 0 0)",
              borderWidth: tier.highlight ? 2 : 1,
              backgroundColor: tier.highlight
                ? "oklch(0.97 0.01 25)"
                : "white",
            }}
          >
            <div className="mb-4">
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: tier.highlight ? RED : "oklch(0.55 0.02 264)" }}
              >
                {tier.highlight ? "★ Featured" : "Sponsor"}
              </span>
              <h3
                className="text-2xl font-bold uppercase mt-1"
                style={{ fontFamily: FONT, color: NAVY }}
              >
                {tier.name}
              </h3>
              <p
                className="text-3xl font-bold mt-2"
                style={{ color: tier.highlight ? RED : NAVY }}
              >
                {tier.price}
              </p>
            </div>

            <ul className="flex-1 space-y-2 mb-6">
              {tier.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <span style={{ color: RED }} className="mt-0.5 shrink-0">
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
          Questions? Contact us at{" "}
          <a
            href="mailto:hello@splitroadmedia.com"
            className="underline hover:no-underline"
            style={{ color: NAVY }}
          >
            hello@splitroadmedia.com
          </a>
        </p>
      </div>
    </section>
  )
}
