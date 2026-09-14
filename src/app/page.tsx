"use client";

import Link from "next/link";
import { ArrowRight, Cpu, Code2, Shield, Compass, ChevronRight, Layers, Sparkles } from "lucide-react";
import { SnapContainer, SnapSection } from "@/components/layout/SnapScroll";
import { PosterBackground } from "@/components/graphic/PosterBackground";
import { ZeroBotsLogo } from "@/components/graphic/ZeroBotsLogo";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <SnapContainer>
      {/* SECTION 1: HERO */}
      <SnapSection index={0} backgroundElement={<PosterBackground variant="default" />}>
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full px-2">
          {/* Welcome Pill */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[10px] sm:text-xs md:text-sm font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-cyan-300 mb-3 sm:mb-4 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse shrink-0" />
            <span>WELCOME TO</span>
          </div>

          {/* Glowing Emblem & Brand Logo */}
          <div className="mb-3 sm:mb-4 max-w-full">
            <ZeroBotsLogo size="hero" showTagline={true} useBrandFont={true} />
          </div>

          {/* Subtitle / Value Proposition */}
          <p className="text-slate-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed mt-2 sm:mt-4 font-light px-2">
            Pioneering affordable, indigenous autonomous robotics and real-time intelligent operating systems engineered for real-world autonomy.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-6 sm:mt-8 w-full">
            <Link
              href="/products/hardware"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-100 hover:to-white shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:shadow-[0_0_35px_rgba(0,240,255,0.8)] transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Hardware</span>
              <Cpu className="w-4 h-4 text-slate-900 group-hover:rotate-12 transition-transform" />
            </Link>

            <Link
              href="/services/software-solutions"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Software Solutions</span>
              <Code2 className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/enquiries"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Enquiries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Real-time telemetry badges */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-cyan-500/20 max-w-lg w-full">
            <div className="flex flex-col items-center text-center px-1">
              <span className="text-sm sm:text-base md:text-xl font-bold font-mono text-cyan-300">&lt; 0.2ms</span>
              <span className="text-[9px] sm:text-[10px] md:text-xs text-slate-400 uppercase tracking-wider mt-0.5">Edge Response</span>
            </div>
            <div className="flex flex-col items-center text-center border-x border-cyan-500/20 px-1">
              <span className="text-sm sm:text-base md:text-xl font-bold font-mono text-cyan-300">100%</span>
              <span className="text-[9px] sm:text-[10px] md:text-xs text-slate-400 uppercase tracking-wider mt-0.5">Indigenous</span>
            </div>
            <div className="flex flex-col items-center text-center px-1">
              <span className="text-sm sm:text-base md:text-xl font-bold font-mono text-cyan-300">24/7</span>
              <span className="text-[9px] sm:text-[10px] md:text-xs text-slate-400 uppercase tracking-wider mt-0.5">Mission Uptime</span>
            </div>
          </div>
        </div>
      </SnapSection>

      {/* SECTION 2: THE PARADIGM */}
      <SnapSection index={1} backgroundElement={<PosterBackground variant="subtle" />}>
        <div className="w-full max-w-6xl mx-auto py-4 sm:py-6">
          <div className="text-center mb-6 sm:mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-2 sm:mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Core Paradigm</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Robotics Engineered From <span className="text-cyan-400">Ground Zero</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-2 sm:mt-3 px-2">
              We focus on purposeful engineering. Designing accessible companion robotics and dependable digital solutions through clean, agile development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* Card 1 */}
            <div className="cyber-glass cyber-glass-interactive rounded-2xl p-5 sm:p-7 md:p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-4 sm:mb-5 shadow-[0_0_20px_rgba(0,240,255,0.25)]">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Interactive Companion Design</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Focusing on engaging physical personality, subtle ambient awareness, and delightful micro-interactions that make companion robotics feel natural and welcome on any desk.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-cyan-500/15 flex items-center justify-between text-[10px] sm:text-xs font-mono text-cyan-400">
                <span>DESK COMPANION</span>
                <span className="text-slate-500">EXPERIENCE</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="cyber-glass cyber-glass-interactive rounded-2xl p-5 sm:p-7 md:p-8 flex flex-col justify-between border-cyan-400/40 shadow-[0_0_30px_rgba(0,240,255,0.15)]">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-4 sm:mb-5 shadow-[0_0_20px_rgba(0,240,255,0.25)]">
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Purpose-Built Hardware</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Practical, streamlined electronics and mechanical architecture engineered for reliability, durability, and smooth responsiveness in an accessible form factor.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-cyan-500/15 flex items-center justify-between text-[10px] sm:text-xs font-mono text-cyan-400">
                <span>LEAN ARCHITECTURE</span>
                <span className="text-slate-500">PROTOTYPING</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="cyber-glass cyber-glass-interactive rounded-2xl p-5 sm:p-7 md:p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-4 sm:mb-5 shadow-[0_0_20px_rgba(0,240,255,0.25)]">
                  <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Clean Control Logic</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Lightweight embedded control routines that coordinate movement and inputs without bloated dependencies, ensuring prompt reactivity and dependable day-to-day operation.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-cyan-500/15 flex items-center justify-between text-[10px] sm:text-xs font-mono text-cyan-400">
                <span>ZERO-BLOAT FIRMWARE</span>
                <span className="text-slate-500">RESPONSIVE</span>
              </div>
            </div>
          </div>
        </div>
      </SnapSection>

      {/* SECTION 3: DUAL ECOSYSTEM */}
      <SnapSection index={2} backgroundElement={<PosterBackground variant="default" />}>
        <div className="w-full max-w-6xl mx-auto py-4 sm:py-6">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Symbiotic Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Hardware Meets <span className="text-cyan-400">Core Software</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-2 px-2">
              Engineered together for zero-friction integration and focused utility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
            {/* Hardware Column */}
            <div className="cyber-glass rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono text-cyan-900 bg-cyan-300 font-semibold shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                    COMING SOON
                  </span>
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                  &quot;Blob&quot; — Desktop Companion Robot
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Our flagship autonomous desktop companion robot currently under active development. Designed to bring delightful physical companionship, ambient presence, and interactive personality to your desk.
                </p>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>Personal companion engineered for your daily workspace</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>Ambient workspace awareness and charming physical presence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>Under active development for upcoming launch</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-cyan-500/20">
                <Link
                  href="/products/hardware"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-300 hover:text-white transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Learn More About Blob</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Software Column */}
            <div className="cyber-glass rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
                    DIGITAL ENGINEERING
                  </span>
                  <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                  Software Solutions & Services
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Full-stack web applications, native Android & Windows software suites, modern UI/UX design systems, and distinct graphic identities.
                </p>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>Bespoke responsive web apps & Next.js architectures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>Native Android and Windows desktop applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>UI/UX design systems, wireframing & graphic branding</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-cyan-500/20">
                <Link
                  href="/services/software-solutions"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-300 hover:text-white transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Explore Software Solutions</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SnapSection>

      {/* SECTION 4: STARTUP FOCUS & CAPABILITIES */}
      <SnapSection index={3} backgroundElement={<PosterBackground variant="subtle" />}>
        <div className="w-full max-w-5xl mx-auto py-4 sm:py-6">
          <div className="text-center mb-6 sm:mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-2 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STARTUP FOCUS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Companion Robotics & <span className="text-cyan-400">Digital Craftsmanship</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto mt-2 px-2">
              We are laser-focused on developing Blob for desks everywhere, while delivering cutting-edge software solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="cyber-glass rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-300 mb-1">Blob Robot</span>
              <span className="text-[10px] sm:text-xs font-semibold text-white uppercase tracking-wider">Hardware</span>
              <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1.5 sm:mt-2">Desktop companion bringing personality to your workspace</p>
            </div>

            <div className="cyber-glass rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-300 mb-1">Web & Apps</span>
              <span className="text-[10px] sm:text-xs font-semibold text-white uppercase tracking-wider">Full-Stack</span>
              <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1.5 sm:mt-2">Modern web portals and Android & Windows native apps</p>
            </div>

            <div className="cyber-glass rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-300 mb-1">UI/UX</span>
              <span className="text-[10px] sm:text-xs font-semibold text-white uppercase tracking-wider">Design</span>
              <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1.5 sm:mt-2">Interactive prototypes & distinct visual identities</p>
            </div>

            <div className="cyber-glass rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-300 mb-1">Direct Access</span>
              <span className="text-[10px] sm:text-xs font-semibold text-white uppercase tracking-wider">Founders</span>
              <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1.5 sm:mt-2">Work directly with core engineers for swift execution</p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl cyber-glass border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4 text-left">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white">Direct Engineering Collaboration</h4>
                <p className="text-[11px] sm:text-xs text-slate-400">Reach out for general technical discussions or digital service consultations.</p>
              </div>
            </div>
            <Link
              href="/enquiries"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-cyan-300 hover:text-white bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-center whitespace-nowrap transition-colors"
            >
              Get in Touch &rarr;
            </Link>
          </div>
        </div>
      </SnapSection>

      {/* SECTION 5: DEPLOY / ACTION PORTAL + FOOTER AS BOTTOM PART */}
      <SnapSection
        index={4}
        isLastSection={true}
        footer={<Footer />}
        backgroundElement={<PosterBackground variant="intense" />}
      >
        <div className="w-full max-w-4xl mx-auto text-center py-6 sm:py-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 relative">
            <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse" />
            <div className="relative w-full h-full rounded-2xl cyber-glass border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_30px_rgba(0,240,255,0.4)]">
              <Cpu className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyan-300" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Connect With Our <br />
            <span className="cyber-gradient-text">Startup Squad</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed px-2">
            Get in touch to receive early updates on Blob, collaborate with our team, or build your next digital solution with our services.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Link
              href="/enquiries"
              className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-100 hover:to-white shadow-[0_0_35px_rgba(0,240,255,0.6)] hover:shadow-[0_0_45px_rgba(0,240,255,0.9)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Initiate Enquiry</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services/software-solutions"
              className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 transition-all flex items-center justify-center cursor-pointer"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </SnapSection>
    </SnapContainer>
  );
}
