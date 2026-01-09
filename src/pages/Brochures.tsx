import { FileText, Download, GraduationCap, FlaskConical, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const Brochures = () => {
  const brochures = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary-foreground" />,
      title: "Training & Workshops",
      description: "Comprehensive information about our 3D printing training programs, workshop schedules, curriculum details, and certification process.",
      filename: "LOGOS_Training_Brochure.pdf",
      topics: [
        "Workshop modules and duration",
        "Target audience and prerequisites",
        "Learning outcomes",
        "Certification details"
      ]
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-primary-foreground" />,
      title: "R&D Consultancy",
      description: "Details about our research and development consultancy services, areas of expertise, and collaboration opportunities.",
      filename: "LOGOS_RnD_Brochure.pdf",
      topics: [
        "Research focus areas",
        "Academic collaboration models",
        "Industry partnership options",
        "Case studies"
      ]
    },
    {
      icon: <Printer className="w-8 h-8 text-primary-foreground" />,
      title: "3D Printing Services",
      description: "Information about our professional 3D printing capabilities, material options, quality standards, and pricing structure.",
      filename: "LOGOS_Printing_Services_Brochure.pdf",
      topics: [
        "Available materials",
        "Print specifications",
        "Quality assurance",
        "Order process"
      ]
    }
  ];

  const handleDownload = (filename: string) => {
    // In production, this would link to actual PDF files
    // For now, we show an alert
    alert(`Download: ${filename}\n\nNote: Please upload actual PDF files to your server and update the download links.`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="section-container text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Brochures & Downloads</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Download our detailed brochures to learn more about our services
          </p>
        </div>
      </section>

      {/* Brochures Grid */}
      <section className="page-section bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brochures.map((brochure, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 card-elevated border border-border flex flex-col"
              >
                <div className="w-16 h-16 rounded-lg hero-gradient flex items-center justify-center mb-6">
                  {brochure.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{brochure.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{brochure.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {brochure.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  onClick={() => handleDownload(brochure.filename)}
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="page-section bg-muted">
        <div className="section-container">
          <div className="bg-card rounded-xl p-8 card-elevated border border-border max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Need Custom Information?</h3>
                <p className="text-muted-foreground mb-4">
                  If you need specific information not covered in our standard brochures, 
                  or require a customized proposal for your institution or organization, 
                  please don't hesitate to contact us.
                </p>
                <Button asChild variant="outline">
                  <a href="/contact">Contact Us for Custom Proposals</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brochures;
