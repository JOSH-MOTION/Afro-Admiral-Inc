"use client";

import Image from "next/image";
import { useState } from "react";

interface FlipCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export default function FlipCard({ image, alt, title, description }: FlipCardProps) {
  const [tapped, setTapped] = useState(false);

  return (
    <div
      className={`bg-white rounded-[2rem] p-6 flex flex-col space-y-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-smooth cursor-pointer group ${tapped ? "is-tapped" : ""}`}
      onClick={() => setTapped((prev) => !prev)}
    >
      <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover transition-smooth ${tapped ? "scale-105" : "group-hover:scale-105"}`}
        />
        {/* Overlay — slides up on desktop hover OR mobile tap */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#0b2984]/95 via-[#0b2984]/80 to-transparent transition-transform duration-500 ease-in-out flex flex-col justify-end p-6 rounded-[1.5rem]
            ${tapped ? "translate-y-0" : "translate-y-full"}
            md:translate-y-full md:group-hover:translate-y-0
          `}
        >
          <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </div>
      <h3 className="text-2xl font-bold tracking-tight px-2 pb-2">{title}</h3>
    </div>
  );
}
