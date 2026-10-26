export type ShowcasingCompany = {
  /** Display name used on the site */
  name: string
  /** URL-safe id used for anchors */
  slug: string
  /** Official website (homepage) */
  website: string
  /**
   * Short description. Use `**text**` for bold. Text must come from the company
   * (submitted via the organizers) or be quoted verbatim from its own website.
   */
  bio: string
  /** confirmed = company signed off via Kayla Bailey; pending = quoted from their site, awaiting sign-off */
  status: "confirmed" | "pending"
  /** Optional logo in /public (trimmed, transparent) with intrinsic px size */
  logo?: { src: string; width: number; height: number }
}

/**
 * CMO Showcasing Companies for MADE HERE 2026 (14 as of 10/25/2026), alphabetical.
 * Confirmed bios are from the organizers' "Brief bio Showcasing" doc (Kayla Bailey, 10/24/2026).
 * Pending bios are verbatim from each company's own site and get replaced when the company responds.
 */
export const showcasingCompanies: ShowcasingCompany[] = [
  {
    name: "ARCH Medical Solutions",
    slug: "arch-medical-solutions",
    website: "https://arch-medical.com/",
    status: "confirmed",
    bio: "ARCH Medical Solutions provides precision manufacturing for the medical device industry, producing complex implants, instruments, and components for orthopedic, spine and surgical robotics applications. We offer specialized capabilities that include 3D printed implants through ARCH Additive, high-precision cutting instruments through ARCH Medical Grinding, and a comprehensive portfolio of standard, custom, and premium surgical instruments through ARCH-MedTorque and gSource. Our nationwide manufacturing footprint gives customers the scale, flexibility, and quality needed to support product development and commercialization. By combining specialized technologies, engineering expertise and robust quality systems under one partner, we help OEMs simplify their supply chain and bring products to market with confidence.",
  },
  {
    name: "Avalign",
    slug: "avalign",
    website: "https://www.avalign.com/",
    status: "confirmed",
    bio: "Avalign is one of the few CDMOs dedicated exclusively to orthopedics, with the breadth of capabilities to support virtually every aspect of an orthopedic implant system. Avalign offers end-to-end capabilities across the orthopedic implant system, from implants and coatings to fixation devices, complex and cutting instruments, German Specialty Instruments, cases and trays, and fully kitted implant banks and instrument sets.",
  },
  {
    name: "GCG Industries",
    slug: "gcg-industries",
    website: "https://www.gcgindustries.com/",
    status: "confirmed",
    bio: "GCG Industries is driven by a simple mission: **Heal. Defend. Connect.** We exist to improve quality of life by manufacturing the products and technologies that support healthcare, national defense, and global connectivity. Guided by exceptional people, trusted partnerships, and world-class manufacturing practices, we help our customers bring innovative solutions to market.",
  },
  {
    name: "Instrumental Machine & Development (IMD)",
    slug: "imd",
    website: "https://www.imdortho.com/",
    status: "confirmed",
    bio: "From single machining operations service to full manufacturing capabilities, you can count on Instrumental Machine & Development. Instrumental Machine & Development (IMD) is a quality minded manufacturer of orthopedic and medical instrumentation, supporting the orthopedic community. IMD is committed to quality, on-time delivery and meeting the requirements of each and every customer. Specializing in orthopedic instrumentation, sterilization trays and accessories for the operating room. IMD has the knowledge and experience to serve our customers' manufacturing and assembly needs.",
  },
  {
    name: "Jatex",
    slug: "jatex",
    website: "https://www.jatexinc.net/",
    status: "pending",
    // Verbatim from jatexinc.net (About + Capabilities sections)
    bio: "When manufacturing precision-machined products for the orthopedic and spinal industries, there's no room for error. For over 25 years, as a family owned and operated business, Jatex has consistently embraced innovation to provide a superior level of excellence. We specialize in contract manufacturing of components for spinal, joint and extremity medical device industry.",
  },
  {
    name: "LH Medical",
    slug: "lh-medical",
    website: "https://lhindustries.com/lh-medical/",
    status: "pending",
    // Verbatim from lhindustries.com/lh-medical (hero, mission, and Quality sections)
    bio: "A leading contract manufacturer in orthopedic implants, spine implants, and simple to complex precision instruments. Our mission is to provide high-quality implantable devices and instrumentation to our partners. Quality is a critical component of everything we do, which ultimately has earned us our ISO 13485 registration. In addition, we adhere strictly to FDA CFR 820 guidelines as an indication of our commitment to quality.",
  },
  {
    name: "Micropulse",
    slug: "micropulse",
    website: "https://micropulseinc.com/",
    status: "confirmed",
    bio: "Founded in 1988, Micropulse has been a trusted contract manufacturer to the orthopedic industry for nearly 40 years. As a privately held company exclusively working in orthopedics, Micropulse focuses on deep, long-term partnerships with its customers with an emphasis on quality, integrity, and open communication. Micropulse offers implant, instrument, and case & tray manufacturing, as well as sterile packaging, all under one roof.",
  },
  {
    name: "P2 Precision",
    slug: "p2-precision",
    website: "https://www.p2precision.com/",
    status: "confirmed",
    bio: "Located near Pierceton, Indiana, P2 Precision is a manufacturer of high-quality, high-precision orthopedic and medical-grade components, with a central focus on each customer's unique needs and timely delivery. P2 Precision uses cutting edge inspection equipment and is calibrated to meet tight tolerances, with a quality program that is committed to continuously evolve to meet customer needs.",
  },
  {
    name: "Precision Medical Technologies",
    slug: "precision-medical-technologies",
    website: "https://www.premedtec.com/",
    status: "confirmed",
    bio: "We specialize in manufacturing medical implants, components, and instruments for the shoulder, hip, knee, spine, and trauma and extremity markets. We have three manufacturing facilities throughout Indiana for Precision Medical Technologies as well as a facility for silicone over molded handles and a facility dedicated to PVD coatings.",
  },
  {
    name: "Qualitex",
    slug: "qualitex",
    website: "https://www.qualitexne.com/",
    status: "confirmed",
    bio: "Qualitex is a precision CNC contract manufacturer in Columbia City, Indiana, specializing in medical device components for external fixation, surgical instruments, and implants. With Swiss Turning, 3/5-Axis Milling, Wire EDM, and Finishing under one roof, we hold tolerances to ±.0002\" from NPI through production. ISO 13485 certified and FDA registered, Qualitex is a trusted partner to leading orthopedic OEMs.",
  },
  {
    name: "Rayco Steel Process",
    slug: "rayco-steel-process",
    website: "https://raycosteelprocess.com/",
    status: "pending",
    // Verbatim from raycosteelprocess.com homepage
    bio: "Rayco Steel Process has been a leading name in the steel and machining industry since its founding in 1947 by Ray Bockman. Over the decades, we have successfully met all of our customers' needs while remaining a family-owned business. Today, Rayco Steel Process holds ISO 13485:2016 quality management system (QMS) certification and is FDA compliant under 21 CFR (820), demonstrating our commitment to quality and safety.",
  },
  {
    name: "Red Star Contract Manufacturing",
    slug: "red-star-contract-manufacturing",
    website: "https://redstarcontractmfg.com/",
    status: "confirmed",
    bio: "Red Star Contract Mfg. is an ISO 13485 certified partner to medical device OEMs, providing injection molding, insert over molding, precision machining, device assembly, and sterile packaging and kitting. By building tooling and injection molding presses in-house, Red Star offers greater control over cost, quality, and production flexibility. Our vertically integrated U.S. operations help customers simplify their supply chains and move confidently from development to production.",
  },
  {
    name: "Tecomet",
    slug: "tecomet",
    website: "https://www.tecomet.com/",
    status: "pending",
    // Verbatim from tecomet.com Our Story page
    bio: "Tecomet is a leading metal and materials innovator and contract manufacturer. Founded in 1963, Tecomet is the market leading provider of manufacturing solutions for complex, high-precision products and services for the Medical Device and Aerospace & Defense markets.",
  },
  {
    name: "TriPoint Surgical",
    slug: "tripoint-surgical",
    website: "https://tripointsurgical.com/",
    status: "confirmed",
    // Shortened from the version in the organizers' doc, using its own sentences
    bio: "TriPoint Surgical is a precision contract manufacturer specializing in surgical instruments and implants for the medical device industry. Our core capabilities include precision grinding, advanced 5-axis CNC milling, Swiss CNC turning, finishing, assembly, and packaging. What sets TriPoint apart is our vertical integration, manufacturing expertise, and commitment to customer partnerships. From prototyping through full-scale production, our team takes a collaborative, solutions-driven approach built on proactive communication, transparency, and responsiveness.",
  },
]
