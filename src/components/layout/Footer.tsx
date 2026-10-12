"use client";

import Link from "next/link";
import { ArrowUp, Mail, ArrowRight } from "lucide-react";
import { ZeroBotsLogo } from "@/components/graphic/ZeroBotsLogo";

import { SOCIAL_LINKS } from "@/data/socials";
export { SOCIAL_LINKS };

// Instagram Icon SVG
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// LinkedIn Icon SVG
function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

// Modern X (formerly Twitter) Icon SVG
function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export const Footer = () => {
  const scrollToTop = () => {
    const snapEl = document.querySelector(".snap-container");
    if (snapEl) {
      snapEl.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToEnquiryBox = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById("enquiry-box");
    const snapEl = document.querySelector(".snap-container");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
      if (window.location.pathname === "/enquiries") {
        window.history.pushState(null, "", "/enquiries#enquiry-box");
      }
    } else if (window.location.pathname === "/enquiries" && snapEl) {
      e.preventDefault();
      snapEl.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-canvas/95 backdrop-blur-xl border-t border-white/10 text-slate-300 relative z-20 overflow-hidden">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 sm:pb-12 border-b border-white/10">

          {/* COLUMN 1: Brand & Elevator Pitch (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <Link href="/" className="group inline-block" aria-label="ZeroBots Home">
              <ZeroBotsLogo size="sm" />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mt-1 font-light">
              ZeroBots is an emerging robotics and digital engineering startup developing Blob, our intelligent desktop companion robot, alongside modern digital software solutions.
            </p>

            {/* Systems Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>SYSTEMS ONLINE</span>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow ZeroBots on Instagram"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all group cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>

                {/* LinkedIn */}
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with ZeroBots on LinkedIn"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all group cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>

                {/* X (formerly Twitter) */}
                <a
                  href={SOCIAL_LINKS.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow ZeroBots on X"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all group cursor-pointer"
                >
                  <XIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Hardware Products (Cols 5-6) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-medium border-b border-white/10 pb-2 inline-block">
              Products
            </span>
            <ul className="space-y-3 text-sm mt-2">
              <li>
                <Link
                  href="/#hardware"
                  className="text-slate-400 hover:text-white transition-all font-light"
                >
                  Hardware Products
                </Link>
              </li>
              <li>
                <Link
                  href="/#hardware"
                  className="text-slate-400 hover:text-white inline-flex items-center gap-2 transition-all font-light"
                >
                  <span>Blob Companion</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10">Soon</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Software Solutions / Services (Cols 7-9) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-medium border-b border-white/10 pb-2 inline-block">
              Services
            </span>
            <ul className="space-y-3 text-sm mt-2">
              <li>
                <Link
                  href="/#software"
                  className="text-white hover:text-cyan-200 inline-flex items-center gap-1 transition-all"
                >
                  <span>Software Solutions</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/#software"
                  className="text-slate-400 hover:text-white transition-all font-light"
                >
                  Website Building
                </Link>
              </li>
              <li>
                <Link
                  href="/#software"
                  className="text-slate-400 hover:text-white transition-all font-light"
                >
                  App Development (Android & Windows)
                </Link>
              </li>
              <li>
                <Link
                  href="/#software"
                  className="text-slate-400 hover:text-white transition-all font-light"
                >
                  UI/UX Designing
                </Link>
              </li>
              <li>
                <Link
                  href="/#software"
                  className="text-slate-400 hover:text-white transition-all font-light"
                >
                  Graphic Designing
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Company & Contact (Cols 10-12) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-medium border-b border-white/10 pb-2 inline-block">
              Company & Contact
            </span>
            <ul className="space-y-3 text-sm mt-2">
              <li>
                <Link
                  href="/#about"
                  className="text-slate-400 hover:text-white transition-all font-light"
                >
                  About ZeroBots
                </Link>
              </li>
              <li>
                <Link
                  href="/#enquiries"
                  onClick={scrollToEnquiryBox}
                  className="text-slate-400 hover:text-white transition-all font-light"
                >
                  Contact & Inquiries
                </Link>
              </li>
              <li>
                <Link
                  href="/#enquiries"
                  onClick={scrollToEnquiryBox}
                  className="text-slate-400 hover:text-white transition-all font-light"
                >
                  Inquire About Blob
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR: Copyright, Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-mono text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
            <span>&copy; {new Date().getFullYear()} ZeroBots LLP. All rights reserved.</span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <Link href="/" className="hover:text-white transition-colors">
              Privacy Architecture
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
