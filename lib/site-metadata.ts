import type { Metadata } from "next"

/**
 * The one address the site is served from (the bare domain redirects here).
 * Hardcoded on purpose: link previews in iMessage, WhatsApp, Slack, etc. need absolute
 * URLs, and a stale environment variable would silently break every one of them.
 */
export const SITE_URL = "https://www.madehere.events"

export const SITE_NAME = "Made Here 2026"

/** 1200x630 image shown when a link to the site is shared (built from the logo and hero copy) */
const SHARE_IMAGE = {
  url: "/made-here-2026-share.png",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "Made Here: A Manufacturing Showcase 2026. December 9, 2026 in Winona Lake, Indiana.",
}

/**
 * Title, description, and link-preview tags for a page.
 *
 * Every page must go through this. In Next, a page that sets its own `title` keeps the
 * parent's Open Graph tags as they are, so the preview would show the home page's title;
 * and a page that sets its own `openGraph` drops the parent's image entirely.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  /** Path of the page, e.g. "/companies". Leave out for the site-wide default. */
  path?: string
}): Metadata {
  return {
    title,
    description,
    ...(path ? { alternates: { canonical: path } } : {}),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      title,
      description,
      ...(path ? { url: path } : {}),
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SHARE_IMAGE],
    },
  }
}
