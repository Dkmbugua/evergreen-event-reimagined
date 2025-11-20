import { Phone, Mail, MapPin, Clock, Home, Briefcase, Users, Image, MessageSquare, Contact, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoLeaf from "@/assets/logo-leaf.png";
import { Link } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "./src/components/ui/sheet";

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
          <Link to="/" className="flex items-center gap-3 group" aria-label="Go to homepage">
            <img src={logoLeaf} alt="Evergreen Event Planner" className="h-12 w-12 group-hover:scale-105 transition-transform" />
            <div>
              <h1 className="text-2xl font-bold text-primary group-hover:underline">Evergreen</h1>
              <p className="text-sm text-muted-foreground">Event Planner</p>
            </div>
          </Link>

          {/* Desktop/Tablet Nav */}
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

          {/* Desktop/Tablet Quote Button */}
          <div className="hidden md:block">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-transform">
              Get Quote
            </Button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-3/4 max-w-xs">
                <div className="flex flex-col h-full bg-background">
                  <Link to="/" className="flex items-center gap-2 px-4 py-6 border-b border-border" aria-label="Go to homepage">
                    <img src={logoLeaf} alt="Evergreen Event Planner" className="h-10 w-10" />
                    <div>
                      <h1 className="text-xl font-bold text-primary">Evergreen</h1>
                      <p className="text-xs text-muted-foreground">Event Planner</p>
                    </div>
                  </Link>
                  <nav className="flex flex-col gap-2 px-4 py-6">
                    <a href="/" className="flex items-center gap-2 py-2 text-foreground hover:text-primary font-medium">
                      <Home className="h-4 w-4" /> Home
                    </a>
                    <a href="/services" className="flex items-center gap-2 py-2 text-foreground hover:text-primary font-medium">
                      <Briefcase className="h-4 w-4" /> Services
                    </a>
                    <a href="/about" className="flex items-center gap-2 py-2 text-foreground hover:text-primary font-medium">
                      <Users className="h-4 w-4" /> About Us
                    </a>
                    <a href="/portfolio" className="flex items-center gap-2 py-2 text-foreground hover:text-primary font-medium">
                      <MessageSquare className="h-4 w-4" /> Portfolio
                    </a>
                    <a href="/gallery" className="flex items-center gap-2 py-2 text-foreground hover:text-primary font-medium">
                      <Image className="h-4 w-4" /> Gallery
                    </a>
                    <a href="/contact" className="flex items-center gap-2 py-2 text-foreground hover:text-primary font-medium">
                      <Contact className="h-4 w-4" /> Contact
                    </a>
                  </nav>
                  <div className="mt-auto px-4 pb-6">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      Get Quote
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
