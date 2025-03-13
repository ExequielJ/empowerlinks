import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Search, MessageSquare, Users, UserPlus, Filter, Star, X } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomButton from '@/components/ui/CustomButton';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const connections = [
  { id: 1, name: 'Sarah Johnson', role: 'Product Manager at TechCorp', avatar: 'https://i.pravatar.cc/150?img=1', mutualConnections: 12 },
  { id: 2, name: 'Emily Chen', role: 'Software Engineer at InnovateSoft', avatar: 'https://i.pravatar.cc/150?img=5', mutualConnections: 8 },
  { id: 3, name: 'Aisha Patel', role: 'UX Designer at DesignHub', avatar: 'https://i.pravatar.cc/150?img=20', mutualConnections: 15 },
  { id: 4, name: 'Maria Rodriguez', role: 'Marketing Director at GrowthFirst', avatar: 'https://i.pravatar.cc/150?img=30', mutualConnections: 5 },
  { id: 5, name: 'Jessica Kim', role: 'Data Scientist at AnalyticsPro', avatar: 'https://i.pravatar.cc/150?img=25', mutualConnections: 9 },
];

const recommendations = [
  { id: 6, name: 'Zoe Williams', role: 'Frontend Developer at WebWorks', avatar: 'https://i.pravatar.cc/150?img=10', mutualConnections: 4 },
  { id: 7, name: 'Taylor Robinson', role: 'Product Owner at AgileTeam', avatar: 'https://i.pravatar.cc/150?img=32', mutualConnections: 3 },
  { id: 8, name: 'Lisa Thompson', role: 'CTO at StartupX', avatar: 'https://i.pravatar.cc/150?img=18', mutualConnections: 7 },
];

const groups = [
  { 
    id: "women-in-tech-leadership", 
    name: 'Women in Tech Leadership', 
    members: 2845, 
    activity: 'high', 
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' 
  },
  { 
    id: "female-founders-hub", 
    name: 'Female Founders Hub', 
    members: 1532, 
    activity: 'medium', 
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' 
  },
  { 
    id: "women-in-data-science", 
    name: 'Women in Data Science', 
    members: 3217, 
    activity: 'high', 
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' 
  },
];

const mentors = [
  { id: 1, name: 'Dr. Amanda Rivera', role: 'VP of Engineering, 15+ years experience', avatar: 'https://i.pravatar.cc/150?img=23', specialties: ['Career Transitions', 'Leadership', 'Work-Life Balance'] },
  { id: 2, name: 'Julia Washington', role: 'Senior Product Manager, 8 years experience', avatar: 'https://i.pravatar.cc/150?img=33', specialties: ['Product Strategy', 'User Research', 'Agile'] },
  { id: 3, name: 'Michelle Park', role: 'Engineering Director, 12 years experience', avatar: 'https://i.pravatar.cc/150?img=15', specialties: ['Team Building', 'Technical Leadership', 'Career Growth'] },
];

