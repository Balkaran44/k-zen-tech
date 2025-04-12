
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone,
  Send,
  Loader2
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);
        
      if (error) throw error;
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "We couldn't send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50 grid-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-gradient">Touch</span></h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Have a project in mind? Let's discuss how we can help transform your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Your Name" 
                    required 
                    className="w-full"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    required 
                    className="w-full"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  type="text" 
                  placeholder="How can we help you?" 
                  required 
                  className="w-full"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  required 
                  className="w-full min-h-[120px]"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-kzen-600 hover:bg-kzen-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
          
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Whether you have a question about our services, pricing, or just want to learn more about how we can help your business, our team is ready to answer all your questions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-kzen-50 dark:bg-kzen-900/20 rounded-full p-3">
                    <Mail className="h-6 w-6 text-kzen-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Email Us</h4>
                    <a href="mailto:kzenbusinesses@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-kzen-600 dark:hover:text-kzen-400">
                      kzenbusinesses@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-kzen-50 dark:bg-kzen-900/20 rounded-full p-3">
                    <Phone className="h-6 w-6 text-kzen-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Call Us</h4>
                    <a href="tel:+919729921189" className="text-gray-600 dark:text-gray-300 hover:text-kzen-600 dark:hover:text-kzen-400">
                      +91 9729921189
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-kzen-600 text-white rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4">Ready to Transform Your Business?</h4>
              <p className="mb-4">
                We're an online-based startup from Sirsa, India, pushing the boundaries of technology. Schedule a free consultation with our experts to discuss your needs.
              </p>
              <Link to="/booking">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-kzen-600"
                >
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
