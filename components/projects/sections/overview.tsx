import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/v0/ui/button";
import { ArrowLeft, Calendar, ExternalLink, Github, Target, Users } from "lucide-react";
import { Badge } from "@/components/v0/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/v0/ui/card";
import React from "react";
import { useProjectContext } from "@/hooks/use-project-context";

const Overview = () => {
    const project = useProjectContext();

    return (
        <section id="overview" className="page-section1">
            <div className="container">
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/projects">
                        <Button variant="ghost" size="sm" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Projects
                        </Button>
                    </Link>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <Badge variant="outline" className="w-fit">
                                {project.category}
                            </Badge>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{project.title}</h1>
                            <p className="text-xl text-muted-foreground">{project.shortDescription}</p>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">{project.detailedDescription}</p>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            {project.demoUrl && (
                                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                    <Button className="gap-2">
                                        <ExternalLink className="h-4 w-4" />
                                        Live Demo
                                    </Button>
                                </Link>
                            )}
                            {project.githubUrl && (
                                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="gap-2 bg-transparent">
                                        <Github className="h-4 w-4" />
                                        View Code
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="relative aspect-video overflow-hidden rounded-lg border">
                            <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="object-cover"
                            />
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>Project Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-medium">Duration</p>
                                        <p className="text-sm text-muted-foreground">{project.duration}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-medium">Team Size</p>
                                        <p className="text-sm text-muted-foreground">{project.teamSize}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Target className="h-4 w-4 text-muted-foreground mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium">Key Challenges</p>
                                        <ul className="text-sm text-muted-foreground mt-1">
                                            {project.challenges.map((challenge, index) => (
                                                <li key={index}>• {challenge}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
