import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Roboto_Condensed } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const robotoCondensed = Roboto_Condensed({ 
  subsets: ["latin"],
  weight: "700",
  variable: "--font-roboto-condensed"
})

// Avenir Condensed font - using system fonts with condensed fallback
const avenirCondensed = {
  fontFamily: '"Avenir Next Condensed", "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontStretch: 'condensed',
  fontWeight: 700,
}

export const metadata: Metadata = {
  title: "MADE HERE 2026 | Get Updates",
  description: "Stay informed about made here 2026 event. Sign up for updates and view highlights from made here 2025.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${robotoCondensed.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
