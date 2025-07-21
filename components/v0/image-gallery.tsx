"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/v0/ui/button";
import { Dialog, DialogContent } from "@/components/v0/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";

interface ImageGalleryProps {
    images: string[];
    projectTitle: string;
}

export default function ImageGallery({ images, projectTitle }: ImageGalleryProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const openModal = (index: number) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const goToPrevious = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1);
        }
    };

    const goToNext = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex(selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
            goToPrevious();
        } else if (e.key === "ArrowRight") {
            goToNext();
        } else if (e.key === "Escape") {
            closeModal();
        }
    };

    return (
        <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative aspect-video overflow-hidden rounded-lg border cursor-pointer group"
                        onClick={() => openModal(index)}>
                        <Image
                            src={image || "/placeholder.svg"}
                            alt={`${projectTitle} screenshot ${index + 1}`}
                            width={600}
                            height={400}
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/90 rounded-full p-2">
                                    <svg
                                        className="w-6 h-6 text-gray-800"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Dialog open={selectedImageIndex !== null} onOpenChange={closeModal}>
                <DialogTitle />
                <DialogContent className="max-w-7xl w-full h-full max-h-[90vh] p-0" onKeyDown={handleKeyDown}>
                    {selectedImageIndex !== null && (
                        <div className="relative w-full h-full flex items-center justify-center bg-black">
                            {/* Previous button */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                                onClick={goToPrevious}>
                                <ChevronLeft className="h-8 w-8" />
                            </Button>

                            {/* Next button */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                                onClick={goToNext}>
                                <ChevronRight className="h-8 w-8" />
                            </Button>

                            {/* Main image */}
                            <div className="relative w-full h-full flex items-center justify-center p-8">
                                <div className="relative max-w-full max-h-[calc(100vh-200px)] flex items-center justify-center">
                                    <Image
                                        src={images[selectedImageIndex] || "/placeholder.svg"}
                                        alt={`${projectTitle} screenshot ${selectedImageIndex + 1}`}
                                        width={1200}
                                        height={800}
                                        className="max-w-full max-h-full object-contain"
                                        style={{
                                            maxHeight: "calc(100vh - 200px)",
                                            width: "auto",
                                            height: "auto",
                                        }}
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Image counter */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                {selectedImageIndex + 1} / {images.length}
                            </div>

                            {/* Thumbnail navigation */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-md overflow-x-auto">
                                {images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImageIndex(index)}
                                        className={`flex-shrink-0 w-16 h-12 rounded border-2 overflow-hidden ${
                                            index === selectedImageIndex
                                                ? "border-white"
                                                : "border-transparent opacity-60"
                                        }`}>
                                        <Image
                                            src={image || "/placeholder.svg"}
                                            alt={`Thumbnail ${index + 1}`}
                                            width={64}
                                            height={48}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
