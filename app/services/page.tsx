import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Afro Admiral Inc.'s full suite of communication services — Public Relations, Advertising, Production, Brand & Event Management, Lobby Services, Content Writing, and Corporate Liaison across Africa.",
  alternates: {
    canonical: "https://afroadmiral.com/services",
  },
  openGraph: {
    title: "Our Services | Afro Admiral Inc.",
    description:
      "Explore Afro Admiral Inc.'s full suite of communication services — Public Relations, Advertising, Production, Brand & Event Management, Lobby Services, Content Writing, and Corporate Liaison across Africa.",
    url: "https://afroadmiral.com/services",
  },
  twitter: {
    title: "Our Services | Afro Admiral Inc.",
    description:
      "Explore Afro Admiral Inc.'s full suite of communication services — Public Relations, Advertising, Production, Brand & Event Management, Lobby Services, Content Writing, and Corporate Liaison across Africa.",
  },
};

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn direction="up" delay={0} className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary tracking-tight">Our Services</h1>
            <p className="mt-3 text-base md:text-lg text-brand-darker/70 max-w-xl">
              Everything your brand needs to grow, connect, and lead.
            </p>
          </FadeIn>

          <ServicesGrid />
        </div>
      </main>

      <Footer />
    </div>
  );
}

