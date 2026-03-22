import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap' // Ajout recommandé pour le chargement des polices
})

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap' // Ajout recommandé pour le chargement des polices
})

export const metadata: Metadata = {
  title: "Brunella Indépendante | Rencontre intime",
  description: "Faites la connaissance de Brunella, une compagne indépendante alliant élégance naturelle et expertise du bien-être. Je vous propose des instants d'exception et des massages professionnels, pensés pour une clientèle exigeante en quête de distinction.",
  keywords: [
    "Escort indépendante Paris",
    "escort de luxe", // À garder si tu assumes le terme pour le SEO
    "Massage sensuel Paris",
    "Rencontre intime",
    "Services escort",
    "rencontre discrète",
    "Escort indépendante",
    "Escort sensuel",
    "Brunella Moreau",
    "Brunella Indépendante",
  ].join(", "),
  
  authors: [{ name: "Brunella Moreau" }],
  creator: "Brunella Moreau",
  metadataBase: new URL("https://www.brunellaindependante.com/"),
  
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Brunella Indépendante | Rencontre intime",
    description: "L'élégance et la discrétion d'une compagne d'exception pour vos moments privilégiés.",
    url: "https://www.brunellaindependante.com/",
    siteName: "Brunella Indépendante",
    images: [
      {
        url: "/bru_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Brunella Indépendante - Compagne raffinée",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  // --- CORRECTION ROBOTS ---
  robots: {
    index: true, // Autorise l'apparition sur Google
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  icons: {
    icon: "/web_logo.ico", // Ajout du slash initial pour la sécurité du chemin
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} dark`}>
      <body className="font-sans">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}