import "./globals.css"
import { neuroPolitical } from "@/lib/fonts"
import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "RC MEGA - Throttling RC Hobbies | Remote Control Cars, Trucks, Planes",
    template: "%s | RC MEGA",
  },
  description:
    "RC MEGA: Your ultimate destination for RC cars, trucks, planes, and more. Join the RC revolution with top brands, expert advice, and a thriving community.",
  keywords: [
    "RC cars",
    "remote control vehicles",
    "RC trucks",
    "RC planes",
    "RC hobby",
    "RC community",
    "RC racing",
    "RC parts",
    "RC accessories",
  ],
  authors: [{ name: "RC MEGA Team" }],
  creator: "RC MEGA",
  publisher: "RC MEGA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rcmega.com",
    siteName: "RC MEGA",
    title: "RC MEGA - Throttling RC Hobbies | Remote Control Cars, Trucks, Planes",
    description:
      "Discover the ultimate RC experience with RC MEGA. Top-quality remote control cars, trucks, planes, and accessories. Join our thriving RC community today!",
    images: [
      {
        url: "https://www.rcmega.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RC MEGA - Throttling RC Hobbies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RC MEGA - Throttling RC Hobbies | Remote Control Cars, Trucks, Planes",
    description:
      "Explore the world of RC with RC MEGA. Premium remote control vehicles, expert advice, and a passionate community awaits!",
    images: ["https://www.rcmega.com/twitter-image.jpg"],
    creator: "@rcmegaOfficial",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.rcmega.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={neuroPolitical.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Add any additional font links here */}
      </head>
      <body className="min-h-screen">
        <header>
          {/* Add structured data for organization */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "RC MEGA",
                url: "https://www.rcmega.com",
                logo: "https://www.rcmega.com/logo.png",
                sameAs: [
                  "https://www.facebook.com/rcmegaofficial",
                  "https://www.instagram.com/rcmegaofficial",
                  "https://www.youtube.com/@rcmegacofficial",
                ],
              }),
            }}
          />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}

