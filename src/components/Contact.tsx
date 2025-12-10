import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nikhilvemul6@gmail.com",
      href: "mailto:nikhilvemul6@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6302435508",
      href: "tel:+916302435508",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "vemula-nikhil",
      href: "https://linkedin.com/in/vemula-nikhil-7322b5362",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "nikhilvemulaaa",
      href: "https://github.com/nikhilvemulaaa",
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm actively seeking Data Analyst opportunities where I can contribute 
            to data-driven decision making. Let's discuss how I can add value to your team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 bg-background border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium text-foreground">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Karimnagar, Telangana, India</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="flex-1">
                    <a href="mailto:nikhilvemul6@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="flex-1">
                    <a
                      href="https://linkedin.com/in/vemula-nikhil-7322b5362"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
