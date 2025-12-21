export default function MediaGallery() {
  const galleryItems = [
    {
      id: 1,
      videoId: "1148461023",
      videoTitle: "Instrumedical Technologies",
      imageSrc: "/gallery-images/instrumed.jpg",
      imageAlt: "Instrumedical Technologies",
    },
    {
      id: 2,
      videoId: "1148461140",
      videoTitle: "Micropulse",
      imageSrc: "/gallery-images/micropulse.jpg",
      imageAlt: "Micropulse",
    },
    {
      id: 3,
      videoId: "1148461212",
      videoTitle: "Instrumental Machine & Development",
      imageSrc: "/gallery-images/imd.jpg",
      imageAlt: "Instrumental Machine & Development",
    },
    {
      id: 4,
      videoId: "1148461271",
      videoTitle: "Qualitex",
      imageSrc: "/gallery-images/qualitex.jpg",
      imageAlt: "Qualitex",
    },
    {
      id: 5,
      videoId: "1148461328",
      videoTitle: "Sparc Engineers",
      imageSrc: "/gallery-images/sparc.jpg",
      imageAlt: "Sparc Engineers",
    },
    {
      id: 6,
      videoId: "1148461396",
      videoTitle: "TriPoint Surgical",
      imageSrc: "/gallery-images/tripoint.jpg",
      imageAlt: "TriPoint Surgical",
    },
    {
      id: 7,
      videoId: "1148461573",
      videoTitle: "Single Source Medical",
      imageSrc: "/gallery-images/singlesource.jpg",
      imageAlt: "Single Source Medical",
    },
    {
      id: 8,
      videoId: "1148461644",
      videoTitle: "Tecomet",
      imageSrc: "/gallery-images/tecomet.jpg",
      imageAlt: "Tecomet",
    },
    {
      id: 9,
      videoId: "1148461710",
      videoTitle: "Autocam Medical",
      imageSrc: "/gallery-images/autocam.jpg",
      imageAlt: "Autocam Medical",
    },
    {
      id: 10,
      videoId: "1148461848",
      videoTitle: "Complexus Medical",
      imageSrc: "/gallery-images/complexus.jpg",
      imageAlt: "Complexus Medical",
    },
    {
      id: 11,
      videoId: "1148461775",
      videoTitle: "Precision Medical Technologies",
      imageSrc: "/gallery-images/precision.jpg",
      imageAlt: "Precision Medical Technologies",
    },
    {
      id: 12,
      videoId: "1148462032",
      videoTitle: "Rayco Steel Process",
      imageSrc: "/gallery-images/rayco.jpg",
      imageAlt: "Rayco Steel Process",
    },
    {
      id: 13,
      videoId: "1148461975",
      videoTitle: "Avalign",
      imageSrc: "/gallery-images/avalign.jpg",
      imageAlt: "Avalign",
    },
    // One more placeholder row to complete the 2x14 grid
    {
      id: 14,
      videoId: null,
      videoTitle: "Manufacturing video 14",
      imageSrc: "/gallery-images/arch.jpg",
      imageAlt: "Arch",
    },
  ]

  return (
    <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">GALLERY</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="contents">
            {/* Video - Left Column */}
            <div className="relative aspect-video bg-card border border-border overflow-hidden">
              {item.videoId ? (
                <iframe
                  src={`https://player.vimeo.com/video/${item.videoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  style={{ border: 0 }}
                  title={item.videoTitle}
                />
              ) : (
                <video className="w-full h-full object-cover" controls>
                  <source src="/placeholder-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Image - Right Column */}
            <div className="relative aspect-video bg-card border border-border overflow-hidden">
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
