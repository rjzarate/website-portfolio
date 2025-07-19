import React from "react";

const skills = [
    {
        name: "React",
        icon: (props: React.HTMLAttributes<HTMLSpanElement>) => (
            <span className={`text-blue-500 ${props.className ?? ""}`}>⚛️</span>
        ),
    },
    {
        name: "Next.js",
        icon: (props: React.HTMLAttributes<HTMLSpanElement>) => <span className={props.className}>▲</span>,
    },
    {
        name: "Vite",
        icon: (props: React.HTMLAttributes<HTMLSpanElement>) => (
            <span className={`text-yellow-500 ${props.className ?? ""}`}>⚡</span>
        ),
    },
    {
        name: "MySQL",
        icon: (props: React.HTMLAttributes<HTMLSpanElement>) => (
            <span className={`text-blue-400 ${props.className ?? ""}`}>🐬</span>
        ),
    },
    {
        name: "Spark",
        icon: (props: React.HTMLAttributes<HTMLSpanElement>) => (
            <span className={`text-orange-500 ${props.className ?? ""}`}>🔥</span>
        ),
    },
    {
        name: "Flask",
        icon: (props: React.HTMLAttributes<HTMLSpanElement>) => (
            <span className={`text-gray-700 ${props.className ?? ""}`}>🥃</span>
        ),
    },
    {
        name: "Unity",
        icon: (props: React.HTMLAttributes<HTMLSpanElement>) => (
            <span className={`text-black ${props.className ?? ""}`}>🕹️</span>
        ),
    },
    {
        name: "Git",
        icon: (props: React.HTMLAttributes<HTMLSpanElement>) => (
            <span className={`text-red-500 ${props.className ?? ""}`}>🌱</span>
        ),
    },
];

const Skills = () => {
    return (
        <div className="container">
            <div className="skills-main-text-wrapper">
                <div className="skills-main-text">
                    <h2>My Skills</h2>
                    <p>Technologies and tools I work with</p>
                </div>
            </div>
            <div className="skills-grid">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                        <div className="rounded-full bg-muted p-2">
                            <skill.icon className="h-6 w-6" />
                        </div>
                        <div className="text-center">
                            <h3 className="font-medium">{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
