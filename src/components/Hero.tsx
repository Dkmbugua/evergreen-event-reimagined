import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/hero.mp4" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        <img src="/images/IMG-20251120-WA0022.jpg" alt="Event background" className="absolute inset-0 w-full h-full object-cover" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/70 to-transparent" />

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-primary-foreground animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Elegant, Eco-Conscious Events
            <span className="block text-gold">Planned to Perfection</span>
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Evergreen Event Planner crafts unforgettable experiences with a focus on sustainability, creativity, and seamless execution. Let us bring your vision to life—beautifully and responsibly.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-gold text-forest hover:bg-gold/90 hover:scale-105 transition-transform" asChild>
              <a href="#contact">
                Plan Your Event
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-forest hover:scale-105 transition-transform" asChild>
              <a href="#portfolio">View Our Work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
