import { Facebook, Instagram, Twitter, Leaf } from "lucide-react";
import logoLeaf from "@/assets/logo-leaf.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="flex items-center gap-2 mb-4 group" aria-label="Go to homepage">
              <img src={logoLeaf} alt="Evergreen" className="h-10 w-10 group-hover:scale-105 transition-transform" />
              <div>
                <h3 className="font-bold text-lg">Evergreen</h3>
                <p className="text-sm text-primary-foreground/80">Event Planner</p>
              </div>
            </a>
            <p className="text-sm text-primary-foreground/80">
              Creating memorable, sustainable events that exceed expectations.
            </p>
            <div className="mt-4">
              <a 
                href="https://wa.me/254729239973?text=Hello%20Evergreen%20Event%20Planner!%20I%20would%20like%20to%20inquire%20about%20your%20services." 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-accent hover:text-gold transition-colors text-base block"
              >
                +254 729 239 973
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-primary-foreground/80 hover:text-gold transition-colors">Home</a></li>
              <li><a href="/services" className="text-primary-foreground/80 hover:text-gold transition-colors">Services</a></li>
              <li><a href="/about" className="text-primary-foreground/80 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="/portfolio" className="text-primary-foreground/80 hover:text-gold transition-colors">Portfolio</a></li>
              <li><a href="/gallery" className="text-primary-foreground/80 hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-primary-foreground/80 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/event-management" className="text-primary-foreground/80 hover:text-gold transition-colors">Event Management</a></li>
              <li><a href="/services/tent-rentals" className="text-primary-foreground/80 hover:text-gold transition-colors">Tent Rentals</a></li>
              <li><a href="/services/furniture-hire" className="text-primary-foreground/80 hover:text-gold transition-colors">Furniture Hire</a></li>
              <li><a href="/services/decor-styling" className="text-primary-foreground/80 hover:text-gold transition-colors">Décor & Styling</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; 2025 Evergreen Event Planner. All rights reserved. Designed with <Leaf className="inline h-4 w-4 text-gold" /> for sustainability.</p>
          <div className="mt-2">
            <a href="/privacy-policy" className="underline hover:text-gold mx-2">Privacy Policy</a>
            <a href="/terms" className="underline hover:text-gold mx-2">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
