export default function MediaGallery() {
  const galleryItems = [
    {
      id: 1,
      videoSrc: "/gallery-video/instrumed.mp4",
      videoTitle: "Instrumedical Technologies",
      imageSrc: "/gallery-images/instrumed-no-background-reduced-01.png",
      imageAlt: "Instrumedical Technologies",
    },
    {
      id: 2,
      videoSrc: "/gallery-video/micropulse.mp4",
      videoTitle: "Micropulse",
      imageSrc: "/gallery-images/micropulseno-background-reduced-02.png",
      imageAlt: "Micropulse",
    },
    {
      id: 3,
      videoSrc: "/gallery-video/IMD.mp4",
      videoTitle: "Instrumental Machine & Development",
      imageSrc: "/gallery-images/imd-no-background-reduced-03.png",
      imageAlt: "Instrumental Machine & Development",
    },
    {
      id: 4,
      videoSrc: "/gallery-video/qualitex.mp4",
      videoTitle: "Qualitex",
      imageSrc: "/gallery-images/qualitex-no-background-reduced-04.png",
      imageAlt: "Qualitex",
    },
    {
      id: 5,
      videoSrc: "/gallery-video/sparc.mp4",
      videoTitle: "Sparc Engineers",
      imageSrc: "/gallery-images/sparc-no-background-reduced-05.png",
      imageAlt: "Sparc Engineers",
    },
    {
      id: 6,
      videoSrc: "/gallery-video/tripoint.mp4",
      videoTitle: "TriPoint Surgical",
      imageSrc: "/gallery-images/tripoint-no-background-reduced-06.png",
      imageAlt: "TriPoint Surgical",
    },
    {
      id: 7,
      videoSrc: "/gallery-video/singlesource.mp4",
      videoTitle: "Single Source Medical",
      imageSrc: "/gallery-images/single-source-no-background-reduced-07.png",
      imageAlt: "Single Source Medical",
    },
    {
      id: 8,
      videoSrc: "/gallery-video/tecomet.mp4",
      videoTitle: "Tecomet",
      imageSrc: "/gallery-images/tecomet-no-background-reduced-08.png",
      imageAlt: "Tecomet",
    },
    {
      id: 9,
      videoSrc: "/gallery-video/autocam.mp4",
      videoTitle: "Autocam Medical",
      imageSrc: "/gallery-images/autocam-no-background-reduced-09.png",
      imageAlt: "Autocam Medical",
    },
    {
      id: 10,
      videoSrc: "/gallery-video/complexus.mp4",
      videoTitle: "Complexus Medical",
      imageSrc: "/gallery-images/complexus-no-background-reduced-11.png",
      imageAlt: "Complexus Medical",
    },
    {
      id: 11,
      videoSrc: "/gallery-video/precision.mp4",
      videoTitle: "Precision Medical Technologies",
      imageSrc: "/gallery-images/precision-no-background-reduced-10.png",
      imageAlt: "Precision Medical Technologies",
    },
    {
      id: 12,
      videoSrc: "/gallery-video/Rayco.mp4",
      videoTitle: "Rayco Steel Process",
      imageSrc: "/gallery-images/rayco-no-background-reduced-14.png",
      imageAlt: "Rayco Steel Process",
    },
    {
      id: 13,
      videoSrc: "/gallery-video/avalign.mp4",
      videoTitle: "Avalign",
      imageSrc: "/gallery-images/avalign-no-background-reduced-13.png",
      imageAlt: "Avalign",
    },
    {
      id: 14,
      videoSrc: "/gallery-video/arch.mp4",
      videoTitle: "Arch Medical Solutions",
      imageSrc: "/gallery-images/arch-no-background-reduced-12.png",
      imageAlt: "Arch Medical Solutions",
    },
  ]

  return (
    <section className="px-4 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {galleryItems.map((item) => {
          return (
            <div key={item.id} className="contents">
              {/* Video - Left Column */}
              <div className="relative aspect-video bg-card border border-border overflow-hidden rounded-sm">
                {item.videoSrc ? (
                  <video
                    src={item.videoSrc}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                    title={item.videoTitle}
                  />
                ) : null}
              </div>

              {/* Image - Right Column */}
              <div className="relative aspect-video bg-transparent border border-border overflow-hidden rounded-sm">
                <img
                  src={item.imageSrc || "/placeholder.svg"}
                  alt={item.imageAlt}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
