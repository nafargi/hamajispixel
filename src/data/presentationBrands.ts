import axerioCover from "@/assets/axerio/Brand guidelines - 26.jpg";
import questifyCover from "@/assets/questify_ai/23.jpg";
import onyxiumCover from "@/assets/onyxium/Artboard 19_8@3x-100.jpg";
import openSessionCover from "@/assets/open_session/Slide 55.jpg";
import sunzenithCover from "@/assets/sunzenith/1.jpg";
import daphneHeckoCover from "@/assets/daphne_Hecko/Banner_Mockup.jpg";

export interface PresentationBrand {
    id: string;
    name: string;
    category: string;
    year: string;
    description: string;
    coverImage: string;
}

export const presentationBrands: PresentationBrand[] = [
    {
        id: "axerio",
        name: "Axerio",
        category: "Luxury Jewelry",
        year: "2024",
        description: "A refined expression of modern luxury in jewelry design.",
        coverImage: axerioCover,
    },
    {
        id: "questify_ai",
        name: "Questify AI",
        category: "AI Academic Assistant",
        year: "2024",
        description: "An AI-powered academic platform that tailors study paths, tracks progress, and analyzes weak points for optimized learning.",
        coverImage: questifyCover,
    },
    {
        id: "onyxium",
        name: "Onyxium",
        category: "Luxury & Lifestyle",
        year: "2024",
        description: "A premium luxury brand conveying strength, elegance, and timeless mystique.",
        coverImage: onyxiumCover,
    },
    {
        id: "open_session",
        name: "Open Session",
        category: "Mental Well-being",
        year: "2023",
        description: "A safe, collaborative platform designed for mental health and healing connections.",
        coverImage: openSessionCover,
    },
    {
        id: "sunzenith",
        name: "Sunzenith",
        category: "Enterprise Identity",
        year: "2024",
        description: "A bold, solar-inspired identity system built for sustainable energy expansion.",
        coverImage: sunzenithCover,
    },
    {
        id: "daphne_Hecko",
        name: "DH Legal Ops",
        category: "Legal Operations",
        year: "2024",
        description: "Streamlined operational support for law firm owners handling everything from client intake to billing, marketing, and team performance.",
        coverImage: daphneHeckoCover,
    }
];
