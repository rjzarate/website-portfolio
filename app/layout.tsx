import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/v0/theme-provider";
import Navbar from "@/components/v0/navbar";
import Footer from "@/components/v0/footer";
import { Toaster } from "@/components/v0/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "John Doe | Portfolio",
    description: "Personal portfolio website of John Doe, a full-stack developer",
    generator: "v0.dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <div className="flex flex-col min-h-screen items-center justify-center">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
