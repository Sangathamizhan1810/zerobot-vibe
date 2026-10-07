"use client";

import { Compass, ShieldCheck, Rocket, Cpu, CheckCircle2 } from "lucide-react";
import { FadeInSection } from "@/components/layout/FadeInSection";

export function AboutSection() {
  return (
    <FadeInSection id="about" className="relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-[0.25em] text-white mb-6">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Origin & Mission</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
            Democratizing Intelligence.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Founded with an uncompromising ambition: to establish India as a global powerhouse of intelligent robotics. At ZeroBots, we believe the next era of automation shouldn't belong exclusively to multi-billion-dollar conglomerates.
          </p>
        </div>

        {/* THREE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="cyber-glass cyber-glass-inner rounded-[2rem] p-8 border border-white/10">
            <span className="text-xs font-mono text-cyan-400">01 / SOVEREIGNTY</span>
            <h3 className="text-xl font-bold text-white mt-2 mb-3">Indigenous Innovation</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">Built domestically from custom physical prototypes to dedicated embedded firmware.</p>
          </div>
          <div className="cyber-glass cyber-glass-inner rounded-[2rem] p-8 border border-white/10">
            <span className="text-xs font-mono text-cyan-400">02 / ACCESSIBILITY</span>
            <h3 className="text-xl font-bold text-white mt-2 mb-3">Democratized Access</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">Making advanced perception and autonomy affordable for institutions, labs, and creators.</p>
          </div>
          <div className="cyber-glass cyber-glass-inner rounded-[2rem] p-8 border border-white/10">
            <span className="text-xs font-mono text-cyan-400">03 / PRECISION</span>
            <h3 className="text-xl font-bold text-white mt-2 mb-3">Zero Compromise</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">Deterministic sub-millisecond execution and failsafe industrial standards.</p>
          </div>
        </div>

        {/* PHILOSOPHY */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-white mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE ZERO DOCTRINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">The Engineering Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="cyber-glass rounded-[2rem] p-8 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-2">Zero Latency Bloat</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">We reject bloat: our lightweight control logic executes with clean, reliable predictability.</p>
            </div>
            <div className="cyber-glass rounded-[2rem] p-8 border border-white/20 shadow-lg shadow-black/50">
              <h3 className="text-lg font-bold text-white mb-2">Zero Black Boxes</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">Every sensor reading and actuator pulse is measurable. We provide open integration hooks.</p>
            </div>
            <div className="cyber-glass rounded-[2rem] p-8 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-2">Zero Fragility</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">Our physical nodes withstand harsh thermal shifts and anomalies with autonomous recovery.</p>
            </div>
          </div>
        </div>

      </div>
    </FadeInSection>
  );
}
