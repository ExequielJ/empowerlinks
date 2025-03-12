
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Clock, DollarSign, ExternalLink } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Senior Product Designer',
    company: 'Adobe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/220px-Adobe_Corporate_Logo.png',
    location: 'San Francisco, CA (Remote)',
    type: 'Full-time',
    salary: '$120K - $150K',
    tags: ['UX/UI', 'Design Systems', 'Leadership'],
    featured: true,
    postedAt: '3 days ago'
  },
  {
    id: 2,
    title: 'Engineering Manager',
    company: 'Spotify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png',
    location: 'New York, NY (Hybrid)',
    type: 'Full-time',
    salary: '$160K - $185K',
    tags: ['Engineering', 'Leadership', 'Agile'],
    featured: true,
    postedAt: '2 days ago'
  },
  {
    id: 3,
    title: 'Marketing Director',
    company: 'Salesforce',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$130K - $160K',
    tags: ['Marketing', 'Strategy', 'Leadership'],
    featured: false,
    postedAt: '1 week ago'
  }
];

const FeaturedJobs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Jobs</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover opportunities from companies committed to gender equality and women's professional growth
            </p>
          </div>
          <Link to="/jobs">
            <Button variant="ghost" className="mt-4 md:mt-0 group">
              View all jobs 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Card 
              key={job.id} 
              className={`overflow-hidden transition-all duration-300 hover:shadow-md ${
                job.featured ? 'ring-1 ring-primary/20 bg-primary/5' : ''
              }`}
            >
              <CardContent className="p-6">
                {job.featured && (
                  <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">
                    Featured
                  </Badge>
                )}

                <div className="flex items-start mb-4">
                  <div className="h-12 w-12 rounded overflow-hidden border border-border flex-shrink-0 bg-white p-1">
                    <img 
                      src={job.logo} 
                      alt={job.company} 
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
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

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 bg-secondary/10 text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button className="w-full" variant="default" size="sm">
                    Apply Now
                  </Button>
                  <Button variant="outline" size="icon" className="flex-shrink-0">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
