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
        id: "banking-application",
        title: "Banking Application",
        description: "A web-based banking application for Google users",
        image: "/img/projects/banking-application/main.png",
    },
    {
        id: "k4t",
        title: "K4T",
        description: "A Unity2D game where a cat must defeat bosses to save the world!",
        image: "/img/projects/k4t/poster1.png",
    },
    {
        id: "catch-bobo",
        title: "Catch Bobo",
        description: "A Minecraft 1.20 map with custom classes, textures, and abilities.",
        image: "/img/projects/catch-bobo/main.png",
    },
    {
        id: "cinket",
        title: "Cinket",
        description: "My D&D website for my players / Password: Limitless",
        image: "/img/projects/cinket/home.png",
    },
];

const Projects = () => {
    return (
        <div className="container">
            <div className="projects-main-text-wrapper">
                <div className="projects-main-text">
                    <h2>Featured Projects</h2>
                    <p>Check out some of my favorite works</p>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                {featuredProjects.map((project) => (
                    <Link key={project.id} href={`/projects/${project.id}`}>
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
