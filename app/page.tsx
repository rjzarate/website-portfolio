import SideNavigation from "@/components/v0/scroll-snap-sections";

import Welcome from "@/components/home/welcome";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";
import { _metadata } from "./layout";

import "@/styles/portfolio.css";
import "@/styles/pages/home.css";

export const metadata = {
    title: "Home | " + _metadata.title,
};

export default function Home() {
    const sections = [
        { id: "welcome", label: "Welcome" },
        { id: "projects", label: "Featured Projects" },
        { id: "skills", label: "Skills" },
    ];

    return (
        <SideNavigation sections={sections}>
            <div className="main-page">
                <main className="flex-1">
                    <section id="welcome" className="page-section xl:py-48">
                        <Welcome />
                    </section>
                    <section id="projects" className="page-section bg-muted">
                        <Projects />
                    </section>
                    <section id="skills" className="page-section">
                        <Skills />
                    </section>
                </main>
            </div>
        </SideNavigation>
    );
}
