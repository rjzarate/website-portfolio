import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/v0/theme-provider";
import Navbar from "@/components/v0/navbar";
import Footer from "@/components/v0/footer";
import { Toaster } from "@/components/v0/ui/toaster";

import { name } from "@/lib/constants";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Froilan Jr — Portfolio",
    description: `Hello! This me! I'm Froilan Danganan Zarate Jr, and this is my portfolio website. I am an aspiring software engineer with a passion for building projects! Feel free to check my website to view the projects worked on, see my work experience and skills, or to know a bit more about me. Also, don't hesitate to contact me if you have a question or need assistance with your software 😊.
        
        GitHub: https://github.com/rjzarate
        LinkedIn: https://www.linkedin.com/in/froilan-zarate-jr-computer-scientist/
        `,
    openGraph: {
        images: "/img/profile2.png",
    },
};

export const _metadata = {
    title: metadata.title,
    description: metadata.description,
    openGraph: metadata.openGraph,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <div className="flex flex-col min-h-screen items-center justify-center">
                        <nav className="w-full sticky top-0 z-50">
                            <Navbar />
                        </nav>
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
