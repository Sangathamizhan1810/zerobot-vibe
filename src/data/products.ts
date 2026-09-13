/**
 * ============================================================================
 * HARDWARE PRODUCTS DATA
 * ============================================================================
 * 
 * We are currently working on the development and procurement of 1 flagship
 * hardware product: "Blob".
 */

export interface HardwareProduct {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  status: string;
  description: string;
  aboutHighlights: string[];
  ctaText: string;
  ctaLink: string;
}

export const hardwareProducts: HardwareProduct[] = [
  {
    id: "blob",
    name: "Blob",
    tagline: "Autonomous Desktop Companion Robot",
    badge: "Coming Soon",
    status: "Under Development",
    description:
      "Blob is an intelligent autonomous desktop companion robot designed to bring delightful physical companionship, ambient awareness, and an interactive personality to your desk and daily workspace.",
    aboutHighlights: [
      "Friendly personal companion designed to accompany your daily workflow",
      "Responsive ambient presence bringing interactive warmth to your desk",
      "Expressive physical personality with charming micro-reactions",
      "A smart, delightful desktop presence currently in active development",
    ],
    ctaText: "Inquire / Get Launch Updates",
    ctaLink: "/enquiries?topic=blob",
  },
];