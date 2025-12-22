import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center min-h-[30vh] px-4 py-4 sm:py-6 md:py-8">
      <div className="text-center">
        <div className="flex justify-center mb-2 sm:mb-3">
          <Image
            src="/made-here-2026-header.png"
            alt="Made Here 2026 - A Manufacturing Showcase"
            width={1200}
            height={400}
            className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}
