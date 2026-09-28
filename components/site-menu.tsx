"use client"

import { Menu } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const NAVY = "#26235d"
const ORANGE = "lab(54.8% 66.8 56.8)"
const FONT =
  'var(--font-roboto-condensed), "Avenir Next Condensed", "Avenir", -apple-system, BlinkMacSystemFont, sans-serif'

const showcasingCompanies = [
  "Precision Medical Technologies",
  "TriPoint",
  "LH Medical",
  "Avalign",
  "Red Star Manufacturing",
  "Micropulse/RMP",
  "Tecomet",
  "IMD",
  "Arch Medical",
  "Jatex",
]

const links = [
  { label: "Purchase Tickets", href: "https://www.zeffy.com/en-US/ticketing/made-here-manufacturing-showcase-2026-draft", external: true },
  { label: "Sponsorship", href: "#sponsorship" },
  { label: "Agenda", href: "#agenda" },
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

      <SheetContent side="right" className="overflow-y-auto gap-0">
        <SheetHeader className="p-6 pr-12 pb-4">
          <SheetTitle
            className="text-2xl font-black uppercase"
            style={{ fontFamily: FONT, color: NAVY }}
          >
            Showcasing Companies
          </SheetTitle>
          <SheetDescription>
            {showcasingCompanies.length} companies registered to showcase at Made Here 2026.
          </SheetDescription>
        </SheetHeader>

        <ul className="px-6 space-y-1">
          {showcasingCompanies.map((name) => (
            <li
              key={name}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-bold"
              style={{ color: NAVY, backgroundColor: "oklch(0.97 0 0)" }}
            >
              <span className="size-2 shrink-0 rounded-full" style={{ backgroundColor: ORANGE }} />
              {name}
            </li>
          ))}
        </ul>

        <nav className="mt-8 px-6 pb-8 pt-6 border-t flex flex-col gap-1">
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
      </SheetContent>
    </Sheet>
  )
}
