"use client";

import Link from "next/link";
import { 
  Eye, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  HeartHandshake 
} from "lucide-react";
import { hardwareProducts } from "@/data/products";
import { PosterBackground } from "@/components/graphic/PosterBackground";
import { Footer } from "@/components/layout/Footer";

export default function HardwareProductsPage() {
  const blobProduct = hardwareProducts[0];

  return (
    <div className="relative min-h-screen bg-[#020609] text-white flex flex-col justify-between overflow-x-hidden pt-28 sm:pt-32">
      {/* Background Graphic Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <PosterBackground variant="subtle" />
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* HEADER / INTRO */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono uppercase tracking-[0.25em] text-cyan-300 mb-4 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>ROBOTICS HARDWARE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Hardware <span className="cyber-gradient-text">Division</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-light">
            We are actively developing our first flagship hardware product — an autonomous desktop companion robot designed for modern desks and curious minds.
          </p>
        </div>

        {/* BLOB PRODUCT CARD */}
        {blobProduct && (
          <div className="group relative rounded-3xl cyber-glass border border-cyan-500/30 hover:border-cyan-400/60 p-6 sm:p-10 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,240,255,0.15)] overflow-hidden">
            {/* Ambient Cyber Corner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-bl-full blur-2xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* VISUAL AVATAR / ICON (Cols 1-4) */}
              <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl bg-cyan-950/60 border border-cyan-500/40 p-6 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(0,240,255,0.2)] group-hover:border-cyan-400 transition-all">
                  <div className="w-24 h-24 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center shadow-[0_0_30px_#00f0ff] mb-3">
                    <Eye className="w-12 h-12 text-cyan-300 animate-pulse" />
                  </div>
                  <span className="text-xs font-mono tracking-widest text-cyan-300">BLOB COMPANION</span>
                  <span className="text-[10px] font-mono text-cyan-400/70 mt-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    IN DEVELOPMENT
                  </span>

                  {/* Corner cyber ticks */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
                </div>
              </div>

              {/* DETAILS COLUMN (Cols 5-12) */}
              <div className="md:col-span-8 flex flex-col justify-between">
                <div>
                  {/* Status Badges */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-cyan-900 bg-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                      {blobProduct.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{blobProduct.status}</span>
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h2 className="text-2xl sm:text-4xl font-black text-white group-hover:text-cyan-300 transition-colors">
                    {blobProduct.name}
                  </h2>
                  <p className="text-cyan-400/90 text-xs sm:text-sm font-mono mt-1">
                    {blobProduct.tagline}
                  </p>

                  {/* Minimal Description (Purely what the robot is about) */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4 font-light">
                    {blobProduct.description}
                  </p>

                  {/* What Blob Is About Highlights */}
                  <div className="mt-6 pt-5 border-t border-cyan-500/15">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400/80 font-semibold block mb-3">
                      What Blob Brings to Your Desk
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {blobProduct.aboutHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to Action Row */}
                <div className="mt-8 pt-5 border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-slate-400">
                    Want to be the first to know when Blob launches?
                  </span>
                  <Link
                    href={blobProduct.ctaLink}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] cursor-pointer"
                  >
                    <span>{blobProduct.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* BOTTOM NOTIFICATION BANNER */}
        <div className="mt-14 cyber-glass rounded-3xl p-6 sm:p-8 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Interested in Blob or Want to Partner with Us?
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Drop us a message for general technical questions or early collaboration opportunities.
              </p>
            </div>
          </div>

          <Link
            href="/enquiries?topic=blob"
            className="whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 to-cyan-200 hover:to-white transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer"
          >
            Connect With Team &rarr;
          </Link>
        </div>

      </main>

      {/* Global Professional Footer */}
      <Footer />
    </div>
  );
}
