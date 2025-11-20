import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Ready to start planning your perfect event? Contact us today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <Input placeholder="Your Name" className="border-border" />
              <Input type="email" placeholder="Your Email" className="border-border" />
              <Input placeholder="Phone Number" className="border-border" />
              <Textarea placeholder="Tell us about your event..." className="border-border min-h-32" />
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Request a Quote
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
            
            <Card className="border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Phone</h4>
                  <p className="text-muted-foreground">+254-XXX-XXX-XXX</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon - Sat, 8:00 AM - 6:00 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Email</h4>
                  <p className="text-muted-foreground">info@evergreeneventplanner.com</p>
                  <p className="text-muted-foreground">bookings@evergreeneventplanner.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Location</h4>
                  <p className="text-muted-foreground">Nairobi, Kenya</p>
                  <p className="text-sm text-muted-foreground mt-1">Serving Nairobi and surrounding areas</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
