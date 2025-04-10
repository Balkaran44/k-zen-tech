
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Check for saved theme preference or use dark by default
    const savedTheme = localStorage.getItem('darkMode');
    
    // If no saved preference, default to dark mode
    if (savedTheme === null) {
      localStorage.setItem('darkMode', 'true');
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'true') {
      document.documentElement.classList.add('dark');
    }

    // Set page title for better SEO
    document.title = "K-ZEN Tech Company | Innovative Technology Solutions";
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
