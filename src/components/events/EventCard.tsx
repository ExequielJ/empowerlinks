
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Clock, Share2, Bookmark } from 'lucide-react';

interface EventCardProps {
  event: {
    id: number;
    title: string;
    organizer: string;
    image: string;
    date: string;
    time: string;
    location: string;
    description: string;
    attendees: number;
    ticketType: 'Free' | 'Paid';
    price?: string;
    category: string;
  };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md h-full flex flex-col">
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
        <div className="absolute top-4 right-4 flex space-x-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/70 hover:bg-white/90">
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/70 hover:bg-white/90">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
        <p className="text-muted-foreground mb-2 text-sm">{event.organizer}</p>
        <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{event.description}</p>
        
        <div className="space-y-3 mt-auto mb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{event.time}</span>
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
          <Button>
            RSVP
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
