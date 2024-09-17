import { Github, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
  deployedUrl: string
  githubUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Fitness Journal",
    description: "A full-stack fitness journal solution with React, Next.js, and MongoDB",
    imageUrl: "/images/fitness-journal.png",
    deployedUrl: "https://fitness-journal-ten.vercel.app/",
    githubUrl: "https://github.com/coleb229/fitness-journal"
  },
  {
    id: 2,
    title: "DJ Streamer App",
    description: "A Next-based DJ portfolio application with a Node.js backend",
    imageUrl: "/images/jakerz-edm.png",
    deployedUrl: "https://jakerz-edm.vercel.app/",
    githubUrl: "https://github.com/coleb229/jakerz-edm"
  },
  {
    id: 3,
    title: "Tech Support Call Notes App",
    description: "A full-stack call note template solution with React, Next.js, and MongoDB",
    imageUrl: "/images/callnotes.png",
    deployedUrl: "https://improved-call-notes-app.vercel.app/",
    githubUrl: "https://github.com/coleb229/improved-call-notes"
  },
  {
    id: 4,
    title: "Application Support Knowledge Base",
    description: "A Next-based knowledge base application with a Node.js backend",
    imageUrl: "/images/support-kb.png",
    deployedUrl: "https://support-kb.vercel.app/",
    githubUrl: "https://github.com/coleb229/support-kb"
  },
]

export default function ProjectShowcase() {
  return (
    <div className="container snap-start h-screen mx-auto py-12">
      <div className="w-full h-full overflow-y-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <Button variant="outline" asChild className="transition-colors duration-300 hover:bg-primary hover:text-primary-foreground">
                  <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Site
                  </a>
                </Button>
                <Button variant="outline" asChild className="transition-colors duration-300 hover:bg-primary hover:text-primary-foreground">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}