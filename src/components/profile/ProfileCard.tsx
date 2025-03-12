
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, Briefcase, GraduationCap, Mail, Link as LinkIcon, 
  MessageSquare, UserPlus, Award, Star 
} from 'lucide-react';

interface ProfileCardProps {
  profile: {
    id: number;
    name: string;
    title: string;
    company: string;
    location: string;
    bio: string;
    avatar: string;
    coverImage: string;
    education: string;
    connectionCount: number;
    skills: string[];
    badges: {
      icon: React.ReactNode;
      name: string;
      color: string;
    }[];
    openTo: string[];
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md w-full max-w-4xl mx-auto">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={profile.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      <CardContent className="p-6 md:p-8 relative">
        <div className="flex flex-col md:flex-row md:items-end md:space-x-6">
          <div className="absolute -top-20 left-6 h-28 w-28 md:h-32 md:w-32 rounded-xl overflow-hidden border-4 border-white shadow-md">
            <img 
              src={profile.avatar} 
              alt={profile.name} 
              className="h-full w-full object-cover"
            />
          </div>
          
          <div className="mt-10 md:mt-0 md:ml-36">
            <h1 className="text-2xl md:text-3xl font-bold">{profile.name}</h1>
            <p className="text-lg text-muted-foreground">{profile.title}</p>
          </div>
          
          <div className="flex space-x-2 mt-4 md:mt-0 md:ml-auto">
            <Button size="sm" variant="outline">
              <MessageSquare className="h-4 w-4 mr-1" />
              Message
            </Button>
            <Button size="sm">
              <UserPlus className="h-4 w-4 mr-1" />
              Connect
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-muted-foreground">{profile.bio}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center text-sm">
                  <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">{profile.company}</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">{profile.location}</span>
                </div>
                <div className="flex items-center text-sm">
                  <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">{profile.education}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">Email Address</span>
                </div>
                <div className="flex items-center text-sm">
                  <LinkIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-primary hover:underline cursor-pointer">Personal Website</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-muted/30 rounded-lg p-4">
              <h3 className="text-md font-medium mb-3">Open to</h3>
              <div className="space-y-2">
                {profile.openTo.map((item, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4">
              <h3 className="text-md font-medium mb-3">Achievements</h3>
              <div className="space-y-3">
                {profile.badges.map((badge, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${badge.color} text-white mr-2`}>
                      {badge.icon}
                    </div>
                    <span className="text-sm">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-md font-medium">Connections</h3>
                <Badge variant="outline">{profile.connectionCount}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Grow your network by connecting with more professionals in your industry
              </p>
              <Button className="w-full mt-3" variant="outline" size="sm">
                Find People to Connect
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
