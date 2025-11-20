import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Tent, Armchair, Flower2, Camera, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceCategories } from "@/data/services";
import { Button } from "@/components/ui/button";

const services = serviceCategories.slice(0, 6); // Show first 6 services on homepage

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            At Evergreen, we know that the secret ingredient to a memorable, exciting event lies in the details
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const iconMap: { [key: string]: any } = {
              Calendar,
              Tent,
              Armchair,
              Flower2,
              Camera,
              Utensils
            };
            const Icon = iconMap[service.icon] || Calendar;
            
            return (
              <Card 
                key={service.id} 
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-xl cursor-pointer group overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/services/${service.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{service.description}</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      View Details
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
