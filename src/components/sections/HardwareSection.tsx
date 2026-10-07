"use client";

import { Eye, CheckCircle2, Sparkles, Clock, HeartHandshake } from "lucide-react";
import { FadeInSection } from "@/components/layout/FadeInSection";
import { hardwareProducts } from "@/data/products";
import Link from "next/link";

export function HardwareSection() {
  const blobProduct = hardwareProducts[0];

  return (
    <FadeInSection id="hardware" className="relative">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-[0.25em] text-white mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Robotics Hardware</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
            Hardware Division
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            We are actively developing our first flagship hardware product — an autonomous desktop companion robot designed for modern desks and curious minds.
          </p>
        </div>

        {/* BLOB PRODUCT CARD */}
        {blobProduct && (
          <div className="group relative rounded-[2rem] cyber-glass border border-white/10 hover:border-white/20 p-8 sm:p-12 transition-all duration-500 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-all duration-700" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
              {/* VISUAL AVATAR */}
              <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-[2rem] bg-[#050505] border border-white/10 p-6 flex flex-col items-center justify-center group-hover:border-white/30 transition-all duration-500 cyber-glass-inner">
                  <div className="w-24 h-24 rounded-full bg-white/5 border border-white/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500">
                    <Eye className="w-12 h-12 text-white" />
                  </div>
                  <span className="text-xs font-mono tracking-widest text-white">BLOB COMPANION</span>
                  <span className="text-[10px] font-mono text-slate-500 mt-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    IN DEVELOPMENT
                  </span>
                </div>
              </div>

              {/* DETAILS */}
              <div className="md:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider text-black bg-white">
                      {blobProduct.badge}
                    </span>
                    <span className="px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-white bg-white/5 border border-white/10 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{blobProduct.status}</span>
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-5xl font-black text-white mb-2">
                    {blobProduct.name}
                  </h3>
                  <p className="text-cyan-400 text-sm font-mono mb-6">
                    {blobProduct.tagline}
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                    {blobProduct.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block mb-4">
                      What Blob Brings to Your Desk
                    </span>
                    <ul className="space-y-3 text-sm text-slate-300">
                      {blobProduct.aboutHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="font-light">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </FadeInSection>
  );
}
