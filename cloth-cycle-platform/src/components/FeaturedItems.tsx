import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";

const featuredItems = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    category: "Outerwear",
    size: "M",
    condition: "Excellent",
    points: 450,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=400&q=80",
    uploader: "Sarah M.",
  },
  {
    id: 2,
    title: "Floral Summer Dress",
    category: "Dresses",
    size: "S",
    condition: "Like New",
    points: 380,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=400&q=80",
    uploader: "Emma K.",
  },
  {
    id: 3,
    title: "Cozy Knit Sweater",
    category: "Tops",
    size: "L",
    condition: "Good",
    points: 320,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=400&q=80",
    uploader: "Alex R.",
  },
  {
    id: 4,
    title: "Designer Handbag",
    category: "Accessories",
    size: "One Size",
    condition: "Excellent",
    points: 680,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80",
    uploader: "Maria L.",
  },
];

const FeaturedItems = () => {
  return (
    <section className="py-16 bg-soft-gray">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Items</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover amazing clothing pieces from our community. Each item is carefully curated 
            and ready for its next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Badge className="absolute top-2 left-2 bg-sage text-foreground">
                    {item.condition}
                  </Badge>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">Size {item.size}</span>
                  </div>

                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">by {item.uploader}</span>
                    </div>
                    <div className="text-primary font-semibold">
                      {item.points} pts
                    </div>
                  </div>

                  <Link to={`/item/${item.id}`}>
                    <Button className="w-full" variant="outline">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/browse">
            <Button variant="eco" size="lg">
              Browse All Items
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;