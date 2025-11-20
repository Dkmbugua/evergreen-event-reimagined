import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Event Planning Tips & Resources</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Explore our latest articles, tips, and inspiration for planning sustainable, memorable events.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground">Coming soon: Blog posts, guides, and resources to help you plan your next event with confidence and creativity.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
