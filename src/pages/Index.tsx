import { Link } from "react-router-dom";
import { GraduationCap, FlaskConical, Printer, ArrowRight, Shield, Award, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  const services = [
    {
      icon: <GraduationCap className="w-7 h-7 text-primary-foreground" />,
      title: "3D Printing Training",
      description: "Comprehensive FDM-focused workshops for academia and industry professionals.",
      features: [
        "College & university workshops",
        "Faculty development programs",
        "Student skill enhancement",
        "Hands-on practical sessions"
      ],
      link: "/services#training"
    },
    {
      icon: <FlaskConical className="w-7 h-7 text-primary-foreground" />,
      title: "R&D Consultancy",
      description: "Expert guidance for additive manufacturing research and development projects.",
      features: [
        "Academic research support",
        "Industrial R&D consultancy",
        "Materials characterization",
        "Process optimization"
      ],
      link: "/services#research"
    },
    {
      icon: <Printer className="w-7 h-7 text-primary-foreground" />,
      title: "3D Printing Services",
      description: "Professional FDM prototyping and functional part manufacturing.",
      features: [
        "Rapid prototyping",
        "Functional parts production",
        "Small batch manufacturing",
        "Design assistance"
      ],
      link: "/services#printing"
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Students Trained" },
    { icon: <Award className="w-6 h-6" />, value: "50+", label: "Workshops Conducted" },
    { icon: <Shield className="w-6 h-6" />, value: "MSME", label: "Registered" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              Advancing Innovation Through Additive Manufacturing
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              LOGOS Research Technologies provides expert 3D printing training, 
              research consultancy, and professional prototyping services for 
              academia and industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-card border-b border-border">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3 text-foreground">
                <div className="text-primary">{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="page-section bg-background">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions spanning education, research, and manufacturing 
              in the field of additive manufacturing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="page-section bg-muted">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Choose LOGOS Research Technologies?
              </h2>
              <p className="text-muted-foreground mb-8">
                We bridge the gap between academic learning and industrial application 
                in additive manufacturing. Our team brings together expertise in 
                education, research, and practical manufacturing experience.
              </p>
              <ul className="space-y-4">
                {[
                  "MSME registered for credibility and trust",
                  "Hands-on, practical approach to learning",
                  "Industry-relevant curriculum and training",
                  "Expert faculty with research background",
                  "End-to-end support from design to production"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-8 card-elevated border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">MSME Registered</h3>
              <p className="text-muted-foreground mb-6">
                LOGOS Research Technologies is a registered Micro, Small and Medium 
                Enterprise (MSME), ensuring reliability, accountability, and adherence 
                to government standards for quality service delivery.
              </p>
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  Our MSME registration demonstrates our commitment to building a 
                  sustainable business that contributes to India's manufacturing 
                  ecosystem and skill development initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section bg-background">
        <div className="section-container">
          <div className="bg-card rounded-2xl p-8 lg:p-12 card-elevated border border-border text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Start Your 3D Printing Journey?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're looking for training, research support, or prototyping 
              services, we're here to help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/brochures">Download Brochures</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
