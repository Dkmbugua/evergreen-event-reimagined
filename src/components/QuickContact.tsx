import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const QuickContact = () => {
  const whatsappNumber = "+254729239973";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent("Hello! I'd like to plan an event with Evergreen Event Planner.")}`;

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Plan Your Perfect Event?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            Get in touch with us today. We're here to make your vision a reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gold text-forest hover:bg-gold/90 hover:scale-105 transition-transform text-base md:text-lg py-6"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-primary border-white hover:bg-white/90 hover:scale-105 transition-transform text-base md:text-lg py-6"
              asChild
            >
              <a href={`tel:${whatsappNumber}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/80 mt-6">
            Or visit our <a href="/contact" className="underline hover:text-gold">contact page</a> for more ways to reach us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
