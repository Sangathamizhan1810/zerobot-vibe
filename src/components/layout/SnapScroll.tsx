"use client";

import React, { useRef, useState, useEffect } from "react";

interface SnapSectionProps {
  children: React.ReactNode;
  backgroundElement?: React.ReactNode;
  className?: string;
  isLastSection?: boolean;
  footer?: React.ReactNode;
  index?: number;
  id?: string;
}

export const SnapSection = ({
  children,
  backgroundElement,
  className = "",
  isLastSection = false,
  footer,
  index = 0,
  id,
}: SnapSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(index === 0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.25,
        root: el.closest(".snap-container") || null,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative w-full max-w-full min-h-[100dvh] snap-start snap-always flex flex-col items-center justify-between overflow-x-hidden shrink-0 select-text ${className}`}
    >
      {/* Background Graphic Layer */}
      {backgroundElement && (
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          {backgroundElement}
        </div>
      )}

      {/* Main Content with Smooth Fade In on Scroll In, Fade Out on Scroll Out */}
      <div
        className={`relative z-10 w-full max-w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 pt-20 sm:pt-24 pb-8 sm:pb-12 transition-all duration-700 ease-out select-text ${
          isInView
            ? "opacity-100 translate-y-0 filter-none pointer-events-auto scale-100"
            : "opacity-0 translate-y-8 blur-[2px] pointer-events-none scale-[0.98]"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
          {children}
        </div>
      </div>

      {/* Footer attached directly as the end part of the last section */}
      {isLastSection && footer && (
        <div className="relative z-20 w-full max-w-full shrink-0 pointer-events-auto">
          {footer}
        </div>
      )}
    </section>
  );
};

interface SnapContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const SnapContainer = ({ children, className = "" }: SnapContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      try {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      } catch {
        // ignore invalid selector
      }
    };

    const timer = setTimeout(scrollToHash, 150);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`snap-container fixed inset-0 w-full max-w-full h-[100dvh] overflow-x-hidden overflow-y-auto snap-y snap-mandatory overscroll-y-none bg-[#020609] select-none ${className}`}
    >
      {children}
    </div>
  );
};
