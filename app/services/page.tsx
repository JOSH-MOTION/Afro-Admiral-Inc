import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ServiceItem {
  title: string;
  image: string;
  gridSpan: string;
  aspectRatio: string;
  description: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: "Public Relations",
      image: "/public relation.jpg",
      gridSpan: "col-span-1",
      aspectRatio: "aspect-[3/4] md:aspect-square",
      description: "We help build and maintain a positive image for your brand through effective communication and strong stakeholder relationships.",
    },
    {
      title: "Advertising",
      image: "/advertising.jpg",
      gridSpan: "col-span-1",
      aspectRatio: "aspect-[3/4] md:aspect-square",
      description: "We develop creative advertising campaigns that increase visibility, attract customers, and drive results.",
    },
    {
      title: "Production",
      image: "/production.jpg",
      gridSpan: "col-span-1",
      aspectRatio: "aspect-[3/4] md:aspect-square",
      description: "We produce high-quality visual and media content that brings your brand story to life and leaves a lasting impression.",
    },
    {
      title: "Brand and Event Management",
      image: "/Branding.jpg",
      gridSpan: "col-span-1 md:col-span-2",
      aspectRatio: "aspect-[4/3] md:aspect-[2.1/1]",
      description: "We create memorable brand experiences and manage events that strengthen your brand and engage your audience.",
    },
    {
      title: "Lobby Services",
      image: "/lobby.jpg",
      gridSpan: "col-span-1",
      aspectRatio: "aspect-[3/4] md:aspect-square",
      description: "We help represent your interests, build strategic connections, and support productive engagement with decision-makers.",
    },
    {
      title: "Content/Ghost Writing",
      image: "/ghost writing.jpg",
      gridSpan: "col-span-1",
      aspectRatio: "aspect-[3/4] md:aspect-square",
      description: "We craft clear, compelling, and professional content that communicates your message effectively.",
    },
    {
      title: "Corporate/Governance Liaison",
      image: "/corporate.jpg",
      gridSpan: "col-span-1 md:col-span-2",
      aspectRatio: "aspect-[4/3] md:aspect-[2.1/1]",
      description: "We facilitate smooth communication and professional relationships between organizations, institutions, and key stakeholders.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Grid Content */}
      <main className="flex-grow py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${service.gridSpan} flex flex-col space-y-4 hover:-translate-y-2 transition-smooth group cursor-pointer`}
              >
                {/* Service Image Card */}
                <div
                  className={`relative w-full ${service.aspectRatio} rounded-[2rem] overflow-hidden shadow-lg group-hover:shadow-xl transition-smooth`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-smooth group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e4ee5]/95 via-[#0e4ee5]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-end p-8 rounded-[2rem]">
                    <p className="text-white/95 text-base md:text-lg leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Service Title */}
                <div className="pl-2">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0e4ee5] tracking-tight group-hover:text-brand-dark transition-smooth">
                    {service.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
