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
 * python ai game
 * C++ openframeworks obj
 * colorme firefox extension
 * k4t
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
        image: "/img/projects/portfolio-website/main.png",
        technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "v0"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com/rjzarate/website-portfolio",
        category: "Web Development",
        duration: "1 week (Jul. 2025)",
        teamSize: "Solo project",
        challenges: ["User-friendliness & styling", "Clean code design patterns", "Project descriptions"],
        detailedDescription:
            "My second personal website designed as a portfolio to showcase my skills and projects. Used Vercel's v0 to develop the base of the website, and integrated some of my own styling and components. I wanted to create this portfolio in a short amount of time so I can use it to apply for jobs; thus, I've decided to implement everything in React rather than following a 3-tier architecture design pattern — though you can see many of my semester-long school projects use this pattern.",
        problemStatement:
            "There's only so much a resume can show and many job applications have an entry to upload your website. Additionally, I need a better way to create a \"brand\" for myself and a better way to display what I've worked on.",
        solution:
            "So, why not only create a website that displays who I am and what I've done, but also learn more about React! Many website generators like Wix and Squarespace exist, but they don't provide the flexibility and learning experience that building from scratch does.",
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
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        results: [
            "I now have a portfolio 😎",
            "Compared to my resume, increased my project descriptions by over 200%",
            "Added 5+ images to each project compared to LinkedIn and other Job Boards",
        ],
        lessonsLearned:
            "Having a good portfolio is really important, as it's YOUR way of showing how you want others to see yourself. With a good portfolio, it is possible to include everything that you've done without making it overwhelming by having features like \"Featured Projects\" and a search bar.",
        contributions: undefined,
    },
    {
        id: "banking-application",
        title: "Banking Application",
        shortDescription: "A web-based banking application for Google users",
        description:
            "Software Engineering course final project. Designed with the 3-tier architecture software design pattern.",
        detailedDescription: "",
        image: "/img/projects/banking-application/main.png",
        technologies: [
            "React",
            "Flask",
            "MySQL",
            "Docker",
            "Next.js",
            "Google OAuth",
            "TypeScript",
            "Python",
            "Tailwind CSS",
            "v0",
        ],
        demoUrl: "https://youtu.be/5uQTpoYigDU",
        githubUrl: "https://github.com/Jjmaxxx/onlinebanking",
        category: "Full-Stack",
        duration: "4 months (Feb. 2025 - May 2025)",
        teamSize: "4 developers",
        challenges: ["Small team size", "Work delegation", "API calls"],
        detailedDescription:
            "This full-stack web banking application was the final project for my Software Engineering course. The project followed the 3-tier architecture model, separating concerns between the presentation layer (React/Next.js frontend), the logic layer (Flask API), and the data layer (MySQL database). We used Docker to ensure a consistent development. The application allows users to log in using Google OAuth, view their balance and transaction history, make payments via an automatic billing system, and upload checks for processing. Admin users have access to a custom dashboard for user monitoring and management. Throughout the development process, we coordinated using Agile methodologies, conducting weekly sprints and stand-ups to track progress.",
        problemStatement:
            "A new online-only bank is being launched and it requires a web-based application server, mobile application, and seamless integration to handle all the banking transactions and financial planning tools.",
        solution: undefined,
        solutions: [
            "Support opening, closing, and transferring accounts, as well as cash deposits and withdrawals via both online platform and physical ATMs of other banks.",
            "Enable mobile check deposits through image capture and ensure a user-friendly interface accessible to all age demographics.",
            "Allow users to create accounts using a valid email and password, and manage savings, checking, deposits, and other financial tools.",
            "Integrate a Chase ATM locator with map support and redirection to external mapping services such as Apple Maps and Google Maps.",
            "Automate bill payments, fund transfers, balance updates, fraud alerts, and generation of scheduled financial reports.",
            "Implement a manager dashboard for monitoring fraud, generating reports, ensuring compliance, and enabling admins to query customer accounts and activities.",
            "Use Flask for the backend, ReactJS for a cross-platform frontend, integrate Google Maps, generate sample data for demo, and collaborate through GitHub with version control and team contributions.",
        ],
        features: [
            "Google OAuth login",
            "Automatic billing",
            "Admin dashboard",
            "ATM API",
            "Chase ATM locator",
            "Check upload",
        ],
        featureDescriptions: [
            "Login using Google OAuth for secure authentication.",
            "Automatic billing system for recurring payments.",
            "Admin dashboard for managing users and transactions.",
            "ATM API integration for real-time ATM data.",
            "Chase ATM locator for finding nearby ATMs.",
            "Users can upload a check and the server can check for validity and amount.",
        ],
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        results: [
            "Easy user login by using a Google account",
            "1 line installation; lightweight and fast compared to other groups",
            "97% grade on Final Project; finished in time when all other groups had 6 members",
        ],
        lessonsLearned: undefined,
        contributions: [
            "User logout and user authentication",
            "Created working Docker containers for the frontend, backend, and database",
            "Developed the backend for the Admin dashboard",
        ],
    },
    {
        id: "cinket",
        title: "Cinket",
        shortDescription: "My D&D website for my players / Password: Limitless",
        description:
            "A D&D website that contains everything needed for my players to understand my world and create their characters",
        detailedDescription:
            "In July 2024, I got into being a Dungeon Master for D&D and started creating my world: Cinket. Instead of keeping all of my notes and idea on a Google Document, I decided to use a note-taking application called Obsidian. What made me able to host my first D&D session on August 2024 was being able to upload all of my notes into a working website! All of my players are able to use this website and can reference it when creating their characters or have questions about the world of Cinket. I eventually kept expanding myh Obsidian notes, which inturn expanded my website to essentially be a D&D 5.5e wiki. I've decided to add password authentication for distribution purposes, but currently, the password is: Limitless.",
        image: "/img/projects/cinket/main.png",
        technologies: ["JavaScript", "Markdown", "Obsidian", "Dataview", "Digital Garden"],
        demoUrl: "https://cinket.com/",
        githubUrl: undefined,
        category: "Full-Stack",
        duration: "6+ Months (Aug. 2024 - Current)",
        teamSize: "1 developer",
        challenges: ["Limited API", "Page organization", "API calls"],
        problemStatement: "My players needed a better way to access a lot of homebrew and lore in the world of Cinket.",
        solution: undefined,
        solutions: undefined,
        features: ["Password authentication", "Search bar", "Side navigation", "Dataview tables", "Markdown to HTML"],
        featureDescriptions: [
            "Uses Octauthent for password authentication to limit users and protect data.",
            "Advanced search bar that can search within the pages.",
            "Collapsing folder structure and pages.",
            "Uses JavaScript and Dataview to display spells and tables.",
            "Converts Obsidian's Markdown to HTML, allowing for easy editing and hyperlinking.",
        ],
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        results: [
            "My 10+ players use this instead of other D&D wikis",
            "Used in ALL of my sessions during Dungeon Mastering",
            "50,000+ words of months of ongoing development on the world and game mechanics.",
        ],
        lessonsLearned:
            "Since I am using an Obsidian extension to convert the md files to HTML, it's very limited compared to building a website from Next.js and other React frameworks.",
        contributions: undefined,
    },
    {
        id: "catch-bobo",
        title: "Catch Bobo",
        shortDescription: "A Cat-and-Mouse multiplayer minigame within Minecraft",
        description: "A Minecraft 1.20 map that with custom classes, textures, and abilities.",
        image: "/img/projects/catch-bobo/main.png",
        technologies: ["mcfunction", "Blockbench", "JSON"],
        demoUrl: "https://www.youtube.com/watch?v=YKfC8Mfxz0k",
        githubUrl: "github.com/rjzarate/Catch-Bobo/",
        category: "Game Development",
        duration: "7 months (Aug. 2022 – Feb. 2023)",
        teamSize: "1 developer (Me), 2 artists, 5+ builders",
        challenges: ["Multiplayer integration", "3D modeling", 'Making it "fun"', "Scope creep"],
        detailedDescription:
            "This is my biggest Minecraft project that involved a lot of designing and problem solving due to mcfunction's limited logic capabilities. I worked on this projects with a few of my high school friends. Funny enough, the game \"Catch Bobo \" was one of my friend's Minecraft minigame they made in middle school, and I wanted to make it a full-fledged game with custom textures and coded abilities. So, my friends and I gathered together to work on this project; I would do all of the coding and game design, while my friends would work on the map and help playtest the abilities. As the project progressed, I asked another friend who knows 3D modeling to help me learn Blockbench, which is a 3D modeling software for Minecraft and other low-poly games.",
        problemStatement: undefined,
        solution: undefined,
        features: [
            "10+ custom characters",
            "50+ unique abilities",
            "25+ Custom 3D models and textures",
            "Expansive map with unique landmarks",
            "Adjustable game settings",
        ],
        featureDescriptions: [
            "Each class has their own gimmick that makes them fun to play.",
            "Different abilities that go beyond survival vanilla Minecraft.",
            "Unique 3D models and textures to make the characters feel powerful.",
            "Can easily change the game timer, ability cooldowns, and objectives.",
            "640x640 block map with different biomes and buildings.",
        ],
        gallery: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        results: [
            "I now made a game in my favorite game 😎",
            "Connected with many old high school friends and still keep in touch",
        ],
        lessonsLearned:
            "This is one of my longest projects that took to finish, which is mainly due to how big the map is and wanting to add more characters and textures. I'm happy with the result of this project, but also wish I spent less time working on it by having a clear goal.",
        contributions: undefined,
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
