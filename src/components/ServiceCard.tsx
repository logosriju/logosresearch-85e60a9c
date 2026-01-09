import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
}

const ServiceCard = ({ icon, title, description, features, link }: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 card-elevated border border-border">
      <div className="w-14 h-14 rounded-lg hero-gradient flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to={link}
        className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
      >
        Learn More <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;
