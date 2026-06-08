import Image from "next/image"
import Footer from "@/components/footer"
import SponsorTiers from "@/components/sponsor-tiers"

const NAVY = "oklch(0.15 0.04 264)"
const RED = "oklch(0.55 0.22 25)"
const FONT =
  'var(--font-roboto-condensed), "Avenir Next Condensed", "Avenir", -apple-system, BlinkMacSystemFont, sans-serif'

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* ── Hero ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-16 sm:py-24"
        style={{
          background: `linear-gradient(160deg, oklch(0.12 0.05 264) 0%, oklch(0.18 0.04 264) 60%, oklch(0.22 0.03 264) 100%)`,
        }}
      >
        <p
          className="text-sm sm:text-base font-bold uppercase tracking-widest mb-6"
          style={{ color: "oklch(0.75 0.05 264)", fontFamily: FONT }}
        >
          If it's Orthopedics,
        </p>
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-none mb-8"
          style={{ fontFamily: FONT, letterSpacing: "0.01em" }}
        >
          <span className="text-white">It's </span>
          <span style={{ color: RED }}>Made Here</span>
        </h1>

        <Image
          src="/2026-logo.png"
          alt="Made Here: A Manufacturing Showcase 2026"
          width={300}
          height={390}
          className="w-48 sm:w-64 md:w-72 h-auto my-8 drop-shadow-2xl"
          priority
        />

        {/* Event details */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-4 text-white">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📅</span>
            <span className="font-bold text-lg sm:text-xl" style={{ fontFamily: FONT }}>
              December 9, 2026
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📍</span>
            <span className="font-bold text-lg sm:text-xl text-left" style={{ fontFamily: FONT }}>
              Manahan Orthopedic Capital Center® (MOCC)<br />
              <span className="font-normal text-base opacity-80">Winona Lake, Indiana</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🕒</span>
            <span className="font-bold text-lg sm:text-xl" style={{ fontFamily: FONT }}>
              3:00 pm – 9:00 pm
            </span>
          </div>
        </div>

        {/* Tags */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-0 sm:divide-x divide-white/30 rounded-full border border-white/20 px-6 py-3"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          {["Networking", "Showcase", "Dinner", "After Party"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-0.5 text-sm sm:text-base font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: FONT }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Ticket CTA */}
        <a
          href="https://www.zeffy.com/en-US/ticketing/made-here-manufacturing-showcase-2026-draft"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block px-10 py-4 font-black uppercase text-xl rounded-xl transition-opacity hover:opacity-90"
          style={{
            fontFamily: FONT,
            backgroundColor: RED,
            color: "white",
            letterSpacing: "0.06em",
          }}
        >
          Purchase Tickets
        </a>
      </section>

      {/* ── Why Attend ── */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
        <h2
          className="text-4xl sm:text-5xl font-black uppercase text-center mb-12"
          style={{ fontFamily: FONT, color: NAVY, letterSpacing: "0.02em" }}
        >
          Why Attend?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: benefits list */}
          <div className="space-y-8">
            {[
              { icon: "👥", title: "Meet", sub: "Qualified Suppliers" },
              { icon: "🔍", title: "Discover", sub: "New Manufacturing Partners" },
              { icon: "🤝", title: "Connect", sub: "With Industry Leaders" },
              { icon: "⚙️", title: "Experience", sub: "Ecosystem Intelligence & Insights" },
            ].map(({ icon, title, sub }) => (
              <div key={title} className="flex items-start gap-4">
                <span className="text-3xl mt-0.5">{icon}</span>
                <div>
                  <p
                    className="text-xl font-black uppercase"
                    style={{ fontFamily: FONT, color: NAVY }}
                  >
                    {title}
                  </p>
                  <p className="text-muted-foreground">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: tagline + description */}
          <div className="flex flex-col justify-center">
            <p
              className="text-3xl sm:text-4xl font-black uppercase leading-tight mb-6"
              style={{ fontFamily: FONT, color: NAVY }}
            >
              Connect.<br />Collaborate.<br />
              <span style={{ color: RED }}>Create What's Next.</span>
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Join orthopedic OEMs, manufacturers, innovators, & suppliers for an
              exclusive evening of networking, discovery, & industry leadership in
              the{" "}
              <strong style={{ color: RED }}>Orthopedic Capital of the World®</strong>.
            </p>
          </div>
        </div>

        {/* Banner */}
        <div
          className="mt-16 rounded-xl px-8 py-5 text-center"
          style={{ backgroundColor: NAVY }}
        >
          <p
            className="text-white text-xl sm:text-2xl font-black uppercase tracking-widest"
            style={{ fontFamily: FONT }}
          >
            The <span style={{ color: RED }}>Orthopedic</span> Capital of the World®
          </p>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-5xl mx-auto px-6">
        <hr style={{ borderColor: "oklch(0.88 0 0)" }} />
      </div>

      {/* ── Sponsorship ── */}
      <SponsorTiers />

      {/* ── Hosted By ── */}
      <section className="py-12 px-6 text-center">
        <p
          className="text-sm font-bold uppercase tracking-widest mb-6"
          style={{ color: "oklch(0.55 0.02 264)", fontFamily: FONT }}
        >
          Hosted By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          <span
            className="text-2xl sm:text-3xl font-black"
            style={{ color: NAVY, fontFamily: FONT }}
          >
            KEDCO
          </span>
          <span className="text-muted-foreground text-2xl">|</span>
          <span
            className="text-2xl sm:text-3xl font-black"
            style={{ color: NAVY, fontFamily: FONT }}
          >
            Ortho<span style={{ color: RED }}>Worx</span>
          </span>
        </div>
      </section>

      <Footer />
    </main>
  )
}
