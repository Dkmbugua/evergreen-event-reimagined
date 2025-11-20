import corporateEvent from "@/assets/corporate-event.jpg";
import tentSetup from "@/assets/tent-setup.jpg";
import furnitureHire from "@/assets/furniture-hire.jpg";

const portfolioItems = [
  {
    image: corporateEvent,
    title: "Corporate Gala Dinner",
    category: "Corporate Event"
  },
  {
    image: tentSetup,
    title: "Elegant Garden Wedding",
    category: "Wedding"
  },
  {
    image: furnitureHire,
    title: "Premium Furniture Setup",
    category: "Equipment Hire"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Recent Work</h2>
          <p className="text-xl text-muted-foreground">
            Discover the magic we've created for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer h-80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
      </div>
    </section>
  );
};

export default Portfolio;
