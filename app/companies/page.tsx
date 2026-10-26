import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Footer from "@/components/footer"
import SiteMenu from "@/components/site-menu"
import { showcasingCompanies } from "@/lib/showcasing-companies"

const NAVY = "#26235d"
const ORANGE = "lab(54.8% 66.8 56.8)"
const FONT =
  'var(--font-roboto-condensed), "Avenir Next Condensed", "Avenir", -apple-system, BlinkMacSystemFont, sans-serif'

export const metadata: Metadata = {
  title: "Showcasing Companies | Made Here 2026",
  description:
    "Meet the orthopedic contract manufacturers showcasing their capabilities at MADE HERE 2026 in Winona Lake, Indiana.",
}

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

/** Renders `**bold**` spans inside a string. */
function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-bold" style={{ color: NAVY }}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

/** A bio is either a paragraph or, when every line starts with "- ", a bullet list. */
function renderBio(text: string) {
  const lines = text.split("\n")
  if (lines.length > 1 && lines.every((l) => l.startsWith("- "))) {
    return (
      <ul className="list-disc pl-4 space-y-1.5 marker:text-[color:var(--bullet)]" style={{ "--bullet": ORANGE } as React.CSSProperties}>
        {lines.map((l, i) => (
          <li key={i}>{renderInline(l.slice(2))}</li>
        ))}
      </ul>
    )
  }
  return renderInline(text)
}

export default function CompaniesPage() {
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
          Showcasing Companies
        </h1>
        <p className="mt-5 max-w-2xl text-white/80 text-base sm:text-lg leading-relaxed">
          {showcasingCompanies.length} orthopedic contract manufacturers will take the floor at
          MADE HERE 2026, each milling a unique component to tell the story of the Orthopedic
          Capital of the World®.
        </p>
      </section>

      {/* ── Company grid ── */}
      <section className="px-6 py-14 sm:py-20 max-w-6xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {showcasingCompanies.map((c, i) => (
            <article
              key={c.slug}
              id={c.slug}
              className="flex flex-col rounded-xl border p-6 sm:p-7 scroll-mt-24"
              style={{ borderColor: "oklch(0.9 0 0)" }}
            >
              <p
                className="text-xs font-bold tracking-[0.2em] mb-3"
                style={{ color: ORANGE, fontFamily: FONT }}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              {c.logo ? (
                <Image
                  src={c.logo.src}
                  alt={c.name}
                  width={c.logo.width}
                  height={c.logo.height}
                  className="h-14 w-auto max-w-[220px] object-contain object-left mb-4"
                />
              ) : null}
              <h2
                className="text-2xl font-black uppercase leading-tight"
                style={{ fontFamily: FONT, color: NAVY }}
              >
                {c.name}
              </h2>

              <div className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                {renderBio(c.bio)}
              </div>

              <a
                href={c.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-black uppercase tracking-wide transition-opacity hover:opacity-80"
                style={{ fontFamily: FONT, color: NAVY }}
              >
                {hostname(c.website)}
                <ArrowUpRight className="size-4" style={{ color: ORANGE }} />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-black uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: NAVY, fontFamily: FONT }}
          >
            ← Back to Made Here 2026
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
