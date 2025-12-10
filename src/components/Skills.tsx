import { Card, CardContent } from "@/components/ui/card";
import { 
  Database, 
  Code, 
  BarChart3, 
  Table, 
  Brain, 
  GitBranch,
  Presentation,
  Users
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    {
      category: "Languages & Querying",
      icon: Code,
      skills: ["Python", "SQL", "DAX"],
    },
    {
      category: "Data Analysis",
      icon: Database,
      skills: ["Pandas", "NumPy", "Power Query", "ETL"],
    },
    {
      category: "Visualization",
      icon: BarChart3,
      skills: ["Power BI", "Matplotlib", "Seaborn", "Looker Studio"],
    },
    {
      category: "Tools & Platforms",
      icon: Table,
      skills: ["Excel", "MySQL", "Jupyter Notebook", "VS Code"],
    },
    {
      category: "AI & ML",
      icon: Brain,
      skills: ["Machine Learning", "GenAI", "ChatGPT", "Copilot"],
    },
    {
      category: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "GitHub Copilot"],
    },
  ];

  const softSkills = [
    { name: "Stakeholder Management", icon: Users },
    { name: "Data Storytelling", icon: Presentation },
    { name: "Problem Solving", icon: Brain },
    { name: "Communication", icon: Users },
  ];

  return (
    <section id="skills" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for turning data into strategic business insights
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {technicalSkills.map((category, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-muted/30 text-muted-foreground text-sm border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="bg-background border border-border p-8">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-sm font-medium text-foreground">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
