"use client"

import { Menu } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { showcasingCompanies } from "@/lib/showcasing-companies"

const NAVY = "#26235d"
const ORANGE = "lab(54.8% 66.8 56.8)"
const FONT =
  'var(--font-roboto-condensed), "Avenir Next Condensed", "Avenir", -apple-system, BlinkMacSystemFont, sans-serif'

const links = [
  { label: "Purchase Tickets", href: "https://www.zeffy.com/en-US/ticketing/made-here-manufacturing-showcase-2026-draft", external: true },
  { label: "Sponsorship", href: "/#sponsorship" },
  { label: "Agenda", href: "/#agenda" },
  { label: "2025 Recap", href: "/2025", external: true },
]

export default function SiteMenu() {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open menu"
        className="fixed top-4 right-4 z-40 flex items-center justify-center size-12 rounded-full border border-white/30 shadow-lg transition-opacity hover:opacity-90"
        style={{ backgroundColor: NAVY }}
      >
        <Menu className="size-6 text-white" />
      </SheetTrigger>

      {/* Main links first, so they stay visible on short laptop screens where the drawer scrolls. */}
      <SheetContent side="right" className="overflow-y-auto gap-0" aria-describedby={undefined}>
        <SheetTitle className="sr-only">Site menu</SheetTitle>

        <nav className="px-6 pt-14 pb-6 flex flex-col gap-1">
          {links.map(({ label, href, external }) => (
            <SheetClose asChild key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="rounded-lg px-3 py-2 text-lg font-black uppercase transition-colors hover:bg-black/5"
                style={{ fontFamily: FONT, color: NAVY, letterSpacing: "0.03em" }}
              >
                {label}
              </a>
            </SheetClose>
          ))}
        </nav>

        <section className="border-t px-6 pt-6 pb-8">
          <h2
            className="text-2xl font-black uppercase leading-tight"
            style={{ fontFamily: FONT, color: NAVY }}
          >
            Showcasing Companies
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {showcasingCompanies.length} companies registered to showcase at Made Here 2026.
          </p>
          <SheetClose asChild>
            <a
              href="/companies"
              className="mt-3 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wide hover:underline"
              style={{ color: ORANGE, fontFamily: FONT }}
            >
              View company profiles →
            </a>
          </SheetClose>

          <ul className="mt-4 space-y-1">
            {showcasingCompanies.map(({ name, slug }) => (
              <li key={slug}>
                <SheetClose asChild>
                  <a
                    href={`/companies#${slug}`}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-bold transition-colors bg-[oklch(0.97_0_0)] hover:bg-[oklch(0.93_0_0)]"
                    style={{ color: NAVY }}
                  >
                    <span className="size-2 shrink-0 rounded-full" style={{ backgroundColor: ORANGE }} />
                    {name}
                  </a>
                </SheetClose>
              </li>
            ))}
          </ul>
        </section>
      </SheetContent>
    </Sheet>
  )
}
