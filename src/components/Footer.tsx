import { Link } from "react-router-dom";
import { Printer, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <Printer className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">LOGOS</span>
                <span className="text-xs text-primary-foreground/70 leading-tight">Research Technologies</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm max-w-md mb-4">
              LOGOS Research Technologies provides research assistance, additive manufacturing 
              training, professional prototyping services, and custom software and web 
              development solutions for academia and industry across India.
            </p>
            <div className="inline-block px-3 py-1 bg-primary-foreground/10 rounded-full text-xs">
              MSME Registered Enterprise
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/brochures" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Brochures
                </Link>
              </li>
              <li>
                <Link to="/verify" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Verify Certificate
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@logosresearch.in" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@logosresearch.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+918144120859" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +91 81441 20859
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Agasteeswaram, Kanyakumari,<br />Tamil Nadu, India - 629701</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} LOGOS Research Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
