import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ServiceItem {
  title: string;
  image: string;
  gridSpan: string;
  aspectRatio: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: "Public Relations",
      image: "/public relation.jpg",
      gridSpan: "col-span-1",
      aspectRatio: "aspect-[3/4] md:aspect-square",
    },
    {
      title: "Advertising",
      image: "/advertising.jpg",
      gridSpan: "col-span-1",
      aspectRatio: "aspect-[3/4] md:aspect-square",
    },
    {
      title: "Production",
      image: "/production.jpg",
      gridSpan: "col-span-1",
      aspectRatio: "aspect-[3/4] md:aspect-square",
    },
    {
      title: "Brand and Event Management",
      image: "/Branding.jpg",
      gridSpan: "col-span-1 md:col-span-2",
      aspectRatio: "aspect-[4/3] md:aspect-[2.1/1]",
    },
    {
      title: "Lobby Services",
      image: "/lobby.jpg",
      gridSpan: "col-span-1",
      aspectRatio: "aspect-[3/4] md:aspect-square",
    },
    {
      title: "Content/Ghost Writing",
      image: "/ghost writing.jpg",
      gridSpan: "col-span-1",
      aspectRatio: "aspect-[3/4] md:aspect-square",
    },
    {
      title: "Corporate/Governance Liaison",
      image: "/corporate.jpg",
      gridSpan: "col-span-1 md:col-span-2",
      aspectRatio: "aspect-[4/3] md:aspect-[2.1/1]",
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
                className={`${service.gridSpan} flex flex-col space-y-4 hover:scale-[1.01] transition-smooth group`}
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
                </div>

                {/* Service Title */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0e4ee5] tracking-tight pl-2">
                  {service.title}
                </h2>
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
