import type { Metadata } from "next"
import VideoShowcase from "@/components/video-showcase"
import MediaGallery from "@/components/media-gallery"
import Footer from "@/components/footer"
import { pageMetadata } from "@/lib/site-metadata"

export const metadata: Metadata = pageMetadata({
  title: "2025 Recap | Made Here 2026",
  description: "Video and photos from the inaugural MADE HERE manufacturing showcase in 2025.",
  path: "/2025",
})

export default function Archive2025() {
  return (
    <main className="min-h-screen">
      <VideoShowcase />
      <MediaGallery />
      <Footer />
    </main>
  )
}
