import Image from "next/image";
import { useProjectContext } from "@/hooks/use-project-context";
import React from "react";

const Gallery = () => {
    const project = useProjectContext();

    return (
        <section id="gallery" className="page-section">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Project Gallery</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {project.gallery.map((image, index) => (
                            <div key={index} className="relative aspect-video overflow-hidden rounded-lg border">
                                <Image
                                    src={image || "/placeholder.svg"}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    width={600}
                                    height={400}
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
