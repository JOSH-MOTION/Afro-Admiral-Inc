import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden pt-24 pb-12 bg-white">
      {/* Background Grass Hills */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/citrus-enhanced (11).png"
          alt="Grass Hills Backdrop"
          fill
          className="object-cover object-bottom opacity-90"
        />
      </div>

      {/* Floating Blue Footer Box */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="bg-[#0e4ee5] rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Left Brand Logo */}
            <div className="flex flex-col justify-between">
              <div className="flex flex-col space-y-4">
                <div className="relative w-48 h-16">
                  <Image
                    src="/horizontal white.png"
                    alt="Afro Admiral Inc."
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <p className="text-white/70 text-sm max-w-[240px] leading-relaxed">
                  Dream It, Say It, Done!
                </p>
              </div>
            </div>

            {/* Column 1: About */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white/90">About</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-white/70 hover:text-white hover:underline transition-smooth text-sm">
                    Mission
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-white/70 hover:text-white hover:underline transition-smooth text-sm">
                    Vision
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/70 hover:text-white hover:underline transition-smooth text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-white hover:underline transition-smooth text-sm">
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Get In Touch */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white/90">Get In Touch</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li>
                  <a href="mailto:afroadmiral@gmail.com" className="hover:text-white transition-smooth">
                    afroadmiral@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+233208866554" className="hover:text-white transition-smooth">
                    +233 208 866 554
                  </a>
                </li>
                <li>
                  <a href="tel:+233599852521" className="hover:text-white transition-smooth">
                    +233 599 852 521
                  </a>
                </li>
                <li className="pt-2 text-white/90 font-medium">
                  Ghana - West Africa
                </li>
              </ul>
            </div>

            {/* Column 3: Socials */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white/90">Socials</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li>
                  <a href="https://www.instagram.com/afroadmiral?igsh=OXpxaHlvYWlxOWNr&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-white transition-smooth">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-smooth">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/share/1JDpH41mWU/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="hover:text-white transition-smooth">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-white transition-smooth">
                    Tiktok
                  </a>
                </li>
                <li>
                  <a href="https://snapchat.com" target="_blank" rel="noreferrer" className="hover:text-white transition-smooth">
                    Snapchat
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/20 my-10" />

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
            <p>2026 AfroAdmiralInc. All rights reserved</p>
            <p className="mt-4 md:mt-0 font-medium">@afroadmiral</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
