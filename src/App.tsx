
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import BlogArticle from "./pages/BlogArticle";
import BookingPage from "./pages/BookingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";
import HumanMappingArticle from "./pages/BlogArticle/HumanMappingArticle";

interface AppProps {
  basename?: string;
}

const App = ({ basename = '/' }: AppProps) => {
  // Create a new QueryClient instance inside the component
  const queryClient = new QueryClient();
  
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={basename}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/human-mapping" element={<HumanMappingArticle />} />
              <Route path="/blog/:id" element={<BlogArticle />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
