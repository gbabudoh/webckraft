// src/App.tsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';

// Icons
import { Code, Monitor, ShoppingCart, BarChart3, ChevronRight, Globe, Wrench, Mail, Globe2, PenTool, Settings, Bell, BarChart, ShoppingBag, CreditCard, Package, Truck, Users, LineChart, Target, MessageSquare } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner'; // <-- 1. Import your existing CookieBanner
import Price from './pages/Price';

// *** DEFINE AND EXPORT TYPES HERE *** (Assuming these are still needed)
export interface ServiceFeature {
  text: string;
  icon: React.ReactNode;
}
export interface ServiceItem {
  title: string;
  price: number;
  icon: React.ReactNode;
  features: ServiceFeature[];
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Shared services data
  const services: ServiceItem[] = [
    {
      title: 'Full Website Development', price: 60, icon: <Code className="w-6 h-6" />,
      features: [ { text: 'React, Vue, Angular, or Next.js', icon: <Globe className="w-4 h-4" /> }, { text: 'Website Maintenance', icon: <Wrench className="w-4 h-4" /> }, { text: 'Hosting Included', icon: <Globe2 className="w-4 h-4" /> }, { text: 'Email Setup', icon: <Mail className="w-4 h-4" /> }, { text: 'Custom Domain', icon: <PenTool className="w-4 h-4" /> }, { text: '24/7 Support', icon: <Bell className="w-4 h-4" /> } ]
    },
    {
      title: 'CMS Website', price: 45, icon: <Monitor className="w-6 h-6" />,
      features: [ { text: 'WordPress, Drupal, or Joomla', icon: <Settings className="w-4 h-4" /> }, { text: 'Custom Design', icon: <PenTool className="w-4 h-4" /> }, { text: 'Hosting Included', icon: <Globe2 className="w-4 h-4" /> }, { text: 'Regular Updates', icon: <Settings className="w-4 h-4" /> }, { text: 'Content Management', icon: <PenTool className="w-4 h-4" /> }, { text: 'Technical Support', icon: <Bell className="w-4 h-4" /> } ]
    },
    {
      title: 'eCommerce Solutions', price: 75, icon: <ShoppingCart className="w-6 h-6" />,
      features: [ { text: 'Shopify or WooCommerce', icon: <ShoppingBag className="w-4 h-4" /> }, { text: 'Product Management', icon: <Package className="w-4 h-4" /> }, { text: 'Payment Integration', icon: <CreditCard className="w-4 h-4" /> }, { text: 'Inventory System', icon: <Package className="w-4 h-4" /> }, { text: 'Order Management', icon: <Truck className="w-4 h-4" /> }, { text: 'Shopping Cart Setup', icon: <ShoppingCart className="w-4 h-4" /> } ]
    },
    {
      title: 'Digital Marketing', price: 40, icon: <BarChart3 className="w-6 h-6" />,
      features: [ { text: 'SEO Optimization', icon: <LineChart className="w-4 h-4" /> }, { text: 'Analytics Setup', icon: <BarChart className="w-4 h-4" /> }, { text: 'Marketing Strategy', icon: <Target className="w-4 h-4" /> }, { text: 'Performance Reports', icon: <BarChart3 className="w-4 h-4" /> }, { text: 'Competitor Analysis', icon: <Users className="w-4 h-4" /> }, { text: 'Monthly Consultations', icon: <MessageSquare className="w-4 h-4" /> } ]
    }
  ];

  // HomePage component
  const HomePage = () => (
    <>
      <div className="relative pt-20 pb-32 overflow-hidden bg-gray-50">
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              Transform Your Online Presence
              <span className="block text-indigo-600">with Our Web Solutions</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Professional web development services tailored to your needs...
            </p>
            <div className="mt-10">
              <Link to="/price" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg">
                View Pricing Plans <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <Router>
      {/* Use flex layout to ensure footer stays at bottom */}
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {/* flex-grow allows main content to expand and push footer down */}
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services services={services} />} />
            <Route path="/price" element={<Price services={services} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner /> {/* <-- 2. Add your CookieBanner component instance here */}
      </div>
    </Router>
  );
}

export default App;