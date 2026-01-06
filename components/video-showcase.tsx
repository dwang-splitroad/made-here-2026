export default function VideoShowcase() {
  return (
    <>
      {/* Full screen video section */}
      <section className="w-full h-screen">
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
      <section className="w-full py-16 md:py-24 text-center px-4">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 uppercase tracking-tight"
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
          className="text-base sm:text-lg md:text-xl font-semibold uppercase tracking-wide mb-8"
          style={{
            color: 'lab(15.2% 18.4 -37)'
          }}
        >
          VIEW THE 14 PARTICIPATING COMPANIES HERE
        </p>
        
        <div className="arrow-bounce">
          <svg 
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto" 
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
