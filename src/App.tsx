import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import Home from "@/pages/Home"
import Projects from "@/pages/Projects"
import ProjectDetail from "@/pages/ProjectDetail"
import About from "@/pages/About"
import Contact from "@/pages/Contact"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  )
}

export default App
