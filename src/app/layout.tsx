import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Toaster } from "../components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "John Doe | Portfolio",
    description: "Personal portfolio website of John Doe, a full-stack developer",
    generator: "v0.dev",
};

import { BrowserRouter as Router } from "react-router-dom";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <Router>
                        <div className="flex flex-col min-h-screen">
                            <Navbar />
                            {children}
                            <Footer />
                        </div>
                        <Toaster />
                    </Router>
                </ThemeProvider>
            </body>
        </html>
    );
}
