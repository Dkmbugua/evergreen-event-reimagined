import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Trash2, Edit, Image as ImageIcon, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// This is a frontend-only admin panel for demonstration
// In production, this would connect to your backend API

const Admin = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [newService, setNewService] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    image: "",
  });
  const [newPortfolioItem, setNewPortfolioItem] = useState({
    title: "",
    category: "",
    description: "",
    location: "",
    image: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login - in production, this would authenticate with your backend
    if (loginData.username === "admin" && loginData.password === "admin123") {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel!",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Try admin/admin123 for demo.",
        variant: "destructive",
      });
    }
  };

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Service Added",
      description: `${newService.title} has been added successfully.`,
    });
    setNewService({ category: "", title: "", description: "", price: "", image: "" });
  };

  const handleAddPortfolio = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Portfolio Item Added",
      description: `${newPortfolioItem.title} has been added to the portfolio.`,
    });
    setNewPortfolioItem({ title: "", category: "", description: "", location: "", image: "" });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={loginData.username}
                  onChange={(e) =>
                    setLoginData({ ...loginData, username: e.target.value })
                  }
                  placeholder="admin"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  placeholder="admin123"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Demo credentials: admin / admin123
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-primary">Admin Dashboard</h1>
          <Button variant="outline" onClick={() => setIsAuthenticated(false)}>
            Logout
          </Button>
        </div>

        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Services Management */}
          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Manage Services</span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Service Item
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Add New Service Item</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleAddService} className="space-y-4">
                        <div>
                          <Label htmlFor="category">Service Category</Label>
                          <Select
                            value={newService.category}
                            onValueChange={(value) =>
                              setNewService({ ...newService, category: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="event-management">Event Management</SelectItem>
                              <SelectItem value="tent-rentals">Tent Rentals</SelectItem>
                              <SelectItem value="furniture-hire">Furniture Hire</SelectItem>
                              <SelectItem value="decor-floral">Décor & Floral</SelectItem>
                              <SelectItem value="photography">Photography</SelectItem>
                              <SelectItem value="catering">Catering</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="title">Title</Label>
                          <Input
                            id="title"
                            value={newService.title}
                            onChange={(e) =>
                              setNewService({ ...newService, title: e.target.value })
                            }
                            placeholder="Service item name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            value={newService.description}
                            onChange={(e) =>
                              setNewService({ ...newService, description: e.target.value })
                            }
                            placeholder="Describe the service..."
                            rows={4}
                          />
                        </div>
                        <div>
                          <Label htmlFor="price">Price</Label>
                          <Input
                            id="price"
                            value={newService.price}
                            onChange={(e) =>
                              setNewService({ ...newService, price: e.target.value })
                            }
                            placeholder="e.g., KES 50,000 or From KES 25,000"
                          />
                        </div>
                        <div>
                          <Label htmlFor="image">Image URL or Path</Label>
                          <Input
                            id="image"
                            value={newService.image}
                            onChange={(e) =>
                              setNewService({ ...newService, image: e.target.value })
                            }
                            placeholder="/images/your-image.jpg"
                          />
                          <p className="text-sm text-muted-foreground mt-1">
                            Upload images to /public/images/ first
                          </p>
                        </div>
                        <Button type="submit" className="w-full">
                          <Save className="mr-2 h-4 w-4" />
                          Add Service
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Service items list - in production, this would fetch from backend */}
                  <div className="text-sm text-muted-foreground">
                    Service items will appear here. Add new items using the button above.
                  </div>
                  <p className="text-sm text-amber-600 bg-amber-50 p-4 rounded">
                    <strong>Note:</strong> This is a frontend demo. To make this fully functional, you need to:
                    <ol className="list-decimal ml-5 mt-2 space-y-1">
                      <li>Set up a backend (Node.js/Express, Django, etc.)</li>
                      <li>Create a database (MongoDB, PostgreSQL, etc.)</li>
                      <li>Implement API endpoints for CRUD operations</li>
                      <li>Add image upload functionality</li>
                      <li>Implement proper authentication</li>
                    </ol>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Portfolio Management */}
          <TabsContent value="portfolio" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Manage Portfolio</span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Portfolio Item
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Add New Portfolio Item</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleAddPortfolio} className="space-y-4">
                        <div>
                          <Label htmlFor="portfolio-title">Event Title</Label>
                          <Input
                            id="portfolio-title"
                            value={newPortfolioItem.title}
                            onChange={(e) =>
                              setNewPortfolioItem({ ...newPortfolioItem, title: e.target.value })
                            }
                            placeholder="e.g., Elegant Garden Wedding"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="portfolio-category">Category</Label>
                          <Select
                            value={newPortfolioItem.category}
                            onValueChange={(value) =>
                              setNewPortfolioItem({ ...newPortfolioItem, category: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Weddings">Weddings</SelectItem>
                              <SelectItem value="Corporate">Corporate</SelectItem>
                              <SelectItem value="Social">Social</SelectItem>
                              <SelectItem value="Outdoor">Outdoor</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="portfolio-description">Description</Label>
                          <Textarea
                            id="portfolio-description"
                            value={newPortfolioItem.description}
                            onChange={(e) =>
                              setNewPortfolioItem({ ...newPortfolioItem, description: e.target.value })
                            }
                            placeholder="Describe the event..."
                            rows={4}
                          />
                        </div>
                        <div>
                          <Label htmlFor="portfolio-location">Location</Label>
                          <Input
                            id="portfolio-location"
                            value={newPortfolioItem.location}
                            onChange={(e) =>
                              setNewPortfolioItem({ ...newPortfolioItem, location: e.target.value })
                            }
                            placeholder="e.g., Private Estate, Karen"
                          />
                        </div>
                        <div>
                          <Label htmlFor="portfolio-image">Image URL or Path</Label>
                          <Input
                            id="portfolio-image"
                            value={newPortfolioItem.image}
                            onChange={(e) =>
                              setNewPortfolioItem({ ...newPortfolioItem, image: e.target.value })
                            }
                            placeholder="/images/your-image.jpg"
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          <Save className="mr-2 h-4 w-4" />
                          Add to Portfolio
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Portfolio items will appear here. Add new items using the button above.
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bookings Management */}
          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Booking requests will appear here when users submit forms.
                </div>
                <p className="text-sm text-blue-600 bg-blue-50 p-4 rounded mt-4">
                  <strong>Integration needed:</strong> Connect with a backend to store and retrieve booking data.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="whatsapp">WhatsApp Number</Label>
                  <Input
                    id="whatsapp"
                    placeholder="+254712345678"
                    defaultValue="+254712345678"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Used for WhatsApp integration across the site
                  </p>
                </div>
                <div>
                  <Label htmlFor="phone">Contact Phone</Label>
                  <Input id="phone" placeholder="+254XXX XXX XXX" />
                </div>
                <div>
                  <Label htmlFor="email">Contact Email</Label>
                  <Input id="email" type="email" placeholder="info@evergreeneventplanner.com" />
                </div>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Settings
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Backend Setup Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>To make the admin panel fully functional, follow these steps:</p>
                  <div className="space-y-3">
                    <div className="bg-muted p-4 rounded">
                      <h4 className="font-semibold mb-2">1. Choose Your Backend Stack</h4>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>Node.js + Express + MongoDB</li>
                        <li>Python + Django + PostgreSQL</li>
                        <li>PHP + Laravel + MySQL</li>
                      </ul>
                    </div>
                    <div className="bg-muted p-4 rounded">
                      <h4 className="font-semibold mb-2">2. Database Schema</h4>
                      <p>Create collections/tables for:</p>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>Users (admin authentication)</li>
                        <li>Services (categories and items)</li>
                        <li>Portfolio (event showcases)</li>
                        <li>Bookings (customer requests)</li>
                        <li>Settings (site configuration)</li>
                      </ul>
                    </div>
                    <div className="bg-muted p-4 rounded">
                      <h4 className="font-semibold mb-2">3. API Endpoints Needed</h4>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>POST /api/auth/login</li>
                        <li>GET/POST/PUT/DELETE /api/services</li>
                        <li>GET/POST/PUT/DELETE /api/portfolio</li>
                        <li>GET/POST /api/bookings</li>
                        <li>GET/PUT /api/settings</li>
                      </ul>
                    </div>
                    <div className="bg-muted p-4 rounded">
                      <h4 className="font-semibold mb-2">4. File Upload</h4>
                      <p>Implement image upload functionality using:</p>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>Multer (Node.js)</li>
                        <li>Cloudinary or AWS S3 for cloud storage</li>
                        <li>Local file system for development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
