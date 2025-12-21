import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center min-h-[40vh] px-4 py-16 md:py-24">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/made-here-logo.png"
            alt="Made Here 2026 - A Manufacturing Showcase"
            width={600}
            height={800}
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
            priority
          />
        </div>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          An event where creators and innovators come together
        </p>
      </div>
    </section>
  )
}
