"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/v0/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/v0/ui/card";
import { Badge } from "@/components/v0/ui/badge";
import { Input } from "@/components/v0/ui/input";
import { ExternalLink, Github, Search } from "lucide-react";
import { projects } from "@/lib/constants";

import "@/styles/portfolio.css";

export default function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [technologyDisplay, setTechnologyDisplay] = useState(
        getTechnologyCount(window === undefined ? 0 : innerWidth)
    );

    function getTechnologyCount(width: number) {
        if (width >= 1280) return 8;
        if (width >= 1024) return 6;
        return 4;
    }

    useEffect(() => {
        const handleResize = () => {
            setTechnologyDisplay(getTechnologyCount(window.innerWidth));
        };

        window.addEventListener("resize", handleResize);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const filteredProjects = useMemo(() => {
        if (!searchQuery) return projects;

        return projects.filter(
            (project) =>
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }, [searchQuery]);

    return (
        <div className="main-page">
            <main className="flex-1">
                <section className="page-section">
                    <div className="container">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h1>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    A collection of my work and personal projects
                                </p>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="flex justify-center pt-8">
                            <div className="relative w-full max-w-md">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    placeholder="Search projects..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>

                        <div className="grid gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredProjects.map((project) => (
                                <Card
                                    key={project.id}
                                    className="overflow-hidden group hover:shadow-lg transition-shadow">
                                    <div className="relative aspect-video overflow-hidden">
                                        <Link href={`/projects/${project.id}`}>
                                            <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                width={600}
                                                height={400}
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </Link>
                                    </div>
                                    <CardHeader>
                                        <CardTitle>{project.title}</CardTitle>
                                        <CardDescription>{project.shortDescription}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.technologies.slice(0, technologyDisplay).map((tech) => (
                                                <Badge key={tech} variant="secondary">
                                                    {tech}
                                                </Badge>
                                            ))}
                                            {project.technologies.length > technologyDisplay && (
                                                <Badge variant="outline">
                                                    +{project.technologies.length - technologyDisplay}
                                                </Badge>
                                            )}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <Link href={`/projects/${project.id}`}>
                                            <Button variant="default" size="sm">
                                                View Details
                                            </Button>
                                        </Link>
                                        <div className="flex gap-2">
                                            {project.demoUrl && (
                                                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="gap-1 bg-transparent">
                                                        <ExternalLink className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                            )}
                                            {project.githubUrl && (
                                                <Link
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="gap-1 bg-transparent">
                                                        <Github className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                            )}
                                        </div>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">No projects found matching your search.</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}
