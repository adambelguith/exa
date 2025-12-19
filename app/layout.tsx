import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EXSA - Expert Skills Academy | Management PMS & Stratégie Business pour Startups",
  description: "Expert Skills Academy - Centre de formation spécialisé en PMS (Project Management System), stratégie business et management pour startups en Tunisie. Développez vos compétences en gestion de projets et stratégie d'entreprise.",
  keywords: "PMS, Project Management System, gestion de projets, stratégie business, management, startups, formation Tunisie, EXSA, Expert Skills Academy, formation professionnelle",
  authors: [{ name: "Expert Skills Academy" }],
  openGraph: {
    title: "EXSA - Expert Skills Academy | PMS & Stratégie Business",
    description: "Formation en management PMS et stratégie business pour startups en Tunisie",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
