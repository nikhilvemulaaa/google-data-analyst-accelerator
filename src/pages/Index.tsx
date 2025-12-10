import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Nikhil Vemula | Data Analyst Portfolio</title>
        <meta
          name="description"
          content="Data Analyst skilled in Python, SQL, Power BI, and machine learning. View my e-commerce user behavior analysis case study with measurable business impact."
        />
        <meta
          name="keywords"
          content="Data Analyst, Python, SQL, Power BI, Machine Learning, Data Visualization, Business Intelligence"
        />
        <meta property="og:title" content="Nikhil Vemula | Data Analyst Portfolio" />
        <meta
          property="og:description"
          content="Transforming complex data into actionable business insights. View my case studies and data analysis projects."
        />
        <link rel="canonical" href="https://nikhilvemula.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <ProjectShowcase />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
