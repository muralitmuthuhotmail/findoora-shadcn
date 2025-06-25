import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { Metadata } from "next"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Findoora | Login",
  description: "Findoora web application",
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Findoora",
    description: "Findoora web application",
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Findoora",
    images: [
      {
        url: "https://your-domain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Findoora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Findoora",
    description: "Findoora web application",
    images: ["https://your-domain.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
