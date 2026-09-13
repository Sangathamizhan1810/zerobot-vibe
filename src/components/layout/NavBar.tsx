"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code2, ChevronDown, Menu, X, ArrowRight, Layers } from "lucide-react";
import { ZeroBotsLogo } from "@/components/graphic/ZeroBotsLogo";

export const NavBar = () => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Close dropdowns and mobile drawer on route change
    setIsMobileOpen(false);
    setIsProductsDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const snapEl = document.querySelector(".snap-container");
      const currentScroll = snapEl ? snapEl.scrollTop : window.scrollY;
      if (currentScroll > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { capture: true, passive: true });
    return () => window.removeEventListener("scroll", handleScroll, { capture: true });
  }, [pathname]);

  const isProductsActive = pathname.startsWith("/products");
  const isServicesActive = pathname.startsWith("/services");

  return (
    <>
      <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-[0_10px_35px_rgba(0,0,0,0.8)] border ${
            scrolled
              ? "bg-[#030910]/90 backdrop-blur-xl border-cyan-500/30 shadow-cyan-950/40"
              : "bg-[#040e17]/75 backdrop-blur-lg border-cyan-500/20"
          }`}
        >
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform hover:scale-105"
            aria-label="ZeroBots Home"
          >
            <ZeroBotsLogo size="sm" useBrandFont={true} />
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all ${
                pathname === "/"
                  ? "text-cyan-300 bg-cyan-500/15 border border-cyan-400/30 text-cyber-subtle"
                  : "text-slate-300 hover:text-cyan-200 hover:bg-white/5"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all ${
                pathname === "/about" || pathname === "/about-us"
                  ? "text-cyan-300 bg-cyan-500/15 border border-cyan-400/30 text-cyber-subtle"
                  : "text-slate-300 hover:text-cyan-200 hover:bg-white/5"
              }`}
            >
              About
            </Link>

            {/* PRODUCTS DROPDOWN */}
            <div
              className="relative py-1"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all cursor-pointer ${
                  isProductsActive
                    ? "text-cyan-300 bg-cyan-500/15 border border-cyan-400/30 text-cyber-subtle"
                    : "text-slate-300 hover:text-cyan-200 hover:bg-white/5"
                }`}
                aria-expanded={isProductsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProductsDropdownOpen ? "rotate-180 text-cyan-300" : "text-slate-400"
                  }`}
                />
              </button>

              {/* PRODUCTS DROPDOWN MENU */}
              <AnimatePresence>
                {isProductsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 p-2.5 rounded-2xl bg-[#030910]/95 backdrop-blur-2xl border border-cyan-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,240,255,0.2)] z-50 pointer-events-auto"
                  >
                    <div className="text-[10px] uppercase font-mono tracking-wider text-cyan-400/70 px-3 py-1.5 border-b border-cyan-500/15 flex items-center justify-between">
                      <span>Robotics Hardware</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    </div>

                    <div className="grid gap-1.5 mt-2">
                      {/* Hardware Products */}
                      <Link
                        href="/products/hardware"
                        className="group flex items-start gap-3 p-3 rounded-xl hover:bg-cyan-500/10 border border-transparent hover:border-cyan-400/30 transition-all"
                      >
                        <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:border-cyan-400 transition-all shrink-0">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-cyan-300 flex items-center gap-1 transition-colors">
                            Hardware Products
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                          </div>
                          <p className="text-xs text-slate-400 leading-snug mt-0.5">
                            Meet "Blob" — autonomous desktop companion robot (Coming Soon)
                          </p>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative py-1"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all cursor-pointer ${
                  isServicesActive
                    ? "text-cyan-300 bg-cyan-500/15 border border-cyan-400/30 text-cyber-subtle"
                    : "text-slate-300 hover:text-cyan-200 hover:bg-white/5"
                }`}
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesDropdownOpen ? "rotate-180 text-cyan-300" : "text-slate-400"
                  }`}
                />
              </button>

              {/* SERVICES DROPDOWN MENU */}
              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-84 p-2.5 rounded-2xl bg-[#030910]/95 backdrop-blur-2xl border border-cyan-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,240,255,0.2)] z-50 pointer-events-auto"
                  >
                    <div className="text-[10px] uppercase font-mono tracking-wider text-cyan-400/70 px-3 py-1.5 border-b border-cyan-500/15 flex items-center justify-between">
                      <span>Digital Engineering</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    </div>

                    <div className="grid gap-1.5 mt-2">
                      {/* Software Solutions */}
                      <Link
                        href="/services/software-solutions"
                        className="group flex items-start gap-3 p-3 rounded-xl hover:bg-cyan-500/10 border border-transparent hover:border-cyan-400/30 transition-all"
                      >
                        <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:border-cyan-400 transition-all shrink-0">
                          <Code2 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-cyan-300 flex items-center gap-1 transition-colors">
                            Software solutions
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                          </div>
                          <p className="text-xs text-slate-400 leading-snug mt-0.5">
                            Websites, Android & Windows apps, UI/UX & Graphic design
                          </p>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/enquiries"
              className={`px-3 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all ${
                pathname === "/enquiries"
                  ? "text-cyan-300 bg-cyan-500/15 border border-cyan-400/30 text-cyber-subtle"
                  : "text-slate-300 hover:text-cyan-200 hover:bg-white/5"
              }`}
            >
              Enquiries
            </Link>
          </div>

          {/* ACTION BUTTON & SYSTEM STATUS */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-[11px] font-mono text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
              <span>SYSTEMS ONLINE</span>
            </div>

            <Link
              href="/enquiries"
              className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 to-cyan-200 hover:from-cyan-300 hover:to-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] cursor-pointer"
            >
              <span>Connect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-full text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-cyan-500/20 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden bg-[#030910]/95 backdrop-blur-2xl border border-cyan-400/30 rounded-3xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(0,240,255,0.2)] max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className={`p-3 rounded-xl text-base font-medium transition-colors ${
                  pathname === "/" ? "bg-cyan-500/20 text-cyan-300 font-semibold" : "text-slate-200 hover:bg-white/5"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`p-3 rounded-xl text-base font-medium transition-colors ${
                  pathname === "/about" || pathname === "/about-us"
                    ? "bg-cyan-500/20 text-cyan-300 font-semibold"
                    : "text-slate-200 hover:bg-white/5"
                }`}
              >
                About
              </Link>

              {/* Mobile Products Accordion */}
              <div className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className={`flex items-center justify-between p-3 rounded-xl text-base font-medium transition-colors ${
                    isProductsActive ? "bg-cyan-500/20 text-cyan-300" : "text-slate-200 hover:bg-white/5"
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileProductsOpen ? "rotate-180 text-cyan-300" : "text-slate-400"
                    }`}
                  />
                </button>

                {isMobileProductsOpen && (
                  <div className="ml-4 pl-3 border-l border-cyan-500/30 flex flex-col gap-1 mt-1">
                    <Link
                      href="/products/hardware"
                      className="flex items-center gap-2 p-2.5 rounded-lg text-sm text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10"
                    >
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      <div>
                        <div className="font-semibold">Hardware Products</div>
                        <div className="text-[11px] text-slate-400">Blob Desktop Companion (Coming Soon)</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Services Accordion */}
              <div className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`flex items-center justify-between p-3 rounded-xl text-base font-medium transition-colors ${
                    isServicesActive ? "bg-cyan-500/20 text-cyan-300" : "text-slate-200 hover:bg-white/5"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileServicesOpen ? "rotate-180 text-cyan-300" : "text-slate-400"
                    }`}
                  />
                </button>

                {isMobileServicesOpen && (
                  <div className="ml-4 pl-3 border-l border-cyan-500/30 flex flex-col gap-1 mt-1">
                    <Link
                      href="/services/software-solutions"
                      className="flex items-center gap-2 p-2.5 rounded-lg text-sm text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10"
                    >
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <div>
                        <div className="font-semibold">Software solutions</div>
                        <div className="text-[11px] text-slate-400">Web, Apps, UI/UX & Graphic Design</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/enquiries"
                className={`p-3 rounded-xl text-base font-medium transition-colors ${
                  pathname === "/enquiries" ? "bg-cyan-500/20 text-cyan-300 font-semibold" : "text-slate-200 hover:bg-white/5"
                }`}
              >
                Enquiries
              </Link>

              <div className="pt-3 mt-2 border-t border-cyan-500/20 flex flex-col gap-3">
                <Link
                  href="/enquiries"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-200 text-black font-semibold text-center text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                >
                  Initiate Enquiry
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};