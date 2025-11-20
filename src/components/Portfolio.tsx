import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    image: "/images/IMG-20251120-WA0022.jpg",
    title: "Elegant Garden Wedding",
    category: "Wedding"
  },
  {
    image: "/images/IMG-20251120-WA0023.jpg",
    title: "Corporate Gala Dinner",
    category: "Corporate Event"
  },
  {
    image: "/images/IMG-20251120-WA0025.jpg",
    title: "Luxury Tent Setup",
    category: "Outdoor Event"
  },
  {
    image: "/images/IMG-20251120-WA0028.jpg",
    title: "Premium Furniture Hire",
    category: "Equipment Hire"
  },
  {
    image: "/images/IMG-20251120-WA0031.jpg",
    title: "Floral Décor Design",
    category: "Décor"
  },
  {
    image: "/images/IMG-20251120-WA0037.jpg",
    title: "Catering Excellence",
    category: "Catering"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Recent Work</h2>
          <p className="text-xl text-muted-foreground">
            Discover the magic we've created for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer h-80 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-primary-foreground">
                  <p className="text-sm font-medium text-gold mb-2">{item.category}</p>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform" asChild>
            <a href="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
