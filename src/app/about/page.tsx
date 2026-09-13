"use client";

import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Cpu, Code2, Rocket, CheckCircle2 } from "lucide-react";
import { SnapContainer, SnapSection } from "@/components/layout/SnapScroll";
import { PosterBackground } from "@/components/graphic/PosterBackground";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <SnapContainer>
      {/* SECTION 1: MISSION & ORIGIN */}
      <SnapSection index={0} backgroundElement={<PosterBackground variant="default" />}>
        <div className="w-full max-w-5xl mx-auto text-center py-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono uppercase tracking-[0.25em] text-cyan-300 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>ORIGIN & MISSION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Democratizing Intelligence. <br />
            <span className="cyber-gradient-text">Indigenous Robotics for All.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-5 leading-relaxed font-light">
            Founded with an uncompromising ambition: to establish India as a global powerhouse of intelligent robotics. At ZeroBots, we believe the next era of automation shouldn&apos;t belong exclusively to multi-billion-dollar conglomerates. We engineer accessible, rugged, and deeply intelligent systems from scratch.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
            <div className="cyber-glass rounded-2xl p-5 border border-cyan-500/20 text-left">
              <span className="text-xs font-mono text-cyan-400">01 / SOVEREIGNTY</span>
              <h3 className="text-base font-bold text-white mt-1">Indigenous Innovation</h3>
              <p className="text-xs text-slate-400 mt-1">Built domestically from custom physical prototypes to dedicated embedded firmware.</p>
            </div>

            <div className="cyber-glass rounded-2xl p-5 border border-cyan-500/20 text-left">
              <span className="text-xs font-mono text-cyan-400">02 / ACCESSIBILITY</span>
              <h3 className="text-base font-bold text-white mt-1">Democratized Access</h3>
              <p className="text-xs text-slate-400 mt-1">Making advanced perception and autonomy affordable for institutions, labs, and creators.</p>
            </div>

            <div className="cyber-glass rounded-2xl p-5 border border-cyan-500/20 text-left">
              <span className="text-xs font-mono text-cyan-400">03 / PRECISION</span>
              <h3 className="text-base font-bold text-white mt-1">Zero Compromise</h3>
              <p className="text-xs text-slate-400 mt-1">Deterministic sub-millisecond execution and failsafe industrial standards.</p>
            </div>
          </div>
        </div>
      </SnapSection>

      {/* SECTION 2: ENGINEERING PHILOSOPHY */}
      <SnapSection index={1} backgroundElement={<PosterBackground variant="subtle" />}>
        <div className="w-full max-w-6xl mx-auto py-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE ZERO DOCTRINE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white">
              The Engineering <span className="text-cyan-400">Philosophy</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-2">
              Why we call ourselves ZeroBots: We start from Zero Assumptions to eliminate inefficiencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="cyber-glass cyber-glass-interactive rounded-2xl p-6 sm:p-7">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-4">
                <span className="font-mono font-bold text-lg">01</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Zero Latency Bloat</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Traditional robotics software stacks have ballooned with multi-gigabyte dependencies and non-deterministic runtimes. We reject bloat: our lightweight control logic executes with clean, reliable predictability.
              </p>
            </div>

            <div className="cyber-glass cyber-glass-interactive rounded-2xl p-6 sm:p-7 border-cyan-400/40 shadow-[0_0_25px_rgba(0,240,255,0.15)]">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-4">
                <span className="font-mono font-bold text-lg">02</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Zero Black Boxes</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Every sensor reading, actuator pulse, and thermal dissipation vector is fully measurable and introspectable. We provide complete developer APIs and open integration hooks for full operational control.
              </p>
            </div>

            <div className="cyber-glass cyber-glass-interactive rounded-2xl p-6 sm:p-7">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-4">
                <span className="font-mono font-bold text-lg">03</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Zero Fragility</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Real-world deployment environments are chaotic. Our physical nodes withstand harsh thermal shifts, intermittent connectivity, and voltage anomalies with autonomous recovery routines.
              </p>
            </div>
          </div>
        </div>
      </SnapSection>

      {/* SECTION 3: STARTUP PILLARS */}
      <SnapSection index={2} backgroundElement={<PosterBackground variant="default" />}>
        <div className="w-full max-w-6xl mx-auto py-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>STARTUP PILLARS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white">
              Focused Engineering: <span className="text-cyan-400">Blob & Digital Solutions</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-2">
              ZeroBots is an agile startup dedicated to developing Blob while crafting modern software solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="cyber-glass rounded-2xl p-5 border border-cyan-500/30">
              <div className="text-xs font-mono text-cyan-400 mb-2">PILLAR 1 • HARDWARE</div>
              <h4 className="text-base font-bold text-white mb-1">Blob Companion Robot</h4>
              <p className="text-xs text-slate-400 mb-3">Our flagship autonomous desktop companion currently under active development and procurement.</p>
              <span className="text-[11px] font-mono text-cyan-300 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Coming Soon
              </span>
            </div>

            <div className="cyber-glass rounded-2xl p-5 border border-cyan-500/30">
              <div className="text-xs font-mono text-cyan-400 mb-2">PILLAR 2 • WEB</div>
              <h4 className="text-base font-bold text-white mb-1">Website Building</h4>
              <p className="text-xs text-slate-400 mb-3">Bespoke, lightning-fast web applications and platforms built with modern full-stack architectures.</p>
              <span className="text-[11px] font-mono text-cyan-300 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Next.js & React
              </span>
            </div>

            <div className="cyber-glass rounded-2xl p-5 border border-cyan-500/30">
              <div className="text-xs font-mono text-cyan-400 mb-2">PILLAR 3 • APPS</div>
              <h4 className="text-base font-bold text-white mb-1">Android & Windows Apps</h4>
              <p className="text-xs text-slate-400 mb-3">Cross-platform native mobile applications and desktop software engineered for real-world reliability.</p>
              <span className="text-[11px] font-mono text-cyan-300 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Multi-Platform
              </span>
            </div>

            <div className="cyber-glass rounded-2xl p-5 border border-cyan-500/30">
              <div className="text-xs font-mono text-cyan-400 mb-2">PILLAR 4 • DESIGN</div>
              <h4 className="text-base font-bold text-white mb-1">UI/UX & Graphic Design</h4>
              <p className="text-xs text-slate-400 mb-3">Futuristic user interface systems, clickable interactive prototypes, and distinct brand assets.</p>
              <span className="text-[11px] font-mono text-cyan-300 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> High-Fidelity Design
              </span>
            </div>
          </div>
        </div>
      </SnapSection>

      {/* SECTION 4: ROADMAP & ENGAGEMENT + FOOTER AS BOTTOM PART */}
      <SnapSection
        index={3}
        isLastSection={true}
        footer={<Footer />}
        backgroundElement={<PosterBackground variant="intense" />}
      >
        <div className="w-full max-w-4xl mx-auto text-center py-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-3">
            <Rocket className="w-3.5 h-3.5" />
            <span>The Horizon</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Shaping the Future of <br />
            <span className="cyber-gradient-text">Desktop Companionship</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            We are dedicated to bringing Blob to life and delivering top-tier digital software solutions for our clients. Explore our work or connect directly with our founding team.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pb-4">
            <Link
              href="/products/hardware"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 to-cyan-200 hover:to-white shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all flex items-center gap-2"
            >
              <span>Blob (Hardware)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services/software-solutions"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900 border border-cyan-500/40 transition-all flex items-center gap-2"
            >
              <span>Software Solutions</span>
              <Code2 className="w-4 h-4" />
            </Link>

            <Link
              href="/enquiries"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 transition-all flex items-center gap-2"
            >
              <span>Contact Team</span>
            </Link>
          </div>

          <div className="mt-6 text-slate-500 text-xs font-mono">
            ZEROBOTS ENGINEERING DIVISION • CHENNAI, INDIA
          </div>
        </div>
      </SnapSection>
    </SnapContainer>
  );
}
