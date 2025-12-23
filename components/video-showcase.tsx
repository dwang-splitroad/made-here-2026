export default function VideoShowcase() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="text-center mb-8 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">IN CASE YOU MISSED IT</h2>
        <p className="text-sm sm:text-base text-muted-foreground px-2">Watch the main stage video intro by Split Road Media and see the 14 showcases!</p>
      </div>

      <div className="px-4 max-w-7xl mx-auto">
        <div className="relative w-full aspect-video">
          <iframe
            src="https://player.vimeo.com/video/1148444849?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&responsive=1"
            className="absolute top-0 left-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            style={{ border: 0 }}
            title="Made Here 2025 Intro Video"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
