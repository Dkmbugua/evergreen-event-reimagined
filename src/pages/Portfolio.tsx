import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Camera } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = ["All", "Weddings", "Corporate", "Social", "Outdoor", "Birthday"];

// Enhanced portfolio structure with multiple photos per event
const portfolioEvents = [
  {
    id: "wedding-1",
    image: "/images/IMG-20251120-WA0022.jpg",
    title: "Elegant Garden Wedding",
    category: "Weddings",
    description: "A breathtaking outdoor ceremony for 200 guests with sustainable floral arrangements.",
    details: "Location: Private Estate, Karen",
    alt: "Elegant garden wedding setup with floral arrangements",
    photos: [
      "/images/IMG-20251120-WA0022.jpg",
      "/images/IMG-20251120-WA0023.jpg",
      "/images/IMG-20251120-WA0025.jpg",
      "/images/IMG-20251120-WA0028.jpg",
      "/images/IMG-20251120-WA0031.jpg",
    ]
  },
  {
    id: "corporate-1",
    image: "/images/IMG-20251120-WA0023.jpg",
    title: "Annual Corporate Gala",
    category: "Corporate",
    description: "Sophisticated gala dinner for a Fortune 500 company with 300+ attendees.",
    details: "Location: Safari Park Hotel",
    alt: "Corporate gala dinner with elegant table settings",
    photos: [
      "/images/IMG-20251120-WA0023.jpg",
      "/images/IMG-20251120-WA0025.jpg",
      "/images/IMG-20251120-WA0028.jpg",
      "/images/IMG-20251120-WA0031.jpg",
    ]
  },
  {
    id: "outdoor-1",
    image: "/images/IMG-20251120-WA0024.jpg",
    title: "Luxury Tent Reception",
    category: "Outdoor",
    description: "Romantic evening reception under elegant tent with string lighting.",
    details: "Location: Ngong Hills",
    alt: "Luxury tent reception with string lights at dusk",
    photos: [
      "/images/IMG-20251120-WA0024.jpg",
      "/images/IMG-20251120-WA0025.jpg",
      "/images/IMG-20251120-WA0028.jpg",
    ]
  },
  {
    id: "birthday-1",
    image: "/images/IMG-20251120-WA0025.jpg",
    title: "Premium Birthday Celebration",
    category: "Birthday",
    description: "Intimate 50th birthday party with gold and white theme.",
    details: "Location: Private Residence",
    alt: "Birthday celebration with gold and white decor",
    photos: [
      "/images/IMG-20251120-WA0025.jpg",
      "/images/IMG-20251120-WA0028.jpg",
      "/images/IMG-20251120-WA0031.jpg",
      "/images/IMG-20251120-WA0037.jpg",
    ]
  },
  {
    id: "corporate-2",
    image: "/images/IMG-20251120-WA0026.jpg",
    title: "Product Launch Event",
    category: "Corporate",
    description: "High-profile product launch with interactive displays and entertainment.",
    details: "Location: Villa Rosa Kempinski",
    alt: "Product launch event with branded displays",
    photos: [
      "/images/IMG-20251120-WA0026.jpg",
      "/images/IMG-20251120-WA0028.jpg",
      "/images/IMG-20251120-WA0031.jpg",
    ]
  },
  {
    id: "wedding-2",
    image: "/images/IMG-20251120-WA0027.jpg",
    title: "Destination Wedding",
    category: "Weddings",
    description: "Three-day wedding celebration with traditional and modern elements.",
    details: "Location: Diani Beach",
    alt: "Beach wedding ceremony setup with ocean view",
    photos: [
      "/images/IMG-20251120-WA0027.jpg",
      "/images/IMG-20251120-WA0028.jpg",
      "/images/IMG-20251120-WA0031.jpg",
      "/images/IMG-20251120-WA0037.jpg",
    ]
  },
  {
    id: "social-1",
    image: "/images/IMG-20251120-WA0028.jpg",
    title: "Charity Fundraising Gala",
    category: "Social",
    description: "Elegant fundraising dinner supporting environmental conservation.",
    details: "Location: Nairobi National Museum",
    alt: "Charity gala dinner with green-themed decor",
    photos: [
      "/images/IMG-20251120-WA0028.jpg",
      "/images/IMG-20251120-WA0031.jpg",
      "/images/IMG-20251120-WA0037.jpg",
    ]
  },
  {
    id: "corporate-3",
    image: "/images/IMG-20251120-WA0029.jpg",
    title: "Team Building Retreat",
    category: "Corporate",
    description: "Two-day corporate retreat with outdoor activities and evening dinner.",
    details: "Location: Great Rift Valley Lodge",
    alt: "Team building retreat with outdoor activities",
    photos: [
      "/images/IMG-20251120-WA0029.jpg",
      "/images/IMG-20251120-WA0031.jpg",
      "/images/IMG-20251120-WA0037.jpg",
    ]
  },
  {
    id: "wedding-3",
    image: "/images/IMG-20251120-WA0030.jpg",
    title: "Traditional Wedding Ceremony",
    category: "Weddings",
    description: "Beautiful blend of traditional customs and contemporary elegance.",
    details: "Location: Karura Forest",
    alt: "Traditional wedding ceremony in a forest setting",
    photos: [
      "/images/IMG-20251120-WA0030.jpg",
      "/images/IMG-20251120-WA0031.jpg",
      "/images/IMG-20251120-WA0037.jpg",
      "/images/IMG-20251120-WA0022.jpg",
    ]
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<typeof portfolioEvents[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredItems = selectedCategory === "All" 
    ? portfolioEvents 
    : portfolioEvents.filter(item => item.category === selectedCategory);

  const openGallery = (event: typeof portfolioEvents[0]) => {
    setSelectedEvent(event);
    setDialogOpen(true);
  };

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
              <Card 
                key={item.id} 
                className="border-border overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => openGallery(item)}
              >
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
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Camera className="h-4 w-4" />
                    {item.photos.length} Photos
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground mb-3 text-sm">{item.description}</p>
                  <p className="text-xs text-muted-foreground/70">{item.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-primary mb-2">
                  {selectedEvent.title}
                </DialogTitle>
                <p className="text-muted-foreground">{selectedEvent.description}</p>
                <p className="text-sm text-muted-foreground/70 mt-1">{selectedEvent.details}</p>
              </DialogHeader>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {selectedEvent.photos.map((photo, idx) => (
                  <div key={idx} className="relative h-48 md:h-64 overflow-hidden rounded-lg group">
                    <img
                      src={photo}
                      alt={`${selectedEvent.title} - Photo ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

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
