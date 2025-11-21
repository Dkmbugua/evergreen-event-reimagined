import { CheckCircle, Leaf, Award, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Leaf,
      title: "Eco-Conscious",
      description: "Sustainable practices in every event we plan"
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Years of experience creating unforgettable moments"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Flawless execution, every single time"
    },
    {
      icon: CheckCircle,
      title: "Full Service",
      description: "From planning to cleanup, we handle it all"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Evergreen?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We bring your vision to life with expertise, creativity, and a commitment to excellence.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
