import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
// Placeholder legal pages
const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-background text-center p-8">
    <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
    <p className="max-w-2xl text-muted-foreground mb-8">This is a placeholder for Evergreen Event Planner's privacy policy. Please update with your actual policy content.</p>
    <a href="/" className="text-primary underline">Back to Home</a>
  </div>
);
const Terms = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-background text-center p-8">
    <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
    <p className="max-w-2xl text-muted-foreground mb-8">This is a placeholder for Evergreen Event Planner's terms and conditions. Please update with your actual terms.</p>
    <a href="/" className="text-primary underline">Back to Home</a>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
