
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, BookOpen, User, ExternalLink } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'Navigating Salary Negotiations as a Woman in STEM',
    excerpt: 'Learn effective strategies for advocating for your worth and negotiating competitive compensation packages.',
    author: {
      name: 'Dr. Sarah Chen',
      avatar: 'https://i.pravatar.cc/150?img=32'
    },
    readTime: '8 min read',
    category: 'Career Development',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80'
  },
  {
    id: 2,
    title: 'Building Your Personal Brand on Social Media',
    excerpt: 'Discover how to leverage social platforms to establish yourself as a thought leader in your industry.',
    author: {
      name: 'Michelle Wong',
      avatar: 'https://i.pravatar.cc/150?img=23'
    },
    readTime: '12 min read',
    category: 'Personal Branding',
    thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80'
  },
  {
    id: 3,
    title: 'Women Leaders: Overcoming Imposter Syndrome',
    excerpt: 'Practical advice for recognizing and combating imposter syndrome in professional settings.',
    author: {
      name: 'Dr. Jessica Martinez',
      avatar: 'https://i.pravatar.cc/150?img=29'
    },
    readTime: '10 min read',
    category: 'Leadership',
    thumbnail: 'https://images.unsplash.com/photo-1571727226842-6716aad64f34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  }
];

const ResourcesPreview = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Resources & Insights</h2>
            <p className="text-muted-foreground max-w-2xl">
              Expert advice, guides, and tools to help you succeed in your professional journey
            </p>
          </div>
          <Link to="/resources">
            <Button variant="ghost" className="mt-4 md:mt-0 group">
              View all resources 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card 
              key={resource.id} 
              className="overflow-hidden transition-all duration-300 hover:shadow-md h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={resource.thumbnail} 
                  alt={resource.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-foreground rounded-full text-xs font-medium">
                    {resource.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{resource.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{resource.excerpt}</p>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full overflow-hidden mr-2">
                        <img 
                          src={resource.author.avatar} 
                          alt={resource.author.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium">{resource.author.name}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {resource.readTime}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm" className="text-xs">
                      <BookOpen className="h-3 w-3 mr-1" />
                      Read Article
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesPreview;
