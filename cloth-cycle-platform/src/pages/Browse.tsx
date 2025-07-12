import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Heart, Search, Filter, Star, Grid, List } from "lucide-react";

const Browse = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedCondition, setSelectedCondition] = useState("all");
  const [pointRange, setPointRange] = useState([0, 1000]);

  const categories = ["All", "Tops", "Bottoms", "Outerwear", "Dresses", "Accessories", "Footwear"];
  const sizes = ["All", "XS", "S", "M", "L", "XL", "XXL", "One Size"];
  const conditions = ["All", "Like New", "Excellent", "Good", "Fair"];

  const items = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      category: "Outerwear",
      size: "M",
      condition: "Excellent",
      points: 450,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=400&q=80",
      uploader: "Sarah M.",
      rating: 4.9,
      liked: false
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
      rating: 4.7,
      liked: true
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
      rating: 4.8,
      liked: false
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
      rating: 5.0,
      liked: false
    },
    {
      id: 5,
      title: "Classic White Sneakers",
      category: "Footwear",
      size: "9",
      condition: "Good",
      points: 280,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80",
      uploader: "John D.",
      rating: 4.6,
      liked: false
    },
    {
      id: 6,
      title: "Silk Blouse",
      category: "Tops",
      size: "M",
      condition: "Like New",
      points: 420,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=400&q=80",
      uploader: "Lisa P.",
      rating: 4.9,
      liked: true
    }
  ];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSize = selectedSize === "all" || item.size === selectedSize;
    const matchesCondition = selectedCondition === "all" || item.condition === selectedCondition;
    const matchesPoints = item.points >= pointRange[0] && item.points <= pointRange[1];
    
    return matchesSearch && matchesCategory && matchesSize && matchesCondition && matchesPoints;
  });

  const ItemCard = ({ item }: { item: typeof items[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className={`w-full object-cover rounded-t-lg ${viewMode === 'grid' ? 'h-48' : 'h-32'}`}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-background/80 hover:bg-background"
          >
            <Heart className={`h-4 w-4 ${item.liked ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          <Badge className="absolute top-2 left-2 bg-sage text-foreground">
            {item.condition}
          </Badge>
        </div>

        <div className={`p-4 ${viewMode === 'list' ? 'flex items-center space-x-4' : ''}`}>
          <div className={viewMode === 'list' ? 'flex-1' : ''}>
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
                <span className="text-sm text-muted-foreground">{item.rating} • {item.uploader}</span>
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
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-soft-gray">
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Items</h1>
          <p className="text-muted-foreground">
            Discover amazing clothing pieces from our sustainable fashion community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Filter className="h-5 w-5" />
                  <h2 className="text-lg font-semibold">Filters</h2>
                </div>

                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Size */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Size</label>
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {sizes.map((size) => (
                          <SelectItem key={size} value={size.toLowerCase()}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Condition */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Condition</label>
                    <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {conditions.map((condition) => (
                          <SelectItem key={condition} value={condition.toLowerCase()}>
                            {condition}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Point Range */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Points Range: {pointRange[0]} - {pointRange[1]}
                    </label>
                    <Slider
                      value={pointRange}
                      onValueChange={setPointRange}
                      max={1000}
                      min={0}
                      step={50}
                      className="w-full"
                    />
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                      setSelectedSize("all");
                      setSelectedCondition("all");
                      setPointRange([0, 1000]);
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Items Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                {filteredItems.length} items found
              </p>
              
              <div className="flex items-center space-x-2">
                <Select defaultValue="newest">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="price-low">Points: Low to High</SelectItem>
                    <SelectItem value="price-high">Points: High to Low</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Items */}
            {filteredItems.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredItems.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No items found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search terms.
                </p>
                <Button variant="outline" onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedSize("all");
                  setSelectedCondition("all");
                  setPointRange([0, 1000]);
                }}>
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;