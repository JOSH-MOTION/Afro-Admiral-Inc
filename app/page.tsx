import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full aspect-[4/3] md:aspect-[1.6] flex items-center bg-brand-primary overflow-hidden" style={{ marginTop: '-6rem' }}>
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/landing.jpg"
              alt="Afro Admiral Inc. Creative Hero Background"
              fill
              sizes="100vw"
              className="object-cover object-center md:object-right-center"
              priority
            />
            {/* Soft overlay to ensure readability */}
            <div className="absolute inset-0 bg-black/10 md:bg-transparent md:bg-gradient-to-r md:from-black/40 md:to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
            <div className="max-w-2xl flex flex-col space-y-4">
              <span className="text-lg md:text-2xl font-semibold tracking-wider text-white/90 drop-shadow-md">
                The &quot;African Maven&quot; Agency:
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white drop-shadow-lg">
                Dream It, Say It, Done!
              </h1>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#f8faff] py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-brand-primary/10">
              {/* Stat 1 */}
              <div className="py-4 md:py-0">
                <p className="text-5xl md:text-6xl font-extrabold text-brand-primary tracking-tight">45+</p>
                <p className="mt-2 text-sm font-semibold text-brand-darker uppercase tracking-wider">Projects</p>
              </div>
              {/* Stat 2 */}
              <div className="py-6 md:py-0">
                <p className="text-5xl md:text-6xl font-extrabold text-brand-primary tracking-tight">41+</p>
                <p className="mt-2 text-sm font-semibold text-brand-darker uppercase tracking-wider">Projects</p>
              </div>
              {/* Stat 3 */}
              <div className="py-4 md:py-0">
                <p className="text-5xl md:text-6xl font-extrabold text-brand-primary tracking-tight">30</p>
                <p className="mt-2 text-sm font-semibold text-brand-darker uppercase tracking-wider">Projects</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section id="about" className="py-24 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Image Column */}
              <div className="lg:col-span-5 relative w-full aspect-[3/4] max-w-md mx-auto lg:max-w-none overflow-hidden  hover:shadow-[0_30px_70px_-10px_rgba(5,19,61,0.45)] hover:scale-[1.01] transition-smooth group">
                <Image
                  src="/artboard 2.png"
                  alt="Who We Are - Creative African Portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-smooth group-hover:scale-105"
                />
              </div>

              {/* Right Content Column */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark">
                  <span className="block text-brand-primary mb-2">Who</span>
                  <span>We Are</span>
                </h2>

                <p className="text-lg md:text-xl text-brand-darker/80 leading-relaxed font-normal">
                  AFRO ADMIRAL INC is an all round communication ecosystem rendering Brand Management & Marketing,
                  PR & Ethical Lobbying, Afrocomm Research & Development for Corporate and Governance purposes,
                  Ghostwriting, Event production, content developing and Wholistic Advertising services.
                </p>

                <p className="text-lg md:text-xl text-brand-darker/80 leading-relaxed font-normal">
                  It aims to be the Futurum definitor of the 21st and 22nd generation African communication force.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="bg-brand-primary py-24 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Mission Card */}
              <div className="bg-[#0b2984] rounded-[2rem] p-6 flex flex-col space-y-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-smooth group cursor-pointer">
                <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden">
                  <Image
                    src="/mission.png"
                    alt="Our Mission"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-smooth group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2984]/95 via-[#0b2984]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-end p-6 rounded-[1.5rem]">
                    <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
                      Our mission is to deliver creative and effective brand, PR, event, and advertising solutions that help businesses grow, build trust, and achieve their goals.
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold tracking-tight px-2 pb-2">Our Mission</h3>
              </div>

              {/* Vision Card */}
              <div className="bg-[#0b2984] rounded-[2rem] p-6 flex flex-col space-y-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-smooth group cursor-pointer">
                <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden">
                  <Image
                    src="/vision.png"
                    alt="Our Vision"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-smooth group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2984]/95 via-[#0b2984]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-end p-6 rounded-[1.5rem]">
                    <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
                      To be Africa&apos;s leading PR, brand management, event production, and advertising agency, known for creating innovative solutions that help brands connect and grow.
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold tracking-tight px-2 pb-2">Our Vision</h3>
              </div>

              {/* Core Values Card */}
              <div className="bg-[#0b2984] rounded-[2rem] p-6 flex flex-col space-y-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-smooth group cursor-pointer">
                <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden">
                  <Image
                    src="/ChatGPT Image May 1, 2026, 03_18_50 AM.png"
                    alt="Core Values"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-smooth group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2984]/95 via-[#0b2984]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-end p-6 rounded-[1.5rem]">
                    <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
                      Integrity, Creativity, Excellence, Innovation, Teamwork, and Commitment. These values guide everything we do and drive us to deliver outstanding results for our clients.
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold tracking-tight px-2 pb-2">Core Values</h3>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

