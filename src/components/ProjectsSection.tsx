import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Portfolio Websites',
      description: 'I can create custom portfolio websites for working professionals.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&h=360&fit=crop',
      technologies: ['Html, CSS, JavaScript'],
      liveUrl: 'https://retrohunter.netlify.app',
      githubUrl: 'https://github.com/Tausif-11',
    },
    {
      title: 'DataHaze',
      description: 'A beautiful, modern Wikipedia-like knowledge platform built with React, TypeScript, and Tailwind CSS. DataHaze provides a comprehensive, searchable knowledge base with a stunning dark glassmorphism design.',
      image: '',
      technologies: ['React.JS, TypeScript, Tailwind CSS, Html, JavaScript'],
      liveUrl: '',
      githubUrl: 'https://github.com/Tausif-11/datahaze-web-forge',
    },
    {
      title: 'Typora',
      description: 'Real-time collaborative code editor built with Next.js, TypeScript, and Monaco Editor. Designed for seamless multi-user editing, live sync, and secure authentication — fully responsive and production-ready (ONLY FRONTEND).',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=640&h=360&fit=crop',
      technologies: ['Next.js 14, TypeScript, and Monaco Editor  '],
      liveUrl: '#',
      githubUrl: 'https://github.com/Tausif-11/Typora',
    },
   
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 section-fade-in"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-16">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group rounded-xl overflow-hidden bg-card border border-border card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="btn-primary flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Link */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/Tausif-11"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;