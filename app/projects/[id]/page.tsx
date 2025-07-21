"use client";

import { notFound } from "next/navigation";
import SideNavigation from "@/components/v0/scroll-snap-sections";
import { projects } from "@/lib/constants";

import "@/styles/portfolio.css";
import React, { use, useEffect, useState } from "react";
import Overview from "@/components/projects/sections/overview";
import { ProjectContext } from "@/hooks/use-project-context";
import ProblemAndSolution from "@/components/projects/sections/problem-and-solution";
import Features from "@/components/projects/sections/features";
import Gallery from "@/components/projects/sections/gallery";
import ResultsAndImpact from "@/components/projects/sections/results-and-impact";
import ResultsAndContributions from "@/components/projects/sections/results-and-contributions";
import Problem from "@/components/projects/sections/problem";
import ProblemAndSolutions from "@/components/projects/sections/problem-and-solutions";
import DemoVideo from "@/components/projects/sections/demo-video";

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

// This would typically come from a database or CMS
export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const project = projects.find((p) => p.id === use(params).id);

    if (!project) {
        notFound();
    }

    let sections = [
        { id: "overview", label: "Overview" },
        // { id: "problem", label: "Problem" },
        // { id: "solution", label: "Solution" },
        // { id: "problemSolution", label: "Problem & Solution" },
        // { id: "features", label: "Features" },
        // { id: "gallery", label: "Gallery" },
        // { id: "resultsImpact", label: "Results & Impact" },
        // { id: "resultsContributions", label: "Results & Contributions" },
    ];

    let elements = [{ id: 0, element: <Overview /> }];

    let i = 1;
    for (const [key, value] of Object.entries(project)) {
        if (value === undefined) continue;

        switch (key) {
            case "youtubeVideoId":
                sections.push({ id: "demoVideo", label: "Demo Video" });
                elements.push({ id: ++i, element: <DemoVideo /> });
                break;
            case "problemStatement":
                if (project["solution"] !== undefined) {
                    sections.push({ id: "problemSolution", label: "Problem & Solution" });
                    elements.push({ id: ++i, element: <ProblemAndSolution /> });
                } else if (project["solutions"] !== undefined) {
                    sections.push({ id: "problemSolutions", label: "Problem & Solution" });
                    elements.push({ id: ++i, element: <ProblemAndSolutions /> });
                }
                break;
            case "features":
                sections.push({ id: "features", label: "Features" });
                elements.push({ id: ++i, element: <Features /> });
                break;
            case "gallery":
                sections.push({ id: "gallery", label: "Gallery" });
                elements.push({ id: ++i, element: <Gallery /> });
                break;
            case "results":
                if (project["lessonsLearned"] !== undefined) {
                    sections.push({ id: "resultsImpact", label: "Results & Impact" });
                    elements.push({ id: ++i, element: <ResultsAndImpact /> });
                } else if (project["contributions"] !== undefined) {
                    sections.push({ id: "resultsContributions", label: "Results & Contributions" });
                    elements.push({ id: ++i, element: <ResultsAndContributions /> });
                }
            default:
        }
    }

    return (
        <SideNavigation sections={sections}>
            <div className="main-page">
                <main className="flex-1">
                    <ProjectContext.Provider value={project}>
                        {elements.map((e, index) => (
                            <div key={e.id} className={index % 2 == 0 ? "" : "bg-muted"}>
                                {e.element}
                            </div>
                        ))}
                    </ProjectContext.Provider>

                    {/* Solution Section */}
                    {/* <section id="solution" className="page-section">
                        <div className="container">
                            <div className="max-w-3xl mx-auto space-y-6">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Solution</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
                            </div>
                        </div>
                    </section> */}
                </main>
            </div>
        </SideNavigation>
    );
}
