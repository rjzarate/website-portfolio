import { Card, CardContent } from "@/components/v0/ui/card";
import { useProjectContext } from "@/hooks/use-project-context";
import React from "react";

const Features = () => {
    const project = useProjectContext();

    return (
        <section id="features" className="page-section">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Key Features</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {project.features.map((feature, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-2">{feature}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {project.featureDescriptions[index]}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
