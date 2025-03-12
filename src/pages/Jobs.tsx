
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, MapPin, Building, Briefcase, Filter, Clock, Star, Calendar, ChevronDown } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomButton from '@/components/ui/CustomButton';

// Mock job data
const featuredJobs = [
  {
    id: 1,
    title: 'Senior Product Manager',
    company: 'TechCorp International',
    location: 'San Francisco, CA (Remote Option)',
    type: 'Full-time',
    salary: '$120K - $150K',
    posted: '2 days ago',
    logo: 'https://i.pravatar.cc/150?img=50',
    tags: ['Product', 'Leadership', 'Agile', 'B2B'],
    description: 'Leading tech company seeking an experienced product manager to lead our flagship product. You\'ll work with cross-functional teams to define, build, and launch innovative solutions.'
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    company: 'DesignHub Co.',
    location: 'New York, NY (Hybrid)',
    type: 'Full-time',
    salary: '$90K - $120K',
    posted: '1 week ago',
    logo: 'https://i.pravatar.cc/150?img=51',
    tags: ['UX Design', 'UI Design', 'Figma', 'User Research'],
    description: 'Join our creative team to design intuitive and engaging user experiences for our digital products. You\'ll collaborate closely with product and engineering to bring designs to life.'
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'InnovateSoft',
    location: 'Austin, TX (Remote)',
    type: 'Full-time',
    salary: '$100K - $130K',
    posted: '3 days ago',
    logo: 'https://i.pravatar.cc/150?img=52',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    description: 'Seeking an experienced full stack developer to help build and maintain our SaaS platform. You\'ll work on challenging problems and have a direct impact on our product.'
  },
  {
    id: 4,
    title: 'Marketing Director',
    company: 'GrowthFirst',
    location: 'Chicago, IL (On-site)',
    type: 'Full-time',
    salary: '$130K - $160K',
    posted: '5 days ago',
    logo: 'https://i.pravatar.cc/150?img=53',
    tags: ['Marketing Strategy', 'Team Leadership', 'Growth', 'B2C'],
    description: 'Lead our marketing team to drive growth and engagement for our consumer products. You\'ll develop and execute comprehensive marketing strategies across channels.'
  },
  {
    id: 5,
    title: 'Data Scientist',
    company: 'AnalyticsPro',
    location: 'Seattle, WA (Hybrid)',
    type: 'Full-time',
    salary: '$110K - $140K',
    posted: '1 day ago',
    logo: 'https://i.pravatar.cc/150?img=54',
    tags: ['Python', 'Machine Learning', 'SQL', 'Data Visualization'],
    description: 'Join our data team to extract insights from complex datasets and build predictive models. You\'ll work with stakeholders to drive data-informed business decisions.'
  }
];

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'];
const industries = ['Technology', 'Healthcare', 'Finance', 'Education', 'Retail', 'Manufacturing', 'Non-profit'];
const experienceLevels = ['Entry Level', 'Mid Level', 'Senior Level', 'Director', 'Executive'];
const salaryRanges = ['$0 - $50K', '$50K - $80K', '$80K - $100K', '$100K - $130K', '$130K+'];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const toggleSaveJob = (jobId: number) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Find Your Dream Job</h1>
              <p className="text-muted-foreground">Discover opportunities at women-friendly companies</p>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-5 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Job title, keywords, or company" 
                    className="pl-10 pr-4"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="md:col-span-5 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="City, state, or remote" 
                    className="pl-10 pr-4"
                    value={locationTerm}
                    onChange={(e) => setLocationTerm(e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <CustomButton className="w-full" gradient>
                    Search Jobs
                  </CustomButton>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-white shadow-sm rounded-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-semibold">Filters</h3>
                      <Button variant="ghost" size="sm" className="text-sm text-primary">
                        Reset All
                      </Button>
                    </div>

                    {/* Job Type Filter */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-medium">Job Type</h4>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        {jobTypes.map((type) => (
                          <div key={type} className="flex items-center">
                            <input type="checkbox" id={`type-${type}`} className="mr-2" />
                            <label htmlFor={`type-${type}`} className="text-sm">
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Experience Level Filter */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-medium">Experience Level</h4>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        {experienceLevels.map((level) => (
                          <div key={level} className="flex items-center">
                            <input type="checkbox" id={`level-${level}`} className="mr-2" />
                            <label htmlFor={`level-${level}`} className="text-sm">
                              {level}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Salary Range Filter */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-medium">Salary Range</h4>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        {salaryRanges.map((range) => (
                          <div key={range} className="flex items-center">
                            <input type="checkbox" id={`salary-${range}`} className="mr-2" />
                            <label htmlFor={`salary-${range}`} className="text-sm">
                              {range}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Industry Filter */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-medium">Industry</h4>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        {industries.map((industry) => (
                          <div key={industry} className="flex items-center">
                            <input type="checkbox" id={`industry-${industry}`} className="mr-2" />
                            <label htmlFor={`industry-${industry}`} className="text-sm">
                              {industry}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full">Apply Filters</Button>
                  </div>
                </div>
              </div>

              {/* Job listings */}
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Featured Jobs</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Sort by:</span>
                    <select className="text-sm border rounded px-2 py-1">
                      <option>Most Relevant</option>
                      <option>Newest</option>
                      <option>Salary (High to Low)</option>
                      <option>Salary (Low to High)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  {featuredJobs.map((job) => (
                    <Card key={job.id} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-4">
                            <div className="h-12 w-12 rounded overflow-hidden bg-muted flex-shrink-0">
                              <img src={job.logo} alt={job.company} className="h-full w-full object-cover" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{job.title}</h3>
                              <div className="flex items-center text-sm text-muted-foreground mb-1">
                                <Building className="h-3.5 w-3.5 mr-1" />
                                {job.company}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground mb-3">
                                <MapPin className="h-3.5 w-3.5 mr-1" />
                                {job.location}
                              </div>
                              <div className="flex flex-wrap gap-2 mb-4">
                                <Badge variant="outline" className="bg-muted/50">
                                  <Briefcase className="h-3 w-3 mr-1" />
                                  {job.type}
                                </Badge>
                                <Badge variant="outline" className="bg-muted/50">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {job.posted}
                                </Badge>
                                <Badge variant="outline" className="bg-muted/50">{job.salary}</Badge>
                              </div>
                              <div className="flex flex-wrap gap-1 mb-4">
                                {job.tags.map((tag, index) => (
                                  <Badge key={index} variant="secondary" className="mr-1 mb-1">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <p className="text-sm">{job.description}</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleSaveJob(job.id)}
                            className={savedJobs.includes(job.id) ? "text-primary" : ""}
                          >
                            <Star className="h-5 w-5" fill={savedJobs.includes(job.id) ? "currentColor" : "none"} />
                          </Button>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/20 px-6 py-4 flex justify-between">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>Apply by <strong>Jun 30, 2023</strong></span>
                        </div>
                        <CustomButton>Apply Now</CustomButton>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button variant="outline" size="lg">
                    Load More Jobs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
