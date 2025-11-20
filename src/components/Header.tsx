import { Phone, Mail, MapPin, Clock, Home, Briefcase, Users, Image, MessageSquare, Contact } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoLeaf from "@/assets/logo-leaf.png";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top info bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-sm gap-2">
          <a href="tel:+254-XXX-XXX-XXX" className="flex items-center gap-2 hover:text-gold transition-colors">
            <Phone className="h-4 w-4" />
            <span>+254-XXX-XXX-XXX</span>
          </a>
          <a href="mailto:info@evergreeneventplanner.com" className="flex items-center gap-2 hover:text-gold transition-colors">
            <Mail className="h-4 w-4" />
            <span>info@evergreeneventplanner.com</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Shanzu, Mombasa</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Mon - Sat 8:00 - 18:00</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-background border-b border-border py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoLeaf} alt="Evergreen Event Planner" className="h-12 w-12" />
            <div>
              <h1 className="text-2xl font-bold text-primary">Evergreen</h1>
              <p className="text-sm text-muted-foreground">Event Planner</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium group">
              <Home className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Home
            </a>
            <a href="/services" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium group">
              <Briefcase className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Services
            </a>
            <a href="/about" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium group">
              <Users className="h-4 w-4 group-hover:scale-110 transition-transform" />
              About Us
            </a>
            <a href="/portfolio" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium group">
              <MessageSquare className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Portfolio
            </a>
            <a href="/gallery" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium group">
              <Image className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Gallery
            </a>
            <a href="/contact" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium group">
              <Contact className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Contact
            </a>
          </nav>

          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-transform">
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
