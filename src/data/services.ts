export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
  whatsappMessage: string;
  images: string[];
  features: string[];
  items: ServiceItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "event-management",
    title: "Full Event Management",
    slug: "event-management",
    icon: "Calendar",
    description: "From intimate gatherings to grand celebrations, we handle every aspect of your event planning. Our experienced team ensures seamless coordination from concept to execution.",
    whatsappMessage: "Hello! I'm interested in Full Event Management services. How may I help plan my event?",
    images: [
      "/images/IMG-20251120-WA0022.jpg",
      "/images/IMG-20251120-WA0023.jpg",
      "/images/IMG-20251120-WA0024.jpg",
    ],
    features: ["Timeline Planning", "Vendor Coordination", "Budget Management", "On-site Supervision"],
    items: [
      {
        id: "wedding-planning",
        title: "Wedding Planning",
        description: "Complete wedding coordination from engagement to reception",
        image: "/images/IMG-20251120-WA0022.jpg",
        price: "Contact for quote"
      },
      {
        id: "corporate-events",
        title: "Corporate Events",
        description: "Professional corporate event planning and execution",
        image: "/images/IMG-20251120-WA0023.jpg",
        price: "Contact for quote"
      },
      {
        id: "social-events",
        title: "Social Events",
        description: "Birthday parties, anniversaries, and celebrations",
        image: "/images/IMG-20251120-WA0024.jpg",
        price: "Contact for quote"
      }
    ]
  },
  {
    id: "tent-rentals",
    title: "Tent & Canopy Rentals",
    slug: "tent-rentals",
    icon: "Tent",
    description: "Premium tent solutions for any outdoor event. Weather-proof, elegant structures with beautiful draping options and professional installation.",
    whatsappMessage: "Hello! I'm interested in Tent & Canopy Rentals. Can you help me with tent options?",
    images: [
      "/images/IMG-20251120-WA0025.jpg",
      "/images/IMG-20251120-WA0026.jpg",
      "/images/IMG-20251120-WA0027.jpg",
    ],
    features: ["Various Sizes Available", "Weather Protection", "Professional Setup", "Decorative Draping"],
    items: [
      {
        id: "stretch-tents",
        title: "Stretch Tents",
        description: "Modern, elegant stretch tents for 50-500 guests",
        image: "/images/IMG-20251120-WA0025.jpg",
        price: "From KES 50,000"
      },
      {
        id: "frame-tents",
        title: "Frame Tents",
        description: "Traditional frame tents with customizable layouts",
        image: "/images/IMG-20251120-WA0026.jpg",
        price: "From KES 60,000"
      },
      {
        id: "canopy-tents",
        title: "Canopy Tents",
        description: "Smaller canopies perfect for intimate gatherings",
        image: "/images/IMG-20251120-WA0027.jpg",
        price: "From KES 15,000"
      }
    ]
  },
  {
    id: "furniture-hire",
    title: "Furniture & Equipment Hire",
    slug: "furniture-hire",
    icon: "Armchair",
    description: "Extensive collection of elegant furniture including tables, chairs, linens, and event equipment to match your event's style perfectly.",
    whatsappMessage: "Hello! I'm interested in Furniture & Equipment Hire. What options do you have?",
    images: [
      "/images/IMG-20251120-WA0028.jpg",
      "/images/IMG-20251120-WA0029.jpg",
      "/images/IMG-20251120-WA0030.jpg",
    ],
    features: ["Gold Chiavari Chairs", "Round & Rectangular Tables", "Premium Linens", "Stage & Podium Rental"],
    items: [
      {
        id: "chiavari-chairs",
        title: "Chiavari Chairs",
        description: "Elegant gold and silver chiavari chairs",
        image: "/images/IMG-20251120-WA0028.jpg",
        price: "KES 200 per chair"
      },
      {
        id: "round-tables",
        title: "Round Tables",
        description: "6-seater and 8-seater round tables",
        image: "/images/IMG-20251120-WA0029.jpg",
        price: "KES 800 per table"
      },
      {
        id: "table-linens",
        title: "Table Linens",
        description: "Premium tablecloths and runners in various colors",
        image: "/images/IMG-20251120-WA0030.jpg",
        price: "KES 300 per set"
      }
    ]
  },
  {
    id: "decor-floral",
    title: "Décor & Floral Design",
    slug: "decor-floral",
    icon: "Flower2",
    description: "Breathtaking floral arrangements and décor that transform venues into magical spaces. Custom designs tailored to your vision and theme.",
    whatsappMessage: "Hello! I'm interested in Décor & Floral Design services. Can you help create my dream event décor?",
    images: [
      "/images/IMG-20251120-WA0031.jpg",
      "/images/IMG-20251120-WA0032.jpg",
      "/images/IMG-20251120-WA0033.jpg",
    ],
    features: ["Custom Floral Arrangements", "Centerpieces", "Ceremony Décor", "Venue Styling"],
    items: [
      {
        id: "wedding-flowers",
        title: "Wedding Floral Packages",
        description: "Complete floral design for ceremonies and receptions",
        image: "/images/IMG-20251120-WA0031.jpg",
        price: "From KES 80,000"
      },
      {
        id: "centerpieces",
        title: "Table Centerpieces",
        description: "Stunning centerpieces to enhance your table settings",
        image: "/images/IMG-20251120-WA0032.jpg",
        price: "From KES 2,500 each"
      },
      {
        id: "backdrop-decor",
        title: "Backdrop & Stage Décor",
        description: "Custom backdrops and stage decorations",
        image: "/images/IMG-20251120-WA0033.jpg",
        price: "From KES 30,000"
      }
    ]
  },
  {
    id: "photography",
    title: "Photography & Videography",
    slug: "photography",
    icon: "Camera",
    description: "Professional documentation of your special moments. Our talented photographers and videographers capture every emotion and detail.",
    whatsappMessage: "Hello! I'm interested in Photography & Videography services. Can you share your packages?",
    images: [
      "/images/IMG-20251120-WA0034.jpg",
      "/images/IMG-20251120-WA0035.jpg",
      "/images/IMG-20251120-WA0036.jpg",
    ],
    features: ["Event Coverage", "Highlight Reels", "Photo Albums", "Drone Photography"],
    items: [
      {
        id: "wedding-photography",
        title: "Wedding Photography Package",
        description: "Full day coverage with 2 photographers",
        image: "/images/IMG-20251120-WA0034.jpg",
        price: "From KES 70,000"
      },
      {
        id: "videography",
        title: "Cinematic Videography",
        description: "Professional video coverage with highlight reel",
        image: "/images/IMG-20251120-WA0035.jpg",
        price: "From KES 80,000"
      },
      {
        id: "drone-coverage",
        title: "Drone Photography",
        description: "Aerial shots and unique perspectives",
        image: "/images/IMG-20251120-WA0036.jpg",
        price: "KES 25,000"
      }
    ]
  },
  {
    id: "catering",
    title: "Catering Services",
    slug: "catering",
    icon: "Utensils",
    description: "Exquisite culinary experiences from our trusted catering partners. Diverse menu options for every palate and dietary requirement.",
    whatsappMessage: "Hello! I'm interested in Catering Services. How may we help you plan your menu?",
    images: [
      "/images/IMG-20251120-WA0037.jpg",
      "/images/IMG-20251120-WA0038.jpg",
      "/images/IMG-20251120-WA0039.jpg",
    ],
    features: ["Custom Menus", "Buffet & Plated Service", "Bar Services", "Dessert Stations"],
    items: [
      {
        id: "buffet-catering",
        title: "Buffet Catering",
        description: "Extensive buffet options for large gatherings",
        image: "/images/IMG-20251120-WA0037.jpg",
        price: "From KES 1,500 per person"
      },
      {
        id: "plated-dinner",
        title: "Plated Dinner Service",
        description: "Elegant sit-down meals with multiple courses",
        image: "/images/IMG-20251120-WA0038.jpg",
        price: "From KES 2,500 per person"
      },
      {
        id: "cocktail-bar",
        title: "Bar & Cocktail Services",
        description: "Professional bartenders and premium drinks",
        image: "/images/IMG-20251120-WA0039.jpg",
        price: "From KES 50,000"
      }
    ]
  },
];
