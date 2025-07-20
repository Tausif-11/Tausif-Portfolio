
import { Github, Instagram, X, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Tausif-11',
      label: 'GitHub'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/de.code.tausif',
      label: 'Instagram'
    },
    {
      icon: X,
      href: 'https://x.com/Tausif1147',
      label: 'X'
    },
    {
      icon: Mail,
      href: 'mailto:tausifmohammad54@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="py-12 border-t border-border bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span className="text-muted-foreground">
                  © {currentYear} Mohammad Tausif. Made with
                </span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span className="text-muted-foreground">and lots of ☕</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Building the future, one line of code at a time.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:bg-primary/10 group"
                    aria-label={link.label}
                  >
                    <IconComponent className="h-5 w-5 group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Additional Footer Info */}
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Self-taught • Full-Stack Developer • AI Enthusiast • Open Source Contributor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
