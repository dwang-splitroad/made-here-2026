export default function MediaGallery() {
  const galleryItems = [
    {
      id: 1,
      videoId: "1148461023",
      videoTitle: "Instrumedical Technologies",
      imageSrc: "/gallery-images/instrumed-no-background-reduced-01.png",
      imageAlt: "Instrumedical Technologies",
    },
    {
      id: 2,
      videoId: "1148461140",
      videoTitle: "Micropulse",
      imageSrc: "/gallery-images/micropulseno-background-reduced-02.png",
      imageAlt: "Micropulse",
    },
    {
      id: 3,
      videoId: "1148461212",
      videoTitle: "Instrumental Machine & Development",
      imageSrc: "/gallery-images/imd-no-background-reduced-03.png",
      imageAlt: "Instrumental Machine & Development",
    },
    {
      id: 4,
      videoId: "1148461271",
      videoTitle: "Qualitex",
      imageSrc: "/gallery-images/qualitex-no-background-reduced-04.png",
      imageAlt: "Qualitex",
    },
    {
      id: 5,
      videoId: "1148461328",
      videoTitle: "Sparc Engineers",
      imageSrc: "/gallery-images/sparc-no-background-reduced-05.png",
      imageAlt: "Sparc Engineers",
    },
    {
      id: 6,
      videoId: "1148461396",
      videoTitle: "TriPoint Surgical",
      imageSrc: "/gallery-images/tripoint-no-background-reduced-06.png",
      imageAlt: "TriPoint Surgical",
    },
    {
      id: 7,
      videoId: "1148461573",
      videoTitle: "Single Source Medical",
      imageSrc: "/gallery-images/single-source-no-background-reduced-07.png",
      imageAlt: "Single Source Medical",
    },
    {
      id: 8,
      videoId: "1148461644",
      videoTitle: "Tecomet",
      imageSrc: "/gallery-images/tecomet-no-background-reduced-08.png",
      imageAlt: "Tecomet",
    },
    {
      id: 9,
      videoId: "1148461710",
      videoTitle: "Autocam Medical",
      imageSrc: "/gallery-images/autocam-no-background-reduced-09.png",
      imageAlt: "Autocam Medical",
    },
    {
      id: 10,
      videoId: "1148461848",
      videoTitle: "Complexus Medical",
      imageSrc: "/gallery-images/complexus-no-background-reduced-11.png",
      imageAlt: "Complexus Medical",
    },
    {
      id: 11,
      videoId: "1148461775",
      videoTitle: "Precision Medical Technologies",
      imageSrc: "/gallery-images/precision-no-background-reduced-10.png",
      imageAlt: "Precision Medical Technologies",
    },
    {
      id: 12,
      videoId: "1148462032",
      videoTitle: "Rayco Steel Process",
      imageSrc: "/gallery-images/rayco-no-background-reduced-14.png",
      imageAlt: "Rayco Steel Process",
    },
    {
      id: 13,
      videoId: "1148461975",
      videoTitle: "Avalign",
      imageSrc: "/gallery-images/avalign-no-background-reduced-13.png",
      imageAlt: "Avalign",
    },
    {
      id: 14,
      videoId: "1148461915",
      videoTitle: "Arch Medical Solutions",
      imageSrc: "/gallery-images/arch-no-background-reduced-12.png",
      imageAlt: "Arch Medical Solutions",
    },
  ]

  return (
    <section className="px-4 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="contents">
            {/* Video - Left Column */}
            <div className="relative aspect-video bg-card border border-border overflow-hidden rounded-sm">
              {item.videoId ? (
                <iframe
                  src={`https://player.vimeo.com/video/${item.videoId}?autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&responsive=1&playsinline=1`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  style={{ border: 0 }}
                  title={item.videoTitle}
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <video className="w-full h-full object-cover" controls>
                  <source src="/placeholder-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Image - Right Column */}
            <div className="relative aspect-video bg-transparent border border-border overflow-hidden rounded-sm">
              <img
                src={item.imageSrc || "/placeholder.svg"}
                alt={item.imageAlt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
