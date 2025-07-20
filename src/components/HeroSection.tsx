
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Mail, Instagram, X } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 10 + 15}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
            Hey, I'm{' '}
            <span className="gradient-text">Mohammad Tausif</span>{' '}
            <span className="inline-block floating-animation">👋</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I build <span className="text-primary font-semibold">full-stack solutions</span> using{' '}
            <span className="text-accent font-semibold">AI</span>,{' '}
            <span className="text-accent font-semibold">APIs</span> &{' '}
            <span className="text-accent font-semibold">automation</span>.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="btn-primary px-8 py-6 text-lg font-semibold"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Tausif-11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary transition-colors hover:bg-primary/10"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:tausifmohammad54@gmail.com"
                className="p-3 rounded-full border border-border hover:border-primary transition-colors hover:bg-primary/10"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/de.code.tausif"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary transition-colors hover:bg-primary/10"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Tausif1147"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary transition-colors hover:bg-primary/10"
              >
                <X className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
