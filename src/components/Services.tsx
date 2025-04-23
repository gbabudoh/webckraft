// src/components/Services.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // <-- Import Link
import { ArrowRight, CheckCircle } from 'lucide-react';

// Re-use or define interfaces for data structures
interface ServiceFeature {
  text: string;
  icon: React.ReactNode;
}

interface ServiceItem {
  title: string;
  price: number;
  icon: React.ReactNode;
  features: ServiceFeature[];
}

// Define the props interface for the Services component
interface ServicesProps {
  services: ServiceItem[]; // Expects an array of ServiceItem
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    // Outer container - no top padding needed here
    <div>
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
              Discover our comprehensive range of web development and digital marketing services designed to help your business thrive in the digital world.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid - Add vertical spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {services.map((service, index) => (
          // Service Item Row
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-start gap-12 py-16 ${
              index !== 0 ? 'border-t border-gray-200' : ''
            }`}
          >
            {/* Left Side: Title, Description, Link */}
            <div className="lg:w-1/2 w-full">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Get professional {service.title.toLowerCase()} services tailored to your business needs. Our expert team ensures high-quality delivery and ongoing support.
              </p>
              <div className="mt-8">
                {/* --- MODIFICATION HERE --- */}
                {/* Replace <a> with <Link> and href with to */}
                <Link to="/price" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-500">
                  View Pricing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                {/* --- END MODIFICATION --- */}
              </div>
            </div>

            {/* Right Side: Features Card */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">What's Included</h3>
                <div className="grid gap-4 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 text-green-500 mt-1">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-gray-700">{feature.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Card Footer: Price and Button */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-3xl font-bold text-gray-900">£{service.price}<span className="text-lg font-normal text-gray-500">/mo</span></p>
                    </div>
                    <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 shrink-0">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action (CTA) Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Ready to get started?</h2>
            <p className="mt-4 text-xl text-gray-500">
              Contact us today to discuss your project requirements and how we can help your business grow.
            </p>
            <div className="mt-8">
              {/* Consider making this a Link to='/contact' as well */}
              <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;