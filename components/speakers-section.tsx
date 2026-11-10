import Image from "next/image"

const NAVY = "#26235d"
const ORANGE = "lab(54.8% 66.8 56.8)"
const FONT =
  'var(--font-roboto-condensed), "Avenir Next Condensed", "Avenir", -apple-system, BlinkMacSystemFont, sans-serif'

type Speaker = {
  role: string
  name: string
  /** Post-nominals shown smaller beside the name */
  credentials?: string
  title: string
  organization: string
  /** Square headshot in /public/speakers */
  photo: string
  /** One or two sentences, drawn from Travis Christman's notes and approved by Matt Deuel */
  bio?: string
}

/**
 * Names, titles, and headshots supplied by Matt Deuel on 11/5/2026.
 * Bios are condensed from Travis Christman's notes (11/5/2026) and were approved
 * by Matt on 11/10/2026. Dr. Meneghini is the emcee only, not a keynote (Matt, 11/10).
 * Personal details from the notes are left out until the panelists agree to them.
 */
const hosts: Speaker[] = [
  {
    role: "Event Emcee",
    name: "Dr. Michael Meneghini",
    title: "Orthopedic Surgeon, Founder & CEO",
    organization: "Indiana Orthopedic Institute",
    photo: "/speakers/michael-meneghini.jpg",
    // Written by Matt Deuel, 11/10/2026
    bio: "A nationally recognized orthopedic surgeon, engineer, and innovator who brings a unique perspective on the connection between surgical innovation and advanced manufacturing. He joins MADE HERE as this year's emcee.",
  },
  {
    role: "Panel Moderator",
    name: "Dr. Mark A. Klaassen",
    credentials: "M.D., F.A.C.S.",
    title: "Orthopedic Surgeon",
    organization: "WarsawONE",
    photo: "/speakers/mark-klaassen.jpg",
    bio: "A surgeon, educator, and humanitarian with more than 30 years of experience in joint replacement and advanced surgical techniques. He returns to the MADE HERE stage after joining last year's panel.",
  },
]

const panelists: Speaker[] = [
  {
    role: "Panelist",
    name: "Matthew Hunley",
    title: "Vice President, Operations & Supply Chain",
    organization: "Enovis",
    photo: "/speakers/matthew-hunley.jpg",
    bio: "A senior operations and supply chain leader who attended last year's MADE HERE. He brings the view of an OEM supply chain owner who relies on the ecosystem for parts not made in house.",
  },
  {
    role: "Panelist",
    name: "Louie Vogt",
    title: "Group President, Global Recon, Surgical & Foot and Ankle; Executive Officer",
    organization: "Enovis",
    photo: "/speakers/louie-vogt.jpg",
    bio: "A Warsaw native who has led across recon, sports medicine, biologics, trauma, marketing, and sales. He now helps lead one of the fastest-growing OEMs in the space.",
  },
  {
    role: "Panelist",
    name: "Ann Vu",
    credentials: "JD, RAC",
    title: "Chief Quality, Regulatory Affairs & Clinical Officer",
    organization: "Enovis",
    photo: "/speakers/ann-vu.jpg",
    bio: "Brings the perspective of patient safety, care, and outcomes. She is known for her leadership as a change agent and has worked in and around this ecosystem.",
  },
]

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    // Each card spans two shared rows (details, bio) so the bio dividers line up across a row of cards
    <li
      className="row-span-2 grid grid-rows-subgrid gap-0 rounded-xl p-4 sm:p-7"
      style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
    >
      {/* Photo beside the text on phones, stacked and centered from sm up */}
      <div className="flex items-center gap-4 self-start sm:flex-col sm:gap-5 sm:text-center">
        <Image
          src={speaker.photo}
          alt={`${speaker.name}, ${speaker.organization}`}
          width={640}
          height={640}
          sizes="(min-width: 640px) 144px, 96px"
          className="size-24 shrink-0 rounded-full object-cover sm:size-36"
          style={{ boxShadow: `0 0 0 3px ${ORANGE}` }}
        />
        <div className="min-w-0">
          <p
            className="text-xs font-bold uppercase tracking-[0.2em] mb-1.5"
            style={{ color: ORANGE, fontFamily: FONT }}
          >
            {speaker.role}
          </p>
          <h3 className="text-xl sm:text-2xl font-black leading-tight text-white" style={{ fontFamily: FONT }}>
            {speaker.name}
            {speaker.credentials ? (
              <span className="font-bold text-white/60 text-base sm:text-lg">, {speaker.credentials}</span>
            ) : null}
          </h3>
          <p className="mt-2 text-sm text-white/75 leading-snug">{speaker.title}</p>
          <p className="mt-1 text-sm font-bold text-white">{speaker.organization}</p>
        </div>
      </div>
      {speaker.bio ? (
        <p className="mt-4 self-start border-t border-white/10 pt-4 text-sm leading-relaxed text-white/75 sm:mt-5 sm:pt-5 sm:text-center">
          {speaker.bio}
        </p>
      ) : null}
    </li>
  )
}

export default function SpeakersSection() {
  return (
    <section
      id="speakers"
      className="px-6 py-16 sm:py-20 scroll-mt-8"
      style={{ backgroundColor: NAVY }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: ORANGE, fontFamily: FONT }}
          >
            Program, Dinner & Distinguished Panel
          </p>
          <h2
            className="text-4xl sm:text-6xl font-black uppercase text-white leading-none"
            style={{ fontFamily: FONT, letterSpacing: "0.02em" }}
          >
            Program & Speakers
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-white/80 leading-relaxed">
            Meet the orthopedic surgeons and industry leaders taking the stage at MADE HERE 2026.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {hosts.map((s) => (
            <SpeakerCard key={s.name} speaker={s} />
          ))}
        </ul>

        <p
          className="mt-10 sm:mt-12 mb-3 text-center text-sm font-bold uppercase tracking-[0.3em] text-white/70"
          style={{ fontFamily: FONT }}
        >
          Panelists
        </p>
        <p className="mb-6 sm:mb-8 max-w-2xl mx-auto text-center text-base sm:text-lg text-white/85 leading-relaxed">
          An all-Enovis panel on this year&apos;s theme: &ldquo;Why produce your medical device
          anywhere else? If it&apos;s orthopedics, it&apos;s MADE HERE.&rdquo;
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {panelists.map((s) => (
            <SpeakerCard key={s.name} speaker={s} />
          ))}
        </ul>
      </div>
    </section>
  )
}
