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

    console.log(ProjectContext);
    console.log(ProjectContext.Provider);

    return (
        <SideNavigation sections={sections}>
            <div className="main-page">
                <main className="flex-1">
                    {/* Overview Section */}
                    <ProjectContext.Provider value={project}>
                        <Overview />
                    </ProjectContext.Provider>

                    {/* Problem & Solution Section */}
                    <section id="problemSolution" className="page-section bg-muted">
                        <div className="container">
                            <div className="max-w-3xl mx-auto space-y-8">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Problem & Solution</h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Problem</h3>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {project.problemStatement}
                                        </p>
                                    </div>

                                    <Separator />

                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Solution</h3>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {project.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

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

                    {/* Features Section */}
                    <section id="features" className="page-section">
                        <div className="container">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Key Features</h2>
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {project.features.map((feature, index) => (
                                        <Card key={index}>
                                            <CardContent className="p-6">
                                                <h3 className="font-semibold mb-2">{feature}</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Feature description would go here explaining the functionality and
                                                    benefits.
                                                </p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Gallery Section */}
                    <section id="gallery" className="page-section bg-muted">
                        <div className="container">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
                                    Project Gallery
                                </h2>
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {project.gallery.map((image, index) => (
                                        <div
                                            key={index}
                                            className="relative aspect-video overflow-hidden rounded-lg border">
                                            <Image
                                                src={image || "/placeholder.svg"}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                width={600}
                                                height={400}
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Results Section */}
                    <section id="results" className="page-section">
                        <div className="container">
                            <div className="max-w-3xl mx-auto space-y-8">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Results & Impact</h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                                        <ul className="space-y-2">
                                            {project.results.map((result, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                                    <span className="text-muted-foreground">{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Separator />

                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Lessons Learned</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {project.lessonsLearned}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </SideNavigation>
    );
}
