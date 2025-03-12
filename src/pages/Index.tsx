
import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedJobs from '../components/home/FeaturedJobs';
import UpcomingEvents from '../components/home/UpcomingEvents';
import ResourcesPreview from '../components/home/ResourcesPreview';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <FeaturedJobs />
        <UpcomingEvents />
        <ResourcesPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
