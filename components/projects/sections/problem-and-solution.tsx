import { Separator } from "@/components/v0/ui/separator";
import { useProjectContext } from "@/hooks/use-project-context";
import React from "react";

const ProblemAndSolution = () => {
    const project = useProjectContext();

    return (
        <section id="problemSolution" className="page-section">
            <div className="container">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Problem & Solution</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Problem</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">{project.problemStatement}</p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-xl font-semibold mb-4">Solution</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemAndSolution;
