
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, Twitter, Linkedin, Instagram, Facebook, Heart 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink">
                EmpowerLinks
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              A professional networking platform designed exclusively for women to connect, 
              grow, and succeed together.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Platform</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  My Profile
                </Link>
              </li>
              <li>
                <Link to="/networking" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Networking
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Jobs Board
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Partners
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} EmpowerLinks. All rights reserved. Made with{' '}
            <Heart className="h-4 w-4 inline-block text-red-500" /> for women professionals.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
