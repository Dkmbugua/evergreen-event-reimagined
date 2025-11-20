import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Briefcase } from "lucide-react";

const EventTypes = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">What We Specialize In</h2>
          <p className="text-xl text-muted-foreground">
            Every event is unique. We tailor our services to match your vision perfectly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden group">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Social Events</h3>
              <p className="text-muted-foreground mb-6">
                Whether you're planning a wedding, birthday celebration, anniversary, or private party, 
                we make the planning process effortless and the execution flawless. Your special moments 
                deserve extraordinary celebrations.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Plan Social Event
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden group">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                <Briefcase className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Corporate Events</h3>
              <p className="text-muted-foreground mb-6">
                From team building and product launches to galas and end-of-year parties, we plan 
                worry-free, elegant corporate events that reflect your brand and impress your stakeholders. 
                Professional excellence guaranteed.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Plan Corporate Event
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
