
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

    // Set page title and meta description for better SEO
    document.title = "K-ZEN Tech Company | Innovative AI Technology Solutions";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
      'K-ZEN is an innovative tech company founded by Balkaran Singh Purewal, specializing in AI-driven automation, machine learning solutions, and cutting-edge digital platforms. (Kundan Generations)');
    }
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
