"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/v0/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/v0/ui/card";
import { Badge } from "@/components/v0/ui/badge";
import { Input } from "@/components/v0/ui/input";
import { ArrowUpDown, ExternalLink, Github, Search } from "lucide-react";
import { projects } from "@/lib/constants";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/v0/ui/select";
import { useProjectFilterAndSort, SortOption } from "@/hooks/use-project-filter-and-sort";
import { useTechnologyDisplay } from "@/hooks/use-technology-display";

const ProjectCards = () => {
    const technologyDisplay = useTechnologyDisplay();
    const { sortBy, setSortBy, searchQuery, setSearchQuery, filteredAndSortedProjects } = useProjectFilterAndSort();

    const sortOptions = [
        { value: "favorite", label: "Favorite Projects" },
        { value: "start-date-desc", label: "Newest First (Start Date)" },
        { value: "start-date-asc", label: "Oldest First (Start Date)" },
        { value: "end-date-desc", label: "Newest First (End Date)" },
        { value: "end-date-asc", label: "Oldest First (End Date)" },
        { value: "name-asc", label: "Name A-Z" },
        { value: "name-desc", label: "Name Z-A" },
        { value: "duration-desc", label: "Longest Duration" },
        { value: "duration-asc", label: "Shortest Duration" },
    ];

    return (
        <div>
            {/* Search and Sort Controls */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 max-w-2xl mx-auto">
                <div className="relative w-full sm:flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                    <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
                        <SelectTrigger className="w-full sm:w-[180px]">
                            <SelectValue placeholder="Sort by..." />
                        </SelectTrigger>
                        <SelectContent>
                            {sortOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Results count */}
            <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                    Showing {filteredAndSortedProjects.length} of {projects.length} projects
                    {searchQuery && (
                        <span>
                            {" "}
                            for "<span className="font-medium">{searchQuery}</span>"
                        </span>
                    )}
                </p>
            </div>

            <div className="grid gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredAndSortedProjects.map((project) => (
                    <Card
                        key={project.id}
                        className="overflow-hidden group hover:shadow-lg transition-shadow flex flex-col h-full">
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
                            <div className="absolute top-2 left-2">
                                <Badge variant="secondary" className="text-xs">
                                    {project.category}
                                </Badge>
                            </div>
                            <div className="absolute top-2 right-2">
                                <Badge variant="outline" className="text-xs bg-background/80 backdrop-blur-sm">
                                    {new Date(project.endDate).getFullYear()}
                                </Badge>
                            </div>
                        </div>
                        <CardHeader className="flex-shrink-0">
                            <CardTitle className="flex items-start justify-between">
                                <span>{project.title}</span>
                            </CardTitle>
                            <CardDescription>{project.shortDescription}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{project.description}</p>

                            {/* Push content to bottom */}
                            <div className="mt-auto space-y-4">
                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, technologyDisplay).map((tech) => (
                                        <Badge key={tech} variant="secondary" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                    {project.technologies.length > technologyDisplay && (
                                        <Badge variant="outline" className="text-xs">
                                            +{project.technologies.length - technologyDisplay}
                                        </Badge>
                                    )}
                                </div>

                                {/* Duration */}
                                <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                                    <span className="font-medium">Duration: {project.duration}</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex-shrink-0 flex justify-between pt-4">
                            <Link href={`/projects/${project.id}`}>
                                <Button variant="default" size="sm">
                                    View Details
                                </Button>
                            </Link>
                            <div className="flex gap-2">
                                {project.demoUrl && (
                                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                                            <ExternalLink className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                )}
                                {project.githubUrl && (
                                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                                            <Github className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {filteredAndSortedProjects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">No projects found matching your search.</p>
                    {searchQuery && (
                        <Button variant="outline" onClick={() => setSearchQuery("")} className="mt-4 bg-transparent">
                            Clear Search
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjectCards;
