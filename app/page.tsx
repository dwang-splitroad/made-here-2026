import Image from "next/image"
import Footer from "@/components/footer"
import SponsorTiers from "@/components/sponsor-tiers"

const NAVY = "oklch(0.15 0.04 264)"
const ORANGE = "lab(54.8% 66.8 56.8)"
const FONT =
  'var(--font-roboto-condensed), "Avenir Next Condensed", "Avenir", -apple-system, BlinkMacSystemFont, sans-serif'

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* ── Hero ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-16 sm:py-24"
        style={{ backgroundColor: "#26235d" }}
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
          <span style={{ color: ORANGE }}>Made Here</span>
        </h1>

        <Image
          src="/made-here-logo-white.png"
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
          style={{ fontFamily: FONT, backgroundColor: ORANGE, color: "white", letterSpacing: "0.06em" }}
        >
          Purchase Tickets
        </a>
      </section>

      {/* ── Why Attend + About ── */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left: Why Attend */}
          <div>
            <h2
              className="text-4xl sm:text-5xl font-black uppercase mb-8"
              style={{ fontFamily: FONT, color: NAVY, letterSpacing: "0.02em" }}
            >
              Why Attend?
            </h2>
            <div className="space-y-7">
              {[
                { icon: "👥", title: "Meet", sub: "Qualified Suppliers" },
                { icon: "🔍", title: "Discover", sub: "New Manufacturing Partners" },
                { icon: "🤝", title: "Connect", sub: "With Industry Leaders" },
                { icon: "⚙️", title: "Experience", sub: "Ecosystem Intelligence & Insights" },
              ].map(({ icon, title, sub }) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="text-3xl mt-0.5">{icon}</span>
                  <div>
                    <p className="text-xl font-black uppercase" style={{ fontFamily: FONT, color: NAVY }}>
                      {title}
                    </p>
                    <p className="text-muted-foreground">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Event Structure */}
            <div className="mt-10">
              <h3
                className="text-xl font-black uppercase mb-4"
                style={{ fontFamily: FONT, color: NAVY }}
              >
                Event Structure & Experience
              </h3>
              <ul className="space-y-2">
                {[
                  "Open Networking & Manufacturing Showcase",
                  "Contract Manufacturing Exhibits",
                  "Panel Discussion with Industry Leaders & World Renown Surgeon",
                  "Ecosystem and Talent Visibility",
                  "Regional Supplier and Capability Discovery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span style={{ color: ORANGE }} className="shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: About */}
          <div>
            <p
              className="text-3xl sm:text-4xl font-black uppercase leading-tight mb-6"
              style={{ fontFamily: FONT, color: NAVY }}
            >
              Connect.<br />Collaborate.<br />
              <span style={{ color: ORANGE }}>Create What's Next.</span>
            </p>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                MADE HERE 2026 is a regional orthopedic manufacturing showcase bringing together the
                Midwest's strongest orthopedic ecosystem with OEMs from across the country. Hosted by{" "}
                <strong style={{ color: NAVY }}>KEDCO</strong> and{" "}
                <strong style={{ color: NAVY }}>OrthoWorx</strong>, this one-night showcase highlights
                the depth, diversity, and technical excellence of orthopedic manufacturing while
                celebrating that the epicenter of the industry remains Kosciusko County, Warsaw,
                Indiana: <strong style={{ color: ORANGE }}>The Orthopedic Capital of the World®</strong>.
              </p>
              <p>
                Building on the success of prior MADE HERE events, the 2026 showcase expands the lens
                beyond county lines to emphasize the Midwest orthopedic manufacturing ecosystem,
                reinforcing why this region continues to set the global standard for orthopedic
                innovation, production, and scale.
              </p>
              <p>
                Whether you're seeking a strategic supplier, a technical partner, or a glimpse into
                the future of orthopedic manufacturing, MADE HERE is where it begins.
              </p>
            </div>

            {/* 2026 Technical Focus */}
            <div
              className="mt-8 rounded-xl p-6"
              style={{ backgroundColor: NAVY }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: ORANGE, fontFamily: FONT }}
              >
                2026 Technical Focus
              </p>
              <p
                className="text-xl font-black uppercase text-white mb-3"
                style={{ fontFamily: FONT }}
              >
                CNC Milling: Advanced Axis Milling
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Demonstrating how multi-axis precision machining enables complex geometries, tighter
                tolerances, improved throughput, and next-generation orthopedic solutions — from
                implants to instrumentation and enabling technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div
          className="mt-14 rounded-xl px-8 py-5 text-center"
          style={{ backgroundColor: NAVY }}
        >
          <p
            className="text-white text-xl sm:text-2xl font-black uppercase tracking-widest"
            style={{ fontFamily: FONT }}
          >
            The <span style={{ color: ORANGE }}>Orthopedic</span> Capital of the World®
          </p>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-5xl mx-auto px-6">
        <hr style={{ borderColor: "oklch(0.88 0 0)" }} />
      </div>

      {/* ── Sponsorship ── */}
      <SponsorTiers />

      {/* ── Divider ── */}
      <div className="max-w-5xl mx-auto px-6">
        <hr style={{ borderColor: "oklch(0.88 0 0)" }} />
      </div>

      {/* ── Agenda ── */}
      <section
        className="py-16 sm:py-20 px-6"
        style={{ backgroundColor: "oklch(0.97 0.005 264)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-4xl sm:text-5xl font-black uppercase text-center mb-10"
            style={{ fontFamily: FONT, color: NAVY, letterSpacing: "0.02em" }}
          >
            Agenda
          </h2>
          <div className="space-y-0">
            {[
              { time: "3:00 – 5:30 p.m.", label: "Networking Event" },
              { time: "5:45 p.m.", label: "Program, Dinner & Distinguished Panel" },
              { time: "6:30 p.m.", label: "Showcase" },
              { time: "8:40 p.m.", label: "Close" },
              { time: "9:00 p.m.", label: "After-party at Anthology Whiskey Room" },
            ].map(({ time, label }, i, arr) => (
              <div
                key={time}
                className="flex items-start gap-6 py-5"
                style={{ borderBottom: i < arr.length - 1 ? "1px solid oklch(0.88 0 0)" : "none" }}
              >
                <span
                  className="text-sm font-bold uppercase tracking-wide shrink-0 w-36 pt-0.5"
                  style={{ color: ORANGE, fontFamily: FONT }}
                >
                  {time}
                </span>
                <span className="text-lg font-bold uppercase" style={{ color: NAVY, fontFamily: FONT }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center mt-8 italic">
            * Dietary restriction? We'd love to accommodate.{" "}
            <a
              href="mailto:emacias-chavez@kosciuskoedc.com"
              className="underline hover:no-underline"
              style={{ color: NAVY }}
            >
              emacias-chavez@kosciuskoedc.com
            </a>
          </p>
        </div>
      </section>

      {/* ── Hosted By ── */}
      <section className="py-12 px-6 text-center border-t" style={{ borderColor: "oklch(0.88 0 0)" }}>
        <p
          className="text-sm font-bold uppercase tracking-widest mb-6"
          style={{ color: "oklch(0.55 0.02 264)", fontFamily: FONT }}
        >
          Special Thanks to Event Hosts
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          <Image
            src="/kedco-logo.png"
            alt="KEDCO – Kosciusko Economic Development Corporation"
            width={200}
            height={80}
            className="h-14 sm:h-16 w-auto object-contain"
          />
          <span className="text-muted-foreground text-2xl">|</span>
          <Image
            src="/orthoworx-logo.png"
            alt="OrthoWorx"
            width={200}
            height={80}
            className="h-14 sm:h-16 w-auto object-contain"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
