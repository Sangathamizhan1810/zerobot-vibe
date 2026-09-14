import React from "react";
import Image from "next/image";
import zerobotsIconWebp from "@/assets/icon/zerobots-512x512.webp";
import zerobotsIconPng from "@/assets/icon/zerobots-512x512.png";
import { zeroBotsFont } from "@/app/fonts";

interface ZeroBotsLogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "hero";
  showTagline?: boolean;
  showText?: boolean;
  className?: string;
  format?: "webp" | "png";
  priority?: boolean;
  useBrandFont?: boolean;
}

export const ZeroBotsLogo = ({
  size = "md",
  showTagline = false,
  showText = true,
  className = "",
  format = "webp",
  priority,
  useBrandFont = false,
}: ZeroBotsLogoProps) => {

  // Dimension scaling tailored to square icon aspect ratio
  const dimensions = {
    xs: {
      icon: "w-6 h-6",
      pixelSize: 24,
      text: "text-base",
      dot: "w-1.5 h-1.5",
      tag: "text-[8px]",
      gap: "gap-2",
    },
    sm: {
      icon: "w-8 h-8",
      pixelSize: 32,
      text: "text-lg",
      dot: "w-2 h-2",
      tag: "text-[9px]",
      gap: "gap-2.5",
    },
    md: {
      icon: "w-10 h-10",
      pixelSize: 40,
      text: "text-2xl",
      dot: "w-2.5 h-2.5",
      tag: "text-[10px]",
      gap: "gap-3",
    },
    lg: {
      icon: "w-16 h-16",
      pixelSize: 64,
      text: "text-4xl",
      dot: "w-3 h-3",
      tag: "text-xs",
      gap: "gap-3.5",
    },
    hero: {
      icon: "w-12 h-12 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36",
      pixelSize: 144,
      text: "text-2xl sm:text-5xl md:text-6xl lg:text-7xl",
      dot: "w-4 h-4",
      tag: "text-[9px] sm:text-xs md:text-sm tracking-[0.18em] sm:tracking-[0.35em]",
      gap: "gap-2 sm:gap-4 md:gap-5",
    },
  }[size];

  const selectedIcon = format === "png" ? zerobotsIconPng : zerobotsIconWebp;
  const isHighPriority = priority ?? (size === "hero" || size === "sm");

  return (
    <div className={`flex flex-col items-center select-none max-w-full overflow-hidden ${className}`}>
      <div className={`flex items-center ${dimensions.gap} max-w-full`}>
        {/* Actual ZeroBots Icon with ambient glow */}
        <div className={`relative ${dimensions.icon} flex items-center justify-center shrink-0`}>
          {/* Ambient Cyber Glow */}
          <div className="absolute inset-0 bg-cyan-400/25 rounded-full blur-md scale-50 pointer-events-none" />

          {/* Actual Brand Icon (webp / png from assets/icon) */}
          <Image
            src={selectedIcon}
            alt="ZeroBots Icon"
            width={dimensions.pixelSize}
            height={dimensions.pixelSize}
            priority={isHighPriority}
            className="w-full h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Brand Text */}
        {showText && (
          <div className="flex flex-col shrink min-w-0">
            <div className="flex items-center tracking-wider">
              <span
                className={`${dimensions.text} text-white tracking-widest leading-tight ${useBrandFont ? `${zeroBotsFont.className} font-normal` : "font-black font-mono"
                  }`}
              >
                ZER<span className="text-[#00f0ff] drop-shadow-[0_0_10px_#00f0ff]">O</span>BOTS
              </span>
            </div>
          </div>
        )}
      </div>

      {showTagline && (
        <div className="mt-1.5 sm:mt-2 text-center max-w-full">
          <p className={`${dimensions.tag} font-semibold uppercase text-cyan-200/90 text-cyber-subtle`}>
            ROBOTICS <span className="text-[#00f0ff]">•</span> REIMAGINED
          </p>
        </div>
      )}
    </div>
  );
};

