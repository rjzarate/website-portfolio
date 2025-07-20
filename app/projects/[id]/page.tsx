"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/v0/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/v0/ui/card";
import { Badge } from "@/components/v0/ui/badge";
import { Separator } from "@/components/v0/ui/separator";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from "lucide-react";
import SideNavigation from "@/components/v0/scroll-snap-sections";
import { projects } from "@/lib/constants";

import "@/styles/portfolio.css";
import React, { use, useEffect, useState } from "react";
import Overview from "@/components/projects/sections/overview";
import { ProjectContext } from "@/hooks/use-project-context";
import ProblemAndSolution from "@/components/projects/sections/problem-and-solution";
import Features from "@/components/projects/sections/features";
import Gallery from "@/components/projects/sections/gallery";
import Results from "@/components/projects/sections/results";

export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    category: string;
    duration: string;
    teamSize: string;
    challenges: string[];
    features: string[];
    featureDescriptions: string[];
    detailedDescription: string;
    gallery: string[];
    problemStatement: string;
    solution: string;
    results: string[];
    lessonsLearned: string;
}

// This would typically come from a database or CMS
export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const project = projects.find((p) => p.id === use(params).id);

    if (!project) {
        notFound();
    }

    const sections = [
        { id: "overview", label: "Overview" },
        // { id: "problem", label: "Problem" },
        // { id: "solution", label: "Solution" },
        { id: "problemSolution", label: "Problem & Solution" },
        { id: "features", label: "Features" },
        { id: "gallery", label: "Gallery" },
        { id: "results", label: "Results" },
    ];

    const temp = [<Overview />, <ProblemAndSolution />];

    return (
        <SideNavigation sections={sections}>
            <div className="main-page">
                <main className="flex-1">
                    <ProjectContext.Provider value={project}>
                        <Overview />
                        <div className="bg-muted">
                            <ProblemAndSolution />
                        </div>
                        <Features />
                        <div className="bg-muted">
                            <Gallery />
                        </div>
                        <Results />
                    </ProjectContext.Provider>

                    {/* Problem Section */}
                    {/* <section id="problem" className="page-section bg-muted">
                        <div className="container">
                            <div className="max-w-3xl mx-auto space-y-6">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Problem</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {project.problemStatement}
                                </p>
                            </div>
                        </div>
                    </section> */}

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
