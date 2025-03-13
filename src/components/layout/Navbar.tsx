import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CustomButton from '@/components/ui/CustomButton';
import { 
  Menu, X, Search, Bell, MessageSquare, User, Briefcase, Calendar, BookOpen, Users, LogIn, Activity
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock authentication state
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: <User className="h-4 w-4 mr-2" /> },
    { path: '/feed', label: 'Feed', icon: <Activity className="h-4 w-4 mr-2" /> },
    { path: '/profile', label: 'Profile', icon: <User className="h-4 w-4 mr-2" /> },
    { path: '/networking', label: 'Networking', icon: <Users className="h-4 w-4 mr-2" /> },
    { path: '/jobs', label: 'Jobs', icon: <Briefcase className="h-4 w-4 mr-2" /> },
    { path: '/events', label: 'Events', icon: <Calendar className="h-4 w-4 mr-2" /> },
    { path: '/resources', label: 'Resources', icon: <BookOpen className="h-4 w-4 mr-2" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink">
                SheTradesNetwork
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors duration-300 link-hover",
                  location.pathname === link.path
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon" className="relative">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <MessageSquare className="h-5 w-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 overflow-hidden">
                  <img 
                    src="https://i.pravatar.cc/150?img=5" 
                    alt="Profile" 
                    className="h-full w-full object-cover"
                  />
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="outline" size="sm">Sign In</Button>
                </Link>
                <Link to="/auth?tab=signup">
                  <CustomButton size="sm" gradient>Join Now</CustomButton>
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-background transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="pt-20 pb-6 px-4">
          <nav className="grid gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center py-3 text-base font-medium border-b border-border",
                  location.pathname === link.path
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex items-center justify-between">
            <Link to="/auth" className="w-1/2 mr-2">
              <Button variant="outline" size="sm" className="w-full">
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </Link>
            <Link to="/auth?tab=signup" className="w-1/2">
              <CustomButton size="sm" className="w-full" gradient>
                Join Now
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
