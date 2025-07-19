import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/v0/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/v0/ui/card";
import { Badge } from "@/components/v0/ui/badge";
import { Download } from "lucide-react";
import SideNavigation from "@/components/v0/scroll-snap-sections";
import { name } from "@/lib/constants";

export default function AboutPage() {
    const sections = [
        { id: "about", label: "About" },
        { id: "hobbies", label: "Hobbies" },
        { id: "education", label: "Education" },
        { id: "experience", label: "Experience" },
    ];

    return (
        <SideNavigation sections={sections}>
            <div className="flex flex-col min-h-[100dvh]">
                <main className="flex-1">
                    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me 💻</h1>
                                        {/* <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                            I'm a passionate developer with a love for creating elegant solutions to
                                            complex problems.
                                        </p> */}
                                    </div>
                                    <div className="space-y-4">
                                        <p>
                                            Hello! I'm {name}, a Computer Science Graduate with a great passion in
                                            programming and building projects — both software and hands-on creations.
                                        </p>
                                        <p>
                                            Interestingly enough, my first experience regarding the expansive world of
                                            computer science and programming was from one of the biggest video games:
                                            Minecraft. When I was in elementary school, I saw that you can modify your
                                            world by using command blocks and Minecraft commands. Seeing this, I fell in
                                            love with creating my own custom minigames, survival modifiers, and other
                                            coding modifications that change the base-game experience.
                                        </p>
                                        <p>
                                            Throughout my college journey and post graduation, I have been developing
                                            multiple projects that showcase my skills in different languages, web and
                                            game development, and a variety of frameworks.
                                        </p>
                                    </div>
                                    <div>
                                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                            <Button className="gap-2">
                                                <Download className="h-4 w-4" />
                                                Download Resume
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="relative aspect-square overflow-hidden rounded-xl border">
                                        <Image
                                            src="/placeholder.svg?height=600&width=600"
                                            alt="Profile"
                                            width={600}
                                            height={600}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="hobbies" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[500px_1fr]">
                                <div className="flex items-center justify-center">
                                    <div className="grid grid-cols-2 grid-rows-2 gap-4 aspect-square overflow-hidden rounded-xl border p-4 bg-background">
                                        <Image
                                            src="/placeholder.svg?height=600&width=600"
                                            alt="Hobby 1"
                                            width={280}
                                            height={280}
                                            className="object-cover rounded-lg"
                                        />
                                        <Image
                                            src="/placeholder.svg?height=600&width=600"
                                            alt="Hobby 2"
                                            width={280}
                                            height={280}
                                            className="object-cover rounded-lg"
                                        />
                                        <Image
                                            src="/placeholder.svg?height=600&width=600"
                                            alt="Hobby 3"
                                            width={280}
                                            height={280}
                                            className="object-cover rounded-lg"
                                        />
                                        <Image
                                            src="/placeholder.svg?height=600&width=600"
                                            alt="Hobby 4"
                                            width={280}
                                            height={280}
                                            className="object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hobbies 🧰</h1>
                                        {/* <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                            I'm a passionate developer with a love for creating elegant solutions to
                                            complex problems.
                                        </p> */}
                                    </div>
                                    <div className="space-y-4">
                                        <p>
                                            During my free time when I'm not coding, I enjoy hanging out with my
                                            friends, watching anime, and playing Dungeons & Dragons.
                                        </p>
                                        <p>
                                            Funny enough, many of my hobbies eventually lead to me coding something
                                            related to it. For example, I love playing video games, so I started making
                                            my own games. For Dungeons & Dragons, I created a website for my players to
                                            use as we had a lot of lore and homebrew content.
                                        </p>
                                        <p>
                                            A recent project and new hobby of mine is cosplaying! I cosplayed as Himmel
                                            from Frieren for Anime Expo 2025, which made me have to learn a bit of
                                            sewing and 3D modeling.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="education" className="w-full py-12 md:py-24 lg:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Education 🎓</h2>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        My academic background
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto grid max-w-3xl gap-6 py-12">
                                {education.map((edu, index) => (
                                    <Card key={index}>
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <CardTitle>{edu.degree}</CardTitle>
                                                <Badge variant="outline">{edu.year}</Badge>
                                            </div>
                                            <CardDescription>{edu.institution}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p>GPA: {edu.gpa}</p>
                                            <p className="text-muted-foreground">{edu.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                        Work Experience 👥
                                    </h2>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        My part-time jobs
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto grid max-w-3xl gap-6 py-12">
                                {experience.map((job, index) => (
                                    <Card key={index}>
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <CardTitle>{job.position}</CardTitle>
                                                <Badge variant="outline">{job.period}</Badge>
                                            </div>
                                            <CardDescription>{job.company}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc pl-5 space-y-2">
                                                {job.responsibilities.map((responsibility, idx) => (
                                                    <li key={idx}>{responsibility}</li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </SideNavigation>
    );
}

// Sample experience data
const experience = [
    {
        position: "Front Desk Receptionist",
        company: "Milpitas Star Fitness & Aquatics",
        period: "Aug. 2024 - Present",
        responsibilities: [
            "Using a database to alter customer’s membership and swimming information",
            "Coded scripts to automate closing procedures",
        ],
    },
    {
        position: "Cashier & Barista",
        company: "Teasociety",
        period: "Aug. 2022 - Feb. 2023",
        responsibilities: [
            "Memorized the process of making +40 drinks",
            "Alone, finished a 20-drink Door Dash order while simultaneously taking walk-in orders",
        ],
    },
];

// Sample education data
const education = [
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "San José State University",
        year: "Aug. 2022 - May 2025",
        description:
            "Data Structures, Algorithms, Game Development, Computer Graphics, Database Management, Software Engineering.",
        gpa: "3.8 (Magna Cum Laude)",
    },
];
