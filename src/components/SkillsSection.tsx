import { useEffect, useRef } from 'react';
import { 
  Code, 
  Brain, 
  Globe, 
  Cog, 
  Search, 
  GitBranch,
  CheckCircle 
} from 'lucide-react';

const SkillsSection = () => {
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

  const skills = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Frontend & Backend',
      details: 'React, Node.js, TypeScript, Next.js, Express.js'
    },
    {
      icon: Brain,
      title: 'AI Tools & Integration',
      description: 'Prompt engineering & implementation',
      details: 'OpenAI API, Langchain, ChatGPT, Claude, Gemini'
    },
    {
      icon: Globe,
      title: 'API Integrations',
      description: 'REST, GraphQL & Webhooks',
      details: 'Third-party APIs, Custom endpoints, Real-time data'
    },
    {
      icon: Cog,
      title: 'Automation',
      description: 'Node.js, Python & AI tools',
      details: 'Workflow automation, Data processing, Bots'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Web performance & visibility',
      details: 'Technical SEO, Page speed, Core Web Vitals'
    },
    {
      icon: GitBranch,
      title: 'Development & Deployment',
      description: 'Git, CI/CD, Cloud platforms',
      details: 'GitHub, Vercel, Netlify, Docker, AWS'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 section-fade-in"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-16">
            My <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="group p-6 rounded-xl bg-card border border-border card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <h3 className="font-semibold text-lg">{skill.title}</h3>
                      </div>
                      <p className="text-primary font-medium mb-2">{skill.description}</p>
                      <p className="text-sm text-muted-foreground">{skill.details}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tech Stack Logos */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-8 text-muted-foreground">
              Technologies I work with
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[
                'React', 'TypeScript', 'Node.js', 'Python', 'Next.js', 
                'TailwindCSS', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;