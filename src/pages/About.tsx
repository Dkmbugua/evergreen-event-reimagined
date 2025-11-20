import { Leaf, Award, Heart, Sparkles, Users, Target, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import corporateEvent from "@/assets/corporate-event.jpg";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We're committed to eco-friendly practices in every aspect of event planning, from sourcing to execution."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Award-winning service and attention to detail that consistently exceeds client expectations."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We genuinely love what we do, and our enthusiasm shines through in every event we create."
  },
  {
    icon: Sparkles,
    title: "Creativity",
    description: "Innovative designs and unique concepts that make your event truly one-of-a-kind."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work closely with clients as true partners, ensuring your vision comes to life perfectly."
  },
  {
    icon: Target,
    title: "Precision",
    description: "Meticulous planning and flawless execution down to the smallest detail."
  }
];

const team = [
  {
    name: "Sarah Mitchell",
    role: "Founder & Lead Planner",
    bio: "With over 15 years in event management, Sarah brings creativity and expertise to every project."
  },
  {
    name: "James Kariuki",
    role: "Operations Director",
    bio: "James ensures seamless coordination and logistics for events of any scale."
  },
  {
    name: "Grace Wanjiru",
    role: "Design Specialist",
    bio: "Grace's artistic vision transforms venues into breathtaking spaces."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${corporateEvent})` }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-primary-foreground/90">
              Creating unforgettable moments through sustainable, elegant event planning
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Evergreen Event Planner was founded on a simple yet powerful belief: exceptional events 
                can and should be created with environmental consciousness at their core. What began as 
                a small boutique planning service has grown into one of Nairobi's most trusted names in 
                premium event management.
              </p>
              <p>
                Our journey started when our founder, Sarah Mitchell, recognized a gap in the market for 
                event planning services that didn't compromise between luxury and sustainability. Since 
                then, we've planned hundreds of successful events, from intimate garden weddings to 
                large-scale corporate galas, always maintaining our commitment to excellence and 
                environmental responsibility.
              </p>
              <p>
                Today, Evergreen Event Planner is proud to be a leader in sustainable event management, 
                proving that eco-conscious choices enhance rather than limit creativity. We continue to 
                innovate, bringing fresh ideas and timeless elegance to every celebration we touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              The talented professionals behind your perfect event
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gold mb-2">500+</div>
              <p className="text-primary-foreground/90">Events Planned</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">15+</div>
              <p className="text-primary-foreground/90">Years Experience</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">98%</div>
              <p className="text-primary-foreground/90">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">50+</div>
              <p className="text-primary-foreground/90">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
