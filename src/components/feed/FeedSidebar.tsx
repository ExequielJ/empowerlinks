
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Home, 
  Bell, 
  Users, 
  Briefcase, 
  Calendar, 
  Bookmark, 
  Settings, 
  HelpCircle,
  BarChart2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FeedSidebar = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border sticky top-20">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img 
              src="https://i.pravatar.cc/150?img=5" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-sm">Lisa Johnson</h3>
            <p className="text-xs text-muted-foreground">Product Designer</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
          <div className="bg-muted rounded-md p-2">
            <div className="font-medium">285</div>
            <div className="text-muted-foreground">Connections</div>
          </div>
          <div className="bg-muted rounded-md p-2">
            <div className="font-medium">48</div>
            <div className="text-muted-foreground">Post Views</div>
          </div>
        </div>
        
        <Link to="/profile">
          <Button variant="ghost" size="sm" className="w-full justify-start mb-1">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3" />
            Complete your profile
          </Button>
        </Link>
      </div>
      
      <Separator />
      
      <nav className="p-2">
        <ul className="space-y-1">
          <li>
            <Link to="/feed">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Home className="h-4 w-4 mr-3" />
                Home Feed
              </Button>
            </Link>
          </li>
          <li>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Bell className="h-4 w-4 mr-3" />
              Notifications
              <span className="ml-auto bg-primary text-white text-xs rounded-full px-1.5 py-0.5">
                4
              </span>
            </Button>
          </li>
          <li>
            <Link to="/networking">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Users className="h-4 w-4 mr-3" />
                My Network
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/jobs">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Briefcase className="h-4 w-4 mr-3" />
                Jobs
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/events">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-3" />
                Events
              </Button>
            </Link>
          </li>
          <li>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Bookmark className="h-4 w-4 mr-3" />
              Saved Items
            </Button>
          </li>
          <li>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <BarChart2 className="h-4 w-4 mr-3" />
              Analytics
            </Button>
          </li>
        </ul>
      </nav>
      
      <Separator />
      
      <div className="p-2">
        <ul className="space-y-1">
          <li>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Settings className="h-4 w-4 mr-3" />
              Settings
            </Button>
          </li>
          <li>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <HelpCircle className="h-4 w-4 mr-3" />
              Help Center
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeedSidebar;
