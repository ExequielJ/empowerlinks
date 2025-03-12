
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Search, MapPin, Clock, Users, Filter, Bookmark, Star, Video, Globe } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomButton from '@/components/ui/CustomButton';

// Mock events data
const upcomingEvents = [
  {
    id: 1,
    title: "Women in Tech Leadership Summit",
    organizer: "TechWomen Foundation",
    date: "June 15-16, 2023",
    time: "9:00 AM - 5:00 PM EDT",
    location: "New York Marriott Marquis, NY",
    type: "In-person",
    price: "$249",
    attendees: 350,
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Join us for a two-day immersive event featuring keynotes, panels, and workshops focused on advancing women in technology leadership roles."
  },
  {
    id: 2,
    title: "Mastering Negotiation Skills Workshop",
    organizer: "CareerBoost Network",
    date: "May 25, 2023",
    time: "1:00 PM - 3:30 PM EDT",
    location: "Virtual Event",
    type: "Online",
    price: "$75",
    attendees: 120,
    image: "https://images.unsplash.com/photo-1530099486328-e021101a494a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Learn proven negotiation strategies and techniques specifically tailored for women professionals in this interactive virtual workshop."
  },
  {
    id: 3,
    title: "Female Founders Pitch Night",
    organizer: "Venture Her",
    date: "June 8, 2023",
    time: "6:00 PM - 9:00 PM PDT",
    location: "Venture Her Hub, San Francisco, CA",
    type: "In-person",
    price: "Free",
    attendees: 90,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Watch 10 women-led startups pitch their businesses to investors and network with fellow entrepreneurs and investors."
  },
  {
    id: 4,
    title: "Diversity in AI Panel Discussion",
    organizer: "Women in Data Science",
    date: "May 20, 2023",
    time: "12:00 PM - 1:30 PM EDT",
    location: "Virtual Event",
    type: "Online",
    price: "Free",
    attendees: 220,
    image: "https://images.unsplash.com/photo-1633077705117-85ab09c43632?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Join leading experts as they discuss the importance of diversity in artificial intelligence and machine learning."
  },
  {
    id: 5,
    title: "Work-Life Balance Retreat",
    organizer: "Professional Women's Network",
    date: "July 8-10, 2023",
    time: "All Day",
    location: "Cascade Mountain Resort, Colorado",
    type: "In-person",
    price: "$599",
    attendees: 75,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A three-day retreat focused on mindfulness, stress management, and achieving work-life harmony for professional women."
  },
];

const eventCategories = [
  'Technology', 'Leadership', 'Career Development', 'Entrepreneurship', 'Networking', 'Wellness', 'Finance'
];

