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
  title: "Brunella Moreau | Élégante compagne à Ville",
  description: "Compagne raffinée pour moments privilégiés à Ville. Discrétion absolue et expérience inoubliable.",
  keywords: [
    "compagnie féminine",
    "escort de luxe",
    "ville",
    "soirée entre adultes",
    "rencontre discrète"
  ].join(", "),
  authors: [{ name: "Brunella Moreau" }],
  creator: "Brunella Moreau",
  publisher: "Brunella Moreau",
  metadataBase: new URL("https://votresite.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Brunella Moreau | Compagne d'exception à Ville",
    description: "Expérience raffinée et discrète en compagnie d'une femme élégante",
    url: "https://votresite.com",
    siteName: "Brunella Moreau",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brunella Moreau - Compagne raffinée",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  other: {
    "dc.title": "Brunella Moreau - Moments privilégiés",
    "dc.language": "fr",
  },
  icons :{
    icon : "web_logo.ico"
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