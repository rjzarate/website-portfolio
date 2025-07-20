import { useProjectContext } from "@/hooks/use-project-context";
import React from "react";

const Problem = () => {
    const project = useProjectContext();

    return (
        <section id="problem" className="page-section">
            <div className="container">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Problem Statement</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{project.problemStatement}</p>
                </div>
            </div>
        </section>
    );
};

export default Problem;
