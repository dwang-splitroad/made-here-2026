import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Mic, Network, Search, Users, Utensils, Wine } from "lucide-react"
import Footer from "@/components/footer"
import SiteMenu from "@/components/site-menu"
import { showcasingCompanies } from "@/lib/showcasing-companies"

const NAVY = "#26235d"
const ORANGE = "lab(54.8% 66.8 56.8)"
const FONT =
  'var(--font-roboto-condensed), "Avenir Next Condensed", "Avenir", -apple-system, BlinkMacSystemFont, sans-serif'

const TICKETS_URL = "https://www.zeffy.com/en-US/ticketing/made-here-manufacturing-showcase-2026-draft"

export const metadata: Metadata = {
  title: "Why Attend | Made Here 2026",
  description:
    "MADE HERE is more than an orthopedic manufacturing showcase. Build relationships, discover new manufacturing partners, and connect with the people driving the orthopedic industry forward. December 9, 2026 in Winona Lake, Indiana.",
}

/**
 * Copy written by Matt Deuel (11/5/2026) and approved 11/10/2026.
 * Two wording changes from his draft, both to match the facts he sent on 11/10:
 * the company in the story is a contract manufacturer, so "OEM" reads "company",
 * and it opened a production site, so "local office" reads "local production site".
 * Per Matt: last year's attendance is 300; make no attendance claims for this year.
 */
export default function WhyAttendPage() {
  const count = showcasingCompanies.length

  const included = [
    {
      icon: Users,
      title: "Meaningful Connections",
      body: "Meet orthopedic manufacturers, suppliers, OEM representatives, and industry leaders.",
    },
    {
      icon: Search,
      title: "Supplier Discovery",
      body: `Explore the capabilities of ${count} showcasing manufacturers and discover potential new partners.`,
    },
    {
      icon: Network,
      title: "A Connected Ecosystem",
      body: "Engage with local businesses, industry partners, and educational institutions supporting innovation, workforce development, and the next generation of talent.",
    },
    {
      icon: Mic,
      title: "Industry Insights",
      body: "Hear directly from orthopedic industry leaders during a distinguished panel discussion.",
    },
    {
      icon: Utensils,
      title: "Dinner Included",
      body: "Enjoy a full dinner as part of the evening's program.",
    },
    {
      icon: Wine,
      title: "After-Party Access",
      body: "Keep the conversations going at Anthology Whiskey Room, with a complimentary drink and hors d'oeuvres.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <SiteMenu />

      {/* ── Header ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-16 sm:py-20"
        style={{ backgroundColor: NAVY }}
      >
        <Link href="/" className="mb-8">
          <Image
            src="/made-here-logo-white.png"
            alt="Made Here: A Manufacturing Showcase 2026"
            width={671}
            height={991}
            priority
            className="w-28 sm:w-36 h-auto drop-shadow-2xl"
          />
        </Link>
        <p
          className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-3"
          style={{ color: ORANGE, fontFamily: FONT }}
        >
          December 9, 2026 · Winona Lake, Indiana
        </p>
        <h1
          className="text-4xl sm:text-6xl font-black uppercase text-white leading-none"
          style={{ fontFamily: FONT }}
        >
          Why Attend MADE HERE?
        </h1>
        <p className="mt-5 max-w-2xl text-white/85 text-lg sm:text-2xl leading-snug">
          The right connections can change everything.
        </p>
      </section>

      {/* ── Intro + last year's story ── */}
      <section className="max-w-3xl mx-auto px-6 pt-14 sm:pt-20">
        <p className="text-lg sm:text-xl leading-relaxed" style={{ color: NAVY }}>
          MADE HERE is more than an orthopedic manufacturing showcase. It&apos;s an opportunity to
          build relationships, discover new manufacturing partners, and connect with the people and
          companies driving the orthopedic industry forward.
        </p>

        <div
          className="mt-10 rounded-xl p-6 sm:p-9"
          style={{
            backgroundColor: "oklch(0.975 0.004 264)",
            border: "1px solid oklch(0.9 0 0)",
            borderLeft: `5px solid ${ORANGE}`,
          }}
        >
          <p
            className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: ORANGE, fontFamily: FONT }}
          >
            Last Year at MADE HERE
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Last year&apos;s inaugural event brought together approximately 300 industry
            professionals. One visiting company was so impressed by the experience and the
            opportunities within our region that they said:
          </p>
          <blockquote
            className="my-6 text-3xl sm:text-4xl font-black uppercase leading-tight"
            style={{ fontFamily: FONT, color: NAVY }}
          >
            &ldquo;We feel like you made this event for us.&rdquo;
          </blockquote>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Today, that company has established a local production site to become part of this
            growing orthopedic ecosystem.
          </p>
        </div>

        <p
          className="mt-10 text-2xl sm:text-3xl font-black uppercase leading-tight text-center"
          style={{ fontFamily: FONT, color: NAVY }}
        >
          Imagine what one evening could mean for{" "}
          <span style={{ color: ORANGE }}>your business.</span>
        </p>
      </section>

      {/* ── What registration includes ── */}
      <section className="max-w-5xl mx-auto px-6 py-14 sm:py-20">
        <div className="text-center mb-10">
          <h2
            className="text-4xl sm:text-5xl font-black uppercase leading-none"
            style={{ fontFamily: FONT, color: NAVY, letterSpacing: "0.02em" }}
          >
            Big Opportunities. <span style={{ color: ORANGE }}>Incredible Value.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            For just <strong style={{ color: NAVY }}>$75</strong>, your registration includes:
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {included.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="rounded-xl border p-6"
              style={{ borderColor: "oklch(0.9 0 0)" }}
            >
              <span
                className="flex size-11 items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: NAVY }}
              >
                <Icon className="size-5 text-white" aria-hidden="true" />
              </span>
              <h3
                className="text-xl font-black uppercase leading-tight mb-2"
                style={{ fontFamily: FONT, color: NAVY }}
              >
                {title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Closing call to action ── */}
      <section className="px-6 py-16 sm:py-20 text-center" style={{ backgroundColor: NAVY }}>
        <p
          className="text-3xl sm:text-5xl font-black uppercase text-white leading-tight"
          style={{ fontFamily: FONT, letterSpacing: "0.02em" }}
        >
          One evening. Real connections.{" "}
          <span style={{ color: ORANGE }}>Endless possibilities.</span>
        </p>
        <p className="mt-5 text-base sm:text-xl text-white/85">
          Join us December 9 in the Orthopedic Capital of the World®.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={TICKETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto px-10 py-4 font-black uppercase text-xl rounded-xl transition-opacity hover:opacity-90"
            style={{ fontFamily: FONT, backgroundColor: ORANGE, color: "white", letterSpacing: "0.06em" }}
          >
            Purchase Tickets
          </a>
          <Link
            href="/companies"
            className="inline-block w-full sm:w-auto px-10 py-4 font-black uppercase text-xl rounded-xl border border-white/40 text-white transition-colors hover:bg-white/10"
            style={{ fontFamily: FONT, letterSpacing: "0.06em" }}
          >
            Meet the Companies
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
