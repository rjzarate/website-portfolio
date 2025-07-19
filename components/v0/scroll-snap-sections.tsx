"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/v0/ui/button";

interface Section {
    id: string;
    label: string;
}

interface SideNavigationProps {
    sections: Section[];
    children: React.ReactNode;
}

export default function SideNavigation({ sections, children }: SideNavigationProps) {
    const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        // Create intersection observer to track which section is in view
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: [0.3],
                rootMargin: "-20% 0px -20% 0px",
            }
        );

        // Observe all sections
        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element && observerRef.current) {
                observerRef.current.observe(element);
            }
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [sections]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="relative">
            {/* Regular content container */}
            <div>{children}</div>

            {/* Side navigation dots */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
                {sections.map((section) => (
                    <div key={section.id} className="relative group">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => scrollToSection(section.id)}
                            className={`w-3 h-3 rounded-full p-0 transition-all duration-200 ${
                                activeSection === section.id
                                    ? "bg-primary scale-125"
                                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                            }`}>
                            <span className="sr-only">Go to {section.label}</span>
                        </Button>

                        {/* Tooltip */}
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                            <div className="bg-popover text-popover-foreground px-3 py-1 rounded-md text-sm whitespace-nowrap border shadow-md">
                                {section.label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile section indicator */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden">
                <div className="bg-background/80 backdrop-blur-sm border rounded-full px-4 py-2">
                    <div className="flex gap-2">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                    activeSection === section.id ? "bg-primary scale-125" : "bg-muted-foreground/30"
                                }`}>
                                <span className="sr-only">Go to {section.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
