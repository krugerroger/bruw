import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Brunella Indépendante | Rencontre intime",
  description: "Faites la connaissance de Brunella, une compagne indépendante alliant élégance naturelle et expertise du bien-être. Je vous propose des instants d'exception et des massages professionnels, pensés pour une clientèle exigeante en quête de distinction.",
  keywords: [
    "Escort indépendante Paris",
    "escort de luxe",
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

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  icons: {
    icon: "/web_logo.ico",
  }
};

export default async function RootLayout({
  children,
  params
}: Props) {
  // Await the params object as required in Next.js 15+
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable} dark`}
    >
      <body className="font-sans">
        <Analytics />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}