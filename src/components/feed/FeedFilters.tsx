
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Users, Briefcase, Calendar, Hash, X } from 'lucide-react';

interface FeedFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const FeedFilters: React.FC<FeedFiltersProps> = ({ 
  activeFilter, 
  setActiveFilter, 
  searchTerm, 
  setSearchTerm 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border border-border space-y-3">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search posts, people, hashtags..."
          className="pl-9 pr-9"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1 h-8 w-8"
            onClick={() => setSearchTerm('')}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
        <TabsList className="w-full justify-between bg-muted/50 p-1">
          <TabsTrigger 
            value="all" 
            className="data-[state=active]:bg-background flex-1 py-1.5"
          >
            All
          </TabsTrigger>
          <TabsTrigger 
            value="featured" 
            className="data-[state=active]:bg-background flex-1 py-1.5"
          >
            Featured
          </TabsTrigger>
          <TabsTrigger 
            value="people" 
            className="data-[state=active]:bg-background flex-1 py-1.5 hidden sm:flex"
          >
            <Users className="h-4 w-4 mr-1 hidden sm:block" />
            People
          </TabsTrigger>
          <TabsTrigger 
            value="jobs" 
            className="data-[state=active]:bg-background flex-1 py-1.5"
          >
            <Briefcase className="h-4 w-4 mr-1 hidden sm:block" />
            Jobs
          </TabsTrigger>
          <TabsTrigger 
            value="events" 
            className="data-[state=active]:bg-background flex-1 py-1.5"
          >
            <Calendar className="h-4 w-4 mr-1 hidden sm:block" />
            Events
          </TabsTrigger>
          <TabsTrigger 
            value="topics" 
            className="data-[state=active]:bg-background flex-1 py-1.5 hidden sm:flex"
          >
            <Hash className="h-4 w-4 mr-1 hidden sm:block" />
            Topics
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default FeedFilters;
