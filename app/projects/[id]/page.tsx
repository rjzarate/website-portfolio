import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/v0/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/v0/ui/card";
import { Badge } from "@/components/v0/ui/badge";
import { Separator } from "@/components/v0/ui/separator";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from "lucide-react";
import SideNavigation from "@/components/v0/scroll-snap-sections";

// This would typically come from a database or CMS
const projects = [
    {
        id: "ecommerce-platform",
        title: "E-commerce Platform",
        shortDescription: "A full-stack e-commerce solution",
        description:
            "A complete e-commerce platform with product management, shopping cart, and payment integration using Stripe.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "Full Stack",
        duration: "3 months",
        teamSize: "Solo project",
        challenges: ["Payment integration", "Inventory management", "User authentication"],
        features: ["Product catalog", "Shopping cart", "Payment processing", "Order tracking", "Admin dashboard"],
        detailedDescription:
            "This comprehensive e-commerce platform was built to provide a seamless shopping experience for both customers and administrators. The project includes a responsive frontend built with React, a robust backend API using Node.js and Express, and a MongoDB database for data persistence. The platform supports multiple payment methods through Stripe integration and includes advanced features like inventory management, order tracking, and comprehensive analytics.",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        problemStatement:
            "Small businesses needed an affordable, feature-rich e-commerce solution that could compete with larger platforms while maintaining ease of use and customization options.",
        solution:
            "Developed a modular e-commerce platform with a clean, intuitive interface for both customers and administrators. Implemented secure payment processing, real-time inventory management, and comprehensive analytics to help businesses make data-driven decisions.",
        results: [
            "Increased client sales by 40%",
            "Reduced cart abandonment by 25%",
            "Improved page load times by 60%",
        ],
        lessonsLearned:
            "The importance of user testing throughout the development process and the value of implementing proper error handling and logging from the beginning of the project.",
    },
    {
        id: "portfolio-website",
        title: "Portfolio Website",
        shortDescription: "A responsive portfolio website",
        description:
            "A responsive portfolio website built with Next.js and Tailwind CSS to showcase my work and skills.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "Frontend",
        duration: "2 weeks",
        teamSize: "Solo project",
        challenges: ["Performance optimization", "SEO implementation", "Responsive design"],
        features: ["Dark mode", "Responsive design", "Contact form", "Project showcase", "Blog integration"],
        detailedDescription:
            "A modern portfolio website designed to showcase my skills and projects. Built with Next.js for optimal performance and SEO, featuring a clean design system and smooth animations using Framer Motion. The site includes a comprehensive project showcase, integrated blog, and contact functionality.",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        problemStatement:
            "Needed a professional online presence that would effectively showcase my skills and projects while providing an excellent user experience across all devices.",
        solution:
            "Created a modern, responsive portfolio website with a focus on performance and accessibility. Implemented dark mode, smooth animations, and optimized the site for search engines and fast loading times.",
        results: [
            "Achieved 100% Lighthouse performance score",
            "Increased profile views by 200%",
            "Generated 15+ project inquiries",
        ],
        lessonsLearned:
            "The importance of performance optimization and how small details in design and user experience can significantly impact user engagement and conversion rates.",
    },
    {
        id: "task-management-app",
        title: "Task Management App",
        shortDescription: "A cross-platform mobile application",
        description: "A cross-platform mobile application for task management built with React Native and Firebase.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["React Native", "Firebase", "Redux", "Expo"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "Mobile",
        duration: "4 months",
        teamSize: "2 developers",
        challenges: ["Cross-platform compatibility", "Offline functionality", "Real-time synchronization"],
        features: ["Task creation", "Team collaboration", "Push notifications", "Offline mode", "Calendar integration"],
        detailedDescription:
            "A comprehensive task management application that helps teams stay organized and productive. Features real-time collaboration, offline functionality, and seamless synchronization across devices. Built with React Native for cross-platform compatibility and Firebase for backend services.",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        problemStatement:
            "Teams needed a reliable task management solution that worked offline and synchronized seamlessly across different devices and platforms.",
        solution:
            "Developed a cross-platform mobile application with robust offline capabilities and real-time synchronization. Implemented push notifications, team collaboration features, and calendar integration to provide a comprehensive productivity solution.",
        results: ["5000+ downloads in first month", "4.8/5 app store rating", "30% increase in team productivity"],
        lessonsLearned:
            "The complexity of handling offline data synchronization and the importance of thorough testing across different devices and network conditions.",
    },
    {
        id: "analytics-dashboard",
        title: "Analytics Dashboard",
        shortDescription: "An admin dashboard with data visualization",
        description: "An admin dashboard with data visualization, user management, and reporting features.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["React", "D3.js", "Material UI", "Python", "FastAPI"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "Full Stack",
        duration: "6 months",
        teamSize: "3 developers",
        challenges: ["Large dataset visualization", "Real-time updates", "Performance optimization"],
        features: ["Interactive charts", "Real-time data", "User management", "Export functionality", "Custom reports"],
        detailedDescription:
            "A powerful analytics dashboard that processes and visualizes large datasets in real-time. Built with modern web technologies to provide insights and actionable data for business decisions. Features interactive charts, custom reporting, and comprehensive user management.",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        problemStatement:
            "Enterprise clients needed a way to visualize and analyze large amounts of data in real-time to make informed business decisions quickly.",
        solution:
            "Built a comprehensive analytics dashboard with interactive visualizations, real-time data processing, and customizable reporting features. Optimized for performance to handle large datasets efficiently.",
        results: [
            "Reduced data analysis time by 70%",
            "Improved decision-making speed by 50%",
            "Processed 1M+ data points daily",
        ],
        lessonsLearned:
            "The importance of data optimization and caching strategies when working with large datasets, and how proper architecture can significantly impact application performance.",
    },
    {
        id: "blog-platform",
        title: "Blog Platform",
        shortDescription: "A content management system",
        description: "A blog platform with content management, user authentication, and commenting features.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "Full Stack",
        duration: "2 months",
        teamSize: "Solo project",
        challenges: ["Content management", "SEO optimization", "User authentication"],
        features: ["Rich text editor", "Comment system", "User profiles", "SEO optimization", "Social sharing"],
        detailedDescription:
            "A modern blog platform with a focus on content creation and community engagement. Features a rich text editor, commenting system, and comprehensive SEO optimization. Built with Next.js for server-side rendering and PostgreSQL for data persistence.",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        problemStatement:
            "Content creators needed a platform that was easy to use, SEO-friendly, and provided good community engagement features without the complexity of existing solutions.",
        solution:
            "Created a streamlined blog platform with an intuitive content editor, built-in SEO optimization, and community features like comments and user profiles. Focused on simplicity and performance.",
        results: ["50+ active bloggers", "10,000+ monthly page views", "Average session duration of 4+ minutes"],
        lessonsLearned:
            "The importance of user feedback in feature development and how SEO considerations should be built into the architecture from the beginning rather than added later.",
    },
    {
        id: "weather-app",
        title: "Weather App",
        shortDescription: "A weather forecast application",
        description:
            "A weather forecast application that provides real-time weather data and forecasts for any location.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["React", "OpenWeather API", "Styled Components", "PWA"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com",
        category: "Frontend",
        duration: "1 month",
        teamSize: "Solo project",
        challenges: ["API integration", "Geolocation", "Offline functionality"],
        features: ["Current weather", "7-day forecast", "Location search", "Offline mode", "Weather alerts"],
        detailedDescription:
            "A comprehensive weather application that provides accurate weather information and forecasts. Built as a Progressive Web App with offline capabilities and location-based services. Features beautiful visualizations and intuitive user interface.",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        problemStatement:
            "Users needed a fast, reliable weather app that worked offline and provided accurate forecasts with a clean, easy-to-read interface.",
        solution:
            "Developed a Progressive Web App that caches weather data for offline use, provides accurate forecasts, and features an intuitive interface with beautiful weather visualizations.",
        results: ["1000+ daily active users", "4.7/5 user rating", "95% user retention rate"],
        lessonsLearned:
            "The value of Progressive Web App features and how proper caching strategies can significantly improve user experience, especially for mobile users with limited connectivity.",
    },
];

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        notFound();
    }

    const sections = [
        { id: "overview", label: "Overview" },
        { id: "problem", label: "Problem" },
        { id: "solution", label: "Solution" },
        { id: "features", label: "Features" },
        { id: "gallery", label: "Gallery" },
        { id: "results", label: "Results" },
    ];

    return (
        <SideNavigation sections={sections}>
            <div className="flex flex-col min-h-[100dvh]">
                <main className="flex-1">
                    {/* Overview Section */}
                    <section id="overview" className="w-full py-12 md:py-24 lg:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="flex items-center gap-4 mb-8">
                                <Link href="/projects">
                                    <Button variant="ghost" size="sm" className="gap-2">
                                        <ArrowLeft className="h-4 w-4" />
                                        Back to Projects
                                    </Button>
                                </Link>
                            </div>

                            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <Badge variant="outline" className="w-fit">
                                            {project.category}
                                        </Badge>
                                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                            {project.title}
                                        </h1>
                                        <p className="text-xl text-muted-foreground">{project.shortDescription}</p>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.detailedDescription}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech} variant="secondary">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        {project.demoUrl && (
                                            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                <Button className="gap-2">
                                                    <ExternalLink className="h-4 w-4" />
                                                    Live Demo
                                                </Button>
                                            </Link>
                                        )}
                                        {project.githubUrl && (
                                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Button variant="outline" className="gap-2 bg-transparent">
                                                    <Github className="h-4 w-4" />
                                                    View Code
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="relative aspect-video overflow-hidden rounded-lg border">
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            width={600}
                                            height={400}
                                            className="object-cover"
                                        />
                                    </div>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Project Details</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                                <div>
                                                    <p className="text-sm font-medium">Duration</p>
                                                    <p className="text-sm text-muted-foreground">{project.duration}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Users className="h-4 w-4 text-muted-foreground" />
                                                <div>
                                                    <p className="text-sm font-medium">Team Size</p>
                                                    <p className="text-sm text-muted-foreground">{project.teamSize}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Target className="h-4 w-4 text-muted-foreground mt-0.5" />
                                                <div>
                                                    <p className="text-sm font-medium">Key Challenges</p>
                                                    <ul className="text-sm text-muted-foreground mt-1">
                                                        {project.challenges.map((challenge, index) => (
                                                            <li key={index}>• {challenge}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Problem Section */}
                    <section id="problem" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                        <div className="container px-4 md:px-6">
                            <div className="max-w-3xl mx-auto space-y-6">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Problem</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {project.problemStatement}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Solution Section */}
                    <section id="solution" className="w-full py-12 md:py-24 lg:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="max-w-3xl mx-auto space-y-6">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Solution</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                        <div className="container px-4 md:px-6">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Key Features</h2>
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {project.features.map((feature, index) => (
                                        <Card key={index}>
                                            <CardContent className="p-6">
                                                <h3 className="font-semibold mb-2">{feature}</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Feature description would go here explaining the functionality and
                                                    benefits.
                                                </p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Gallery Section */}
                    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
                                    Project Gallery
                                </h2>
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {project.gallery.map((image, index) => (
                                        <div
                                            key={index}
                                            className="relative aspect-video overflow-hidden rounded-lg border">
                                            <Image
                                                src={image || "/placeholder.svg"}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                width={600}
                                                height={400}
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Results Section */}
                    <section id="results" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                        <div className="container px-4 md:px-6">
                            <div className="max-w-3xl mx-auto space-y-8">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Results & Impact</h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                                        <ul className="space-y-2">
                                            {project.results.map((result, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                                    <span className="text-muted-foreground">{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Separator />

                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Lessons Learned</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {project.lessonsLearned}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </SideNavigation>
    );
}
