import { useProjectContext } from "@/hooks/use-project-context";
import React from "react";
import ImageGallery from "@/components/v0/image-gallery";

const Gallery = () => {
    const project = useProjectContext();

    if (project.gallery === undefined) {
        throw Error("Gallery is undefined");
    }

    return (
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Project Gallery</h2>
                    <ImageGallery images={project.gallery} projectTitle={project.title} />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
