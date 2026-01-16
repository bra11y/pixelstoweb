
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AccessibilityScanner from './pages/AccessibilityScanner';
import Search from './pages/Search';
import Gallery from './pages/Gallery';
import Design from './pages/Design';
import DesignDetail from './pages/DesignDetail';
import Sitemap from './pages/Sitemap';
import NotFound from './pages/NotFound';
import { BlogProvider } from './context/BlogContext';
import { Toaster } from "./components/ui/toaster";
import ConversionTracking from './components/ConversionTracking';
import CircularImprovement from './components/CircularImprovement';
import useScrollToTop from './hooks/useScrollToTop';

import './App.css';

function App() {
  useScrollToTop();

  return (
    <BlogProvider>
      <ConversionTracking />
      <CircularImprovement />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/scanner" element={<AccessibilityScanner />} />
        <Route path="/search" element={<Search />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/design" element={<Design />} />
        <Route path="/design/:slug" element={<DesignDetail />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BlogProvider>
  );
}

export default App;
