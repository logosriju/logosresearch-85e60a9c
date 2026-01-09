import { GraduationCap, FlaskConical, Printer, CheckCircle, Users, BookOpen, Microscope, Cog } from "lucide-react";
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
            Comprehensive 3D printing solutions for education, research, and manufacturing
          </p>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="page-section bg-background scroll-mt-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">3D Printing Training & Workshops</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Our comprehensive training programs are designed to bridge the knowledge gap 
                in additive manufacturing. We offer hands-on, practical sessions that prepare 
                participants for real-world applications.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Users className="w-5 h-5" />, title: "College Workshops", desc: "Multi-day workshops for engineering students covering FDM fundamentals to advanced concepts" },
                  { icon: <BookOpen className="w-5 h-5" />, title: "Faculty Development Programs", desc: "Specialized training for educators to integrate 3D printing into their curriculum" },
                  { icon: <GraduationCap className="w-5 h-5" />, title: "Student Skill Programs", desc: "Certificate courses focused on industry-relevant skills and practical applications" },
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
              <h3 className="text-xl font-semibold text-foreground mb-4">Training Highlights</h3>
              <ul className="space-y-3">
                {[
                  "FDM technology fundamentals",
                  "CAD/CAM software training",
                  "Material selection and properties",
                  "Printer operation and maintenance",
                  "Design for additive manufacturing",
                  "Quality control and troubleshooting",
                  "Industry case studies",
                  "Certificate of completion"
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

      {/* R&D Section */}
      <section id="research" className="page-section bg-muted scroll-mt-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-card rounded-xl p-6 lg:p-8 card-elevated border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Research Areas</h3>
              <ul className="space-y-3">
                {[
                  "FDM process parameter optimization",
                  "Novel material development",
                  "Mechanical property characterization",
                  "Surface finish improvement techniques",
                  "Multi-material printing",
                  "Bio-compatible materials research",
                  "Sustainability in additive manufacturing",
                  "Industry 4.0 integration"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <Microscope className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center">
                  <FlaskConical className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Research & Development Consultancy</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                We provide expert R&D consultancy services for academic institutions and 
                industries looking to leverage additive manufacturing in their projects. 
                Our team brings together research expertise and practical experience.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <FlaskConical className="w-5 h-5" />, title: "Academic Research Support", desc: "Guidance for thesis projects, research papers, and academic collaborations" },
                  { icon: <Cog className="w-5 h-5" />, title: "Industrial R&D", desc: "Process optimization, material selection, and prototype development for industry partners" },
                  { icon: <Microscope className="w-5 h-5" />, title: "Materials Characterization", desc: "Testing and analysis of 3D printed parts for mechanical and thermal properties" },
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
                <Link to="/brochures">Download R&D Brochure</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Printing Services Section */}
      <section id="printing" className="page-section bg-background scroll-mt-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center">
                  <Printer className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">3D Printing Services</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Professional FDM 3D printing services for prototyping and functional part 
                production. We offer high-quality prints with quick turnaround times and 
                competitive pricing.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Cog className="w-5 h-5" />, title: "Rapid Prototyping", desc: "Quick iteration of design concepts with high-quality FDM prints" },
                  { icon: <Printer className="w-5 h-5" />, title: "Functional Parts", desc: "Production of end-use parts with appropriate material selection" },
                  { icon: <Users className="w-5 h-5" />, title: "Small Batch Production", desc: "Cost-effective manufacturing for limited quantity requirements" },
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
              <h3 className="text-xl font-semibold text-foreground mb-4">Materials Available</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "PLA", desc: "General purpose" },
                  { name: "ABS", desc: "High strength" },
                  { name: "PETG", desc: "Chemical resistant" },
                  { name: "TPU", desc: "Flexible parts" },
                  { name: "Nylon", desc: "Engineering grade" },
                  { name: "Carbon Fiber", desc: "High performance" },
                ].map((material, index) => (
                  <div key={index} className="bg-card rounded-lg p-3 border border-border">
                    <h4 className="font-semibold text-foreground text-sm">{material.name}</h4>
                    <p className="text-xs text-muted-foreground">{material.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section bg-muted">
        <div className="section-container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Have Questions About Our Services?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific requirements. We're here to help you 
            find the right solution for your needs.
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
