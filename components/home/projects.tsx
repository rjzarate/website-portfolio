import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/v0/ui/button";
import { ArrowRight } from "lucide-react";

import "@/styles/portfolio.css";
import "@/styles/pages/home.css";

// Sample data
const featuredProjects = [
    {
        id: "project1",
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with payment integration",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        id: "project2",
        title: "Portfolio Website",
        description: "A responsive portfolio website built with Next.js",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        id: "project3",
        title: "Mobile App",
        description: "A cross-platform mobile application for task management",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        id: "project4",
        title: "Dashboard UI",
        description: "An admin dashboard with data visualization",
        image: "/placeholder.svg?height=400&width=600",
    },
];

const Projects = () => {
    return (
        <div className="container">
            <div className="projects-main-text-wrapper">
                <div className="projects-main-text">
                    <h2>Featured Projects</h2>
                    <p>Check out some of my recent work</p>
                </div>
            </div>
            <div className="projects-grid">
                {featuredProjects.map((project) => (
                    <Link key={project.id} href={`/projects#${project.id}`}>
                        <div className="group relative overflow-hidden rounded-lg border">
                            <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="object-cover transition-transform duration-300 group-hover:scale-150"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                                <div className="text-center text-white p-4">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <p className="mt-2">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex justify-center">
                <Link href="/projects">
                    <Button variant="outline" size="lg" className="projects-all-projects-button">
                        View All Projects
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
