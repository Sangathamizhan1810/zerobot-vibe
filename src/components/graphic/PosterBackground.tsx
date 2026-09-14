import React from "react";
import Image from "next/image";
import posterBg from "@/assets/icon/zerobots_matte_poster_bg.png";

interface PosterBackgroundProps {
  variant?: "default" | "subtle" | "intense";
  overlayGrid?: boolean;
}

export const PosterBackground = ({
  variant = "default",
  overlayGrid = true,
}: PosterBackgroundProps) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
      {/* 1. Underlying Poster Background Layer */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={posterBg}
          alt="ZeroBots Cyber Environment"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center ${
            variant === "subtle" ? "opacity-60" : variant === "intense" ? "opacity-100" : "opacity-85"
          }`}
        />
      </div>

      {/* 2. Top-Left & Bottom-Right Neon Accent Beams */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/15 blur-[120px] rounded-full" />

      {/* 3. Subtle Digital Tech Grid */}
      {overlayGrid && (
        <div
          className="absolute inset-0 w-full h-full opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(0, 240, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      )}

      {/* 4. Ambient Vignette Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020609] via-transparent to-[#020609]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020609]/60 via-transparent to-[#020609]/60" />

      {/* 5. Animated Subtle Scanning Light Line */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent animate-cyber-scan" />
      </div>
    </div>
  );
};
