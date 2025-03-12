
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, BookOpen, Clock, User, ThumbsUp, Share2, Bookmark, Video, FileText, Download, Star } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomButton from '@/components/ui/CustomButton';

// Mock resources data
const featuredResources = [
  {
    id: 1,
    title: "Negotiating Your Worth: A Guide for Women Professionals",
    type: "Guide",
    category: "Career Development",
    author: "Sarah Johnson",
    publishedDate: "March 15, 2023",
    duration: "15 min read",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Learn proven negotiation tactics specifically tailored for women to confidently advocate for yourself in salary discussions and beyond."
  },
  {
    id: 2,
    title: "Breaking the Glass Ceiling: Leadership Strategies for Women",
    type: "Ebook",
    category: "Leadership",
    author: "Michelle Zhang",
    publishedDate: "January 8, 2023",
    duration: "45 min read",
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Practical strategies and advice from women who have successfully broken through barriers to achieve leadership positions in their industries."
  },
  {
    id: 3,
    title: "Financial Independence: Investment Basics for Women",
    type: "Course",
    category: "Finance",
    author: "Jessica Thompson",
    publishedDate: "April 2, 2023",
    duration: "6 hours",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A comprehensive introduction to investing, retirement planning, and building long-term wealth, designed specifically for women."
  },
  {
    id: 4,
    title: "Overcoming Imposter Syndrome in Tech",
    type: "Webinar",
    category: "Personal Development",
    author: "Priya Patel",
    publishedDate: "May 10, 2023",
    duration: "90 minutes",
    rating: 4.6,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Practical techniques to combat imposter syndrome and build confidence in technical roles and environments."
  },
  {
    id: 5,
    title: "Building a Personal Brand That Resonates",
    type: "Workshop",
    category: "Career Development",
    author: "Lauren Wilson",
    publishedDate: "February 28, 2023",
    duration: "3 hours",
    rating: 4.5,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Learn how to craft an authentic personal brand that showcases your strengths and helps you stand out in your field."
  },
  {
    id: 6,
    title: "Women in STEM: Overcoming Barriers and Thriving",
    type: "Panel Discussion",
    category: "Industry Insights",
    author: "Various Speakers",
    publishedDate: "April 25, 2023",
    duration: "120 minutes",
    rating: 4.9,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Insights and experiences from successful women in science, technology, engineering, and mathematics fields."
  },
];

const resourceCategories = [
  'Career Development', 'Leadership', 'Finance', 'Personal Development', 
  'Industry Insights', 'Entrepreneurship', 'Work-Life Balance', 'Technical Skills'
];

