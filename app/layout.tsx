
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

export const metadata: Metadata = {
  title: "Afro Admiral Inc. — Dream It, Say It, Done!",
  description: "AFRO ADMIRAL INC is an all round communication ecosystem rendering Brand Management, Marketing, PR, Event Production, Content Development, and Corporate Liaison services in Africa.",
  keywords: "Afro Admiral, Communication Ecosystem, Brand Management, Marketing, Public Relations, Event Production, Content Writing, Corporate Liaison, Ghana, Africa",
  openGraph: {
    title: "Afro Admiral Inc. — Dream It, Say It, Done!",
    description: "AFRO ADMIRAL INC is an all round communication ecosystem rendering Brand Management, Marketing, PR, Event Production, Content Development, and Corporate Liaison services in Africa.",
    url: "https://afroadmiral.com",
    siteName: "Afro Admiral Inc.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afro Admiral Inc. — Dream It, Say It, Done!",
    description: "AFRO ADMIRAL INC is an all round communication ecosystem rendering Brand Management, Marketing, PR, Event Production, Content Development, and Corporate Liaison services in Africa.",
  },
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

