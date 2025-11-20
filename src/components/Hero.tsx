import { Button } from "@/components/ui/button";
import heroWedding from "@/assets/hero-wedding.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroWedding})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-primary-foreground">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Events Into
            <span className="block text-gold">Unforgettable Moments</span>
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            We thrive on exceeding client expectations and delighting guests, down to every refined detail. 
            Sustainable, creative, and seamlessly executed.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Plan Your Event
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
