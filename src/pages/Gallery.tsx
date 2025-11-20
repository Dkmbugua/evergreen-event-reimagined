import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "Weddings", "Corporate", "Social", "Outdoor", "Décor", "Catering"];

const galleryImages = [
  { src: "/images/IMG-20251120-WA0019.jpg", category: "Weddings", alt: "Wedding ceremony setup" },
  { src: "/images/IMG-20251120-WA0020.jpg", category: "Décor", alt: "Elegant table décor" },
  { src: "/images/IMG-20251120-WA0021.jpg", category: "Corporate", alt: "Corporate event hall" },
  { src: "/images/IMG-20251120-WA0022.jpg", category: "Weddings", alt: "Outdoor wedding venue" },
  { src: "/images/IMG-20251120-WA0023.jpg", category: "Social", alt: "Birthday celebration" },
  { src: "/images/IMG-20251120-WA0024.jpg", category: "Outdoor", alt: "Garden party setup" },
  { src: "/images/IMG-20251120-WA0025.jpg", category: "Weddings", alt: "Tent wedding reception" },
  { src: "/images/IMG-20251120-WA0026.jpg", category: "Corporate", alt: "Business gala dinner" },
  { src: "/images/IMG-20251120-WA0027.jpg", category: "Outdoor", alt: "Beach event setup" },
  { src: "/images/IMG-20251120-WA0028.jpg", category: "Décor", alt: "Floral centerpieces" },
  { src: "/images/IMG-20251120-WA0029.jpg", category: "Weddings", alt: "Wedding stage décor" },
  { src: "/images/IMG-20251120-WA0030.jpg", category: "Social", alt: "Anniversary party" },
  { src: "/images/IMG-20251120-WA0031.jpg", category: "Décor", alt: "Balloon arrangements" },
  { src: "/images/IMG-20251120-WA0032.jpg", category: "Corporate", alt: "Product launch event" },
  { src: "/images/IMG-20251120-WA0033.jpg", category: "Weddings", alt: "Bridal table setup" },
  { src: "/images/IMG-20251120-WA0034.jpg", category: "Outdoor", alt: "Lawn ceremony" },
  { src: "/images/IMG-20251120-WA0035.jpg", category: "Catering", alt: "Buffet display" },
  { src: "/images/IMG-20251120-WA0036.jpg", category: "Décor", alt: "Lighting setup" },
  { src: "/images/IMG-20251120-WA0037.jpg", category: "Catering", alt: "Dessert table" },
  { src: "/images/IMG-20251120-WA0038.jpg", category: "Social", alt: "Graduation party" },
  { src: "/images/IMG-20251120-WA0039.jpg", category: "Weddings", alt: "Reception hall" },
  { src: "/images/IMG-20251120-WA0040.jpg", category: "Corporate", alt: "Conference setup" },
  { src: "/images/IMG-20251120-WA0041.jpg", category: "Outdoor", alt: "Garden event" },
  { src: "/images/IMG-20251120-WA0042.jpg", category: "Décor", alt: "Stage backdrop" },
  { src: "/images/IMG-20251120-WA0043.jpg", category: "Weddings", alt: "Wedding cake display" },
  { src: "/images/IMG-20251120-WA0044.jpg", category: "Catering", alt: "Cocktail service" },
  { src: "/images/IMG-20251120-WA0045.jpg", category: "Social", alt: "Baby shower" },
  { src: "/images/IMG-20251120-WA0046.jpg", category: "Corporate", alt: "Team building event" },
  { src: "/images/IMG-20251120-WA0047.jpg", category: "Outdoor", alt: "Poolside party" },
  { src: "/images/IMG-20251120-WA0048.jpg", category: "Décor", alt: "Entrance décor" },
  { src: "/images/IMG-20251120-WA0049.jpg", category: "Weddings", alt: "Ceremony aisle" },
  { src: "/images/IMG-20251120-WA0050.jpg", category: "Corporate", alt: "Gala dinner" },
  { src: "/images/IMG-20251120-WA0051.jpg", category: "Social", alt: "Retirement party" },
  { src: "/images/WhatsApp Image 2025-11-20 at 10.58.54_830201bd.jpg", category: "Weddings", alt: "Wedding venue" },
  { src: "/images/WhatsApp Image 2025-11-20 at 10.58.55_80ab443b.jpg", category: "Décor", alt: "Table settings" },
  { src: "/images/WhatsApp Image 2025-11-20 at 10.58.56_af9b8b84.jpg", category: "Corporate", alt: "Corporate event" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Event Gallery</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up">
            Explore our collection of beautifully executed events. Each image tells a story of creativity, 
            precision, and unforgettable moments.
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

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative h-64 overflow-hidden rounded-lg cursor-pointer group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">{image.category}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Gallery view"
            className="max-w-full max-h-full object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
