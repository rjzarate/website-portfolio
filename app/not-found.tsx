import { Button } from "@/components/v0/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className="main-page">
            <main className="flex-1">
                <div className="mx-auto grid max-w-6xl gap-6 py-4 lg:grid-cols-1" />
                <section className="page-section xl:py-48">
                    <div className="container">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">404 Not Found</h1>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Oops! This page doesn't exist!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-1">
                        <div className="flex justify-center">
                            <Link href="/">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="inline-flex h-12 px-8 text-lg items-center justify-center bg-transparent">
                                    Back to Homepage
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-6xl gap-6 py-56 lg:grid-cols-1" />
                </section>
            </main>
        </div>
    );
};

export default NotFound;
