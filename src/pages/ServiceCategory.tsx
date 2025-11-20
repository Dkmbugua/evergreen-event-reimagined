import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serviceCategories } from "@/data/services";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ServiceCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const service = serviceCategories.find((s) => s.slug === slug);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    message: ""
  });

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => navigate("/services")}>Back to Services</Button>
        </div>
      </div>
    );
  }

  const whatsappNumber = "+254729239973"; // updated to user-provided phone
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent(service.whatsappMessage)}`;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you within 24 hours to confirm your booking.",
    });
    setBookingOpen(false);
    setBookingData({ name: "", email: "", phone: "", eventDate: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[400px] w-full overflow-hidden"
        style={{
          backgroundImage: `url('${service.images[0]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-primary-foreground">
            <Button
              variant="ghost"
              className="mb-4 text-primary-foreground hover:text-primary-foreground hover:bg-white/20"
              onClick={() => navigate("/services")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-primary-foreground/90 mb-6">{service.description}</p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gold text-forest hover:bg-gold/90"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <a href={`tel:${whatsappNumber}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-primary border-2 border-white hover:bg-white/90">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Book {service.title}</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={bookingData.name}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                        placeholder="+254 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="eventDate">Event Date</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={bookingData.eventDate}
                        onChange={(e) => setBookingData({ ...bookingData, eventDate: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Additional Details</Label>
                      <Textarea
                        id="message"
                        value={bookingData.message}
                        onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                        placeholder="Tell us about your event requirements..."
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Submit Booking Request
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-full shadow-sm border border-border">
                <span className="text-sm font-medium text-primary">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Items Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Available Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.items.map((item) => (
              <Card key={item.id} className="border-border overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                  {item.price && (
                    <p className="text-lg font-bold text-accent mb-4">{item.price}</p>
                  )}
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Inquire
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1" onClick={() => setBookingOpen(true)}>
                      Book
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Gallery</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {service.images.map((image, index) => (
              <div key={index} className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
                <img
                  src={image}
                  alt={`${service.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contact us today to discuss your needs and get a personalized quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gold text-forest hover:bg-gold/90" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href={`tel:${whatsappNumber}`}>
                <Phone className="mr-2 h-5 w-5" />
                {whatsappNumber}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceCategory;
