import { SITE_URL } from "@/lib/site-metadata"

/**
 * Structured data (schema.org JSON-LD) for search engines, rendered on the home page.
 *
 * Built from the schema Split Road Media wrote on 11/27/2026. Sponsors and speakers are
 * filled in from the same lists the page shows, so adding a sponsor or speaker on the
 * site updates this too. Never hand-copy those lists here.
 */

export const TICKETS_URL =
  "https://www.zeffy.com/en-US/ticketing/made-here-manufacturing-showcase-2026-draft"

type SchemaSponsor = { name: string; alt?: string; url?: string }
type SchemaSponsorTier = { label: string; sponsors: SchemaSponsor[] }
type SchemaSpeaker = { role: string; name: string; credentials?: string; organization: string }

const AFTER_PARTY_TIER = "After-Party Sponsor"

/** The name a logo spells out (its alt text) is the sponsor's name as they present it */
function org(sp: SchemaSponsor) {
  return {
    "@type": "Organization",
    name: sp.alt ?? sp.name,
    ...(sp.url ? { url: sp.url } : {}),
  }
}

export function buildEventSchema({
  sponsorTiers,
  speakers,
}: {
  sponsorTiers: SchemaSponsorTier[]
  speakers: SchemaSpeaker[]
}) {
  const sponsors = sponsorTiers.filter((t) => t.label !== AFTER_PARTY_TIER).flatMap((t) => t.sponsors)
  const afterParty = sponsorTiers.find((t) => t.label === AFTER_PARTY_TIER)?.sponsors ?? []

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Made Here",
        url: SITE_URL,
        // Navy logo: search engines show it on a white background, where the white one disappears
        logo: `${SITE_URL}/2026-logo.png`,
        email: "madehereindiana@gmail.com",
        description:
          "A regional orthopedic manufacturing showcase bringing together the Midwest's strongest orthopedic ecosystem.",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Made Here 2026",
        inLanguage: "en-US",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Event",
        "@id": `${SITE_URL}/#event-2026`,
        name: "Made Here: A Manufacturing Showcase 2026",
        description:
          "An exclusive evening of networking, discovery, and industry leadership in the Orthopedic Capital of the World®. A regional orthopedic manufacturing showcase connecting manufacturers, suppliers, and OEMs, featuring Advanced Axis CNC Milling.",
        url: SITE_URL,
        image: `${SITE_URL}/made-here-2026-share.png`,
        startDate: "2026-12-09T15:00:00-05:00",
        endDate: "2026-12-09T21:00:00-05:00",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: "Manahan Orthopaedic Capital Center (MOCC)",
          // Address as published by Grace College, which owns the building
          address: {
            "@type": "PostalAddress",
            streetAddress: "610 Wooster Road",
            addressLocality: "Winona Lake",
            addressRegion: "IN",
            postalCode: "46590",
            addressCountry: "US",
          },
        },
        organizer: [
          { "@type": "Organization", name: "Kosciusko Economic Development Corporation (KEDCO)" },
          { "@type": "Organization", name: "OrthoWorx" },
          { "@type": "Organization", name: "Priority Medical" },
        ],
        sponsor: sponsors.map(org),
        performer: speakers.map((s) => ({
          "@type": "Person",
          name: s.name,
          ...(s.credentials ? { honorificSuffix: s.credentials } : {}),
          jobTitle: s.role,
          affiliation: { "@type": "Organization", name: s.organization },
        })),
        // Tickets only. Sponsorship packages are left out: search engines read every offer on
        // an event as a ticket price, which would list tickets as "from $1,000 to $10,000".
        offers: {
          "@type": "Offer",
          name: "General Admission (includes full program, dinner buffet, and after-party)",
          url: TICKETS_URL,
          price: "75",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validThrough: "2026-12-09T15:00:00-05:00",
        },
        subEvent: {
          "@type": "Event",
          name: "Made Here After-Party",
          description: "After-party included with registration.",
          startDate: "2026-12-09T21:00:00-05:00",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: "Anthology Whiskey Room",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Winona Lake",
              addressRegion: "IN",
              addressCountry: "US",
            },
          },
          ...(afterParty.length ? { sponsor: afterParty.map(org) } : {}),
        },
        superEvent: {
          "@type": "EventSeries",
          name: "Made Here: A Manufacturing Showcase",
          url: SITE_URL,
        },
      },
    ],
  }
}

/** JSON for a <script type="application/ld+json">, with "<" escaped so the text can't close the tag */
export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}
