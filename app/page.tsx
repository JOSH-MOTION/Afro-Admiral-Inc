import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroSection from "@/components/HeroSection";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section — parallax + polished mobile */}
        <HeroSection />

        {/* Stats Section */}
        <FadeIn direction="up" delay={0.05}>
          <section className="bg-[#f8faff] py-8 md:py-12 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-3 gap-2 md:gap-4 text-center divide-x md:divide-x divide-brand-primary/10">
                {/* Stat 1 */}
                <div className="py-3 md:py-0 px-2">
                  <p className="text-3xl md:text-6xl font-extrabold text-brand-primary tracking-tight">
                    <AnimatedCounter target={4} />
                  </p>
                  <p className="mt-1 md:mt-2 text-[10px] md:text-sm font-semibold text-brand-darker tracking-wider leading-tight">Completed <br /> Projects</p>
                </div>
                {/* Stat 2 */}
                <div className="py-3 md:py-0 px-2">
                  <p className="text-3xl md:text-6xl font-extrabold text-brand-primary tracking-tight">
                    <AnimatedCounter target={6} />
                  </p>
                  <p className="mt-1 md:mt-2 text-[10px] md:text-sm font-semibold text-brand-darker  tracking-wider leading-tight">Projects in <br /> Pipeline</p>
                </div>
                {/* Stat 3 */}
                <div className="py-3 md:py-0 px-2">
                  <p className="text-3xl md:text-6xl font-extrabold text-brand-primary tracking-tight">
                    <AnimatedCounter target={9} suffix="+" />
                  </p>
                  <p className="mt-1 md:mt-2 text-[10px] md:text-sm font-semibold text-brand-darker tracking-wider leading-tight">Leads and <br /> Prospective Projects</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Who We Are Section */}
        <section id="about" className="py-24 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Image Column */}
              <FadeIn direction="left" delay={0} className="lg:col-span-5">
                <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:max-w-none overflow-hidden hover:shadow-[0_30px_70px_-10px_rgba(5,19,61,0.45)] hover:scale-[1.01] transition-smooth group">
                  <Image
                    src="/artboard 2.png"
                    alt="Who We Are - Creative African Portrait"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-smooth group-hover:scale-105"
                  />
                </div>
              </FadeIn>

              {/* Right Content Column */}
              <FadeIn direction="right" delay={0.15} className="lg:col-span-7">
                <div className="flex flex-col justify-center space-y-8">
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark">
                    <span className="block text-brand-primary mb-2">Who</span>
                    <span>We Are</span>
                  </h2>

                  <p className="text-lg md:text-xl text-brand-darker/80 leading-relaxed font-normal">
                    AFRO ADMIRAL INC is an all round communication ecosystem rendering Brand Management &amp; Marketing,
                    PR &amp; Ethical Lobbying, Afrocomm Research &amp; Development for Corporate and Governance purposes,
                    Ghostwriting, Event production, content developing and Wholistic Advertising services.
                  </p>

                  <p className="text-lg md:text-xl text-brand-darker/80 leading-relaxed font-normal">
                    It aims to be the Futurum definitor of the 21st and 22nd generation African communication force.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="bg-brand-primary py-24 text-brand-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Mission Card */}
              <FadeIn direction="up" delay={0}>
                <div className="bg-[white] rounded-[2rem] p-6 flex flex-col space-y-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-smooth group cursor-pointer">
                  <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden">
                    <Image
                      src="/mission.png"
                      alt="Our Mission"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-smooth group-hover:scale-105"
                    />
                    {/* Hover Overlay (always visible on mobile, slide-up on desktop) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b2984]/95 via-[#0b2984]/80 to-transparent translate-y-0 md:translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-end p-6 rounded-[1.5rem]">
                      <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
                        Our mission is to deliver creative and effective brand, PR, event, and advertising solutions that help businesses grow, build trust, and achieve their goals.
                      </p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight px-2 pb-2">Our Mission</h3>
                </div>
              </FadeIn>

              {/* Vision Card */}
              <FadeIn direction="up" delay={0.15}>
                <div className="bg-[white] rounded-[2rem] p-6 flex flex-col space-y-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-smooth group cursor-pointer">
                  <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden">
                    <Image
                      src="/vision.png"
                      alt="Our Vision"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-smooth group-hover:scale-105"
                    />
                    {/* Hover Overlay (always visible on mobile, slide-up on desktop) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b2984]/95 via-[#0b2984]/80 to-transparent translate-y-0 md:translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-end p-6 rounded-[1.5rem]">
                      <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
                        To be Africa&apos;s leading PR, brand management, event production, and advertising agency, known for creating innovative solutions that help brands connect and grow.
                      </p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight px-2 pb-2">Our Vision</h3>
                </div>
              </FadeIn>

              {/* Core Values Card */}
              <FadeIn direction="up" delay={0.3}>
                <div className="bg-[white] rounded-[2rem] p-6 flex flex-col space-y-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-smooth group cursor-pointer">
                  <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden">
                    <Image
                      src="/ChatGPT Image May 1, 2026, 03_18_50 AM.png"
                      alt="Core Values"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-smooth group-hover:scale-105"
                    />
                    {/* Hover Overlay (always visible on mobile, slide-up on desktop) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b2984]/95 via-[#0b2984]/80 to-transparent translate-y-0 md:translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-end p-6 rounded-[1.5rem]">
                      <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
                        Integrity, Creativity, Excellence, Innovation, Teamwork, and Commitment. These values guide everything we do and drive us to deliver outstanding results for our clients.
                      </p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight px-2 pb-2">Core Values</h3>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
