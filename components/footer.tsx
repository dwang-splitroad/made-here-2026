export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <p className="text-sm text-muted-foreground">
          Powered by{" "}
          <a
            href="https://splitroadmedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline font-medium"
          >
            Split Road Media
          </a>
        </p>
        <p className="text-sm text-muted-foreground">
          For media inquiries please contact{" "}
          <a href="mailto:hello@splitroadmedia.com" className="text-foreground hover:underline">
            hello@splitroadmedia.com
          </a>
        </p>
      </div>
    </footer>
  )
}
