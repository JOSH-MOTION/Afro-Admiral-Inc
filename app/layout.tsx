
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://afroadmiral.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Afro Admiral Inc. — Dream It, Say It, Done!",
    template: "%s | Afro Admiral Inc.",
  },
  description:
    "AFRO ADMIRAL INC is an all-round communication ecosystem delivering Brand Management, Marketing, PR, Event Production, Content Development, and Corporate Liaison services across Africa.",
  keywords: [
    // Brand
    "Afro Admiral",
    "Afro Admiral Inc",
    "AfroAdmiral",
    "African Maven Agency",
    "Dream It Say It Done",

    // Core services
    "Brand Management Ghana",
    "PR Agency Ghana",
    "Public Relations Africa",
    "Advertising Agency Ghana",
    "Event Production Ghana",
    "Event Management Africa",
    "Ghost Writing Ghana",
    "Content Writing Africa",
    "Corporate Liaison Ghana",
    "Lobby Services Ghana",
    "Ethical Lobbying Africa",
    "Media Production Ghana",

    // Long-tail / intent keywords
    "Best PR Agency in Ghana",
    "Top Marketing Agency West Africa",
    "Brand Management Company Ghana",
    "Communications Agency Accra",
    "Event Planning Company Ghana",
    "Corporate Communication Ghana",
    "Advertising Agency Accra Ghana",
    "Public Relations Company Accra",
    "African Communication Agency",
    "Brand Strategy Africa",
    "Social Media Marketing Ghana",
    "Content Development Africa",
    "Integrated Marketing Communications Ghana",

    // Location
    "Ghana",
    "Accra",
    "West Africa",
    "Africa",
  ],
  authors: [{ name: "Afro Admiral Inc.", url: BASE_URL }],
  creator: "Afro Admiral Inc.",
  publisher: "Afro Admiral Inc.",
  verification: {
    google: "HMCrTCz46VJfBvDcn1cEUBq2J6_9mjv-HjeQpspuUU4",
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
    icon: "/Icon Alone blue.png",
    shortcut: "/Icon Alone blue.png",
    apple: "/Icon Alone blue.png",
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Afro Admiral Inc. — Dream It, Say It, Done!",
    description:
      "AFRO ADMIRAL INC is an all-round communication ecosystem delivering Brand Management, Marketing, PR, Event Production, Content Development, and Corporate Liaison services across Africa.",
    url: BASE_URL,
    siteName: "Afro Admiral Inc.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Afro Admiral Inc. — Dream It, Say It, Done!",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@afroadmiral",
    creator: "@afroadmiral",
    title: "Afro Admiral Inc. — Dream It, Say It, Done!",
    description:
      "AFRO ADMIRAL INC is an all-round communication ecosystem delivering Brand Management, Marketing, PR, Event Production, Content Development, and Corporate Liaison services across Africa.",
    images: ["/og-image.jpeg"],
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-darker font-sans">
        {children}
      </body>
    </html>
  );
}

