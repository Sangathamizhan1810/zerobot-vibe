"use client";

import { Code2, ArrowRight, Globe, Smartphone, Layout, Palette, Cpu } from "lucide-react";
import { FadeInSection } from "@/components/layout/FadeInSection";
import { softwareServices } from "@/data/services";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Layout,
  Palette,
  Code: Code2,
  Cpu
};

export function SoftwareSection() {
  return (
    <FadeInSection id="software" className="relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-[0.25em] text-white mb-6">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Digital Engineering</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
            Software Solutions
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            We build lightning-fast web applications, reliable native software, and immersive interfaces engineered for scale.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {softwareServices.map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <div 
                key={service.id}
                className="group cyber-glass cyber-glass-inner rounded-[2rem] p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-5 h-5" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light mb-6">
                  {service.shortDesc}
                </p>

                <ul className="space-y-2 mb-8 border-t border-white/10 pt-6">
                  {service.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 mt-1.5 shrink-0" />
                      <span className="font-light">{deliverable}</span>
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}
        </div>

      </div>
    </FadeInSection>
  );
}
