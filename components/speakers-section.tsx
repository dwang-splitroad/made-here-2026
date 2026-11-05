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
}

/**
 * Names, titles, and headshots supplied by Matt Deuel on 11/5/2026.
 * Nothing here is written by us: no bios or topics until the organizers send them.
 */
const hosts: Speaker[] = [
  {
    role: "Event Emcee",
    name: "Dr. Michael Meneghini",
    title: "Orthopedic Surgeon, Founder & CEO",
    organization: "Indiana Orthopedic Institute",
    photo: "/speakers/michael-meneghini.jpg",
  },
  {
    role: "Panel Moderator",
    name: "Dr. Mark A. Klaassen",
    credentials: "M.D., F.A.C.S.",
    title: "Orthopedic Surgeon",
    organization: "WarsawONE",
    photo: "/speakers/mark-klaassen.jpg",
  },
]

const panelists: Speaker[] = [
  {
    role: "Panelist",
    name: "Matthew Hunley",
    title: "Vice President, Operations & Supply Chain",
    organization: "Enovis",
    photo: "/speakers/matthew-hunley.jpg",
  },
  {
    role: "Panelist",
    name: "Louie Vogt",
    title: "Group President, Global Recon, Surgical & Foot and Ankle; Executive Officer",
    organization: "Enovis",
    photo: "/speakers/louie-vogt.jpg",
  },
  {
    role: "Panelist",
    name: "Ann Vu",
    credentials: "JD, RAC",
    title: "Chief Quality, Regulatory Affairs & Clinical Officer",
    organization: "Enovis",
    photo: "/speakers/ann-vu.jpg",
  },
]

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    // Photo beside the text on phones, stacked and centered from sm up
    <li
      className="flex items-center gap-4 rounded-xl p-4 sm:flex-col sm:gap-5 sm:p-7 sm:text-center"
      style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
    >
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
          className="mt-10 sm:mt-12 mb-5 sm:mb-6 text-center text-sm font-bold uppercase tracking-[0.3em] text-white/70"
          style={{ fontFamily: FONT }}
        >
          Panelists
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
