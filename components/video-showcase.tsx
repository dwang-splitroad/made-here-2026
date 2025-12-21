export default function VideoShowcase() {
  return (
    <section className="px-4 py-16 md:py-24 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">IN CASE YOU MISSED IT</h2>
        <p className="text-muted-foreground">Watch highlights from made here 2025</p>
      </div>

      <div className="relative aspect-video bg-card border border-border overflow-hidden">
        <video className="w-full h-full object-cover" controls>
          <source src="/placeholder-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}
