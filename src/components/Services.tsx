import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Tent, Armchair, Flower2, Camera, Users } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Event Management",
    description: "From intimate garden parties to grand conferences, we create events that take your breath away with meticulous planning and flawless execution."
  },
  {
    icon: Tent,
    title: "Tent & Canopy Rentals",
    description: "Elegant and weather-proof tent solutions for any outdoor event. Beautiful draping and lighting options available."
  },
  {
    icon: Armchair,
    title: "Furniture & Equipment Hire",
    description: "Premium chairs, tables, linens, and décor equipment to bring out your signature style at your event."
  },
  {
    icon: Flower2,
    title: "Décor & Styling",
    description: "Stunning floral arrangements and event styling that creates the perfect ambiance for your special occasion."
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description: "Professional documentation of your event, capturing every precious moment with artistic excellence."
  },
  {
    icon: Users,
    title: "Catering Services",
    description: "Exquisite culinary experiences tailored to your preferences, from intimate dinners to grand banquets."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            At Evergreen, we know that the secret ingredient to a memorable, exciting event lies in the details
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
