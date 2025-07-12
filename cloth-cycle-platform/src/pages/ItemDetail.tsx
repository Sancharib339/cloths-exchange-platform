import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  Share2, 
  Star, 
  MapPin, 
  Calendar, 
  ShoppingBag, 
  MessageCircle,
  ArrowLeft,
  Repeat
} from "lucide-react";

const ItemDetail = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  // Mock item data
  const item = {
    id,
    title: "Vintage Denim Jacket",
    description: "A beautiful vintage denim jacket in excellent condition. This classic piece has been well-maintained and is perfect for layering. Features original hardware and a timeless design that never goes out of style.",
    category: "Outerwear",
    subcategory: "Jackets",
    size: "M",
    condition: "Excellent",
    brand: "Levi's",
    color: "Blue",
    material: "100% Cotton Denim",
    points: 450,
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80"
    ],
    uploader: {
      name: "Sarah M.",
      rating: 4.8,
      reviews: 23,
      joinDate: "Member since 2023",
      location: "San Francisco, CA"
    },
    tags: ["vintage", "classic", "sustainable", "denim"],
    listedDate: "2024-01-10",
    views: 156,
    likes: 23,
    available: true
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        {/* Back Button */}
        <Link to="/browse" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Browse</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={item.images[currentImage]}
                alt={item.title}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
              />
              {!item.available && (
                <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                  <Badge className="bg-red-500 text-white">No Longer Available</Badge>
                </div>
              )}
            </div>
            
            <div className="flex space-x-2">
              {item.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`flex-1 h-20 rounded-md overflow-hidden border-2 ${
                    currentImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${item.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-2xl lg:text-3xl font-bold">{item.title}</h1>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <Badge className="bg-sage text-foreground">{item.condition}</Badge>
                <Badge variant="outline">{item.category}</Badge>
                <span className="text-sm text-muted-foreground">Size {item.size}</span>
              </div>

              <div className="text-3xl font-bold text-primary mb-4">
                {item.points} Points
              </div>
            </div>

            <Separator />

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Brand</p>
                <p className="font-medium">{item.brand}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Color</p>
                <p className="font-medium">{item.color}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Material</p>
                <p className="font-medium">{item.material}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Listed</p>
                <p className="font-medium">{item.listedDate}</p>
              </div>
            </div>

            <Separator />

            {/* Action Buttons */}
            {item.available ? (
              <div className="space-y-3">
                <Button className="w-full" size="lg" variant="hero">
                  <Repeat className="h-5 w-5" />
                  Request Swap
                </Button>
                <Button className="w-full" size="lg" variant="outline">
                  <ShoppingBag className="h-5 w-5" />
                  Redeem with Points
                </Button>
                <Button className="w-full" variant="ghost">
                  <MessageCircle className="h-5 w-5" />
                  Message Seller
                </Button>
              </div>
            ) : (
              <Button className="w-full" size="lg" disabled>
                Item No Longer Available
              </Button>
            )}

            <Separator />

            {/* Seller Info */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>{item.uploader.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">{item.uploader.name}</p>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{item.uploader.rating}</span>
                      <span className="text-sm text-muted-foreground">({item.uploader.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{item.uploader.location}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Description and Details */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {item.description}
                </p>
                
                <h3 className="font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Item Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Views</span>
                    <span className="font-medium">{item.views}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Likes</span>
                    <span className="font-medium">{item.likes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Listed</span>
                    <span className="font-medium">{item.listedDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;