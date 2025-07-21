"use client";

import { useState, useEffect } from "react";

export function useTechnologyDisplay() {
    const [technologyDisplay, setTechnologyDisplay] = useState(0);

    function getTechnologyCount(width: number) {
        if (width >= 1280) return 8;
        if (width >= 1024) return 6;
        return 4;
    }

    useEffect(() => {
        const handleResize = () => {
            setTechnologyDisplay(getTechnologyCount(window.innerWidth));
        };

        window.addEventListener("resize", handleResize);

        handleResize();
        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return technologyDisplay;
}
