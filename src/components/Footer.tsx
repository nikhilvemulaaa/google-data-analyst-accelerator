import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-semibold text-foreground mb-1">Nikhil Vemula</div>
            <div className="text-sm text-muted-foreground">
              Data Analyst | Python • SQL • Power BI
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nikhilvemulaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/vemula-nikhil-7322b5362"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:nikhilvemul6@gmail.com"
              className="w-10 h-10 bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nikhil Vemula. Built with React & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
