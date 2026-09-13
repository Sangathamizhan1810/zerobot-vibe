/**
 * ============================================================================
 * SOFTWARE SOLUTIONS & SERVICES DATA
 * ============================================================================
 * 
 * TO ADD A NEW SERVICE:
 * Simply copy one of the objects inside the `softwareServices` array below,
 * paste it at the end of the array, and fill in your details.
 * The website will automatically render it as a new card on the UI!
 */

export interface SoftwareService {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  icon: "Globe" | "Smartphone" | "Layout" | "Palette" | "Code" | "Cpu";
  ctaText: string;
  ctaLink: string;
}

export const softwareServices: SoftwareService[] = [
  {
    id: "website-building",
    title: "Website Building",
    badge: "Full-Stack Web Engineering",
    shortDesc: "Ultra-fast, responsive web applications engineered for scale and conversion.",
    description:
      "We design and build bespoke, lightning-fast web applications and corporate portals. From headless architectures to high-concurrency web platforms, our solutions blend sleek cyber aesthetics with robust cloud infrastructure and flawless responsiveness across all devices.",
    deliverables: [
      "Custom responsive web development & SPA/PWA architectures",
      "Next.js, React, and modern TypeScript frameworks",
      "Core Web Vitals performance tuning & automated SEO",
      "Interactive 3D visuals, micro-animations & headless CMS integration",
      "Secure API gateways and serverless backend setups",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"],
    icon: "Globe",
    ctaText: "Build Your Website",
    ctaLink: "/enquiries?service=website-building",
  },
  {
    id: "app-development",
    title: "App Development (Android & Windows)",
    badge: "Cross-Platform Native & Desktop",
    shortDesc: "High-performance native apps for Android mobile and Windows desktop environments.",
    description:
      "Delivering rock-solid mobile applications for Android and mission-critical desktop suites for Windows. Whether you require robotics control consoles, enterprise workflow apps, or consumer-facing mobile solutions, we engineer offline-capable, hardware-integrated applications.",
    deliverables: [
      "Native & cross-platform Android mobile application engineering",
      "Windows desktop software (WPF, WinUI 3, .NET, Electron, Tauri)",
      "Real-time Bluetooth / Wi-Fi / Serial hardware sensor interfacing",
      "Offline-first architecture with local SQLite/Realm persistence",
      "Automated CI/CD pipelines & app store / enterprise packaging",
    ],
    techStack: ["Android SDK", "Kotlin", "Flutter", "React Native", "C# / .NET", "Tauri / Electron"],
    icon: "Smartphone",
    ctaText: "Develop Your App",
    ctaLink: "/enquiries?service=app-development",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Designing",
    badge: "Interface & Experience Architecture",
    shortDesc: "Intuitive, immersive user journeys and futuristic digital design systems.",
    description:
      "Transforming complex systems into frictionless, visually arresting digital experiences. We conduct deep user journey analysis, interactive wireframing, and design system crafting to produce interfaces that mesmerize users and elevate product usability.",
    deliverables: [
      "End-to-end user research, persona creation & flow mapping",
      "High-fidelity clickable interactive prototypes (Figma)",
      "Scalable multi-platform design systems & component libraries",
      "Cyberpunk, glassmorphism & dark-mode specialist design",
      "Comprehensive usability testing & accessibility compliance (WCAG)",
    ],
    techStack: ["Figma", "Design Tokens", "Wireframing", "Prototyping", "Design Systems"],
    icon: "Layout",
    ctaText: "Design Your Interface",
    ctaLink: "/enquiries?service=ui-ux-design",
  },
  {
    id: "graphic-design",
    title: "Graphic Designing",
    badge: "Visual Identity & Brand Systems",
    shortDesc: "Distinctive brand identities, futuristic graphics, and visual storytelling.",
    description:
      "From cutting-edge corporate visual branding and vector illustration to 3D rendering and marketing collateral. We craft bold, cohesive brand aesthetics that stand out in crowded industries and capture the imagination of your audience.",
    deliverables: [
      "Brand identity suites, logomarks & typography guidelines",
      "Custom vector illustrations, technical infographics & diagrams",
      "3D product visual renders & marketing promotional assets",
      "Social media graphics, banner systems & campaign collateral",
      "High-resolution print & digital publication assets",
    ],
    techStack: ["Illustrator", "Photoshop", "Blender 3D", "Vector Graphics", "Brand Guidelines"],
    icon: "Palette",
    ctaText: "Create Visuals",
    ctaLink: "/enquiries?service=graphic-design",
  },
];
