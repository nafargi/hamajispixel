export interface BrandColor {
  name: string;
  hex: string;
}

export interface BrandTypography {
  name: string;
  style: string;
}

export interface BrandConcept {
  idea: string;
  meaning: string;
  message: string;
}

export interface LogoConstruction {
  grid: string;
  symbolBreakdown: string;
  proportion: string;
}

export interface BrandApplication {
  type: string;
  description: string;
}

export interface Brand {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  image: string; // Used as cover image
  coverImage: string; // Alias for compatibility
  gallery: string[];
  story: string;
  services: string[];
  colors: BrandColor[];
  typography: BrandTypography[];
  concept: BrandConcept;
  logoConstruction: LogoConstruction;
  applications: BrandApplication[];
  behanceUrl?: string;
}

import axerioCover from "@/assets/axerio/Brand guidelines - 26.jpg";
import questifyCover from "@/assets/questify_ai/23.jpg";
import onyxiumCover from "@/assets/onyxium/Artboard 19_8@3x-100.jpg";
import openSessionCover from "@/assets/open_session/Slide 55.jpg";
import daphneHeckoCover from "@/assets/daphne_Hecko/cover.png";
import sunzenithCover from "@/assets/sunzenith/Sunzenith_presentation_template.png";


const axerioImages = Object.values(import.meta.glob('@/assets/axerio/*.{jpg,jpeg,png}', { eager: true, import: 'default' })) as string[];
const questifyImages = Object.values(import.meta.glob('@/assets/questify_ai/*.{jpg,jpeg,png}', { eager: true, import: 'default' })) as string[];
const onyxiumImages = Object.values(import.meta.glob('@/assets/onyxium/*.{jpg,jpeg,png}', { eager: true, import: 'default' })) as string[];
const openSessionImages = Object.values(import.meta.glob('@/assets/open_session/*.{jpg,jpeg,png}', { eager: true, import: 'default' })) as string[];
const daphneHeckoImages = Object.values(import.meta.glob('@/assets/daphne_Hecko/*.{jpg,jpeg,png}', { eager: true, import: 'default' })) as string[];
const sunzenithImages = Object.values(import.meta.glob('@/assets/sunzenith/*.{jpg,jpeg,png}', { eager: true, import: 'default' })) as string[];

