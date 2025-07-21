import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/v0/ui/button";
import { ArrowLeft, Calendar, ExternalLink, Gamepad2, Github, Target, Users } from "lucide-react";
import { Badge } from "@/components/v0/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/v0/ui/card";
import React from "react";
import { useProjectContext } from "@/hooks/use-project-context";

const ItchIo = () => {
    const project = useProjectContext();

    if (project.itchIo === undefined) {
        throw Error("itchIo is undefined");
    }

    return (
        <section id="itchIo" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <Gamepad2 className="h-6 w-6 text-primary" />
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Play the Game</h2>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
                        <div className="space-y-6">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-background">
                                <iframe
                                    src={project.itchIo.embedUrl}
                                    title={project.itchIo.title}
                                    width="100%"
                                    height="100%"
                                    className="absolute inset-0 w-full h-full"
                                    frameBorder="0"
                                />
                            </div>
                            <div className="flex gap-4">
                                <Link href={project.itchIo.gameUrl} target="_blank" rel="noopener noreferrer">
                                    <Button className="gap-2">
                                        <Gamepad2 className="h-4 w-4" />
                                        Play on itch.io
                                    </Button>
                                </Link>
                                <Link href={project.itchIo.gameUrl} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="gap-2 bg-transparent">
                                        <ExternalLink className="h-4 w-4" />
                                        View Game Page
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Gamepad2 className="h-5 w-5" />
                                    {project.itchIo.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">{project.itchIo.description}</p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="font-medium">Platform:</span>
                                        <Badge variant="secondary">itch.io</Badge>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="font-medium">Type:</span>
                                        <Badge variant="outline">Browser Game</Badge>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="font-medium">Status:</span>
                                        <Badge variant="default">Playable</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mt-8 p-6 bg-background rounded-lg border">
                        <h3 className="text-lg font-semibold mb-3">About itch.io Integration</h3>
                        <p className="text-sm text-muted-foreground">
                            This interactive game is hosted on itch.io, a popular platform for indie games and creative
                            projects. You can play directly in your browser or visit the full game page for additional
                            features, community discussions, and updates.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItchIo;
