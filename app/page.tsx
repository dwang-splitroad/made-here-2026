import HeroSection from "@/components/hero-section"
import SignupForm from "@/components/signup-form"
import VideoShowcase from "@/components/video-showcase"
import MediaGallery from "@/components/media-gallery"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SignupForm />
      <VideoShowcase />
      <MediaGallery />
      <Footer />
    </main>
  )
}
