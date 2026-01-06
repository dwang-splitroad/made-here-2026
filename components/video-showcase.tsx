export default function VideoShowcase() {
  return (
    <>
      {/* Video section - aspect ratio on mobile, full screen on desktop */}
      <section className="w-full aspect-video md:h-screen md:aspect-auto">
        <iframe
          src="https://player.vimeo.com/video/1148444849?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&responsive=1"
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          style={{ border: 0 }}
          title="Made Here 2025 Intro Video"
          allowFullScreen
        />
      </section>

      {/* Text and arrow section below video */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 text-center px-4">
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 uppercase tracking-tight"
          style={{
            fontFamily: 'var(--font-roboto-condensed), "Avenir Next Condensed", "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontStretch: 'condensed',
            fontWeight: 700,
            color: 'lab(54.8% 66.8 56.8)',
            letterSpacing: '0.02em'
          }}
        >
          MISS LAST YEAR&apos;S SHOWCASE?
        </h2>
        <p 
          className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold uppercase tracking-wide mb-4 sm:mb-6 md:mb-8"
          style={{
            color: 'lab(15.2% 18.4 -37)'
          }}
        >
          VIEW THE 14 PARTICIPATING COMPANIES HERE
        </p>
        
        <div className="arrow-bounce">
          <svg 
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mx-auto" 
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: 'lab(54.8% 66.8 56.8)' }}
          >
            <path d="M12 20l8-8h-5V4H9v8H4l8 8z" />
          </svg>
        </div>
      </section>
    </>
  )
}
