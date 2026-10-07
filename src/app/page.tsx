"use client";

import Link from "next/link";
import { ArrowRight, Cpu, Code2, Network, Sparkles } from "lucide-react";
import { ZeroBotsLogo } from "@/components/graphic/ZeroBotsLogo";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/layout/FadeInSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { HardwareSection } from "@/components/sections/HardwareSection";
import { SoftwareSection } from "@/components/sections/SoftwareSection";
import { EnquiriesSection } from "@/components/sections/EnquiriesSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <FadeInSection id="home" className="pt-32">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full px-4 relative z-10">
          
          <div className="mb-6 sm:mb-10 max-w-full group">
            <ZeroBotsLogo size="hero" showTagline={false} useBrandFont={true} className="relative z-10" />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-slate-300 max-w-3xl leading-relaxed tracking-wide font-sans mb-10">
            Designing intelligent, indigenous autonomous systems and 
            <span className="text-white font-medium"> premium digital architectures.</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 w-full">
            <Link
              href="#hardware"
              className="px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase text-black bg-white hover:bg-slate-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] flex items-center gap-3 group cyber-btn"
            >
              <span>Hardware</span>
              <Cpu className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
            </Link>

            <Link
              href="#software"
              className="px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase text-white bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center gap-3 group"
            >
              <span>Software</span>
              <Code2 className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </Link>
          </div>

          {/* Telemetry Footer line */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-24 pt-8 border-t border-white/5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-slate-500">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 animate-pulse" /> Edge Telemetry</span>
            <span className="hidden sm:inline-block">|</span>
            <span>Indigenous Engineering</span>
            <span className="hidden sm:inline-block">|</span>
            <span>Uncompromised Design</span>
          </div>
        </div>
      </FadeInSection>

      {/* 2. THE PARADIGM */}
      <FadeInSection>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center md:text-left mb-16 md:mb-24 md:max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Engineering <span className="text-slate-500 italic">purpose</span>.
            </h2>
            <p className="text-slate-400 text-sm md:text-base lg:text-lg font-light leading-relaxed">
              We reject the superficial. Our architecture is built on a foundation of robust, lean control logic mapped to highly tactile physical and digital interfaces. Welcome to the era of substantial, undeniable craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            <div className="md:col-span-8 cyber-glass cyber-glass-interactive rounded-[2rem] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group min-h-[400px]">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                <Network className="w-32 h-32 text-cyan-400/20" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-slate-300 mb-6">
                  <Sparkles className="w-3 h-3" />
                  <span>Physical Presence</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4 max-w-md leading-tight">
                  Responsive Companion Architecture
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md font-light">
                  Focusing on engaging physical personality, subtle ambient awareness, and delightful micro-interactions that make companion robotics feel natural.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 cyber-glass cyber-glass-interactive rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-black/50 border border-white/5 flex items-center justify-center text-slate-300 mb-6">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Tactile Hardware</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  Practical, streamlined electronics designed for durability and smooth responsiveness in an accessible form factor.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                Lean Prototyping
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* OTHER SECTIONS */}
      <AboutSection />
      <HardwareSection />
      <SoftwareSection />
      <EnquiriesSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
