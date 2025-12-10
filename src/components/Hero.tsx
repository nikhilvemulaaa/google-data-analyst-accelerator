import { ArrowDown, BarChart3, Database, TrendingUp } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Open to Opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Data Analyst
            <br />
            <span className="text-muted">& Problem Solver</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Transforming complex data into actionable business insights. 
            Specialized in SQL, Python, Power BI, and building data-driven solutions 
            that drive measurable impact.
          </p>


          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground">2+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground">100K+</div>
              <div className="text-sm text-muted-foreground">Data Points Analyzed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground">15%</div>
              <div className="text-sm text-muted-foreground">Avg. Impact Delivered</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
