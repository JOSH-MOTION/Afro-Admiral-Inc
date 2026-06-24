"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // As user scrolls down through the hero, image scales from 1 → 1.18
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  // Content fades and slides up slightly as user scrolls away
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[92vh] md:min-h-0 md:aspect-[1.6] flex items-center bg-brand-primary overflow-hidden"
      style={{ marginTop: "-6rem" }}
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: imageScale }}
      >
        <Image
          src="/landing.jpg"
          alt="Afro Admiral Inc. Creative Hero Background"
          fill
          sizes="100vw"
          className="object-cover object-center md:object-right-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 md:bg-transparent md:bg-gradient-to-r md:from-black/65 md:to-transparent" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white pt-28 md:pt-0"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-2xl flex flex-col items-center md:items-start space-y-4 text-center md:text-left mx-auto md:mx-0">
          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-lg sm:text-xl md:text-3xl font-semibold tracking-wider text-white/90 drop-shadow-md"
          >
            The &quot;African Maven&quot; Agency:
          </motion.span>

          {/* Headline — single unbroken line matching the original */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white drop-shadow-lg"
          >
            Dream It, Say It, Done!
          </motion.h1>
        </div>
      </motion.div>
    </section>
  );
}
