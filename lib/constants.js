export const name = "Froilan Zarate Jr";
export const fullName = "Froilan Danganan Zarate Jr";
export const email = "zarate_rj@yahoo.com";
export const phone = "+1 (408) 600-9717";
export const locations = ["Milpitas, CA", "Vallejo, CA"];

export const links = {
    github: "https://github.com/rjzarate",
    linkedin: "https://www.linkedin.com/in/froilan-zarate-jr-computer-scientist/",
    email: "mailto:" + email,
};

export const images = {
    profile: "/img/profile.jpeg",
    profile1: "/img/profile1.jpg",
    hobbiesDND: "/img/hobbies/dnd.jpg",
    hobbiesOutside: "/img/hobbies/outside.jpg",
    hobbiesPoker: "/img/hobbies/poker.jpg",
    hobbiesCosplay: "/img/hobbies/cosplay.jpg",
};

/**
 * List of projects -
 * portfolio website
 * banking website
 * python ai game
 * C++ openframeworks obj
 * dnd website
 * colorme firefox extension
 * k4t
 * minecraft catch bobo
 * soulace
 * bug tracker
 */

export const projects = [
    {
        id: "portfolio-website",
        title: "Portfolio Website",
        shortDescription: "My portfolio website built with Next.js and Tailwind CSS",
        description:
            "A responsive portfolio website built with Next.js and Tailwind CSS to showcase my work and skills.",
        image: "/img/projects/portfolio-website/portfolio.png",
        technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "v0"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com/rjzarate/website-portfolio",
        category: "Web Development",
        duration: "1 week (July 2025)",
        teamSize: "Solo project",
        challenges: ["User-friendliness & styling", "Clean code design patterns", "Project descriptions"],
        features: [
            "Project search",
            "Page navigation",
            "Side navigation",
            "Dark mode",
            "Mobile view",
            "Adaptive projects",
        ],
        featureDescriptions: [
            "Search for projects by title, description, or technology.",
            "Navigate through different sections of the portfolio easily.",
            "A side navigation bar that adapts to the current section.",
            "Dark mode toggle for better user experience.",
            "Mobile view for accessibility on smaller screens.",
            "Displayed as sections, projects are easily customizable.",
        ],
        detailedDescription:
            "My second website designed as a portfolio to showcase my skills and projects. Used Vercel's v0 to develop the base of the website, and integrated some of my own styling and components. I wanted to create this portfolio in a short amount of time so I can use it to apply for jobs; thus, I've decided to implement everything in React rather than following a 3-tier architecture design pattern — though you can see many of my semester-long school projects use this pattern.",
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        problemStatement:
            "There's only so much a resume can show and many job applications have an entry to upload your website. Additionally, I need a better way to create a \"brand\" for myself and a better way to display what I've worked on.",
        solution:
            "So, why not only create a website that displays who I am and what I've done, but also learn more about React! Many website generators like Wix and Squarespace exist, but they don't provide the flexibility and learning experience that building from scratch does.",
        results: [
            "I now have a portfolio 😎",
            "Compared to my resume, increased my project descriptions by over 200%",
            "Added 5+ images to each project compared to LinkedIn and other Job Boards",
        ],
        lessonsLearned:
            "Having a good portfolio is really important, as it's YOUR way of showing how you want others to see yourself. With a good portfolio, it is possible to include everything that you've done without making it overwhelming by having features like \"Featured Projects\" and a search bar.",
    },
];

/*
,
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
 */
