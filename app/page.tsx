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
          style={{
            fontFamily: FONT,
            backgroundColor: ORANGE,
            color: "white",
            letterSpacing: "0.06em",
          }}
        >
          Purchase Tickets
        </a>
      </section>

      {/* ── About ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
        <h2
          className="text-4xl sm:text-5xl font-black uppercase text-center mb-8"
          style={{ fontFamily: FONT, color: NAVY, letterSpacing: "0.02em" }}
        >
          About the Event
        </h2>
        <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          <p>
            MADE HERE 2026 is a regional orthopedic manufacturing showcase bringing together the
            Midwest's strongest orthopedic ecosystem with OEMs from across the country. Hosted by{" "}
            <strong style={{ color: NAVY }}>Kosciusko Economic Development Corporation (KEDCO)</strong>{" "}
            and <strong style={{ color: NAVY }}>OrthoWorx</strong>, this one-night showcase highlights
            the depth, diversity, and technical excellence of orthopedic manufacturing capabilities
            while celebrating that the epicenter of the industry remains Kosciusko County, Warsaw,
            Indiana: <strong style={{ color: ORANGE }}>The Orthopedic Capital of the World®</strong>.
          </p>
          <p>
            Building on the success of prior MADE HERE events, the 2026 showcase expands the lens
            beyond county lines to emphasize the Midwest orthopedic manufacturing ecosystem,
            reinforcing why this region continues to set the global standard for orthopedic
            innovation, production, and scale.
          </p>
          <p>
            We welcome OEMs from across the country and around the world, forging new relationships
            and unlocking new possibilities within this vibrant ecosystem. Whether you're seeking a
            strategic supplier, a technical partner, or a glimpse into the future of orthopedic
            manufacturing, MADE HERE is where it begins.
          </p>
        </div>
      </section>

      {/* ── 2026 Technical Focus ── */}
      <section
        className="py-16 sm:py-20 px-6"
        style={{ backgroundColor: "oklch(0.97 0.005 264)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-2"
            style={{ color: ORANGE, fontFamily: FONT }}
          >
            2026 Technical Focus
          </p>
          <h2
            className="text-3xl sm:text-4xl font-black uppercase mb-6"
            style={{ fontFamily: FONT, color: NAVY }}
          >
            CNC Milling: Advanced Axis Milling
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
            The 2026 MADE HERE showcase will spotlight <strong style={{ color: NAVY }}>Advanced Axis Milling</strong>,
            demonstrating how multi-axis precision machining enables complex geometries, tighter
            tolerances, improved throughput, and next-generation orthopedic solutions. From implants
            to instrumentation and enabling technologies, attendees will experience firsthand how
            axis milling capabilities are shaping the future of orthopedic manufacturing.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
            Contract manufacturers ranging from legacy leaders to emerging innovators will showcase
            applications, capacity, and scalability — positioning MADE HERE as a critical supplier
            discovery and qualification event for OEMs.
          </p>

          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ backgroundColor: NAVY }}
          >
            <p
              className="text-white font-black uppercase text-lg sm:text-xl mb-4"
              style={{ fontFamily: FONT }}
            >
              OEMs Can Expect:
            </p>
            <ul className="space-y-3">
              {[
                "Targeted networking with contract manufacturing teams",
                "Dedicated booth showcases",
                "Deeper technical sourcing conversations in a focused setting",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/90">
                  <span style={{ color: ORANGE }} className="shrink-0 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Why Attend ── */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <h2
          className="text-4xl sm:text-5xl font-black uppercase text-center mb-12"
          style={{ fontFamily: FONT, color: NAVY, letterSpacing: "0.02em" }}
        >
          Why Attend?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                  <p className="text-xl font-black uppercase" style={{ fontFamily: FONT, color: NAVY }}>
                    {title}
                  </p>
                  <p className="text-muted-foreground">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center">
            <p
              className="text-3xl sm:text-4xl font-black uppercase leading-tight mb-6"
              style={{ fontFamily: FONT, color: NAVY }}
            >
              Connect.<br />Collaborate.<br />
              <span style={{ color: ORANGE }}>Create What's Next.</span>
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Join orthopedic OEMs, manufacturers, innovators, & suppliers for an exclusive evening
              of networking, discovery, & industry leadership in the{" "}
              <strong style={{ color: ORANGE }}>Orthopedic Capital of the World®</strong>.
            </p>
          </div>
        </div>

        {/* Event Structure */}
        <div className="mt-14">
          <h3
            className="text-2xl sm:text-3xl font-black uppercase mb-6 text-center"
            style={{ fontFamily: FONT, color: NAVY }}
          >
            Event Structure & Experience
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🤝", label: "Open Networking & Manufacturing Showcase" },
              { icon: "🏭", label: "Contract Manufacturing Exhibits" },
              { icon: "🎤", label: "Panel Discussion with Industry Leaders & World Renown Surgeon" },
              { icon: "🌐", label: "Ecosystem and Talent Visibility" },
              { icon: "🔎", label: "Regional Supplier and Capability Discovery" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-xl border p-4"
                style={{ borderColor: "oklch(0.88 0 0)" }}
              >
                <span className="text-2xl shrink-0">{icon}</span>
                <p className="text-sm font-semibold" style={{ color: NAVY }}>{label}</p>
              </div>
            ))}
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
                style={{
                  borderBottom: i < arr.length - 1 ? "1px solid oklch(0.88 0 0)" : "none",
                }}
              >
                <span
                  className="text-sm font-bold uppercase tracking-wide shrink-0 w-36 pt-0.5"
                  style={{ color: ORANGE, fontFamily: FONT }}
                >
                  {time}
                </span>
                <span
                  className="text-lg font-bold uppercase"
                  style={{ color: NAVY, fontFamily: FONT }}
                >
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

      {/* ── Divider ── */}
      <div className="max-w-5xl mx-auto px-6">
        <hr style={{ borderColor: "oklch(0.88 0 0)" }} />
      </div>

      {/* ── Sponsorship ── */}
      <SponsorTiers />

      {/* ── Hosted By ── */}
      <section className="py-12 px-6 text-center border-t" style={{ borderColor: "oklch(0.88 0 0)" }}>
        <p
          className="text-sm font-bold uppercase tracking-widest mb-6"
          style={{ color: "oklch(0.55 0.02 264)", fontFamily: FONT }}
        >
          Special Thanks to Event Hosts
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          <span className="text-2xl sm:text-3xl font-black" style={{ color: NAVY, fontFamily: FONT }}>
            KEDCO
          </span>
          <span className="text-muted-foreground text-2xl">|</span>
          <span className="text-2xl sm:text-3xl font-black" style={{ color: NAVY, fontFamily: FONT }}>
            Ortho<span style={{ color: ORANGE }}>Worx</span>
          </span>
        </div>
      </section>

      <Footer />
    </main>
  )
}
