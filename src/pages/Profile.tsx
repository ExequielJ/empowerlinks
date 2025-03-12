
import React, { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Calendar, FileText, Award, Briefcase, Users, BookOpen } from 'lucide-react';
import ProfileCard from '../components/profile/ProfileCard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample profile data
  const profileData = {
    id: 1,
    name: 'Alexandra Chen',
    title: 'Senior Product Designer',
    company: 'Design Co.',
    location: 'San Francisco, CA',
    bio: 'Passionate product designer with over 8 years of experience creating user-centered digital experiences. Specializing in UX research, interaction design, and leading design systems. Advocate for inclusive design practices and mentoring women in tech.',
    avatar: 'https://i.pravatar.cc/300?img=32',
    coverImage: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1764&q=80',
    education: 'Stanford University',
    connectionCount: 482,
    skills: ['UX/UI Design', 'Design Systems', 'User Research', 'Wireframing', 'Prototyping', 'Accessibility', 'Figma', 'Adobe Creative Suite'],
    badges: [
      {
        icon: <Award className="h-4 w-4" />,
        name: 'Top Contributor',
        color: 'bg-yellow-500'
      },
      {
        icon: <Star className="h-4 w-4" />,
        name: 'Mentor',
        color: 'bg-purple-500'
      },
      {
        icon: <Award className="h-4 w-4" />,
        name: 'Event Host',
        color: 'bg-blue-500'
      }
    ],
    openTo: [
      'New job opportunities',
      'Freelance work',
      'Mentoring others',
      'Speaking at events'
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 bg-muted/10">
        <div className="container mx-auto px-4 py-8">
          <ProfileCard profile={profileData} />
          
          <div className="mt-8 w-full max-w-4xl mx-auto">
            <Tabs defaultValue="activity" className="w-full">
              <TabsList className="grid grid-cols-6 bg-transparent mb-6">
                <TabsTrigger value="activity" className="flex flex-col items-center py-3 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  <FileText className="h-5 w-5 mb-1" />
                  <span>Activity</span>
                </TabsTrigger>
                <TabsTrigger value="experiences" className="flex flex-col items-center py-3 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  <Briefcase className="h-5 w-5 mb-1" />
                  <span>Experience</span>
                </TabsTrigger>
                <TabsTrigger value="education" className="flex flex-col items-center py-3 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  <BookOpen className="h-5 w-5 mb-1" />
                  <span>Education</span>
                </TabsTrigger>
                <TabsTrigger value="connections" className="flex flex-col items-center py-3 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  <Users className="h-5 w-5 mb-1" />
                  <span>Connections</span>
                </TabsTrigger>
                <TabsTrigger value="achievements" className="flex flex-col items-center py-3 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  <Award className="h-5 w-5 mb-1" />
                  <span>Achievements</span>
                </TabsTrigger>
                <TabsTrigger value="events" className="flex flex-col items-center py-3 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  <Calendar className="h-5 w-5 mb-1" />
                  <span>Events</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="activity" className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
                <Separator className="mb-6" />
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex">
                      <div className="h-10 w-10 rounded-full overflow-hidden mr-4 flex-shrink-0">
                        <img 
                          src={`https://i.pravatar.cc/150?img=${30 + i}`} 
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Alexandra Chen</span>
                          {i === 1 && ' shared an article: "The Future of Women in Tech Leadership"'}
                          {i === 2 && ' is attending the Women in Design Conference'}
                          {i === 3 && ' posted about a new job opportunity at Design Co.'}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="experiences" className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-medium mb-4">Work Experience</h3>
                <Separator className="mb-6" />
                <div className="space-y-8">
                  {[
                    {
                      role: "Senior Product Designer",
                      company: "Design Co.",
                      period: "2020 - Present",
                      description: "Leading product design initiatives, mentoring junior designers, and established the company's first comprehensive design system."
                    },
                    {
                      role: "Product Designer",
                      company: "Creative Tech",
                      period: "2017 - 2020",
                      description: "Collaborated with product managers and engineers to design and ship features for the company's flagship product."
                    },
                    {
                      role: "UX/UI Designer",
                      company: "Digital Agency",
                      period: "2015 - 2017",
                      description: "Designed web and mobile interfaces for various clients across finance, healthcare, and e-commerce sectors."
                    }
                  ].map((exp, i) => (
                    <div key={i} className="relative pl-6 border-l-2 border-muted pb-6 last:pb-0">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                      <h4 className="font-medium">{exp.role}</h4>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <span>{exp.company}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="education" className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-medium mb-4">Education & Certifications</h3>
                <Separator className="mb-6" />
                <div className="space-y-8">
                  <div className="relative pl-6 border-l-2 border-muted pb-6">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                    <h4 className="font-medium">Master's in Human-Computer Interaction</h4>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <span>Stanford University</span>
                      <span className="mx-2">•</span>
                      <span>2013 - 2015</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Focused on user research methodologies and accessibility in digital products.</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                    <h4 className="font-medium">Bachelor's in Graphic Design</h4>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <span>Rhode Island School of Design</span>
                      <span className="mx-2">•</span>
                      <span>2009 - 2013</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Graduated summa cum laude. Senior thesis on interactive design systems.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="connections" className="animate-fade-in">
                <p className="text-center text-muted-foreground">Content for Connections tab</p>
              </TabsContent>
              
              <TabsContent value="achievements" className="animate-fade-in">
                <p className="text-center text-muted-foreground">Content for Achievements tab</p>
              </TabsContent>
              
              <TabsContent value="events" className="animate-fade-in">
                <p className="text-center text-muted-foreground">Content for Events tab</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
