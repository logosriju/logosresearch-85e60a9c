import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    // In production, replace this with actual form submission logic
    // Options: FormSpree, EmailJS, or custom PHP endpoint
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "info@logosresearch.tech",
      link: "mailto:info@logosresearch.tech"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+91 XXXXX XXXXX",
      link: "tel:+91XXXXXXXXXX"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      content: "India",
      link: null
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="section-container text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Have questions or want to discuss a project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="page-section bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Whether you're interested in our training programs, need R&D consultancy, 
                or want to discuss a 3D printing project, we're here to help.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary">{info.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Business Hours</h4>
                <p className="text-sm text-muted-foreground">
                  Monday - Saturday: 9:00 AM - 6:00 PM IST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-6 lg:p-8 card-elevated border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> We typically respond within 24-48 business hours. 
                      For urgent inquiries, please call us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
