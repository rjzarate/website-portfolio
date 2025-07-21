"use client";

import { notFound } from "next/navigation";

import React, { use } from "react";
import Overview from "@/components/projects/sections/overview";
import { ProjectContext } from "@/hooks/use-project-context";
import ProblemAndSolution from "@/components/projects/sections/problem-and-solution";
import Features from "@/components/projects/sections/features";
import Gallery from "@/components/projects/sections/gallery";
import ResultsAndImpact from "@/components/projects/sections/results-and-impact";
import ResultsAndContributions from "@/components/projects/sections/results-and-contributions";
import ProblemAndSolutions from "@/components/projects/sections/problem-and-solutions";
import DemoVideo from "@/components/projects/sections/demo-video";
import ItchIo from "@/components/projects/sections/itch-io";
import { _metadata } from "@/app/layout";
import { projects } from "@/lib/constants";
import SideNavigation from "../v0/scroll-snap-sections";

const ProjectSections = ({ params }: { params: Promise<{ id: string }> }) => {
    const project = projects.find((p) => p.id === use(params).id);

    if (!project) notFound();

    const sections = [{ id: "overview", label: "Overview" }];
    const elements = [{ id: 0, element: <Overview /> }];

    let i = 1;
    for (const [key, value] of Object.entries(project)) {
        if (value === undefined) continue;

        switch (key) {
            case "youtubeVideoId":
                sections.push({ id: "demoVideo", label: "Demo Video" });
                elements.push({ id: ++i, element: <DemoVideo /> });
                break;
            case "itchIo":
                sections.push({ id: "itchIo", label: "Play the Game" });
                elements.push({ id: ++i, element: <ItchIo /> });
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
                break;
            default:
                break;
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
                </main>
            </div>
        </SideNavigation>
    );
};

export default ProjectSections;
