import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "One Minute Giving — Donate 1 Minute. Create 1 Kind Moment.",
  description:
    "One Minute Giving encourages everyone to donate just 1 minute every day to help someone. Join the kindness movement — discover daily actions, share stories, and make the world a warmer place.",
  keywords: [
    "kindness",
    "one minute giving",
    "daily giving",
    "volunteer",
    "charity",
    "community",
    "善意",
    "每日一善",
    "時間捐贈",
  ],
  openGraph: {
    title: "One Minute Giving — Donate 1 Minute. Create 1 Kind Moment.",
    description:
      "Join the kindness movement. Donate 1 minute daily to help someone and make the world a warmer place.",
    url: "https://oneminutegiving.com",
    siteName: "One Minute Giving",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Minute Giving",
    description: "Donate 1 Minute. Create 1 Kind Moment.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <Script
          defer
          data-domain="oneminutegiving.com"
          src="https://analytics.jj8829.org/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-cream text-foreground">
        {children}
      </body>
    </html>
  );
}
