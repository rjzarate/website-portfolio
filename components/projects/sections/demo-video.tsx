import { useProjectContext } from "@/hooks/use-project-context";
import { Play } from "lucide-react";
import React from "react";

const DemoVideo = () => {
    const project = useProjectContext();

    return (
        <section id="demoVideo" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <Play className="h-6 w-6 text-primary" />
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Demo Video</h2>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
                        <iframe
                            src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
                            title={`${project.title} Demo Video`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        />
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 text-center">
                        Watch a demo of {project.title} showcasing its key features and functionality.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DemoVideo;
