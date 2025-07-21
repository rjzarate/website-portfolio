import SideNavigation from "@/components/v0/scroll-snap-sections";

import "@/styles/portfolio.css";
import React from "react";
import { _metadata } from "@/app/layout";
import ProjectSections from "@/components/projects/project-sections";

export interface Project {
    id: string;
    title: string;
    ranking?: number;
    shortDescription: string;
    description: string;
    image: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    youtubeVideoId?: string;
    itchIo?: {
        title: string;
        description: string;
        embedUrl: string;
        gameUrl: string;
    };
    category: string;
    duration: string;
    startDate: string;
    endDate: string;
    teamSize: string;
    challenges: string[];
    features: string[];
    featureDescriptions: string[];
    detailedDescription: string;
    gallery?: string[];
    problemStatement?: string;
    solution?: string;
    solutions?: string[];
    results: string[];
    lessonsLearned?: string;
    contributions?: string[];
}

export const metadata = {
    title: "Project | " + _metadata.title,
};

// This would typically come from a database or CMS
export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    return <ProjectSections params={params} />;
}
