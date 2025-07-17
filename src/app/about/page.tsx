import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Download } from "lucide-react";
import SideNavigation from "@/src/components/scroll-snap-sections";

export default function AboutPage() {
    const sections = [
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "education", label: "Education" },
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
                                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
                                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                            I'm a passionate developer with a love for creating elegant solutions to
                                            complex problems.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <p>
                                            Hello! I'm John Doe, a full-stack developer based in San Francisco, CA. I
                                            have a passion for building web applications that are not only functional
                                            but also provide an exceptional user experience.
                                        </p>
                                        <p>
                                            With over 5 years of experience in the industry, I've worked on a variety of
                                            projects ranging from small business websites to large-scale enterprise
                                            applications. My expertise includes front-end development with React and
                                            Next.js, back-end development with Node.js and Express, and database
                                            management with MongoDB and PostgreSQL.
                                        </p>
                                        <p>
                                            When I'm not coding, you can find me hiking in the mountains, reading
                                            science fiction novels, or experimenting with new recipes in the kitchen.
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
                    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Experience</h2>
                                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        My professional journey
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
                    <section id="education" className="w-full py-12 md:py-24 lg:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Education</h2>
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
                                            <p>{edu.description}</p>
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
        position: "Senior Frontend Developer",
        company: "Tech Innovations Inc.",
        period: "2021 - Present",
        responsibilities: [
            "Lead a team of 5 developers in building and maintaining a large-scale SaaS platform",
            "Implemented a new design system that improved development speed by 40%",
            "Reduced bundle size by 30% through code splitting and lazy loading",
            "Mentored junior developers and conducted code reviews",
        ],
    },
    {
        position: "Full Stack Developer",
        company: "Digital Solutions LLC",
        period: "2018 - 2021",
        responsibilities: [
            "Developed and maintained multiple client websites and web applications",
            "Built RESTful APIs and integrated third-party services",
            "Implemented responsive designs and ensured cross-browser compatibility",
            "Collaborated with designers and product managers to deliver high-quality products",
        ],
    },
    {
        position: "Junior Web Developer",
        company: "WebCraft Agency",
        period: "2016 - 2018",
        responsibilities: [
            "Created responsive websites for small to medium-sized businesses",
            "Maintained and updated existing client websites",
            "Assisted senior developers with larger projects",
            "Participated in client meetings and gathered requirements",
        ],
    },
];

// Sample education data
const education = [
    {
        degree: "Master of Science in Computer Science",
        institution: "Stanford University",
        year: "2014 - 2016",
        description:
            "Specialized in Human-Computer Interaction and Web Technologies. Thesis on improving web accessibility for users with disabilities.",
    },
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of California, Berkeley",
        year: "2010 - 2014",
        description:
            "Graduated with honors. Participated in various hackathons and coding competitions. Member of the Computer Science Club.",
    },
];
