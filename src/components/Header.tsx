import { useState } from "react";
import { Home, Briefcase, Users, Image, MessageSquare, Contact, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoLeaf from "@/assets/logo-leaf.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/services", label: "Services", icon: Briefcase },
    { href: "/about", label: "About Us", icon: Users },
    { href: "/portfolio", label: "Portfolio", icon: MessageSquare },
    { href: "/gallery", label: "Gallery", icon: Image },
    { href: "/contact", label: "Contact", icon: Contact },
  ];

  return (
    <header className="w-full">
      {/* Main navigation */}
      <div className="bg-background border-b border-border py-3 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <img src={logoLeaf} alt="Evergreen Event Planner" className="h-10 w-10 md:h-12 md:w-12" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-primary">Evergreen</h1>
              <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">Event Planner</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium group"
                >
                  <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Get Quote Button */}
          <Button className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-transform">
            Get Quote
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-medium p-3 rounded-lg hover:bg-muted"
                    >
                      <Icon className="h-5 w-5" />
                      {link.label}
                    </a>
                  );
                })}
                <Button className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                  Get Quote
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
