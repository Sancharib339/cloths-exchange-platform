import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FeaturedItems from "@/components/FeaturedItems";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight, Recycle, Users, Award, ShoppingBag, Repeat, Leaf } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-light/20 to-accent/20"></div>
        <div className="container relative px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                🌱 Sustainable Fashion Revolution
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Swap, Share, and
                <span className="text-primary"> Sustain</span> Fashion
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Join thousands of fashion lovers in building a sustainable future. 
                Exchange unused clothing through direct swaps or our innovative point system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/browse">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Start Swapping
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                
                <Link to="/browse">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Browse Items
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Items Swapped</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">12K+</div>
                  <div className="text-sm text-muted-foreground">Happy Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Sustainable Fashion Community"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live swaps happening now!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How ReWear Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple, sustainable, and rewarding. Join our community in just three easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <ShoppingBag className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">List Your Items</h3>
                <p className="text-muted-foreground">
                  Upload photos and details of clothing you no longer wear. 
                  Each item earns you points based on condition and demand.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="h-16 w-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto">
                  <Repeat className="h-8 w-8 text-sage-dark" />
                </div>
                <h3 className="text-xl font-semibold">Swap or Redeem</h3>
                <p className="text-muted-foreground">
                  Browse amazing items and either propose direct swaps 
                  or use your earned points to redeem items you love.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Make Impact</h3>
                <p className="text-muted-foreground">
                  Every swap reduces textile waste and promotes sustainable fashion. 
                  Track your environmental impact in your dashboard.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <FeaturedItems />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-sage text-primary-foreground">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact Together</h2>
            <p className="opacity-90 max-w-2xl mx-auto">
              Every swap makes a difference. Here's how our community is changing fashion for the better.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2.3M</div>
              <div className="opacity-90">Pounds of Textiles Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">89%</div>
              <div className="opacity-90">Carbon Footprint Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">156</div>
              <div className="opacity-90">Countries Represented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-soft-gray">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Sustainable Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of fashion enthusiasts who are making a positive impact on the planet, 
            one swap at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/add-item">
              <Button variant="hero" size="lg">
                List Your First Item
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/browse">
              <Button variant="outline" size="lg">
                Explore Items
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;