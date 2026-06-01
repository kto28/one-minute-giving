import type { Metadata } from "next";
import { Geist } from "next/font/google";
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
      <body className="min-h-full flex flex-col bg-cream text-foreground">
        {children}
      </body>
    </html>
  );
}
