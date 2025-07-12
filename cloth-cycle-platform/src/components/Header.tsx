import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserCircle, ShoppingBag, Plus, Home, Search } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-sage"></div>
          <span className="text-xl font-bold text-primary">ReWear</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link 
            to="/browse" 
            className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
              isActive('/browse') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Search className="h-4 w-4" />
            <span>Browse Items</span>
          </Link>
          <Link 
            to="/add-item" 
            className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
              isActive('/add-item') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Plus className="h-4 w-4" />
            <span>List Item</span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2">
            <Badge variant="secondary" className="bg-sage-light">
              🌟 1,250 Points
            </Badge>
          </div>
          
          <Link to="/dashboard">
            <Button variant="ghost" size="icon">
              <UserCircle className="h-5 w-5" />
            </Button>
          </Link>

          <Link to="/login">
            <Button variant="outline" className="hidden md:flex">
              Sign In
            </Button>
          </Link>
          
          <Link to="/register">
            <Button className="hidden md:flex">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;