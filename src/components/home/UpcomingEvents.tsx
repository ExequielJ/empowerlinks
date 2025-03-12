
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Women in Tech Leadership Summit',
    organizer: 'WomenTechNetwork',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    date: 'Jun 15, 2023',
    time: '9:00 AM - 5:00 PM',
    location: 'San Francisco, CA',
    attendees: 248,
    ticketType: 'Paid',
    price: '$99',
    category: 'Conference'
  },
  {
    id: 2,
    title: 'Negotiation Skills Workshop for Women',
    organizer: 'Career Advancement Association',
    image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    date: 'Jun 22, 2023',
    time: '6:30 PM - 8:30 PM',
    location: 'Virtual',
    attendees: 86,
    ticketType: 'Free',
    category: 'Workshop'
  },
  {
    id: 3,
    title: 'Women Entrepreneurs Networking Mixer',
    organizer: 'Female Founders Alliance',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80',
    date: 'Jul 5, 2023',
    time: '7:00 PM - 9:00 PM',
    location: 'New York, NY',
    attendees: 120,
    ticketType: 'Paid',
    price: '$25',
    category: 'Networking'
  }
];

const UpcomingEvents = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-muted-foreground max-w-2xl">
              Learn, connect, and grow with events organized by and for women professionals
            </p>
          </div>
          <Link to="/events">
            <Button variant="ghost" className="mt-4 md:mt-0 group">
              View all events 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className="overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`
                    ${event.category === 'Conference' ? 'bg-blue-500' : 
                      event.category === 'Workshop' ? 'bg-green-500' : 
                      'bg-purple-500'} 
                    text-white hover:opacity-90
                  `}>
                    {event.category}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg line-clamp-1">{event.title}</h3>
                  <p className="text-white/80 text-sm">{event.organizer}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant={event.ticketType === 'Free' ? 'outline' : 'default'}>
                    {event.ticketType === 'Free' ? 'Free' : event.price}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button size="sm">
                      RSVP
                    </Button>
                    <Button variant="outline" size="icon" className="flex-shrink-0">
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

export default UpcomingEvents;
