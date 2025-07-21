import { Separator } from "@/components/v0/ui/separator";
import { useProjectContext } from "@/hooks/use-project-context";
import React from "react";

const ResultsAndContributions = () => {
    const project = useProjectContext();

    return (
        <section id="resultsContributions" className="page-section">
            <div className="container">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Results & Contributions</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                            <ul className="space-y-2">
                                {project.results.map((result, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-muted-foreground">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contributions</h3>
                            <ul className="space-y-2">
                                {project.contributions?.map((result, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-muted-foreground">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResultsAndContributions;
