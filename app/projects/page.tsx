import "@/styles/portfolio.css";

import { _metadata } from "../layout";
import ProjectCards from "@/components/projects/project-cards";

export const metadata = {
    title: "Projects | " + _metadata.title,
};

export default function ProjectsPage() {
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
                        <ProjectCards />
                    </div>
                </section>
            </main>
        </div>
    );
}
