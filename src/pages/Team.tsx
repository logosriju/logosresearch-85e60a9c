import drDanielImg from "@/assets/dr-daniel.jfif";
import drRijuImg from "@/assets/dr-riju.png";
import drHannahImg from "@/assets/dr-hannah.png";

const teamMembers = [
  {
    name: "Dr. Daniel Devaraj",
    qualification: "M.E., Ph.D.",
    role: "Head – Technical Training",
    image: drDanielImg,
    description:
      "Dr. Daniel Devaraj has over 5 years of experience in research and academic teaching. He previously served as an Assistant Professor and specializes in Material Science and engineering research. He leads the technical training and research skill development programs at Logos Research Technology.",
  },
  {
    name: "Dr. R. Prayer Riju",
    qualification: "M.E., Ph.D.",
    role: "Head – Research & Development",
    image: drRijuImg,
    description:
      "Dr. R. Prayer Riju is an expert in Additive Manufacturing and advanced manufacturing technologies. He has more than 5 years of experience in additive manufacturing research, focusing on 3D printing, LPBF processes, and material performance optimization. He leads the research and development division at Logos Research Technology.",
  },
  {
    name: "Dr. Hannah Blessy",
    qualification: "M.E., Ph.D.",
    role: "Head – Software Development",
    image: drHannahImg,
    description:
      "Dr. Hannah Blessy specializes in software development, analytical modelling, and numerical simulations. Her expertise includes developing computational tools and transforming engineering concepts into software solutions. She leads the software development and modelling initiatives at Logos Research Technology.",
  },
];

const staggerClasses = ["md:mt-0", "md:mt-10", "md:mt-3"];

const Team = () => {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="section-container text-center text-primary-foreground">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 animate-fade-in">
            Our Leadership Team
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Meet the experts driving innovation in research, engineering, and technology at LOGOS Research Technologies.
          </p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="page-section bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`bg-card rounded-xl overflow-hidden card-elevated border border-border ${staggerClasses[index]}`}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{member.qualification}</p>
                  <span className="inline-block hero-gradient text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {member.role}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
