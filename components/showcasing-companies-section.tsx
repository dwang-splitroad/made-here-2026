import Image from "next/image"
import Link from "next/link"
import { showcasingCompanies } from "@/lib/showcasing-companies"

const NAVY = "#26235d"
const ORANGE = "lab(54.8% 66.8 56.8)"
const FONT =
  'var(--font-roboto-condensed), "Avenir Next Condensed", "Avenir", -apple-system, BlinkMacSystemFont, sans-serif'

/**
 * Home-page strip that surfaces the showcasing companies next to "Why Attend?"
 * so an OEM visitor sees who they can meet without opening the menu.
 * Data comes from lib/showcasing-companies.ts; the count updates automatically.
 */
export default function ShowcasingCompaniesSection() {
  const count = showcasingCompanies.length

  return (
    <section
      id="showcasing-companies"
      className="px-6 pt-12 pb-16 sm:pt-16 sm:pb-20 scroll-mt-8"
      style={{ backgroundColor: "oklch(0.975 0.004 264)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <p
            className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-3"
            style={{ color: ORANGE, fontFamily: FONT }}
          >
            {count} Companies Confirmed
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black uppercase leading-none mb-5"
            style={{ fontFamily: FONT, color: NAVY, letterSpacing: "0.02em" }}
          >
            Meet the Companies Showcasing at MADE HERE
          </h2>
          {/* Intro copy approved by Matt Deuel, 11/4/2026 */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            The MADE HERE Showcase brings together leading orthopedic manufacturers to highlight
            their expertise, innovative technologies, and manufacturing capabilities. Discover the
            companies, craftsmanship, and solutions helping shape the future of the orthopedic
            industry.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {showcasingCompanies.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/companies#${c.slug}`}
                title={c.name}
                aria-label={`${c.name} – view profile`}
                className="group flex h-24 sm:h-28 items-center justify-center rounded-xl border bg-white px-4 sm:px-6 transition-shadow hover:shadow-md"
                style={{ borderColor: "oklch(0.9 0 0)" }}
              >
                {c.logo ? (
                  <Image
                    src={c.logo.src}
                    alt={c.name}
                    width={c.logo.width}
                    height={c.logo.height}
                    // Square-ish marks need more height than wide wordmarks to read at the same size
                    className={`w-auto max-w-full object-contain transition-transform group-hover:scale-[1.03] ${
                      c.logo.width / c.logo.height < 1.6 ? "max-h-16 sm:max-h-20" : "max-h-10 sm:max-h-12"
                    }`}
                  />
                ) : (
                  <span
                    className="text-center text-lg font-bold leading-tight"
                    style={{ color: NAVY, fontFamily: FONT }}
                  >
                    {c.name}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <Link
            href="/companies"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-black uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: NAVY, fontFamily: FONT }}
          >
            View All Showcasing Companies
            <span aria-hidden="true">→</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Company profiles include a short bio and a link to each website.
          </p>
        </div>
      </div>
    </section>
  )
}
