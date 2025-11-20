import { Facebook, Instagram, Twitter, Leaf } from "lucide-react";
import logoLeaf from "@/assets/logo-leaf.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoLeaf} alt="Evergreen" className="h-10 w-10" />
              <div>
                <h3 className="font-bold text-lg">Evergreen</h3>
                <p className="text-sm text-primary-foreground/80">Event Planner</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Creating memorable, sustainable events that exceed expectations.
            </p>
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
              <li className="text-primary-foreground/80">Event Management</li>
              <li className="text-primary-foreground/80">Tent Rentals</li>
              <li className="text-primary-foreground/80">Furniture Hire</li>
              <li className="text-primary-foreground/80">Décor & Styling</li>
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
          <p>&copy; 2024 Evergreen Event Planner. All rights reserved. Designed with <Leaf className="inline h-4 w-4 text-gold" /> for sustainability.</p>
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
