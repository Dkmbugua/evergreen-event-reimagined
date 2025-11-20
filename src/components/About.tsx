import { Leaf, Award, Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Evergreen Event Planner</h2>
          <p className="text-xl mb-12 text-primary-foreground/90">
            Evergreen Event Planner is a premium event planning company that combines elegance, 
            sustainability, and creativity to deliver unforgettable experiences. Founded on the 
            principles of environmental consciousness and exceptional service, we believe every 
            event should be both beautiful and responsible.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Eco-Conscious</h3>
              <p className="text-sm text-primary-foreground/80">
                Sustainable practices in every event
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Excellence</h3>
              <p className="text-sm text-primary-foreground/80">
                Award-winning event management
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Passion</h3>
              <p className="text-sm text-primary-foreground/80">
                We love what we do, it shows
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Creativity</h3>
              <p className="text-sm text-primary-foreground/80">
                Unique designs for every client
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
