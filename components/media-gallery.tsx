"use client"

import { useState, useRef, useEffect } from "react"

interface GalleryItem {
  id: number
  videoSrc: string
  videoTitle: string
  imageSrc: string
  imageAlt: string
}

function LazyVideo({ src, title }: { src: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // Intersection Observer for lazy loading
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(container)
          }
        })
      },
      {
        rootMargin: "200px", // Start loading 200px before entering viewport
        threshold: 0.1,
      }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Play video when visible
  useEffect(() => {
    const video = videoRef.current
    if (isVisible && video) {
      video.play().catch(() => {
        // Autoplay was prevented, that's okay
      })
    }
  }, [isVisible])

  return (
    <div ref={containerRef} className="absolute inset-0">
      {/* Loading placeholder */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{ backgroundColor: 'lab(84 -0.78 -7.93)' }}
      >
        <div className="w-10 h-10 border-3 border-gray-300 border-t-gray-500 rounded-full animate-spin" />
      </div>

      {/* Video - only render when near viewport */}
      {isVisible && (
        <video
          ref={videoRef}
          src={src}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500 [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          title={title}
          onPlaying={() => setIsPlaying(true)}
          onCanPlay={() => {
            // Try to play as soon as it can
            videoRef.current?.play().catch(() => {})
          }}
        />
      )}
    </div>
  )
}

export default function MediaGallery() {
  const galleryItems: GalleryItem[] = [
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
    <section 
      className="py-8"
      style={{ backgroundColor: 'lab(84 -0.78 -7.93)' }}
    >
      {galleryItems.map((item) => {
        return (
          <div 
            key={item.id} 
            className="w-full flex flex-col md:flex-row py-6 sm:py-10 md:py-24 px-2 sm:px-4 md:px-8 lg:px-16 gap-3 sm:gap-5 md:gap-8 md:min-h-[85vh]"
          >
            {/* Video - Left Side */}
            <div 
              className="relative aspect-[4/3] sm:aspect-video md:aspect-auto md:flex-1 md:w-1/2 overflow-hidden rounded-lg"
              style={{ backgroundColor: 'lab(84 -0.78 -7.93)' }}
            >
              <LazyVideo src={item.videoSrc} title={item.videoTitle} />
            </div>

            {/* Image - Right Side */}
            <div className="relative aspect-[4/3] sm:aspect-video md:aspect-auto md:flex-1 md:w-1/2 bg-transparent flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={item.imageSrc || "/placeholder.svg"}
                alt={item.imageAlt}
                className="max-w-full max-h-full object-contain p-3 sm:p-5 md:p-8"
              />
            </div>
          </div>
        )
      })}
    </section>
  )
}
