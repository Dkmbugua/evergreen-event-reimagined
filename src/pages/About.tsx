import { Leaf, Award, Heart, Sparkles, Users, Target, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import corporateEvent from "@/assets/corporate-event.jpg";

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
    name: "Alice Kimanga",
    role: "Founder & Lead Planner",
    bio: "With over 15 years in event management, Alice brings creativity and expertise to every project, turning dreams into unforgettable experiences.",
    image: "/about%20/alice.jpg"
  },
  {
    name: "David King",
    role: "Business Development Manager",
    bio: "David drives growth and builds lasting partnerships, ensuring Evergreen Event Planner continues to expand its reach and impact.",
    image: "/about%20/david.png"
  },
  {
    name: "Chris Ndungu",
    role: "Operations Director",
    bio: "Chris ensures seamless coordination and logistics for events of any scale, guaranteeing flawless execution every time.",
    image: "/about%20/chris.jpg"
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
          style={{ backgroundImage: `url('/images/IMG-20251120-WA0022.jpg')` }}
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
      {/* Sustainability Commitment */}
      <section className="py-16 bg-forest/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-forest mb-4">Our Sustainability Commitment</h2>
          <p className="text-lg text-muted-foreground mb-4">
            At Evergreen, we believe that luxury and sustainability go hand in hand. We prioritize eco-friendly materials, reusable decor, local sourcing, and waste reduction at every event. Our team is dedicated to minimizing our environmental footprint while delivering exceptional experiences.
          </p>
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
                Our journey started when our founder, Alice Kimanga, recognized a gap in the market for 
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
              <Card key={index} className="border-border text-center hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-48 h-48 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/20 shadow-lg bg-muted">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-primary/10 text-primary text-4xl font-bold">${member.name.charAt(0)}</div>`;
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
              {/* FAQ Section */}
              <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 max-w-4xl">
                  <h2 className="text-3xl font-bold text-primary mb-6 text-center">Frequently Asked Questions</h2>
                  <div className="space-y-6 text-lg text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Do you offer eco-friendly event options?</h3>
                      <p>Yes! Sustainability is at the heart of everything we do. We offer a range of green options, including reusable decor, local sourcing, and waste reduction strategies.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Can you handle large-scale corporate events?</h3>
                      <p>Absolutely. Our experienced team has managed events for hundreds of guests, ensuring seamless logistics and memorable experiences.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">How far in advance should I book?</h3>
                      <p>We recommend booking as early as possible, especially for peak seasons. However, we do our best to accommodate last-minute requests.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Do you provide on-site coordination?</h3>
                      <p>Yes, our planners are present on-site to ensure every detail is executed flawlessly on your big day.</p>
                    </div>
                  </div>
                </div>
              </section>
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