const resourceTypes = [
  'Articles', 'Guides', 'Webinars', 'Courses', 'Ebooks', 'Podcasts', 'Videos', 'Templates'
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [savedResources, setSavedResources] = useState<number[]>([]);

  const toggleSaveResource = (resourceId: number) => {
    if (savedResources.includes(resourceId)) {
      setSavedResources(savedResources.filter(id => id !== resourceId));
    } else {
      setSavedResources([...savedResources, resourceId]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Resources Hub</h1>
              <p className="text-muted-foreground">Curated content to help you grow personally and professionally</p>
            </div>

            <div className="relative mb-8">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for resources..." 
                className="pl-10 pr-4 py-6 rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="ghost" className="absolute right-3 top-2" size="icon">
                <BookOpen className="h-5 w-5" />
              </Button>
            </div>

            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="articles">Articles</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredResources.map((resource) => (
                    <Card key={resource.id} className="overflow-hidden">
                      <div className="h-40 overflow-hidden relative">
                        <img 
                          src={resource.image} 
                          alt={resource.title} 
                          className="w-full h-full object-cover"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
                          onClick={() => toggleSaveResource(resource.id)}
                        >
                          <Bookmark 
                            className="h-5 w-5" 
                            fill={savedResources.includes(resource.id) ? "currentColor" : "none"} 
                          />
                        </Button>
                        <Badge className="absolute top-2 left-2 bg-primary text-white">
                          {resource.type}
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="bg-muted/50">{resource.category}</Badge>
                          <div className="flex items-center text-amber-500">
                            <Star className="h-4 w-4 fill-current mr-1" />
                            <span>{resource.rating}</span>
                            <span className="text-xs text-muted-foreground ml-1">({resource.reviews})</span>
                          </div>
                        </div>
                        <CardTitle className="text-lg mt-2 line-clamp-2">{resource.title}</CardTitle>
                        <CardDescription className="flex items-center text-sm">
                          <User className="h-3 w-3 mr-1" />
                          {resource.author}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex justify-between text-sm text-muted-foreground mb-3">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {resource.duration}
                          </div>
                          <div>{resource.publishedDate}</div>
                        </div>
                        <p className="text-sm line-clamp-2">{resource.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          {resource.type === 'Guide' || resource.type === 'Ebook' ? (
                            <><Download className="h-4 w-4 mr-2" /> Download</>
                          ) : resource.type === 'Course' || resource.type === 'Webinar' || resource.type === 'Workshop' ? (
                            <><Video className="h-4 w-4 mr-2" /> Watch Now</>
                          ) : (
                            <><FileText className="h-4 w-4 mr-2" /> Read More</>
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button variant="outline" size="lg">
                    Load More Resources
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="articles" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredResources
                    .filter(resource => ['Guide', 'Ebook'].includes(resource.type))
                    .map((resource) => (
                      <Card key={resource.id} className="overflow-hidden">
                        {/* Card content same as above */}
                        <div className="h-40 overflow-hidden relative">
                          <img 
                            src={resource.image} 
                            alt={resource.title} 
                            className="w-full h-full object-cover"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
                            onClick={() => toggleSaveResource(resource.id)}
                          >
                            <Bookmark 
                              className="h-5 w-5" 
                              fill={savedResources.includes(resource.id) ? "currentColor" : "none"} 
                            />
                          </Button>
                          <Badge className="absolute top-2 left-2 bg-primary text-white">
                            {resource.type}
                          </Badge>
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="bg-muted/50">{resource.category}</Badge>
                            <div className="flex items-center text-amber-500">
                              <Star className="h-4 w-4 fill-current mr-1" />
                              <span>{resource.rating}</span>
                              <span className="text-xs text-muted-foreground ml-1">({resource.reviews})</span>
                            </div>
                          </div>
                          <CardTitle className="text-lg mt-2 line-clamp-2">{resource.title}</CardTitle>
                          <CardDescription className="flex items-center text-sm">
                            <User className="h-3 w-3 mr-1" />
                            {resource.author}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex justify-between text-sm text-muted-foreground mb-3">
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {resource.duration}
                            </div>
                            <div>{resource.publishedDate}</div>
                          </div>
                          <p className="text-sm line-clamp-2">{resource.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">
                            <Download className="h-4 w-4 mr-2" /> Download
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="videos" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredResources
                    .filter(resource => ['Webinar', 'Panel Discussion'].includes(resource.type))
                    .map((resource) => (
                      <Card key={resource.id} className="overflow-hidden">
                        {/* Card content same as above */}
                        <div className="h-40 overflow-hidden relative">
                          <img 
                            src={resource.image} 
                            alt={resource.title} 
                            className="w-full h-full object-cover"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
                            onClick={() => toggleSaveResource(resource.id)}
                          >
                            <Bookmark 
                              className="h-5 w-5" 
                              fill={savedResources.includes(resource.id) ? "currentColor" : "none"} 
                            />
                          </Button>
                          <Badge className="absolute top-2 left-2 bg-primary text-white">
                            {resource.type}
                          </Badge>
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="bg-muted/50">{resource.category}</Badge>
                            <div className="flex items-center text-amber-500">
                              <Star className="h-4 w-4 fill-current mr-1" />
                              <span>{resource.rating}</span>
                              <span className="text-xs text-muted-foreground ml-1">({resource.reviews})</span>
                            </div>
                          </div>
                          <CardTitle className="text-lg mt-2 line-clamp-2">{resource.title}</CardTitle>
                          <CardDescription className="flex items-center text-sm">
                            <User className="h-3 w-3 mr-1" />
                            {resource.author}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex justify-between text-sm text-muted-foreground mb-3">
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {resource.duration}
                            </div>
                            <div>{resource.publishedDate}</div>
                          </div>
                          <p className="text-sm line-clamp-2">{resource.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">
                            <Video className="h-4 w-4 mr-2" /> Watch Now
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="courses" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredResources
                    .filter(resource => ['Course', 'Workshop'].includes(resource.type))
                    .map((resource) => (
                      <Card key={resource.id} className="overflow-hidden">
                        {/* Card content same as above */}
                        <div className="h-40 overflow-hidden relative">
                          <img 
                            src={resource.image} 
                            alt={resource.title} 
                            className="w-full h-full object-cover"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
                            onClick={() => toggleSaveResource(resource.id)}
                          >
                            <Bookmark 
                              className="h-5 w-5" 
                              fill={savedResources.includes(resource.id) ? "currentColor" : "none"} 
                            />
                          </Button>
                          <Badge className="absolute top-2 left-2 bg-primary text-white">
                            {resource.type}
                          </Badge>
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="bg-muted/50">{resource.category}</Badge>
                            <div className="flex items-center text-amber-500">
                              <Star className="h-4 w-4 fill-current mr-1" />
                              <span>{resource.rating}</span>
                              <span className="text-xs text-muted-foreground ml-1">({resource.reviews})</span>
                            </div>
                          </div>
                          <CardTitle className="text-lg mt-2 line-clamp-2">{resource.title}</CardTitle>
                          <CardDescription className="flex items-center text-sm">
                            <User className="h-3 w-3 mr-1" />
                            {resource.author}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex justify-between text-sm text-muted-foreground mb-3">
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {resource.duration}
                            </div>
                            <div>{resource.publishedDate}</div>
                          </div>
                          <p className="text-sm line-clamp-2">{resource.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">
                            Enroll Now
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="saved" className="mt-6">
                {savedResources.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredResources
                      .filter(resource => savedResources.includes(resource.id))
                      .map((resource) => (
                        <Card key={resource.id} className="overflow-hidden">
                          {/* Card content same as above */}
                          <div className="h-40 overflow-hidden relative">
                            <img 
                              src={resource.image} 
                              alt={resource.title} 
                              className="w-full h-full object-cover"
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
                              onClick={() => toggleSaveResource(resource.id)}
                            >
                              <Bookmark className="h-5 w-5" fill="currentColor" />
                            </Button>
                            <Badge className="absolute top-2 left-2 bg-primary text-white">
                              {resource.type}
                            </Badge>
                          </div>
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="bg-muted/50">{resource.category}</Badge>
                              <div className="flex items-center text-amber-500">
                                <Star className="h-4 w-4 fill-current mr-1" />
                                <span>{resource.rating}</span>
                                <span className="text-xs text-muted-foreground ml-1">({resource.reviews})</span>
                              </div>
                            </div>
                            <CardTitle className="text-lg mt-2 line-clamp-2">{resource.title}</CardTitle>
                            <CardDescription className="flex items-center text-sm">
                              <User className="h-3 w-3 mr-1" />
                              {resource.author}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="flex justify-between text-sm text-muted-foreground mb-3">
                              <div className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {resource.duration}
                              </div>
                              <div>{resource.publishedDate}</div>
                            </div>
                            <p className="text-sm line-clamp-2">{resource.description}</p>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full">
                              {resource.type === 'Guide' || resource.type === 'Ebook' ? (
                                <><Download className="h-4 w-4 mr-2" /> Download</>
                              ) : resource.type === 'Course' || resource.type === 'Webinar' || resource.type === 'Workshop' ? (
                                <><Video className="h-4 w-4 mr-2" /> Watch Now</>
                              ) : (
                                <><FileText className="h-4 w-4 mr-2" /> Read More</>
                              )}
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Bookmark className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">No Saved Resources</h3>
                    <p className="text-muted-foreground mb-6">You haven't saved any resources yet</p>
                    <Button variant="outline">Browse All Resources</Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>

            <div className="mt-12 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Browse by Category</h2>
              <div className="flex flex-wrap gap-3">
                {resourceCategories.map((category) => (
                  <Button key={category} variant="outline" className="rounded-full">
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-12 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Content Types</h2>
              <div className="flex flex-wrap gap-3">
                {resourceTypes.map((type) => (
                  <Button key={type} variant="outline" className="rounded-full">
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-purple-light to-brand-pink-light rounded-lg p-8 mt-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-2">Share Your Knowledge</h2>
                <p className="mb-6">
                  Have expertise to share? Contribute articles, guides, or other resources to help women in their professional journey.
                </p>
                <CustomButton gradient>Become a Contributor</CustomButton>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
