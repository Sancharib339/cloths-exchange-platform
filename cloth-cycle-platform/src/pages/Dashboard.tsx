import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { 
  Star, 
  ShoppingBag, 
  Repeat, 
  TrendingUp, 
  Plus, 
  Eye, 
  MessageCircle,
  Calendar,
  Award
} from "lucide-react";

const Dashboard = () => {
  const userStats = {
    points: 1250,
    itemsListed: 8,
    swapsCompleted: 12,
    impactScore: 89
  };

  const recentItems = [
    {
      id: 1,
      title: "Vintage Band T-Shirt",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
      status: "active",
      views: 23,
      likes: 5
    },
    {
      id: 2,
      title: "Designer Jeans",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80",
      status: "pending",
      views: 12,
      likes: 2
    },
    {
      id: 3,
      title: "Summer Cardigan",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=400&q=80",
      status: "swapped",
      views: 45,
      likes: 12
    }
  ];

  const activeSwaps = [
    {
      id: 1,
      otherUser: "Sarah M.",
      theirItem: "Floral Dress",
      yourItem: "Denim Jacket",
      status: "pending",
      date: "2024-01-15"
    },
    {
      id: 2,
      otherUser: "Alex R.",
      theirItem: "Leather Boots",
      yourItem: "Winter Coat",
      status: "accepted",
      date: "2024-01-12"
    }
  ];

  return (
    <div className="min-h-screen bg-soft-gray">
      <div className="container px-4 py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h1 className="text-2xl font-bold">John Doe</h1>
                    <p className="text-muted-foreground">Member since January 2024</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">4.9</span>
                      <span className="text-sm text-muted-foreground">(25 reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Link to="/add-item">
                    <Button variant="hero">
                      <Plus className="h-4 w-4" />
                      List New Item
                    </Button>
                  </Link>
                  <Button variant="outline">Edit Profile</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Points Balance</p>
                  <p className="text-2xl font-bold text-primary">{userStats.points.toLocaleString()}</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Items Listed</p>
                  <p className="text-2xl font-bold">{userStats.itemsListed}</p>
                </div>
                <div className="h-12 w-12 bg-sage/20 rounded-full flex items-center justify-center">
                  <ShoppingBag className="h-6 w-6 text-sage-dark" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Swaps Completed</p>
                  <p className="text-2xl font-bold">{userStats.swapsCompleted}</p>
                </div>
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Repeat className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Impact Score</p>
                  <p className="text-2xl font-bold text-primary">{userStats.impactScore}%</p>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="items" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="items">My Items</TabsTrigger>
            <TabsTrigger value="swaps">Active Swaps</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="items" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Listed Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                        <Badge 
                          className={`absolute top-2 right-2 ${
                            item.status === 'active' ? 'bg-green-500' :
                            item.status === 'pending' ? 'bg-yellow-500' :
                            'bg-sage'
                          }`}
                        >
                          {item.status}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{item.views} views</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4" />
                            <span>{item.likes} likes</span>
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-3">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Eye className="h-4 w-4" />
                            View
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            Edit
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="swaps" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Swap Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeSwaps.map((swap) => (
                    <Card key={swap.id} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarFallback>{swap.otherUser.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{swap.otherUser}</p>
                            <p className="text-sm text-muted-foreground">
                              Wants to swap "{swap.theirItem}" for your "{swap.yourItem}"
                            </p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{swap.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={swap.status === 'pending' ? 'secondary' : 'default'}>
                            {swap.status}
                          </Badge>
                          {swap.status === 'pending' && (
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">Decline</Button>
                              <Button size="sm">Accept</Button>
                            </div>
                          )}
                          <Button variant="ghost" size="icon">
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Swap History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Your completed swaps will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;