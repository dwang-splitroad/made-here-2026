export type ShowcasingCompany = {
  /** Display name used on the site */
  name: string
  /** URL-safe id used for anchors */
  slug: string
  /** Official website (homepage) */
  website: string
  /**
   * Short description. Use `**text**` for bold, or lines starting with "- " for a bullet list.
   * Text must come from the company (submitted via the organizers), from a prior year's
   * showcase card, or be quoted verbatim from its own website.
   */
  bio: string
  /** confirmed = company signed off via Kayla Bailey; pending = quoted from their site, awaiting sign-off */
  status: "confirmed" | "pending"
  /** Optional logo in /public (trimmed, transparent) with intrinsic px size */
  logo?: { src: string; width: number; height: number }
}

/**
 * CMO Showcasing Companies for MADE HERE 2026 (13 as of 10/27/2026; LH Medical withdrew), alphabetical.
 * Confirmed bios are from the organizers' "Brief bio Showcasing" doc (Kayla Bailey, 10/24/2026).
 * Pending bios are verbatim from each company's own site and get replaced when the company responds.
 */
export const showcasingCompanies: ShowcasingCompany[] = [
  {
    name: "ARCH Medical Solutions",
    slug: "arch-medical-solutions",
    logo: { src: "/companies/arch-medical-solutions-logo.png", width: 647, height: 155 },
    website: "https://arch-medical.com/",
    status: "confirmed",
    bio: "ARCH Medical Solutions provides precision manufacturing for the medical device industry, producing complex implants, instruments, and components for orthopedic, spine and surgical robotics applications. We offer specialized capabilities that include 3D printed implants through ARCH Additive, high-precision cutting instruments through ARCH Medical Grinding, and a comprehensive portfolio of standard, custom, and premium surgical instruments through ARCH-MedTorque and gSource. Our nationwide manufacturing footprint gives customers the scale, flexibility, and quality needed to support product development and commercialization. By combining specialized technologies, engineering expertise and robust quality systems under one partner, we help OEMs simplify their supply chain and bring products to market with confidence.",
  },
  {
    name: "Avalign",
    slug: "avalign",
    logo: { src: "/companies/avalign-logo.png", width: 469, height: 254 },
    website: "https://www.avalign.com/",
    status: "confirmed",
    bio: "Avalign is one of the few CDMOs dedicated exclusively to orthopedics, with the breadth of capabilities to support virtually every aspect of an orthopedic implant system. Avalign offers end-to-end capabilities across the orthopedic implant system, from implants and coatings to fixation devices, complex and cutting instruments, German Specialty Instruments, cases and trays, and fully kitted implant banks and instrument sets.",
  },
  {
    name: "GCG Industries",
    slug: "gcg-industries",
    logo: { src: "/companies/gcg-industries-logo.png", width: 1051, height: 1200 },
    website: "https://www.gcgindustries.com/",
    status: "confirmed",
    bio: "GCG Industries is driven by a simple mission: **Heal. Defend. Connect.** We exist to improve quality of life by manufacturing the products and technologies that support healthcare, national defense, and global connectivity. Guided by exceptional people, trusted partnerships, and world-class manufacturing practices, we help our customers bring innovative solutions to market.",
  },
  {
    name: "Instrumental Machine & Development (IMD)",
    slug: "imd",
    logo: { src: "/companies/imd-logo.png", width: 657, height: 156 },
    website: "https://www.imdortho.com/",
    status: "confirmed",
    bio: "From single machining operations service to full manufacturing capabilities, you can count on Instrumental Machine & Development. Instrumental Machine & Development (IMD) is a quality minded manufacturer of orthopedic and medical instrumentation, supporting the orthopedic community. IMD is committed to quality, on-time delivery and meeting the requirements of each and every customer. Specializing in orthopedic instrumentation, sterilization trays and accessories for the operating room. IMD has the knowledge and experience to serve our customers' manufacturing and assembly needs.",
  },
  {
    name: "Jatex",
    slug: "jatex",
    logo: { src: "/companies/jatex-logo.svg", width: 232, height: 27 },
    website: "https://www.jatexinc.net/",
    status: "confirmed",
    // Submitted by Jatex via Kayla Bailey, 10/26/2026
    bio: "When manufacturing precision-machined products for the orthopedic and spinal industries, there's no room for error. For over 30 years, as a family owned and operated business, Jatex has consistently embraced innovation to provide a superior level of excellence.",
  },
  {
    name: "Micropulse",
    slug: "micropulse",
    logo: { src: "/micropulse-logo.png", width: 1730, height: 356 },
    website: "https://micropulseinc.com/",
    status: "confirmed",
    bio: "Founded in 1988, Micropulse has been a trusted contract manufacturer to the orthopedic industry for nearly 40 years. As a privately held company exclusively working in orthopedics, Micropulse focuses on deep, long-term partnerships with its customers with an emphasis on quality, integrity, and open communication. Micropulse offers implant, instrument, and case & tray manufacturing, as well as sterile packaging, all under one roof.",
  },
  {
    name: "P2 Precision",
    slug: "p2-precision",
    logo: { src: "/companies/p2-precision-logo.png", width: 1200, height: 869 },
    website: "https://www.p2precision.com/",
    status: "confirmed",
    bio: "Located near Pierceton, Indiana, P2 Precision is a manufacturer of high-quality, high-precision orthopedic and medical-grade components, with a central focus on each customer's unique needs and timely delivery. P2 Precision uses cutting edge inspection equipment and is calibrated to meet tight tolerances, with a quality program that is committed to continuously evolve to meet customer needs.",
  },
  {
    name: "Precision Medical Technologies",
    slug: "precision-medical-technologies",
    logo: { src: "/companies/precision-medical-technologies-logo.png", width: 657, height: 160 },
    website: "https://www.premedtec.com/",
    status: "confirmed",
    bio: "We specialize in manufacturing medical implants, components, and instruments for the shoulder, hip, knee, spine, and trauma and extremity markets. We have three manufacturing facilities throughout Indiana for Precision Medical Technologies as well as a facility for silicone over molded handles and a facility dedicated to PVD coatings.",
  },
  {
    name: "Qualitex",
    slug: "qualitex",
    logo: { src: "/companies/qualitex-logo.png", width: 279, height: 267 },
    website: "https://www.qualitexne.com/",
    status: "confirmed",
    bio: "Qualitex is a precision CNC contract manufacturer in Columbia City, Indiana, specializing in medical device components for external fixation, surgical instruments, and implants. With Swiss Turning, 3/5-Axis Milling, Wire EDM, and Finishing under one roof, we hold tolerances to ±.0002\" from NPI through production. ISO 13485 certified and FDA registered, Qualitex is a trusted partner to leading orthopedic OEMs.",
  },
  {
    name: "Rayco Steel Process",
    slug: "rayco-steel-process",
    logo: { src: "/companies/rayco-steel-process-logo.png", width: 428, height: 256 },
    website: "https://raycosteelprocess.com/",
    status: "pending",
    // Last year's (2025 showcase) bullets, per Kayla 10/24/2026
    bio: "- Family owned since 1947\n- Specialize in tooling industry\n- In-house passivation and specialized finishing\n- Complex assembly and prototyping\n- Focus on a culture of quality",
  },
  {
    name: "Red Star Contract Manufacturing",
    slug: "red-star-contract-manufacturing",
    logo: { src: "/companies/red-star-contract-manufacturing-logo.png", width: 1920, height: 545 },
    website: "https://redstarcontractmfg.com/",
    status: "confirmed",
    bio: "Red Star Contract Mfg. is an ISO 13485 certified partner to medical device OEMs, providing injection molding, insert over molding, precision machining, device assembly, and sterile packaging and kitting. By building tooling and injection molding presses in-house, Red Star offers greater control over cost, quality, and production flexibility. Our vertically integrated U.S. operations help customers simplify their supply chains and move confidently from development to production.",
  },
  {
    name: "Tecomet",
    slug: "tecomet",
    logo: { src: "/companies/tecomet-logo.png", width: 655, height: 176 },
    website: "https://www.tecomet.com/",
    status: "pending",
    // Last year's (2025 showcase) bullets, per Kayla 10/24/2026. "Salable" on the 2025 card rendered as "Scalable".
    bio: "- Additive, case and tray, implants/instruments, casting, forging, precision machining\n- Markets include MIS, Spine, Extremities & Trauma\n- Scalable manufacturing solutions where quality is critical\n- Engineering prowess, accelerated time to market, competitive value\n- Quality assurance focus with CMM, vision systems, WinSPC",
  },
  {
    name: "TriPoint Surgical",
    slug: "tripoint-surgical",
    logo: { src: "/companies/tripoint-surgical-logo.png", width: 656, height: 182 },
    website: "https://tripointsurgical.com/",
    status: "confirmed",
    // Shortened from the version in the organizers' doc, using its own sentences
    bio: "TriPoint Surgical is a precision contract manufacturer specializing in surgical instruments and implants for the medical device industry. Our core capabilities include precision grinding, advanced 5-axis CNC milling, Swiss CNC turning, finishing, assembly, and packaging. What sets TriPoint apart is our vertical integration, manufacturing expertise, and commitment to customer partnerships. From prototyping through full-scale production, our team takes a collaborative, solutions-driven approach built on proactive communication, transparency, and responsiveness.",
  },
]
