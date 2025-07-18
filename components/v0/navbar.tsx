"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/v0/ui/button";
import { ModeToggle } from "@/components/v0/mode-toggle";
import { Menu, X } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { name } from "@/lib/constants";

export default function Navbar() {
    const pathname = usePathname();
    const isMobile = useMobile();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Close mobile menu when screen size changes to desktop
    useEffect(() => {
        if (!isMobile) {
            setIsMenuOpen(false);
        }
    }, [isMobile]);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600" />
            <div className="container mx-auto flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-lg font-bold ml-2">
                    <span>{name}</span>
                </Link>

                {/* Mobile menu button */}
                {isMobile && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden">
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                )}

                {/* Mobile navigation */}
                {isMobile && isMenuOpen && (
                    <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 bg-background md:hidden">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`flex items-center py-2 text-lg font-medium transition-colors hover:text-primary ${
                                        pathname === item.path ? "text-primary" : "text-muted-foreground"
                                    }`}>
                                    {item.name}
                                </Link>
                            ))}
                            <div className="mt-4">
                                <ModeToggle />
                            </div>
                        </div>
                    </div>
                )}

                {/* Desktop navigation */}
                {!isMobile && (
                    <nav className="flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-sm font-medium transition-colors hover:text-primary ${
                                    pathname === item.path ? "text-primary" : "text-muted-foreground"
                                }`}>
                                {item.name}
                            </Link>
                        ))}
                        <ModeToggle />
                    </nav>
                )}
            </div>
        </header>
    );
}
