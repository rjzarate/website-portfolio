"use client"

import { useParams, Link, Navigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from "lucide-react"
import SideNavigation from "@/components/side-navigation"
import { projects } from "@/data/projects"

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Solution" },
    { id: "features", label: "Features" },
    { id: "gallery", label: "Gallery" },
    { id: "results", label: "Results" },
  ]

  return (
    <SideNavigation sections={sections}>
      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          {/* Overview Section */}
          <section id="overview" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex items-center gap-4 mb-8">
                <Link to="/projects">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Projects
                  </Button>
                </Link>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Badge variant="outline" className="w-fit">
                      {project.category}
                    </Badge>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{project.title}</h1>
                    <p className="text-xl text-muted-foreground">{project.shortDescription}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{project.detailedDescription}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="gap-2 bg-transparent">
                          <Github className="h-4 w-4" />
                          View Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative aspect-video overflow-hidden rounded-lg border">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Project Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Duration</p>
                          <p className="text-sm text-muted-foreground">{project.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Team Size</p>
                          <p className="text-sm text-muted-foreground">{project.teamSize}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Target className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Key Challenges</p>
                          <ul className="text-sm text-muted-foreground mt-1">
                            {project.challenges.map((challenge, index) => (
                              <li key={index}>• {challenge}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Problem Section */}
          <section id="problem" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Problem</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.problemStatement}</p>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section id="solution" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Key Features</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {project.features.map((feature, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-2">{feature}</h3>
                        <p className="text-sm text-muted-foreground">
                          Feature description would go here explaining the functionality and benefits.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Project Gallery</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-video overflow-hidden rounded-lg border">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section id="results" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Results & Impact</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                    <ul className="space-y-2">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Lessons Learned</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.lessonsLearned}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SideNavigation>
  )
}
