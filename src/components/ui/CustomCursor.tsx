"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isClient, setIsClient] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);

  // Smooth springs for the trailing ring
  const ringX = useSpring(-100, { stiffness: 200, damping: 25 });
  const ringY = useSpring(-100, { stiffness: 200, damping: 25 });

  useEffect(() => {
    setIsClient(true);
    
    // Do not initialize custom cursor on touch devices (mobile/tablet)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      // 1. Move the central dot instantly using DOM manipulation for zero latency
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }

      // 2. Move the outer ring using Framer Motion springs to create the fluid trailing effect
      ringX.set(e.clientX - 16);
      ringY.set(e.clientY - 16);

      // 3. Detect if we are hovering over an interactive element
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"], .cyber-glass-interactive');
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [ringX, ringY]);

  if (!isClient) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide default cursor on desktop entirely to prevent dual-cursor effect */
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}} />
      
      {/* ── CORE DOT (Instant, zero latency) ── */}
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          boxShadow: "0 0 10px 2px rgba(0,240,255,0.6)",
          willChange: "transform",
          // Fade out the core dot when hovering to let the ring take focus
          opacity: isHovering ? 0 : 1, 
          transition: "opacity 0.2s ease"
        }}
      />

      {/* ── TRAILING RING (Spring physics) ── */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998] hidden md:flex items-center justify-center"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: isClicking ? 0.7 : isHovering ? 1.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <motion.div 
          className="w-full h-full border rounded-full"
          animate={{
            scale: isHovering ? 1 : 0.3, // Shrink to dot size when idle
            backgroundColor: isHovering ? "rgba(0, 240, 255, 0.08)" : "transparent",
            borderColor: isHovering ? "rgba(0, 240, 255, 0.8)" : "rgba(0, 240, 255, 0.3)",
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
}
