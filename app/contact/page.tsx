"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/v0/ui/button";
import { Input } from "@/components/v0/ui/input";
import { Textarea } from "@/components/v0/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/v0/ui/card";
import { Label } from "@/components/v0/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { email, locations, phone } from "@/lib/constants";

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
                        <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-1">
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
                                                <p className="text-sm text-muted-foreground">{email}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Phone className="h-5 w-5 mt-0.5 text-primary" />
                                            <div>
                                                <h3 className="font-medium">Phone</h3>
                                                <p className="text-sm text-muted-foreground">{phone}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                                            <div>
                                                <h3 className="font-medium">Locations</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {locations.map((loc) => (
                                                        <span key={loc}>
                                                            {loc}
                                                            <br />
                                                        </span>
                                                    ))}
                                                </p>
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
                                                    I'm <span className="font-bold">currently available</span> for both
                                                    part-time and full-time opportunities related to software
                                                    engineering!
                                                    <br />
                                                    Feel free to reach out if you have a project in mind or need
                                                    assistance with your software! 😊
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="font-medium">Response Time</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    <span className="font-bold text-foreground">Email:</span> I
                                                    typically respond within 1-2 business days.
                                                    <br />
                                                    <span className="font-bold text-foreground">Phone:</span> Usually, I
                                                    am available for calls during these hours —
                                                    <br />
                                                    <span className="pl-4">
                                                        <span className="text-foreground">
                                                            Monday to Friday: 11 AM - 1 PM, 3 PM - 5 PM
                                                        </span>{" "}
                                                        <i>(PST)</i>
                                                    </span>
                                                    <br />
                                                    If I don't answer, please leave a message, and I'll get back to you
                                                    as soon as possible.
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
