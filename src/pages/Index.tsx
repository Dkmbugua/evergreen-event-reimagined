import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import QuickContact from "@/components/QuickContact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      {/* Removed EventTypes - redundant with Services page */}
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <QuickContact />
      <Footer />
    </div>
  );
};

export default Index;