const Networking = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showMentorshipForm, setShowMentorshipForm] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<typeof mentors[0] | null>(null);
  const [mentorshipGoals, setMentorshipGoals] = useState('');
  const [mentorshipExperience, setMentorshipExperience] = useState('');
  const [mentorshipAvailability, setMentorshipAvailability] = useState('');
  
  const [showFindMentorForm, setShowFindMentorForm] = useState(false);
  const [showBecomeMentorForm, setShowBecomeMentorForm] = useState(false);
  
  const [newConversation, setNewConversation] = useState(false);
  const [recipientUsername, setRecipientUsername] = useState('');
  
  const [selectedConnection, setSelectedConnection] = useState<typeof connections[0] | null>(null);
  const [showMessagePreview, setShowMessagePreview] = useState(false);
  const [showProfilePreview, setShowProfilePreview] = useState(false);
  const [messageText, setMessageText] = useState('');

  const handleRequestMentorship = (mentor: typeof mentors[0]) => {
    setSelectedMentor(mentor);
    setShowMentorshipForm(true);
  };

  const handleSubmitMentorshipRequest = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mentorship request submitted to ${selectedMentor?.name}!`);
    setShowMentorshipForm(false);
    setMentorshipGoals('');
    setMentorshipExperience('');
    setMentorshipAvailability('');
    setSelectedMentor(null);
  };

  const handleFindMentor = () => {
    setShowFindMentorForm(true);
    setShowBecomeMentorForm(false);
  };

  const handleBecomeMentor = () => {
    setShowBecomeMentorForm(true);
    setShowFindMentorForm(false);
  };

  const handleStartConversation = () => {
    setNewConversation(true);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent to ${recipientUsername}!`);
    setNewConversation(false);
    setRecipientUsername('');
  };

  const handleMessageConnection = (connection: typeof connections[0]) => {
    setSelectedConnection(connection);
    setShowMessagePreview(true);
    setShowProfilePreview(false);
  };

  const handleViewProfile = (connection: typeof connections[0]) => {
    setSelectedConnection(connection);
    setShowProfilePreview(true);
    setShowMessagePreview(false);
  };

  const handleSendConnectionMessage = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent to ${selectedConnection?.name}!`);
    setShowMessagePreview(false);
    setMessageText('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Your Professional Network</h1>
              <p className="text-muted-foreground">Connect, collaborate, and grow with other women professionals</p>
            </div>

            <div className="relative mb-8">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search connections, groups, or mentors..." 
                className="pl-10 pr-4 py-6 rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="ghost" className="absolute right-3 top-2" size="icon">
                <Filter className="h-5 w-5" />
              </Button>
            </div>

            <Tabs defaultValue="connections" className="mb-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="connections">
                  <Users className="h-4 w-4 mr-2" />
                  Connections
                </TabsTrigger>
                <TabsTrigger value="groups">
                  <Users className="h-4 w-4 mr-2" />
                  Groups
                </TabsTrigger>
                <TabsTrigger value="mentorship">
                  <Star className="h-4 w-4 mr-2" />
                  Mentorship
                </TabsTrigger>
                <TabsTrigger value="messages">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Messages
                </TabsTrigger>
              </TabsList>

              <TabsContent value="connections" className="mt-6">
                <div className="grid gap-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Your Connections</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {connections.map((connection) => (
                        <Card key={connection.id}>
                          <CardContent className="p-6 flex items-start space-x-4">
                            <div className="h-14 w-14 rounded-full overflow-hidden flex-shrink-0">
                              <img 
                                src={connection.avatar} 
                                alt={connection.name} 
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold">{connection.name}</h3>
                              <p className="text-sm text-muted-foreground">{connection.role}</p>
                              <p className="text-xs mt-1">{connection.mutualConnections} mutual connections</p>
                              <div className="flex space-x-2 mt-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleMessageConnection(connection)}
                                >
                                  <MessageSquare className="h-3 w-3 mr-1" />
                                  Message
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleViewProfile(connection)}
                                >
                                  View Profile
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Separator className="my-8" />

                  <div>
                    <h2 className="text-xl font-semibold mb-4">Recommended Connections</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {recommendations.map((person) => (
                        <Card key={person.id}>
                          <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center mb-4">
                              <div className="h-16 w-16 rounded-full overflow-hidden mb-3">
                                <img 
                                  src={person.avatar} 
                                  alt={person.name} 
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <h3 className="font-semibold">{person.name}</h3>
                              <p className="text-sm text-muted-foreground">{person.role}</p>
                              <p className="text-xs mt-1">{person.mutualConnections} mutual connections</p>
                            </div>
                            <CustomButton className="w-full" leftIcon={<UserPlus className="h-4 w-4" />}>
                              Connect
                            </CustomButton>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="groups" className="mt-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Professional Groups</h2>
                  <Button>Create Group</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {groups.map((group) => (
                    <Card key={group.id} className="overflow-hidden">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={group.image} 
                          alt={group.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle>{group.name}</CardTitle>
                        <CardDescription>{group.members} members • {group.activity} activity</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Link to={`/groups/${group.id}`} className="w-full">
                          <Button variant="outline" className="w-full">Join Group</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button variant="outline">Discover More Groups</Button>
                </div>
              </TabsContent>

              <TabsContent value="mentorship" className="mt-6">
                <div className="bg-gradient-to-r from-brand-purple-light to-brand-pink-light p-6 rounded-lg mb-8">
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-2">Mentorship Program</h2>
                    <p className="mb-4">Connect with experienced professionals for guidance, advice, and career development</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Button onClick={handleFindMentor}>Find a Mentor</Button>
                      <Button variant="outline" onClick={handleBecomeMentor}>Become a Mentor</Button>
                    </div>
                  </div>
                </div>

                {showFindMentorForm && (
                  <Card className="mb-6">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>Find a Mentor</CardTitle>
                        <Button size="icon" variant="ghost" onClick={() => setShowFindMentorForm(false)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <CardDescription>Tell us what you're looking for in a mentor</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="expertise">Expertise Areas</Label>
                          <Input id="expertise" placeholder="e.g., Leadership, Career Transition, Technical Skills" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry</Label>
                          <Input id="industry" placeholder="e.g., Tech, Healthcare, Finance" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="goals">Mentorship Goals</Label>
                          <Textarea id="goals" placeholder="What do you hope to achieve with a mentor?" />
                        </div>
                        <div className="flex justify-end">
                          <Button>Search Mentors</Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                )}

                {showBecomeMentorForm && (
                  <Card className="mb-6">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>Become a Mentor</CardTitle>
                        <Button size="icon" variant="ghost" onClick={() => setShowBecomeMentorForm(false)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <CardDescription>Share your experience and help others grow</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="mentor-expertise">Your Areas of Expertise</Label>
                          <Input id="mentor-expertise" placeholder="e.g., Leadership, Technical Skills, Career Development" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mentor-experience">Years of Experience</Label>
                          <Input id="mentor-experience" type="number" placeholder="e.g., 5" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mentor-time">Time Commitment</Label>
                          <Input id="mentor-time" placeholder="e.g., 2 hours per week" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mentor-bio">Short Bio</Label>
                          <Textarea id="mentor-bio" placeholder="Tell potential mentees about your background and what you can offer" />
                        </div>
                        <div className="flex justify-end">
                          <Button>Submit Application</Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                )}

                <h3 className="text-xl font-semibold mb-4">Featured Mentors</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mentors.map((mentor) => (
                    <Card key={mentor.id}>
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="h-12 w-12 rounded-full overflow-hidden">
                            <img 
                              src={mentor.avatar} 
                              alt={mentor.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{mentor.name}</CardTitle>
                            <CardDescription>{mentor.role}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm font-medium mb-2">Specialties:</p>
                        <div className="flex flex-wrap gap-2">
                          {mentor.specialties.map((specialty, index) => (
                            <span 
                              key={index} 
                              className="text-xs py-1 px-2 bg-muted rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          className="w-full"
                          onClick={() => handleRequestMentorship(mentor)}
                        >
                          Request Mentorship
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {showMentorshipForm && selectedMentor && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <Card className="w-full max-w-md">
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle>Request Mentorship</CardTitle>
                          <Button size="icon" variant="ghost" onClick={() => setShowMentorshipForm(false)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <CardDescription>
                          Requesting mentorship from {selectedMentor.name}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleSubmitMentorshipRequest} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="goals">What are your mentorship goals?</Label>
                            <Textarea 
                              id="goals" 
                              placeholder="What do you hope to achieve with this mentorship?"
                              value={mentorshipGoals}
                              onChange={(e) => setMentorshipGoals(e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="experience">Your current experience level</Label>
                            <Textarea 
                              id="experience" 
                              placeholder="Briefly describe your background and experience"
                              value={mentorshipExperience}
                              onChange={(e) => setMentorshipExperience(e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="availability">Your availability for mentorship sessions</Label>
                            <Input 
                              id="availability" 
                              placeholder="e.g., Weekday evenings, Tuesday afternoons"
                              value={mentorshipAvailability}
                              onChange={(e) => setMentorshipAvailability(e.target.value)}
                              required
                            />
                          </div>
                          <div className="pt-2 flex justify-end gap-2">
                            <Button type="button" variant="outline" onClick={() => setShowMentorshipForm(false)}>
                              Cancel
                            </Button>
                            <Button type="submit">
                              Submit Request
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="messages" className="mt-6">
                {!newConversation ? (
                  <div className="bg-muted/50 rounded-lg p-8 text-center">
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">Your Messages</h3>
                    <p className="text-muted-foreground mb-4">Connect and chat with your professional network</p>
                    <Button onClick={handleStartConversation}>Start a Conversation</Button>
                  </div>
                ) : (
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>New Conversation</CardTitle>
                        <Button size="icon" variant="ghost" onClick={() => setNewConversation(false)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSendMessage} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="recipient">Recipient</Label>
                          <Input 
                            id="recipient" 
                            placeholder="Enter username" 
                            value={recipientUsername}
                            onChange={(e) => setRecipientUsername(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea 
                            id="message" 
                            placeholder="Type your message here"
                            required
                          />
                        </div>
                        <div className="pt-2 flex justify-end gap-2">
                          <Button type="button" variant="outline" onClick={() => setNewConversation(false)}>
                            Cancel
                          </Button>
                          <Button type="submit">
                            Send Message
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />

      {showMessagePreview && selectedConnection && (
        <div className="fixed bottom-4 right-4 z-50 w-80">
          <Card className="shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={selectedConnection.avatar} alt={selectedConnection.name} />
                    <AvatarFallback>{selectedConnection.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-sm">{selectedConnection.name}</CardTitle>
                    <CardDescription className="text-xs">{selectedConnection.role}</CardDescription>
                  </div>
                </div>
                <Button size="icon" variant="ghost" onClick={() => setShowMessagePreview(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pb-3">
              <form onSubmit={handleSendConnectionMessage} className="space-y-3">
                <Textarea 
                  placeholder={`Message ${selectedConnection.name}...`}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className="min-h-24"
                  required
                />
                <div className="flex justify-end">
                  <Button type="submit" size="sm">
                    Send
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {showProfilePreview && selectedConnection && (
        <div className="fixed bottom-4 right-4 z-50 w-80">
          <Card className="shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm">Profile Preview</CardTitle>
                <Button size="icon" variant="ghost" onClick={() => setShowProfilePreview(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="text-center pb-6">
              <div className="mb-4">
                <Avatar className="h-16 w-16 mx-auto">
                  <AvatarImage src={selectedConnection.avatar} alt={selectedConnection.name} />
                  <AvatarFallback>{selectedConnection.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="font-medium mt-2">{selectedConnection.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedConnection.role}</p>
              </div>
              <div className="text-xs text-left space-y-2">
                <p><span className="font-medium">Mutual Connections:</span> {selectedConnection.mutualConnections}</p>
                <p><span className="font-medium">Location:</span> San Francisco, CA</p>
                <p><span className="font-medium">Experience:</span> 5+ years</p>
              </div>
              <div className="mt-4 flex gap-2 justify-center">
                <Button size="sm" variant="outline">View Full Profile</Button>
                <Button 
                  size="sm"
                  onClick={() => {
                    setShowProfilePreview(false);
                    setShowMessagePreview(true);
                  }}
                >
                  <MessageSquare className="h-3 w-3 mr-1" />
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Networking;
