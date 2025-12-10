import { GraduationCap, Award, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const certifications = [
    "Accenture Data Analytics (Forage)",
    "Tata Data Visualization (Forage)",
    "OpenAI Buildathon (NxtWave)",
    "AI Foundation Certificate",
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Data Analyst pursuing B.Tech in Computer Science 
              (AI/ML) at Vaageswari College of Engineering. My expertise lies in 
              extracting meaningful insights from complex datasets and translating 
              them into strategic business recommendations.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With hands-on experience in SQL, Python, Power BI, and machine learning 
              concepts, I've developed interactive dashboards and automated data 
              workflows that have improved decision-making processes. I ranked among 
              the top 600 out of 25,000+ participants in the OpenAI x NxtWave Buildathon 2025.
            </p>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </h3>
              <div className="space-y-3 pl-7">
                <div>
                  <div className="font-medium text-foreground">B.Tech - CSE (AIML)</div>
                  <div className="text-sm text-muted-foreground">
                    Vaageswari College of Engineering • 2023 - 2026
                  </div>
                </div>
                <div>
                  <div className="font-medium text-foreground">Diploma - ECE</div>
                  <div className="text-sm text-muted-foreground">
                    Vaageswari College of Engineering • 2020 - 2023
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Experience */}
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                  <Briefcase className="h-5 w-5" />
                  Experience
                </h3>
                <div>
                  <div className="font-medium text-foreground">AI Internship - Swechaa</div>
                  <div className="text-sm text-muted-foreground mb-2">May 2025 - Jun 2025 • Remote</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Hands-on experience with data analysis and ML concepts</li>
                    <li>• SQL, data extraction, cleaning & database management</li>
                    <li>• Python, AI tools & data visualization techniques</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                  <Award className="h-5 w-5" />
                  Certifications
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {cert}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievement Highlight */}
            <div className="bg-primary/10 border border-primary/20 p-6">
              <div className="text-sm font-medium text-primary mb-1">Achievement</div>
              <div className="text-foreground font-medium">
                Top 600 / 25,000+ Participants
              </div>
              <div className="text-sm text-muted-foreground">
                OpenAI x NxtWave Buildathon 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
