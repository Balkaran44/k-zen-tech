import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, Clock, Cpu, BarChart3, Database, Shield, Cloud, Code } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

type Service = {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
  price: string;
  features: string[];
};

type TimeSlot = {
  id: number;
  time: string;
  available: boolean;
};

const BookingPage = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [bookingStep, setBookingStep] = useState<'service' | 'datetime' | 'details'>('service');
  
  const services: Service[] = [
    {
      id: 1,
      icon: <Cpu className="h-10 w-10 text-kzen-400" />,
      title: "AI & Machine Learning",
      description: "Implement intelligent algorithms to automate processes and derive actionable insights from your data",
      price: "$1,500",
      features: [
        "Predictive analytics implementation",
        "ML model development",
        "AI-driven process automation",
        "Data preprocessing and feature engineering",
        "Model deployment and maintenance"
      ]
    },
    {
      id: 2,
      icon: <BarChart3 className="h-10 w-10 text-kzen-400" />,
      title: "Business Intelligence",
      description: "Transform raw data into strategic insights with our advanced analytics and visualization solutions",
      price: "$1,200",
      features: [
        "Dashboard development",
        "KPI monitoring",
        "Data visualization implementation",
        "Reporting automation",
        "Insight extraction and analysis"
      ]
    },
    {
      id: 3,
      icon: <Database className="h-10 w-10 text-kzen-400" />,
      title: "Data Management",
      description: "Optimize your data architecture with scalable storage, processing, and governance solutions",
      price: "$1,800",
      features: [
        "Database design and optimization",
        "Data warehousing solutions",
        "ETL pipeline development",
        "Data governance implementation",
        "Legacy system migration"
      ]
    },
    {
      id: 4,
      icon: <Shield className="h-10 w-10 text-kzen-400" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive security solutions and threat detection",
      price: "$2,000",
      features: [
        "Security audit and assessment",
        "Threat detection implementation",
        "Security policy development",
        "Penetration testing",
        "Compliance management"
      ]
    },
    {
      id: 5,
      icon: <Cloud className="h-10 w-10 text-kzen-400" />,
      title: "Cloud Solutions",
      description: "Accelerate your digital transformation with scalable, secure, and cost-effective cloud infrastructure",
      price: "$1,600",
      features: [
        "Cloud migration planning",
        "Infrastructure deployment",
        "Cloud cost optimization",
        "Managed cloud services",
        "Multi-cloud strategy development"
      ]
    },
    {
      id: 6,
      icon: <Code className="h-10 w-10 text-kzen-400" />,
      title: "Custom Development",
      description: "Build bespoke software solutions designed specifically for your unique business challenges",
      price: "$2,500",
      features: [
        "Custom application development",
        "API integration",
        "Software modernization",
        "UX/UI design",
        "Ongoing maintenance and support"
      ]
    }
  ];

  const timeSlots: TimeSlot[] = [
    { id: 1, time: "9:00 AM", available: true },
    { id: 2, time: "10:00 AM", available: true },
    { id: 3, time: "11:00 AM", available: true },
    { id: 4, time: "12:00 PM", available: false },
    { id: 5, time: "1:00 PM", available: true },
    { id: 6, time: "2:00 PM", available: true },
    { id: 7, time: "3:00 PM", available: true },
    { id: 8, time: "4:00 PM", available: false },
    { id: 9, time: "5:00 PM", available: true }
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceId = params.get('service');
    
    if (serviceId) {
      const id = parseInt(serviceId);
      setSelectedService(id);
      if (services.some(service => service.id === id)) {
        setBookingStep('datetime');
      }
    }
  }, [location.search]);

  const handleServiceSelect = (serviceId: number) => {
    setSelectedService(serviceId);
  };

  const handleTimeSelect = (timeId: number) => {
    setSelectedTime(timeId);
  };

  const handleContinue = () => {
    if (bookingStep === 'service') {
      if (!selectedService) {
        toast({
          title: "Please select a service",
          description: "You must select a service to continue",
          variant: "destructive"
        });
        return;
      }
      setBookingStep('datetime');
    } else if (bookingStep === 'datetime') {
      if (!selectedDate || !selectedTime) {
        toast({
          title: "Please select date and time",
          description: "You must select both date and time to continue",
          variant: "destructive"
        });
        return;
      }
      setBookingStep('details');
    } else {
      toast({
        title: "Booking Successful!",
        description: "Your consultation has been scheduled. We'll send you a confirmation email shortly.",
      });
      setSelectedService(null);
      setSelectedDate(undefined);
      setSelectedTime(null);
      setBookingStep('service');
    }
  };

  const handleBack = () => {
    if (bookingStep === 'datetime') {
      setBookingStep('service');
    } else if (bookingStep === 'details') {
      setBookingStep('datetime');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a <span className="text-gradient">Service</span></h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Schedule a consultation with our experts to discuss your technology needs
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <Tabs value={bookingStep} className="w-full">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <TabsList className="flex w-full rounded-none bg-transparent">
                <TabsTrigger 
                  value="service" 
                  className={cn(
                    "flex-1 rounded-none border-b-2 border-transparent py-3 data-[state=active]:border-kzen-500 data-[state=active]:text-kzen-600 dark:data-[state=active]:text-kzen-400",
                    bookingStep === 'service' ? "bg-transparent" : "opacity-70"
                  )}
                  disabled
                >
                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-kzen-600 text-white flex items-center justify-center text-sm mr-2">1</span>
                    Service
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="datetime" 
                  className={cn(
                    "flex-1 rounded-none border-b-2 border-transparent py-3 data-[state=active]:border-kzen-500 data-[state=active]:text-kzen-600 dark:data-[state=active]:text-kzen-400",
                    bookingStep === 'datetime' ? "bg-transparent" : "opacity-70"
                  )}
                  disabled
                >
                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-kzen-600 text-white flex items-center justify-center text-sm mr-2">2</span>
                    Date & Time
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="details" 
                  className={cn(
                    "flex-1 rounded-none border-b-2 border-transparent py-3 data-[state=active]:border-kzen-500 data-[state=active]:text-kzen-600 dark:data-[state=active]:text-kzen-400",
                    bookingStep === 'details' ? "bg-transparent" : "opacity-70"
                  )}
                  disabled
                >
                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-kzen-600 text-white flex items-center justify-center text-sm mr-2">3</span>
                    Details
                  </div>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="service" className="p-6">
              <h2 className="text-2xl font-bold mb-6">Select a Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {services.map((service) => (
                  <Card 
                    key={service.id}
                    className={cn(
                      "border-2 cursor-pointer transition-all duration-300 hover:shadow-md",
                      selectedService === service.id 
                        ? "border-kzen-500 dark:border-kzen-500 shadow-lg" 
                        : "border-gray-200 dark:border-gray-700"
                    )}
                    onClick={() => handleServiceSelect(service.id)}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-xl w-14 h-14 flex items-center justify-center">
                          {service.icon}
                        </div>
                        {selectedService === service.id && (
                          <div className="w-6 h-6 bg-kzen-500 rounded-full flex items-center justify-center">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>
                      <CardTitle className="mt-4">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-kzen-600 dark:text-kzen-400 mb-4">
                        {service.price} <span className="text-sm font-normal text-gray-500 dark:text-gray-400">starting price</span>
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-kzen-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-end">
                <Button 
                  onClick={handleContinue} 
                  size="lg"
                  className="bg-kzen-600 hover:bg-kzen-700 text-white"
                >
                  Continue <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="datetime" className="p-6">
              <h2 className="text-2xl font-bold mb-6">Select Date & Time</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Pick a Date</h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border border-gray-200 dark:border-gray-700 p-3"
                    disabled={{ before: new Date() }}
                  />
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Pick a Time</h3>
                  {selectedDate ? (
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.id}
                          className={cn(
                            "flex items-center justify-center gap-2 p-3 rounded-md border transition-all",
                            slot.available ? (
                              selectedTime === slot.id
                                ? "bg-kzen-100 dark:bg-kzen-900/40 border-kzen-500 text-kzen-700 dark:text-kzen-400"
                                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-kzen-400"
                            ) : "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-60"
                          )}
                          onClick={() => slot.available && handleTimeSelect(slot.id)}
                          disabled={!slot.available}
                        >
                          <Clock className="h-4 w-4" />
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-40 border border-dashed rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-500">
                      Please select a date first
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button 
                  onClick={handleContinue} 
                  size="lg"
                  className="bg-kzen-600 hover:bg-kzen-700 text-white"
                >
                  Continue <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="details" className="p-6">
              <h2 className="text-2xl font-bold mb-6">Your Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="first_name">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      id="first_name"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-kzen-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="last_name">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      id="last_name"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-kzen-400"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-kzen-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="phone">
                      Phone
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-kzen-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="company">
                    Company (Optional)
                  </label>
                  <input 
                    type="text" 
                    id="company"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-kzen-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">
                    Additional Information
                  </label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-kzen-400"
                    placeholder="Tell us more about your project or requirements"
                  ></textarea>
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button 
                  onClick={handleContinue} 
                  size="lg"
                  className="bg-kzen-600 hover:bg-kzen-700 text-white"
                >
                  Book Consultation
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookingPage;
