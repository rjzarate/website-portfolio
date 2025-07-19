import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/v0/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import React from "react";

import { links, images } from "@/lib/constants";

import "@/styles/portfolio.css";

const Welcome = () => {
    return (
        <div className="container">
            <div className="welcome-wrapper">
                <div className="welcome-main-text">
                    <div className="space-y-2">
                        <h1>
                            Hello! I'm <span className="text-primary">Froy</span>
                        </h1>
                        <p>I'm an aspiring software engineer with a passion for building projects!</p>
                    </div>
                    <div className="welcome-buttons">
                        <Link href="/projects">
                            <Button className="view-projects-button">
                                View My Work
                                <ArrowRight className="arrow-icon" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="contact-me-button">
                                Contact Me
                            </Button>
                        </Link>
                    </div>
                    <div className="links">
                        <Link href={links.github} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon">
                                <Github className="image-icon" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </Link>
                        <Link href={links.linkedin} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon">
                                <Linkedin className="image-icon" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                        </Link>
                        <Link href={links.email}>
                            <Button variant="ghost" size="icon">
                                <Mail className="image-icon" />
                                <span className="sr-only">Email</span>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="welcome-profile-image">
                    <Image
                        src={images.profile}
                        alt="Profile"
                        width={600}
                        height={600}
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default Welcome;
