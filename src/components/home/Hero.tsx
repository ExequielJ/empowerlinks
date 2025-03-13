
import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../ui/CustomButton';
import { ChevronRight, Search, Users, Briefcase, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 md:pb-24 lg:pb-32">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-purple-light rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-pink-light rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="animate-fade-in">
              <div className="inline-block mb-4 px-4 py-1 bg-brand-purple-light text-brand-purple-dark rounded-full text-sm font-medium">
                The ultimate network for women professionals
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Connect, <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink">Empower</span>, and Grow Together
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Join SheTradesNetwork.com - thousands of women professionals in a safe, inclusive space designed to help you expand your network, discover opportunities, and advance your career.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <CustomButton 
                  size="lg" 
                  className="w-full sm:w-auto"
                  gradient
                >
                  Join Now
                </CustomButton>
                <Link to="/about">
                  <CustomButton 
                    variant="outline" 
                    size="lg"
                    className="w-full sm:w-auto"
                    rightIcon={<ChevronRight className="h-4 w-4" />}
                  >
                    Learn More
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-6 animate-slide-in-bottom">
            <div className="glass-card rounded-2xl p-6 md:p-8 max-w-md mx-auto relative">
              <div className="absolute -left-4 -top-4 w-16 h-16 bg-brand-purple/10 rounded-lg"></div>
              <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-brand-pink/10 rounded-lg"></div>
              
              <h3 className="text-lg font-medium mb-4 text-center">Discover Your Community</h3>
              
              <div className="flex items-center justify-center mb-6">
                <div className="relative flex -space-x-4">
                  {[1, 2, 3, 4, 5].map((img) => (
                    <div 
                      key={img}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                    >
                      <img 
                        src={`https://i.pravatar.cc/150?img=${10 + img}`} 
                        alt={`Community member ${img}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-purple flex items-center justify-center text-white text-xs font-medium">
                    +2k
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm">
                  <Users className="h-6 w-6 text-brand-purple mb-2" />
                  <span className="text-sm font-medium">Networking</span>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm">
                  <Briefcase className="h-6 w-6 text-brand-purple mb-2" />
                  <span className="text-sm font-medium">Jobs</span>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm">
                  <Calendar className="h-6 w-6 text-brand-purple mb-2" />
                  <span className="text-sm font-medium">Events</span>
                </div>
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search for people, jobs, or events..." 
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
