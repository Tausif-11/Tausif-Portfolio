
import { useEffect, useRef } from 'react';

const AboutSection = () => {
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 section-fade-in"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 glow-secondary">
                  <img
                    src="211469777.jpg"
                    alt="Mohammad Tausif - Full-Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
              <div className="text-lg leading-relaxed text-muted-foreground">
                <p className="mb-6">
                  I'm a <span className="text-primary font-semibold">self-taught developer</span> passionate about building with{' '}
                  <span className="text-accent font-semibold">AI</span>,{' '}
                  <span className="text-accent font-semibold">automation</span>, and{' '}
                  <span className="text-accent font-semibold">full-stack development</span>. I believe in learning in public and proving my skills through real projects rather than just certificates.
                </p>

                <p className="mb-6">
                  I specialize in creating <span className="text-primary font-semibold">scalable, high-performance applications</span> by combining intuitive design with cutting-edge tech. From API integration to backend automation, my goal is always to simplify, streamline, and scale.
                </p>

                <p>
                  I'm always experimenting with new tools, sharing what I learn, and improving every day. When I'm not coding, you'll find me exploring the latest AI developments or contributing to open-source projects.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-4 rounded-lg bg-card border border-border">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Learning</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card border border-border">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
