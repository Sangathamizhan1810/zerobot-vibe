"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code2, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { ZeroBotsLogo } from "@/components/graphic/ZeroBotsLogo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export const NavBar = () => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setIsMobileOpen(false);
    setIsProductsDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);

      // Section tracking
      const sections = ["home", "about", "hardware", "software", "enquiries"];
      const scrollPosition = currentScroll + 120; // offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname !== "/") return; // Only prevent default if on home page
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMobileOpen(false);
      setIsProductsDropdownOpen(false);
      setIsServicesDropdownOpen(false);
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const isProductsActive = activeSection === "hardware";
  const isServicesActive = activeSection === "software";

  return (
    <>
      <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-6xl transition-all duration-500 rounded-full px-4 sm:px-6 py-3 flex items-center justify-between border ${
            scrolled
              ? "bg-canvas/80 backdrop-blur-2xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
              : "bg-transparent border-transparent"
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
          <div className={`hidden md:flex items-center gap-1 lg:gap-2 p-1.5 rounded-full ${scrolled ? '' : 'bg-canvas/40 backdrop-blur-md border border-white/5'}`}>
            <Link
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all ${
                activeSection === "home"
                  ? "text-white bg-white/10"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </Link>

            <Link
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all ${
                activeSection === "about"
                  ? "text-white bg-white/10"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              About
            </Link>

            {/* PRODUCTS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all cursor-pointer ${
                  isProductsActive
                    ? "text-white bg-white/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
                aria-expanded={isProductsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProductsDropdownOpen ? "rotate-180 text-white" : "text-slate-500"
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
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 p-3 rounded-[1.5rem] bg-panel/95 backdrop-blur-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-50 pointer-events-auto"
                  >
                    <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 px-3 py-2 border-b border-white/5 flex items-center justify-between mb-2">
                      <span>Robotics Hardware</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    </div>

                    <div className="grid gap-1">
                      <Link
                        href="#hardware"
                        onClick={(e) => handleNavClick(e, "hardware")}
                        className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 border border-transparent transition-all"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:scale-105 group-hover:text-white transition-all shrink-0">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-cyan-200 flex items-center gap-1 transition-colors">
                            Hardware Products
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </div>
                          <p className="text-xs text-slate-400 font-light leading-relaxed mt-1">
                            Meet "Blob" — autonomous desktop companion robot
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
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all cursor-pointer ${
                  isServicesActive
                    ? "text-white bg-white/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesDropdownOpen ? "rotate-180 text-white" : "text-slate-500"
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
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-84 p-3 rounded-[1.5rem] bg-panel/95 backdrop-blur-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-50 pointer-events-auto"
                  >
                    <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 px-3 py-2 border-b border-white/5 flex items-center justify-between mb-2">
                      <span>Digital Engineering</span>
                    </div>

                    <div className="grid gap-1">
                      <Link
                        href="#software"
                        onClick={(e) => handleNavClick(e, "software")}
                        className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 border border-transparent transition-all"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:scale-105 group-hover:text-white transition-all shrink-0">
                          <Code2 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-cyan-200 flex items-center gap-1 transition-colors">
                            Software Solutions
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </div>
                          <p className="text-xs text-slate-400 font-light leading-relaxed mt-1">
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
              href="#enquiries"
              onClick={(e) => handleNavClick(e, "enquiries")}
              className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all ${
                activeSection === "enquiries"
                  ? "text-white bg-white/10"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Enquiries
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link
              href="#enquiries"
              onClick={(e) => handleNavClick(e, "enquiries")}
              className="hidden sm:inline-flex relative items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-white hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer cyber-btn"
            >
              <span>Connect</span>
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 rounded-full text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
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
            className="fixed inset-x-4 top-24 z-40 md:hidden bg-panel/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.9)] max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <Link
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className={`p-4 rounded-2xl text-base font-medium transition-colors ${
                  activeSection === "home" ? "bg-white/10 text-white font-semibold" : "text-slate-300 hover:bg-white/5"
                }`}
              >
                Home
              </Link>

              <Link
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className={`p-4 rounded-2xl text-base font-medium transition-colors ${
                  activeSection === "about"
                    ? "bg-white/10 text-white font-semibold"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                About
              </Link>

              {/* Mobile Products Accordion */}
              <div className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-base font-medium transition-colors ${
                    isProductsActive ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileProductsOpen ? "rotate-180 text-white" : "text-slate-500"
                    }`}
                  />
                </button>

                {isMobileProductsOpen && (
                  <div className="ml-4 pl-4 border-l border-white/10 flex flex-col gap-2 mt-2 mb-2">
                    <Link
                      href="#hardware"
                      onClick={(e) => handleNavClick(e, "hardware")}
                      className="flex items-center gap-3 p-3 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/5"
                    >
                      <Cpu className="w-5 h-5 text-slate-400" />
                      <div>
                        <div className="font-medium">Hardware Products</div>
                        <div className="text-[11px] text-slate-500 font-light mt-0.5">Blob Desktop Companion</div>
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
                  className={`flex items-center justify-between p-4 rounded-2xl text-base font-medium transition-colors ${
                    isServicesActive ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileServicesOpen ? "rotate-180 text-white" : "text-slate-500"
                    }`}
                  />
                </button>

                {isMobileServicesOpen && (
                  <div className="ml-4 pl-4 border-l border-white/10 flex flex-col gap-2 mt-2 mb-2">
                    <Link
                      href="#software"
                      onClick={(e) => handleNavClick(e, "software")}
                      className="flex items-center gap-3 p-3 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/5"
                    >
                      <Code2 className="w-5 h-5 text-slate-400" />
                      <div>
                        <div className="font-medium">Software Solutions</div>
                        <div className="text-[11px] text-slate-500 font-light mt-0.5">Web, Apps, UI/UX & Design</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="#enquiries"
                onClick={(e) => handleNavClick(e, "enquiries")}
                className={`p-4 rounded-2xl text-base font-medium transition-colors ${
                  activeSection === "enquiries" ? "bg-white/10 text-white font-semibold" : "text-slate-300 hover:bg-white/5"
                }`}
              >
                Enquiries
              </Link>

              <div className="pt-4 mt-2 border-t border-white/10">
                <Link
                  href="#enquiries"
                  onClick={(e) => handleNavClick(e, "enquiries")}
                  className="w-full py-4 rounded-2xl bg-white text-black font-semibold text-center text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.1)] block"
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