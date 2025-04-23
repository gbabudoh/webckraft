// src/pages/Price.tsx
import React from 'react';
import PricingCard from '../components/PricingCard';
// *** Import the specific type definition from App.tsx ***
// Make sure the relative path '../App' is correct for your folder structure
import { ServiceItem } from '../App';

// Define the props Price.tsx expects, using the imported type
interface PriceProps {
  services: ServiceItem[];
}

const Price: React.FC<PriceProps> = ({ services }) => {
  return (
    <div className="bg-gray-50 py-16 lg:py-24"> {/* Page container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Our Pricing Plans
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that's right for you.
          </p>
        </div>

        {/* Grid for Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Map over the services data and render a PricingCard for each. */}
          {/* TypeScript needs the 'ServiceItem' type here to know 'serviceData' has title, price etc. */}
          {services.map((serviceData: ServiceItem, index) => (
            <PricingCard key={index} {...serviceData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;