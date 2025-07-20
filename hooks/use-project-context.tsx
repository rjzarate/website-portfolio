"use client";

import React from "react";
import { Project } from "@/app/projects/[id]/page";

export const ProjectContext = React.createContext<Project | undefined>(undefined);

export const useProjectContext = () => {
    const context = React.useContext(ProjectContext);
    if (!context) {
        throw new Error("useProjectContext must be used within a ProjectContext.Provider");
    }
    return context;
};
