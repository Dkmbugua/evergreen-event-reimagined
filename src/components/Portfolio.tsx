import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Portfolio data structure - easily expandable by admin
const portfolioEvents = [
  {
    id: "birthday-1",
    title: "Premium Birthday Celebration",
    category: "Birthday",
    description: "Elegant 30th birthday celebration with custom décor and entertainment",
    coverImage: "/images/IMG-20251120-WA0022.jpg",
    photos: [
      "/images/IMG-20251120-WA0022.jpg",
      "/images/IMG-20251120-WA0023.jpg",
      "/images/IMG-20251120-WA0025.jpg",
      "/images/IMG-20251120-WA0028.jpg",
    ]
  },
  {
    id: "wedding-1",
    title: "Elegant Garden Wedding",
    category: "Wedding",
    description: "Beautiful outdoor wedding ceremony with eco-friendly décor",
    coverImage: "/images/IMG-20251120-WA0031.jpg",
    photos: [
      "/images/IMG-20251120-WA0031.jpg",
      "/images/IMG-20251120-WA0037.jpg",
      "/images/IMG-20251120-WA0022.jpg",
    ]
  },
  {
    id: "corporate-1",
    title: "Corporate Gala Dinner",
    category: "Corporate",
    description: "High-end corporate event with premium catering and entertainment",
    coverImage: "/images/IMG-20251120-WA0023.jpg",
    photos: [
      "/images/IMG-20251120-WA0023.jpg",
      "/images/IMG-20251120-WA0025.jpg",
      "/images/IMG-20251120-WA0028.jpg",
    ]
  },
  {
    id: "outdoor-1",
    title: "Luxury Outdoor Event",
    category: "Outdoor",
    description: "Premium tent setup with elegant furniture and lighting",
    coverImage: "/images/IMG-20251120-WA0025.jpg",
    photos: [
      "/images/IMG-20251120-WA0025.jpg",
      "/images/IMG-20251120-WA0028.jpg",
      "/images/IMG-20251120-WA0031.jpg",
    ]
  },
  {
    id: "social-1",
    title: "Social Gathering Excellence",
    category: "Social",
    description: "Memorable social event with custom décor and catering",
    coverImage: "/images/IMG-20251120-WA0037.jpg",
    photos: [
      "/images/IMG-20251120-WA0037.jpg",
      "/images/IMG-20251120-WA0022.jpg",
      "/images/IMG-20251120-WA0023.jpg",
    ]
  }
];

const Portfolio = () => {
  const [selectedEvent, setSelectedEvent] = useState<typeof portfolioEvents[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Show only first 3 events on homepage for mobile optimization
  const displayEvents = portfolioEvents.slice(0, 3);

  const openEventGallery = (event: typeof portfolioEvents[0]) => {
    setSelectedEvent(event);
    setDialogOpen(true);
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Recent Work</h2>
          <p className="text-xl text-muted-foreground">
            Discover the magic we've created for our clients
          </p>
        </div>

        {/* Portfolio Grid - Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayEvents.map((event, index) => (
            <Card
              key={event.id}
              className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 animate-fade-in-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openEventGallery(event)}
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={event.coverImage}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-gold text-forest px-3 py-1 rounded-full text-sm font-medium">
                  {event.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Camera className="h-4 w-4" />
                  {event.photos.length} Photos
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Event Gallery Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedEvent && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary">
                    {selectedEvent.title}
                  </DialogTitle>
                  <p className="text-muted-foreground">{selectedEvent.description}</p>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {selectedEvent.photos.map((photo, idx) => (
                    <div key={idx} className="relative h-64 overflow-hidden rounded-lg">
                      <img
                        src={photo}
                        alt={`${selectedEvent.title} - Photo ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform" asChild>
            <a href="/portfolio">
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
