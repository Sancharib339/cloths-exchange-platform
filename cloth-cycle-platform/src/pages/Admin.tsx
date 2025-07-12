import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  ShoppingBag, 
  Package, 
  Search, 
  MoreHorizontal,
  CheckCircle,
  XCircle,
  AlertTriangle
} from "lucide-react";

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      id: 1,
      name: "Sarah Mitchell",
      email: "sarah.m@email.com",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c0763d3d?auto=format&fit=crop&w=100&q=80",
      points: 1250,
      swaps: 23,
      status: "active",
      joinDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Emma Rodriguez",
      email: "emma.r@email.com",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
      points: 890,
      swaps: 15,
      status: "active",
      joinDate: "2024-02-20"
    },
    {
      id: 3,
      name: "Alex Chen",
      email: "alex.c@email.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
      points: 2100,
      swaps: 45,
      status: "suspended",
      joinDate: "2023-11-08"
    },
    {
      id: 4,
      name: "Maria Lopez",
      email: "maria.l@email.com",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
      points: 670,
      swaps: 8,
      status: "active",
      joinDate: "2024-03-12"
    }
  ];

  const orders = [
    {
      id: "ORD001",
      user: "Sarah Mitchell",
      items: ["Vintage Denim Jacket", "Silk Blouse"],
      total: 850,
      status: "completed",
      date: "2024-03-15"
    },
    {
      id: "ORD002", 
      user: "Emma Rodriguez",
      items: ["Designer Handbag"],
      total: 680,
      status: "pending",
      date: "2024-03-14"
    },
    {
      id: "ORD003",
      user: "Alex Chen", 
      items: ["Cozy Knit Sweater", "Classic Sneakers"],
      total: 600,
      status: "processing",
      date: "2024-03-13"
    }
  ];

  const listings = [
    {
      id: 1,
      title: "Vintage Leather Boots",
      user: "Sarah Mitchell",
      category: "Footwear",
      points: 420,
      status: "pending",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=100&q=80",
      submittedDate: "2024-03-15"
    },
    {
      id: 2,
      title: "Bohemian Maxi Dress",
      user: "Emma Rodriguez", 
      category: "Dresses",
      points: 380,
      status: "approved",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=100&q=80",
      submittedDate: "2024-03-14"
    },
    {
      id: 3,
      title: "Premium Watch",
      user: "Alex Chen",
      category: "Accessories", 
      points: 750,
      status: "rejected",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=100&q=80",
      submittedDate: "2024-03-13"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
      case "approved":
      case "completed":
        return <Badge className="bg-green-100 text-green-800">{status}</Badge>;
      case "pending":
      case "processing":
        return <Badge className="bg-yellow-100 text-yellow-800">{status}</Badge>;
      case "suspended":
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">{status}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-soft-gray">
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Panel</h1>
          <p className="text-muted-foreground">
            Manage users, orders, and listings for the ReWear platform.
          </p>
        </div>

        {/* Navigation Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="users" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Manage Users</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center space-x-2">
              <ShoppingBag className="h-4 w-4" />
              <span>Manage Orders</span>
            </TabsTrigger>
            <TabsTrigger value="listings" className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span>Manage Listings</span>
            </TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Manage Users</span>
                  <div className="relative w-72">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg bg-background">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h3 className="font-medium">{user.name}</h3>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>{user.points} points</span>
                            <span>{user.swaps} swaps</span>
                            <span>Joined {user.joinDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(user.status)}
                        <div className="flex space-x-1">
                          <Button variant="outline" size="sm">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Manage Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg bg-background">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium">{order.id}</h3>
                          {getStatusBadge(order.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">Customer: {order.user}</p>
                        <p className="text-sm text-muted-foreground">
                          Items: {order.items.join(", ")}
                        </p>
                        <p className="text-xs text-muted-foreground">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-primary">{order.total} pts</div>
                        <div className="flex space-x-1 mt-2">
                          <Button variant="outline" size="sm">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <AlertTriangle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Listings Tab */}
          <TabsContent value="listings">
            <Card>
              <CardHeader>
                <CardTitle>Manage Listings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {listings.map((listing) => (
                    <div key={listing.id} className="flex items-center justify-between p-4 border rounded-lg bg-background">
                      <div className="flex items-center space-x-4">
                        <img
                          src={listing.image}
                          alt={listing.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="space-y-1">
                          <h3 className="font-medium">{listing.title}</h3>
                          <p className="text-sm text-muted-foreground">By {listing.user}</p>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">{listing.category}</Badge>
                            <span className="text-sm text-primary font-medium">{listing.points} pts</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Submitted {listing.submittedDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(listing.status)}
                        <div className="flex space-x-1">
                          <Button variant="outline" size="sm">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;