"use client";

import { useState, useMemo } from "react";
import { projects } from "@/lib/constants";

export type SortOption =
    | "favorite"
    | "start-date-desc"
    | "start-date-asc"
    | "end-date-desc"
    | "end-date-asc"
    | "name-asc"
    | "name-desc"
    | "duration-desc"
    | "duration-asc";

export function useProjectFilterAndSort() {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState<SortOption>("favorite");

    const filteredAndSortedProjects = useMemo(() => {
        // First filter by search query
        let filtered = projects;
        if (searchQuery) {
            filtered = projects.filter(
                (project) =>
                    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
                    project.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Then sort the filtered results
        const sorted = [...filtered].sort((a, b) => {
            switch (sortBy) {
                case "favorite":
                    return (a.ranking === undefined ? 0 : a.ranking) - (b.ranking === undefined ? 0 : b.ranking);
                case "start-date-desc":
                    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
                case "start-date-asc":
                    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
                case "end-date-desc":
                    return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
                case "end-date-asc":
                    return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
                case "name-asc":
                    return a.title.localeCompare(b.title);
                case "name-desc":
                    return b.title.localeCompare(a.title);
                case "duration-desc":
                    return (
                        new Date(b.endDate).getTime() -
                        new Date(b.startDate).getTime() -
                        (new Date(a.endDate).getTime() - new Date(a.startDate).getTime())
                    );
                case "duration-asc":
                    return (
                        new Date(a.endDate).getTime() -
                        new Date(a.startDate).getTime() -
                        (new Date(b.endDate).getTime() - new Date(b.startDate).getTime())
                    );
                default:
                    return 0;
            }
        });

        return sorted;
    }, [searchQuery, sortBy]);

    return {
        sortBy,
        setSortBy,
        searchQuery,
        setSearchQuery,
        filteredAndSortedProjects,
    };
}
