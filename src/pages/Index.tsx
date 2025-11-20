import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventTypes from "@/components/EventTypes";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <EventTypes />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from happy clients who trusted Evergreen with their special moments.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6 border border-border">
              <p className="text-lg text-muted-foreground mb-4">“Evergreen made our wedding day absolutely magical. Every detail was perfect and the team was a joy to work with!”</p>
              <div className="font-semibold text-primary">— Emily & Daniel</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border border-border">
              <p className="text-lg text-muted-foreground mb-4">“Our corporate gala was a huge success thanks to Evergreen’s professionalism and creativity. Highly recommended!”</p>
              <div className="font-semibold text-primary">— K. Mwangi, CEO</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border border-border">
              <p className="text-lg text-muted-foreground mb-4">“The team’s commitment to sustainability really impressed us. Our guests loved the eco-friendly touches!”</p>
              <div className="font-semibold text-primary">— L. Otieno</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