export const brands: Brand[] = [
  {
    id: "axerio",
    name: "Axerio",
    category: "Technology",
    year: "2024",
    description: "A modern technology brand identity built around precision and clarity.",
    image: axerioCover,
    coverImage: axerioCover,
    gallery: axerioImages,
    story: "Axerio is driving the future of enterprise software, demanding an identity that projects unwavering reliability and cutting-edge vision. We crafted a visual system rooted in architectural precision, signaling a new era of software infrastructure.",
    services: ["Brand Identity", "Visual System", "Digital Product"],
    colors: [
      { name: "Obsidian", hex: "#111111" },
      { name: "Azure", hex: "#0055FF" },
      { name: "Cloud", hex: "#F3F4F6" },
    ],
    typography: [
      { name: "Display", style: "Inter Bold" },
      { name: "Body", style: "Inter Regular" },
    ],
    concept: {
      idea: "Forward Momentum. The identity uses converging lines to represent dynamic technological progress.",
      meaning: "The bold geometry speaks to structural integrity, reflecting robust code and secure systems.",
      message: "Axerio builds the foundation for tomorrow's digital leaders.",
    },
    logoConstruction: {
      grid: "Based on an isometric 16-point grid for pixel perfection.",
      symbolBreakdown: "The mark combines an 'A' with an upward arrow, forming a continuous loop.",
      proportion: "1:1.618 Golden Ratio used for lockup dimensions.",
    },
    applications: [
      { type: "Digital", description: "SaaS interface and web presence." },
      { type: "Marketing", description: "Pitch decks and social templates." }
    ],
    behanceUrl: "https://www.behance.net/gallery/245110401/AXerio",
  },
  {
    id: "questify_ai",
    name: "Questify AI",
    category: "AI Academic Assistant",
    year: "2024",
    description: "An AI-powered academic platform that tailors study paths, tracks progress, and analyzes weak points for optimized learning.",
    image: questifyCover,
    coverImage: questifyCover,
    gallery: questifyImages,
    story: "Questify AI is an intelligent study assistant that analyzes academic performance to create personalized learning paths. By detecting weak points and tracking progress in real-time, it empowers students to achieve mastery at their own pace. The identity reflects this precision through structured geometry and fluid insights.",
    services: ["AI Strategy", "Academic Analysis", "Brand Identity"],
    colors: [
      { name: "Royal Blue", hex: "#385FFF" },
      { name: "Charcoal", hex: "#05080F" },
      { name: "Slate Gray", hex: "#138DFC" },
      { name: "Light Mist", hex: "#F2F7FB" },
    ],
    typography: [
      { name: "Display", style: "Corbel Bold" },
      { name: "Subtitle", style: "Elegant Script" },
    ],
    concept: {
      idea: "The 'Q' Intelligence. The mark is a synthesis of the letter 'Q' and a diamond-inspired AI symbol.",
      meaning: "The structure represents the hard work of academic study, while the AI element symbolizes the guiding spark of intelligence.",
      message: "Study smarter, with AI precision.",
    },
    logoConstruction: {
      grid: "Based on a mathematical Q-frame with 45-degree AI intersections.",
      symbolBreakdown: "A primary 'Q' loop housing a faceted diamond mark at its core.",
      proportion: "1:1 square lockup for versatility across platforms.",
    },
    applications: [
      { type: "Learning Dashboard", description: "Real-time performance tracking UI." },
      { type: "Weak Point Analysis", description: "Dynamic visualization of study gaps." }
    ],
    behanceUrl: "https://www.behance.net/gallery/244277807/Questify-AI-Full-brand",
  },
  {
    id: "onyxium",
    name: "Onyxium",
    category: "Luxury & Lifestyle",
    year: "2024",
    description: "A premium luxury brand conveying strength, elegance, and timeless mystique.",
    image: onyxiumCover,
    coverImage: onyxiumCover,
    gallery: onyxiumImages,
    story: "Onyxium required an identity that whispered luxury rather than shouting it. The deep black palette mixed with subtle metallic finishes creates an aura of exclusivity. Every touchpoint is designed to feel heavy, expensive, and deliberate.",
    services: ["Brand Identity", "Art Direction", "Packaging"],
    colors: [
      { name: "Vantablack", hex: "#000000" },
      { name: "Aged Gold", hex: "#C5A059" },
      { name: "Charcoal", hex: "#222222" },
    ],
    typography: [
      { name: "Display", style: "Cormorant" },
      { name: "Body", style: "Garamond Premiere" },
    ],
    concept: {
      idea: "Carved from Stone. The brand represents enduring value and solid foundations.",
      meaning: "The heavy serifs evoke confidence and historical legacy.",
      message: "Luxury is in the details unseen by most.",
    },
    logoConstruction: {
      grid: "Classical architectural proportions based on the rule of thirds.",
      symbolBreakdown: "A custom serif 'O' with varied stroke weights to create optical illusions of depth.",
      proportion: "High contrast thick-to-thin transitions.",
    },
    applications: [
      { type: "Packaging", description: "Matte black boxes with gold foil stamping." },
      { type: "Editorial", description: "Lookbooks printed on premium matte papers." }
    ],
    behanceUrl: "https://www.behance.net/gallery/236882049/ONYXIUM-software-full-brand-Identity",
  },
  {
    id: "open_session",
    name: "Open Session",
    category: "Mental Well-being",
    year: "2023",
    description: "A safe, collaborative platform designed for mental health and healing connections.",
    image: openSessionCover,
    coverImage: openSessionCover,
    gallery: openSessionImages,
    story: "The journey to mental well-being doesn’t have to be walked alone. At Open Session, we believe that the connection between two people—a therapist and a client—is the foundation of all healing. Our platform is designed to be a safe, open space where you can share your story without judgment. Together, we can turn your challenges into a cycle of growth and discovery.",
    services: ["Mental Health Support", "Therapy Platform", "Visual Identity"],
    colors: [
      { name: "Dynamic Purple", hex: "#6E44A7" },
      { name: "Positive Orange", hex: "#ff8533" },
      { name: "Friendly Blue", hex: "#1978A3" },
      { name: "Smart Red", hex: "#E73539" },
      { name: "Peaceful Teal", hex: "#0A7B89" },
    ],
    typography: [
      { name: "Primary", style: "Montserrat" },
      { name: "Secondary", style: "Inter" },
    ],
    concept: {
      idea: "The Human Connection. The logo features two figures reaching out to each other.",
      meaning: "The figures form the letters 'O' and 'S', representing the safety of 'Open' and the cycle of a 'Session'.",
      message: "Healing through connection.",
    },
    logoConstruction: {
      grid: "Fluid, organic proportions based on the human silhouette.",
      symbolBreakdown: "Two interconnected figures forming a circular 'O' and a curved 'S'.",
      proportion: "Symmetrical balance representing therapist-client partnership.",
    },
    applications: [
      { type: "Counseling Interface", description: "Private, calming digital therapy rooms." },
      { type: "Progress Tracking", description: "Gentle visualization of healing journeys." }
    ],
    behanceUrl: "https://www.behance.net/gallery/239772409/Open-Session-Therapy-Brand",
  },{
    id: "sunzenith",
    name: "Sunzenith",
    category: "Enterprise Identity",
    year: "2024",
    description: "A bold, solar-inspired identity system built for sustainable energy expansion.",
    image: sunzenithCover,
    coverImage: sunzenithCover,
    gallery: sunzenithImages,
    story: "Sunzenith is leading the charge in renewable energy infrastructure. We created a high-contrast, energetic visual system that balances raw solar power with industrial precision. The identity is designed to radiate authority and future-proof reliability.",
    services: ["Brand Strategy", "Visual Identity", "Environmental Design"],
    colors: [
      { name: "Deep Carbon", hex: "#111111" },
      { name: "Solar Orange", hex: "#ff8533" },
      { name: "Morning Glow", hex: "#FFCC00" },
    ],
    typography: [
      { name: "Display", style: "Outfit Bold" },
      { name: "Body", style: "Inter Regular" },
    ],
    concept: {
      idea: "The Eternal Source. The logo uses a circular 'zenith' motif representing the sun at its peak.",
      meaning: "The radiating segments symbolize wide-reaching energy distribution and efficiency.",
      message: "Powering the next era of industrial expansion.",
    },
    logoConstruction: {
      grid: "Perfect circular grid with 12 radiating segments at 30-degree intervals.",
      symbolBreakdown: "Core sphere intersected by four power paths.",
      proportion: "Strict 1:1 mathematical symmetry.",
    },
    applications: [
      { type: "Signage", description: "Oversized solar farm identification." },
      { type: "Vehicle Livery", description: "Fleet branding for global operations." }
    ],
    behanceUrl: "https://www.behance.net/gallery/232750275/sunzenith-solar-energy",
  }
  ,
  {
    id: "daphne_Hecko",
    name: "DH Legal Ops",
    category: "Legal Operations",
    year: "2024",
    description: "Streamlined operational support for law firm owners handling everything from client intake to billing, marketing, and team performance.",
    image: daphneHeckoCover,
    coverImage: daphneHeckoCover,
    gallery: daphneHeckoImages,
    story: "DH Legal Ops delivers streamlined operational support for law firm owners. The brand’s promise is to lift the operational burden, enabling legal professionals to focus on practicing law, serving clients, and driving growth.",
    services: ["Operational Strategy", "Brand Identity", "Process Design"],
    colors: [
      { name: "Burgundy", hex: "#590620" },
      { name: "Legal Gold", hex: "#DAAB5B" },
    ],
    typography: [
      { name: "Display", style: "Nexa Heavy" },
      { name: "Body", style: "Montserrat" },
    ],
    concept: {
      idea: "The fountain pen precision. The letters 'd' and 'h' are rendered in a bold, rounded style.",
      meaning: "The stem of the 'h' transforms into a fountain pen nib, inside which negative space adds visual sharpness.",
      message: "Lifting the operational burden.",
    },
    logoConstruction: {
      grid: "Bold structural alignment focused on legibility and authority.",
      symbolBreakdown: "Seamless integration of letterforms into a sharp pen nib.",
      proportion: "Weighted to command presence across formal documents.",
    },
    applications: [
      { type: "Stationery", description: "Premium, watermarked legal letterheads." },
      { type: "Digital Workspace", description: "Intake portals and management dashboards." }
    ],
    behanceUrl: "https://www.behance.net/gallery/233839147/Brand-Identity-For-Law-Firms",
  }
];
