import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center min-h-[40vh] px-4 py-16 md:py-24">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/made-here-2026-header.png"
            alt="Made Here 2026 - A Manufacturing Showcase"
            width={1200}
            height={400}
            className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl h-auto"
            priority
          />
        </div>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
          Where the Orthopedic Capital of the World showcases their capabilities, echo system, teamwork, and education funnel. If it's Orthopedics, it's MADE HERE!
        </p>
      </div>
    </section>
  )
}
