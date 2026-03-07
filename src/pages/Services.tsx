import { GraduationCap, FlaskConical, Printer, CheckCircle, Users, BookOpen, Microscope, Cog, Code, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="section-container text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Comprehensive research assistance, professional training, and technology solutions for academia and industry
          </p>
        </div>
      </section>

      {/* 3D Printing & Training Section (FIRST) */}
      <section id="printing" className="page-section bg-background scroll-mt-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center">
                  <Printer className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">3D Printing & Training</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Industry-focused additive manufacturing training and professional prototyping 
                services for academic institutions, research labs, and product development teams.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <GraduationCap className="w-5 h-5" />, title: "Additive Manufacturing Training", desc: "Design to Print — comprehensive FDM-focused workshops for colleges, universities, and faculty" },
                  { icon: <Cog className="w-5 h-5" />, title: "Rapid Prototyping & Functional Parts", desc: "Research-grade custom specimen fabrication and functional part manufacturing" },
                  { icon: <Microscope className="w-5 h-5" />, title: "Pilot-Scale Experimental Setups", desc: "Embedded electronics and custom instrumentation for research applications" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-primary mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link to="/brochures">Download Training Brochure</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-xl p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Training & Services</h3>
              <ul className="space-y-3">
                {[
                  "College & University Workshops",
                  "Faculty Development Programs",
                  "Student Skill Certification Programs",
                  "Rapid Prototyping Services",
                  "Functional Part Manufacturing",
                  "Design for Additive Manufacturing Support",
                  "Material Selection & Process Optimization",
                  "Industrial Application Training"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Assistance Section (SECOND) */}
      <section id="research" className="page-section bg-muted scroll-mt-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-card rounded-xl p-6 lg:p-8 card-elevated border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Research Support Areas</h3>
              <ul className="space-y-3">
                {[
                  "Thesis & Dissertation Assistance",
                  "UG / PG / PhD Project Guidance",
                  "Research Article Preparation & Formatting",
                  "Journal Selection & Submission Support",
                  "Data Analysis (MATLAB, Python, SPSS, Origin, Excel)",
                  "Experimental Planning & Result Interpretation",
                  "Plagiarism Checking & Reduction Guidance",
                  "Research Ethics & Publication Best Practices"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <Microscope className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground mb-2">Domains Supported:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Engineering & Technology", "Materials Science", "Additive Manufacturing", "Electronics & Devices", "Applied Sciences"].map((d) => (
                    <span key={d} className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">{d}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center">
                  <FlaskConical className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Research Assistance & Academic Support</h2>
              </div>
              <p className="text-muted-foreground mb-2">
                End-to-end research support with strong ethical and academic standards.
              </p>
              <p className="text-muted-foreground mb-6">
                We assist scholars, researchers, and students at every stage of the research 
                lifecycle — without compromising originality or ethics.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { icon: <FlaskConical className="w-5 h-5" />, title: "Thesis & Dissertation Assistance", desc: "Comprehensive support for UG, PG, and PhD research projects from topic selection to final submission" },
                  { icon: <BookOpen className="w-5 h-5" />, title: "Research Article & Publication Support", desc: "Manuscript preparation, journal formatting, selection and submission guidance" },
                  { icon: <Microscope className="w-5 h-5" />, title: "Data Analysis & Interpretation", desc: "Expert analysis using MATLAB, Python, SPSS, Origin, Excel and statistical interpretation" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-primary mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-primary text-primary-foreground rounded-lg p-4 mb-6">
                <p className="text-sm font-medium">👉 We guide, support, and review — you remain the author.</p>
              </div>
              <Button asChild>
                <Link to="/contact">Get Research Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development & Custom Software Section (THIRD) */}
      <section id="software" className="page-section bg-background scroll-mt-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Web Development & Custom Software</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                We build custom software for academic and research equipment, including lab management, 
                data acquisition, and monitoring solutions.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Globe className="w-5 h-5" />, title: "Academic & Research Software", desc: "Custom applications for research data management and academic workflows" },
                  { icon: <Database className="w-5 h-5" />, title: "Laboratory Software Solutions", desc: "Lab management, equipment monitoring, and data acquisition systems" },
                  { icon: <Code className="w-5 h-5" />, title: "Scientific Software Development", desc: "Computational tools, simulation software, and research automation" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-primary mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-xl p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Services Include</h3>
              <ul className="space-y-3">
                {[
                  "Academic & Research Software",
                  "Laboratory Software Solutions",
                  "Scientific Software Development",
                  "Research Systems & Applications",
                  "Static & Dynamic Websites",
                  "E-Commerce & Institutional Portals",
                  "Research Data Management Systems",
                  "Custom Business Software & Automation"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section bg-muted">
        <div className="section-container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Need Research, Training, or Technology Solutions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            From academic research support to industrial prototyping and digital transformation, 
            we help you move from idea to implementation with confidence.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
