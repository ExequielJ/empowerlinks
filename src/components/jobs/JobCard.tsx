
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign, Bookmark, Share2 } from 'lucide-react';

interface JobCardProps {
  job: {
    id: number;
    title: string;
    company: string;
    logo: string;
    location: string;
    type: string;
    salary: string;
    description: string;
    requirements: string[];
    benefits: string[];
    tags: string[];
    featured: boolean;
    postedAt: string;
  };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 hover:shadow-md w-full ${
        job.featured ? 'ring-1 ring-primary/20 bg-primary/5' : ''
      }`}
    >
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start">
          <div className="h-16 w-16 rounded overflow-hidden border border-border flex-shrink-0 bg-white p-2 mb-4 md:mb-0">
            <img 
              src={job.logo} 
              alt={job.company} 
              className="h-full w-full object-contain"
            />
          </div>
          
          <div className="md:ml-4 flex-grow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-semibold text-xl">{job.title}</h3>
                <p className="text-muted-foreground">{job.company}</p>
              </div>
              
              <div className="flex items-center space-x-2 mt-2 md:mt-0">
                {job.featured && (
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                    Featured
                  </Badge>
                )}
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{job.type} • Posted {job.postedAt}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <DollarSign className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{job.salary}</span>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-muted-foreground text-sm line-clamp-2">{job.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {job.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 bg-secondary/10 text-secondary-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <div className="text-xs text-muted-foreground">
                Be one of the first 10 applicants
              </div>
              <div className="flex space-x-2">
                <Button className="flex-1 sm:flex-initial" variant="outline" size="sm">
                  View Details
                </Button>
                <Button className="flex-1 sm:flex-initial" size="sm">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
