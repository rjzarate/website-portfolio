"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/src/hooks/use-toast";

export default function ContactPage() {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
        });

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        setIsSubmitting(false);
    };

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Me</h1>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Have a question or want to work together? Feel free to reach out!
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Send a Message</CardTitle>
                                    <CardDescription>
                                        Fill out the form below and I'll get back to you as soon as possible.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                placeholder="Subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="Your message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={5}
                                                required
                                            />
                                        </div>
                                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                            <div className="flex flex-col gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Contact Information</CardTitle>
                                        <CardDescription>Here's how you can reach me directly.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <Mail className="h-5 w-5 mt-0.5 text-primary" />
                                            <div>
                                                <h3 className="font-medium">Email</h3>
                                                <p className="text-sm text-muted-foreground">hello@example.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Phone className="h-5 w-5 mt-0.5 text-primary" />
                                            <div>
                                                <h3 className="font-medium">Phone</h3>
                                                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                                            <div>
                                                <h3 className="font-medium">Location</h3>
                                                <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Availability</CardTitle>
                                        <CardDescription>My current work status and availability.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="font-medium">Current Status</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    I'm currently available for freelance work and open to full-time
                                                    opportunities.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="font-medium">Response Time</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    I typically respond to all inquiries within 24-48 hours.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
