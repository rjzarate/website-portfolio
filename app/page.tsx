import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/v0/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import SideNavigation from "@/components/v0/scroll-snap-sections";
import { images, links, name } from "@/lib/constants";

import "@/styles/portfolio.css";

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

const skills = [
    { name: "React", icon: () => <span className="text-blue-500">⚛️</span> },
    { name: "Next.js", icon: () => <span>▲</span> },
    { name: "Vite", icon: () => <span className="text-yellow-500">⚡</span> },
    { name: "MySQL", icon: () => <span className="text-blue-400">🐬</span> },
    { name: "Spark", icon: () => <span className="text-orange-500">🔥</span> },
    { name: "Flask", icon: () => <span className="text-gray-700">🥃</span> },
    { name: "Unity", icon: () => <span className="text-black">🕹️</span> },
    { name: "Git", icon: () => <span className="text-red-500">🌱</span> },
];

export default function Home() {
    const sections = [
        { id: "welcome", label: "Welcome" },
        { id: "projects", label: "Featured Projects" },
        { id: "skills", label: "Skills" },
    ];

    return (
        <SideNavigation sections={sections}>
            <div className="main-page">
                <main className="flex-1">
                    <section id="welcome" className="page-section xl:py-48">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                            Hello! I'm <span className="text-primary">Froy</span>
                                        </h1>
                                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                            I'm an aspiring software engineer with a passion for building projects!
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Link href="/projects">
                                            <Button className="inline-flex h-10 items-center justify-center">
                                                View My Work
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <Link href="/contact">
                                            <Button
                                                variant="outline"
                                                className="inline-flex h-10 items-center justify-center bg-transparent">
                                                Contact Me
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className="flex gap-4">
                                        <Link href={links.github} target="_blank" rel="noopener noreferrer">
                                            <Button variant="ghost" size="icon">
                                                <Github className="h-5 w-5" />
                                                <span className="sr-only">GitHub</span>
                                            </Button>
                                        </Link>
                                        <Link href={links.linkedin} target="_blank" rel="noopener noreferrer">
                                            <Button variant="ghost" size="icon">
                                                <Linkedin className="h-5 w-5" />
                                                <span className="sr-only">LinkedIn</span>
                                            </Button>
                                        </Link>
                                        <Link href={links.email}>
                                            <Button variant="ghost" size="icon">
                                                <Mail className="h-5 w-5" />
                                                <span className="sr-only">Email</span>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="relative aspect-square overflow-hidden rounded-full border">
                                        <Image
                                            src={images.profile}
                                            alt="Profile"
                                            width={600}
                                            height={600}
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="projects" className="page-section bg-muted">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                        Featured Projects
                                    </h2>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Check out some of my recent work
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                                {featuredProjects.map((project) => (
                                    <Link key={project.id} href={`/projects#${project.id}`}>
                                        <div className="group relative overflow-hidden rounded-lg border">
                                            <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                width={600}
                                                height={400}
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="inline-flex h-12 px-8 text-lg items-center justify-center bg-transparent">
                                        View All Projects
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </section>
                    <section id="skills" className="page-section">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Technologies and tools I work with
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:gap-12">
                                {skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                                        <div className="rounded-full bg-muted p-2">
                                            <skill.icon className="h-6 w-6" />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="font-medium">{skill.name}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </SideNavigation>
    );
}
