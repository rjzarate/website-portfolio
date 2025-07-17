"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ExternalLink, Github, Search } from "lucide-react";

export default function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState("");

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
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
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
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            width={600}
                                            height={400}
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
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
                                            {project.technologies.slice(0, 3).map((tech) => (
                                                <Badge key={tech} variant="secondary">
                                                    {tech}
                                                </Badge>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <Badge variant="outline">+{project.technologies.length - 3}</Badge>
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

// Enhanced projects data with more details
const projects = [
    {
        id: "ecommerce-platform",
        title: "E-commerce Platform",
        shortDescription: "A full-stack e-commerce solution",
        description:
            "A complete e-commerce platform with product management, shopping cart, and payment integration using Stripe.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "Full Stack",
        duration: "3 months",
        teamSize: "Solo project",
        challenges: ["Payment integration", "Inventory management", "User authentication"],
        features: ["Product catalog", "Shopping cart", "Payment processing", "Order tracking", "Admin dashboard"],
        detailedDescription:
            "This comprehensive e-commerce platform was built to provide a seamless shopping experience for both customers and administrators. The project includes a responsive frontend built with React, a robust backend API using Node.js and Express, and a MongoDB database for data persistence.",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
    },
    {
        id: "portfolio-website",
        title: "Portfolio Website",
        shortDescription: "A responsive portfolio website",
        description:
            "A responsive portfolio website built with Next.js and Tailwind CSS to showcase my work and skills.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "Frontend",
        duration: "2 weeks",
        teamSize: "Solo project",
        challenges: ["Performance optimization", "SEO implementation", "Responsive design"],
        features: ["Dark mode", "Responsive design", "Contact form", "Project showcase", "Blog integration"],
        detailedDescription:
            "A modern portfolio website designed to showcase my skills and projects. Built with Next.js for optimal performance and SEO, featuring a clean design system and smooth animations.",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
    },
    {
        id: "portfolio-website",
        title: "Portfolio Website",
        shortDescription: "A responsive portfolio website",
        description:
            "A responsive portfolio website built with Next.js and Tailwind CSS to showcase my work and skills.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "Frontend",
        duration: "2 weeks",
        teamSize: "Solo project",
        challenges: ["Performance optimization", "SEO implementation", "Responsive design"],
        features: ["Dark mode", "Responsive design", "Contact form", "Project showcase", "Blog integration"],
        detailedDescription:
            "A modern portfolio website designed to showcase my skills and projects. Built with Next.js for optimal performance and SEO, featuring a clean design system and smooth animations.",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
    },
    {
        id: "task-management-app",
        title: "Task Management App",
        shortDescription: "A cross-platform mobile application",
        description: "A cross-platform mobile application for task management built with React Native and Firebase.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["React Native", "Firebase", "Redux", "Expo"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "Mobile",
        duration: "4 months",
        teamSize: "2 developers",
        challenges: ["Cross-platform compatibility", "Offline functionality", "Real-time synchronization"],
        features: ["Task creation", "Team collaboration", "Push notifications", "Offline mode", "Calendar integration"],
        detailedDescription:
            "A comprehensive task management application that helps teams stay organized and productive. Features real-time collaboration, offline functionality, and seamless synchronization across devices.",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
    },
    {
        id: "analytics-dashboard",
        title: "Analytics Dashboard",
        shortDescription: "An admin dashboard with data visualization",
        description: "An admin dashboard with data visualization, user management, and reporting features.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["React", "D3.js", "Material UI", "Python", "FastAPI"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "Full Stack",
        duration: "6 months",
        teamSize: "3 developers",
        challenges: ["Large dataset visualization", "Real-time updates", "Performance optimization"],
        features: ["Interactive charts", "Real-time data", "User management", "Export functionality", "Custom reports"],
        detailedDescription:
            "A powerful analytics dashboard that processes and visualizes large datasets in real-time. Built with modern web technologies to provide insights and actionable data for business decisions.",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
    },
    {
        id: "blog-platform",
        title: "Blog Platform",
        shortDescription: "A content management system",
        description: "A blog platform with content management, user authentication, and commenting features.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "Full Stack",
        duration: "2 months",
        teamSize: "Solo project",
        challenges: ["Content management", "SEO optimization", "User authentication"],
        features: ["Rich text editor", "Comment system", "User profiles", "SEO optimization", "Social sharing"],
        detailedDescription:
            "A modern blog platform with a focus on content creation and community engagement. Features a rich text editor, commenting system, and comprehensive SEO optimization.",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
    },
    {
        id: "weather-app",
        title: "Weather App",
        shortDescription: "A weather forecast application",
        description:
            "A weather forecast application that provides real-time weather data and forecasts for any location.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["React", "OpenWeather API", "Styled Components", "PWA"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "Frontend",
        duration: "1 month",
        teamSize: "Solo project",
        challenges: ["API integration", "Geolocation", "Offline functionality"],
        features: ["Current weather", "7-day forecast", "Location search", "Offline mode", "Weather alerts"],
        detailedDescription:
            "A comprehensive weather application that provides accurate weather information and forecasts. Built as a Progressive Web App with offline capabilities and location-based services.",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
    },
];
