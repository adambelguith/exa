import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "./components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.exsa.tn'),
  title: "EXSA - Expert Skills Academy | Formation Professionnelle Tunisie | Startup, Business Management, E-commerce",
  description: "EXSA (Expert Skills Academy) - Centre de formation N°1 en Tunisie. Formations certifiées en entrepreneuriat, business management, e-commerce, digital marketing, gestion de projet. Accompagnement startup & PME. +500 projets accompagnés. Certifications reconnues par l'État.",
  keywords: "EXSA, Expert Skills Academy, formation professionnelle Tunisie, formation startup Tunisie, formation entrepreneuriat Tunisie, formation business management Tunisie, formation e-commerce Tunisie, formation digital marketing Tunisie, formation gestion de projet Tunisie, centre de formation Tunisie, accompagnement startup Tunisie, formation certifiée Tunisie, formation PME Tunisie, formation leadership Tunisie, formation soft skills Tunisie, business plan Tunisie, pitch deck Tunisie, transformation digitale Tunisie, formation RH Tunisie, ISO certification Tunisie, formation langues professionnelles Tunisie",
  authors: [{ name: "EXSA - Expert Skills Academy" }],
  creator: "EXSA - Expert Skills Academy",
  publisher: "EXSA - Expert Skills Academy",
  icons: {
    icon: [
      { url: "/logo.ico", sizes: "any", type: "image/x-icon" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/logo.ico",
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "EXSA - Expert Skills Academy | Formation Professionnelle N°1 en Tunisie",
    description: "Centre de formation certifié en Tunisie. Formations startup, business management, e-commerce, digital marketing. +500 projets accompagnés. Certifications reconnues par l'État.",
    type: "website",
    locale: "fr_TN",
    siteName: "EXSA - Expert Skills Academy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "EXSA - Expert Skills Academy - Formation Professionnelle Tunisie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EXSA - Expert Skills Academy | Formation Professionnelle Tunisie",
    description: "Centre de formation N°1 en Tunisie. Formations certifiées startup, business, e-commerce. +500 projets accompagnés.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.exsa.tn",
  },
  category: "Education",
  applicationName: "EXSA - Expert Skills Academy",
  appleWebApp: {
    capable: true,
    title: "EXSA Academy",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
      </head>
      <body className="antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