const popularCities = [
  'New York', 'San Francisco', 'Chicago', 'Austin', 'Seattle', 'Boston', 'Remote/Virtual'
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [savedEvents, setSavedEvents] = useState<number[]>([]);

  const toggleSaveEvent = (eventId: number) => {
    if (savedEvents.includes(eventId)) {
      setSavedEvents(savedEvents.filter(id => id !== eventId));
    } else {
      setSavedEvents([...savedEvents, eventId]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Discover Events</h1>
              <p className="text-muted-foreground">Find networking opportunities, workshops, and conferences</p>
            </div>

            <div className="bg-gradient-to-r from-brand-purple-light to-brand-pink-light rounded-lg p-8 mb-10">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-2">Find Your Next Professional Event</h2>
                  <p className="text-muted-foreground">Connect with like-minded professionals at events designed for women</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-5 relative">
                      <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input 
                        placeholder="Search by event name, topic, or organizer" 
                        className="pl-10 pr-4"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="md:col-span-5 relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input placeholder="Location or Virtual" className="pl-10 pr-4" />
                    </div>
                    <div className="md:col-span-2">
                      <CustomButton className="w-full" gradient>
                        Find Events
                      </CustomButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Tabs defaultValue="upcoming" className="mb-8">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
                          onClick={() => toggleSaveEvent(event.id)}
                        >
                          <Bookmark 
                            className="h-5 w-5" 
                            fill={savedEvents.includes(event.id) ? "currentColor" : "none"} 
                          />
                        </Button>
                        <Badge className="absolute bottom-2 left-2 bg-background/80 backdrop-blur-sm">
                          {event.type === 'Online' ? (
                            <><Video className="h-3 w-3 mr-1" /> Virtual</>
                          ) : (
                            <><Globe className="h-3 w-3 mr-1" /> In-person</>
                          )}
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="bg-muted/50">{event.price}</Badge>
                          <div className="flex items-center text-muted-foreground text-xs">
                            <Users className="h-3 w-3 mr-1" />
                            {event.attendees} attendees
                          </div>
                        </div>
                        <CardTitle className="text-lg mt-2">{event.title}</CardTitle>
                        <CardDescription className="text-sm">by {event.organizer}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start">
                            <Calendar className="h-4 w-4 mr-2 text-muted-foreground mt-0.5" />
                            <div>
                              <div>{event.date}</div>
                              <div className="text-muted-foreground">{event.time}</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 mr-2 text-muted-foreground mt-0.5" />
                            <div>{event.location}</div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">View Details</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button variant="outline" size="lg">
                    Load More Events
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="saved" className="mt-6">
                {savedEvents.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {upcomingEvents
                      .filter(event => savedEvents.includes(event.id))
                      .map((event) => (
                        // Duplicate card structure from above for saved events
                        <Card key={event.id} className="overflow-hidden">
                          <div className="h-48 overflow-hidden relative">
                            <img 
                              src={event.image} 
                              alt={event.title} 
                              className="w-full h-full object-cover"
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
                              onClick={() => toggleSaveEvent(event.id)}
                            >
                              <Bookmark className="h-5 w-5" fill="currentColor" />
                            </Button>
                            <Badge className="absolute bottom-2 left-2 bg-background/80 backdrop-blur-sm">
                              {event.type === 'Online' ? (
                                <><Video className="h-3 w-3 mr-1" /> Virtual</>
                              ) : (
                                <><Globe className="h-3 w-3 mr-1" /> In-person</>
                              )}
                            </Badge>
                          </div>
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="bg-muted/50">{event.price}</Badge>
                              <div className="flex items-center text-muted-foreground text-xs">
                                <Users className="h-3 w-3 mr-1" />
                                {event.attendees} attendees
                              </div>
                            </div>
                            <CardTitle className="text-lg mt-2">{event.title}</CardTitle>
                            <CardDescription className="text-sm">by {event.organizer}</CardDescription>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="space-y-2 text-sm">
                              <div className="flex items-start">
                                <Calendar className="h-4 w-4 mr-2 text-muted-foreground mt-0.5" />
                                <div>
                                  <div>{event.date}</div>
                                  <div className="text-muted-foreground">{event.time}</div>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <MapPin className="h-4 w-4 mr-2 text-muted-foreground mt-0.5" />
                                <div>{event.location}</div>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full">View Details</Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Bookmark className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">No Saved Events</h3>
                    <p className="text-muted-foreground mb-6">You haven't saved any events yet</p>
                    <Button variant="outline">Browse Upcoming Events</Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="past" className="mt-6">
                <div className="text-center py-12">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Past Events</h3>
                  <p className="text-muted-foreground mb-6">View your event history and access recordings</p>
                  <Button variant="outline">View Your Event History</Button>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Browse by Category</h2>
              <div className="flex flex-wrap gap-3">
                {eventCategories.map((category) => (
                  <Button key={category} variant="outline" className="rounded-full">
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-12 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Popular Locations</h2>
              <div className="flex flex-wrap gap-3">
                {popularCities.map((city) => (
                  <Button key={city} variant="outline" className="rounded-full">
                    <MapPin className="h-4 w-4 mr-1" />
                    {city}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-muted rounded-lg p-8 mt-12 text-center">
              <h2 className="text-2xl font-semibold mb-2">Ready to Host Your Own Event?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Create workshops, webinars, or networking events for professional women in your industry or area.
              </p>
              <CustomButton gradient>Create an Event</CustomButton>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
