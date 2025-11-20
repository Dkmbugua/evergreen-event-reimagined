import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const categories = ["All", "Weddings", "Corporate", "Social", "Outdoor"];

const portfolioItems = [
  {
    image: "/images/IMG-20251120-WA0022.jpg",
    title: "Elegant Garden Wedding",
    category: "Weddings",
    description: "A breathtaking outdoor ceremony for 200 guests with sustainable floral arrangements.",
    details: "Location: Private Estate, Karen",
    alt: "Elegant garden wedding setup with floral arrangements"
  },
  {
    image: "/images/IMG-20251120-WA0023.jpg",
    title: "Annual Corporate Gala",
    category: "Corporate",
    description: "Sophisticated gala dinner for a Fortune 500 company with 300+ attendees.",
    details: "Location: Safari Park Hotel",
    alt: "Corporate gala dinner with elegant table settings"
  },
  {
    image: "/images/IMG-20251120-WA0024.jpg",
    title: "Luxury Tent Reception",
    category: "Outdoor",
    description: "Romantic evening reception under elegant tent with string lighting.",
    details: "Location: Ngong Hills",
    alt: "Luxury tent reception with string lights at dusk"
  },
  {
    image: "/images/IMG-20251120-WA0025.jpg",
    title: "Premium Birthday Celebration",
    category: "Social",
    description: "Intimate 50th birthday party with gold and white theme.",
    details: "Location: Private Residence",
    alt: "Birthday celebration with gold and white decor"
  },
  {
    image: "/images/IMG-20251120-WA0026.jpg",
    title: "Product Launch Event",
    category: "Corporate",
    description: "High-profile product launch with interactive displays and entertainment.",
    details: "Location: Villa Rosa Kempinski",
    alt: "Product launch event with branded displays"
  },
  {
    image: "/images/IMG-20251120-WA0027.jpg",
    title: "Destination Wedding",
    category: "Weddings",
    description: "Three-day wedding celebration with traditional and modern elements.",
    details: "Location: Diani Beach",
    alt: "Beach wedding ceremony setup with ocean view"
  },
  {
    image: "/images/IMG-20251120-WA0028.jpg",
    title: "Charity Fundraising Gala",
    category: "Social",
    description: "Elegant fundraising dinner supporting environmental conservation.",
    details: "Location: Nairobi National Museum",
    alt: "Charity gala dinner with green-themed decor"
  },
  {
    image: "/images/IMG-20251120-WA0029.jpg",
    title: "Team Building Retreat",
    category: "Corporate",
    description: "Two-day corporate retreat with outdoor activities and evening dinner.",
    details: "Location: Great Rift Valley Lodge",
    alt: "Team building retreat with outdoor activities"
  },
  {
    image: "/images/IMG-20251120-WA0030.jpg",
    title: "Traditional Wedding Ceremony",
    category: "Weddings",
    description: "Beautiful blend of traditional customs and contemporary elegance.",
    details: "Location: Karura Forest",
    alt: "Traditional wedding ceremony in a forest setting"
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Explore our collection of successful events. Each celebration tells a unique story 
            of creativity, precision, and unforgettable moments.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-muted/30 sticky top-0 z-10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-6 py-2 text-sm transition-all ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card key={index} className="border-border overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-3 text-sm">{item.description}</p>
                  <p className="text-xs text-muted-foreground/70">{item.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Create Your Story</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Every great event starts with a conversation. Share your vision with us and let's make it extraordinary.
          </p>
          <a href="/contact">
            <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-md font-medium transition-colors">
              Start Planning
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
