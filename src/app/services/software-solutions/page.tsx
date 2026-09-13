"use client";

import Link from "next/link";
import { 
  Globe, 
  Smartphone, 
  Layout, 
  Palette, 
  Code, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  ShieldCheck, 
  Layers 
} from "lucide-react";
import { softwareServices, SoftwareService } from "@/data/services";
import { PosterBackground } from "@/components/graphic/PosterBackground";
import { Footer } from "@/components/layout/Footer";

// Helper function to resolve icon dynamically
const renderServiceIcon = (iconName: SoftwareService["icon"]) => {
  switch (iconName) {
    case "Globe":
      return <Globe className="w-6 h-6 text-cyan-300" />;
    case "Smartphone":
      return <Smartphone className="w-6 h-6 text-cyan-300" />;
    case "Layout":
      return <Layout className="w-6 h-6 text-cyan-300" />;
    case "Palette":
      return <Palette className="w-6 h-6 text-cyan-300" />;
    case "Code":
      return <Code className="w-6 h-6 text-cyan-300" />;
    case "Cpu":
      return <Cpu className="w-6 h-6 text-cyan-300" />;
    default:
      return <Code className="w-6 h-6 text-cyan-300" />;
  }
};

export default function SoftwareSolutionsPage() {
  return (
    <div className="relative min-h-screen bg-[#020609] text-white flex flex-col justify-between overflow-x-hidden pt-28 sm:pt-32">
      {/* Background Graphic Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <PosterBackground variant="subtle" />
      </div>

      {/* Main Page Container */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono uppercase tracking-[0.25em] text-cyan-300 mb-4 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>DIGITAL ENGINEERING DIVISION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Software Solutions <br />
            <span className="cyber-gradient-text">Engineered For The Future</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-light">
            Beyond physical robotics, ZeroBots crafts high-caliber software systems. From responsive web platforms and cross-platform apps to intuitive UI/UX architectures and bold brand identities.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-3xl mx-auto">
            <div className="cyber-glass rounded-2xl p-3 sm:p-4 text-center">
              <span className="text-lg sm:text-2xl font-bold font-mono text-cyan-300">100%</span>
              <div className="text-[11px] text-slate-400 mt-0.5">Bespoke Custom Code</div>
            </div>
            <div className="cyber-glass rounded-2xl p-3 sm:p-4 text-center">
              <span className="text-lg sm:text-2xl font-bold font-mono text-cyan-300">Android & Win</span>
              <div className="text-[11px] text-slate-400 mt-0.5">Multi-Platform Ecosystem</div>
            </div>
            <div className="cyber-glass rounded-2xl p-3 sm:p-4 text-center">
              <span className="text-lg sm:text-2xl font-bold font-mono text-cyan-300">&lt; 100ms</span>
              <div className="text-[11px] text-slate-400 mt-0.5">Optimized Performance</div>
            </div>
            <div className="cyber-glass rounded-2xl p-3 sm:p-4 text-center">
              <span className="text-lg sm:text-2xl font-bold font-mono text-cyan-300">End-to-End</span>
              <div className="text-[11px] text-slate-400 mt-0.5">Design Through Deploy</div>
            </div>
          </div>
        </div>

        {/* SERVICES CARDS GRID (Dynamically Rendered from src/data/services.ts) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {softwareServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="group relative rounded-3xl cyber-glass border border-cyan-500/20 hover:border-cyan-400/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,240,255,0.15)] overflow-hidden"
            >
              {/* Corner Cyber Accents */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
              <div className="absolute top-3 right-3 text-[10px] font-mono text-cyan-400/40">
                SRV-0{index + 1}
              </div>

              <div>
                {/* Top Badge & Icon Row */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all shrink-0">
                    {renderServiceIcon(service.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm font-mono mt-1">
                  {service.shortDesc}
                </p>

                {/* Detailed Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-4">
                  {service.description}
                </p>

                {/* Key Deliverables List */}
                <div className="mt-6 pt-5 border-t border-cyan-500/15">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400/80 font-semibold block mb-3">
                    Key Deliverables & Capabilities
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-6 pt-4 border-t border-cyan-500/15">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {service.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10 group-hover:border-cyan-500/30 group-hover:text-cyan-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link Button */}
              <div className="mt-8 pt-5 border-t border-cyan-500/20 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Ready to deploy?
                </span>
                <Link
                  href={service.ctaLink}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] cursor-pointer"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CUSTOM ARCHITECTURE BANNER */}
        <div className="mt-16 cyber-glass rounded-3xl p-6 sm:p-10 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Have a Complex or Multi-Disciplinary Project?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                We synthesize embedded hardware, native desktop software, cloud telemetry, and bespoke UI design into unified ecosystems.
              </p>
            </div>
          </div>

          <Link
            href="/enquiries?service=custom-solution"
            className="whitespace-nowrap px-6 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 to-cyan-200 hover:to-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] cursor-pointer"
          >
            Consult Engineering Team &rarr;
          </Link>
        </div>

      </main>

      {/* Global Professional Footer */}
      <Footer />
    </div>
  );
}
