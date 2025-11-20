import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: ""
  });

  // Pre-fill event type based on URL parameter
  useEffect(() => {
    const eventType = searchParams.get('type');
    if (eventType) {
      const eventTypeMap: { [key: string]: string } = {
        'social': 'Social Event (Wedding, Birthday, Anniversary, etc.)',
        'corporate': 'Corporate Event (Team Building, Product Launch, Gala, etc.)'
      };
      setFormData(prev => ({
        ...prev,
        eventType: eventTypeMap[eventType] || eventType
      }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate admin notification (in production, this would be a backend API call)
    console.log('📧 Admin Notification:', {
      from: formData.email,
      name: formData.name,
      phone: formData.phone,
      eventType: formData.eventType,
      message: formData.message,
      timestamp: new Date().toISOString(),
      priority: formData.eventType.includes('Corporate') ? 'High' : 'Normal'
    });

    toast({
      title: "Booking Request Sent! 🎉",
      description: `Thank you ${formData.name}! We've received your ${formData.eventType} inquiry. Our team will contact you within 24 hours with a personalized quote.`,
    });
    
    // Reset form
    const eventType = searchParams.get('type');
    if (eventType) {
      const eventTypeMap: { [key: string]: string } = {
        'social': 'Social Event (Wedding, Birthday, Anniversary, etc.)',
        'corporate': 'Corporate Event (Team Building, Product Launch, Gala, etc.)'
      };
      setFormData({ 
        name: "", 
        email: "", 
        phone: "", 
        eventType: eventTypeMap[eventType] || "", 
        message: "" 
      });
    } else {
      setFormData({ name: "", email: "", phone: "", eventType: "", message: "" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {searchParams.get('type') === 'social' ? 'Plan Your Social Event' : 
             searchParams.get('type') === 'corporate' ? 'Plan Your Corporate Event' : 
             'Get In Touch'}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            {searchParams.get('type') ? 
              "Fill out the form below and we'll get back to you within 24 hours with a personalized quote and consultation." :
              "Ready to start planning your perfect event? We'd love to hear from you. Reach out and let's create something extraordinary together."}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="border-border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="border-border"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 XXX XXX XXX"
                    required
                    className="border-border"
                  />
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-2">
                    Type of Event *
                  </label>
                  <Input
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    placeholder="e.g., Wedding, Corporate Event, Birthday Party"
                    className="border-border"
                    required
                  />
                  {formData.eventType && (
                    <p className="text-xs text-green-600 mt-1">
                      ✓ Event type selected: {formData.eventType}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell Us About Your Event *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your vision, expected guest count, date, and any special requirements..."
                    required
                    className="border-border min-h-32"
                  />
                </div>

                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
              
              <Card className="border-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Phone</h3>
                    <p className="text-muted-foreground mb-1">
                      <a href="tel:+254729239973" className="hover:text-accent transition-colors">
                        0729239973
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">Mon - Sat, 8:00 AM - 6:00 PM</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Email</h3>
                    <p className="text-muted-foreground mb-1">
                      <a href="mailto:dkmbugua70@gmail.com" className="hover:text-accent transition-colors">
                        dkmbugua70@gmail.com
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Location</h3>
                    <p className="text-muted-foreground mb-1">Mombasa Shanzu, Kenya</p>
                    <p className="text-sm text-muted-foreground">Serving Mombasa Shanzu and the entire coastal region</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Business Hours</h3>
                    <div className="space-y-1 text-sm">
                      <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-3">Quick Response Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  We pride ourselves on quick response times. You'll hear back from us within 24 hours 
                  during business days, often much sooner. For urgent inquiries, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Visit Our Office</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63722.89311568304!2d39.7159!3d-4.0435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18400f7b4e9e24f5%3A0x4c3f1c1f1c1f1c1f!2sShanzu%2C%20Mombasa%2C%20Kenya!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Evergreen Event Planner Office Location - Mombasa Shanzu"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-primary">Mombasa Shanzu, Kenya</p>
              <p className="text-muted-foreground mt-2">Serving Mombasa Shanzu and the entire coastal region</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
