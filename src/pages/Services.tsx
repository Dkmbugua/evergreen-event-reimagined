import { Calendar, Tent, Armchair, Flower2, Camera, Utensils } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serviceCategories } from "@/data/services";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/IMG-20251120-WA0025.jpg')` }}
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
            {serviceCategories.map((service) => {
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
                <Card key={service.id} className="border-border hover:border-primary transition-all duration-300 hover:shadow-xl cursor-pointer group">
                  <Link to={`/services/${service.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
