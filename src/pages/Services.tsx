import { Calendar, Tent, Armchair, Flower2, Camera, Users, Utensils, Music, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import tentSetup from "@/assets/tent-setup.jpg";

const services = [
  {
    icon: Calendar,
    title: "Full Event Management",
    description: "From intimate gatherings to grand celebrations, we handle every aspect of your event planning. Our experienced team ensures seamless coordination from concept to execution.",
    features: ["Timeline Planning", "Vendor Coordination", "Budget Management", "On-site Supervision"]
  },
  {
    icon: Tent,
    title: "Tent & Canopy Rentals",
    description: "Premium tent solutions for any outdoor event. Weather-proof, elegant structures with beautiful draping options and professional installation.",
    features: ["Various Sizes Available", "Weather Protection", "Professional Setup", "Decorative Draping"]
  },
  {
    icon: Armchair,
    title: "Furniture & Equipment Hire",
    description: "Extensive collection of elegant furniture including tables, chairs, linens, and event equipment to match your event's style perfectly.",
    features: ["Gold Chiavari Chairs", "Round & Rectangular Tables", "Premium Linens", "Stage & Podium Rental"]
  },
  {
    icon: Flower2,
    title: "Décor & Floral Design",
    description: "Breathtaking floral arrangements and décor that transform venues into magical spaces. Custom designs tailored to your vision and theme.",
    features: ["Custom Floral Arrangements", "Centerpieces", "Ceremony Décor", "Venue Styling"]
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description: "Professional documentation of your special moments. Our talented photographers and videographers capture every emotion and detail.",
    features: ["Event Coverage", "Highlight Reels", "Photo Albums", "Drone Photography"]
  },
  {
    icon: Users,
    title: "Catering Services",
    description: "Exquisite culinary experiences from our trusted catering partners. Diverse menu options for every palate and dietary requirement.",
    features: ["Custom Menus", "Buffet & Plated Service", "Bar Services", "Dessert Stations"]
  },
  {
    icon: Music,
    title: "Entertainment & Audio",
    description: "Professional sound systems, lighting, and entertainment coordination to keep your guests engaged and create the perfect atmosphere.",
    features: ["PA Systems", "Stage Lighting", "DJ Services", "Live Band Coordination"]
  },
  {
    icon: Utensils,
    title: "Tableware & Serving",
    description: "Complete collection of elegant tableware, serving dishes, glassware, and cutlery for sophisticated dining experiences.",
    features: ["Fine China", "Glassware Sets", "Serving Equipment", "Beverage Stations"]
  },
  {
    icon: Sparkles,
    title: "Special Effects",
    description: "Add wow factor with special effects including lighting design, fog machines, sparklers, and other creative elements.",
    features: ["LED Uplighting", "Fog Effects", "Sparkler Displays", "Projection Mapping"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tentSetup})` }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive event solutions tailored to create extraordinary experiences
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From planning to execution, we provide everything you need to make your event unforgettable. 
              Our services are designed to work together seamlessly or individually to suit your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-border hover:border-primary transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Plan Your Event?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss your vision and create a customized package that brings your dream event to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get a Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
