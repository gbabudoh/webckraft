import React from 'react';

interface Feature {
  text: string;
  icon: React.ReactNode;
}

interface PricingCardProps {
  title: string;
  price: number;
  icon: React.ReactNode;
  features: Feature[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, icon, features }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl mb-8">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-4 flex items-baseline text-gray-900">
        <span className="text-5xl font-extrabold tracking-tight">£{price}</span>
        <span className="ml-1 text-xl font-semibold">/month</span>
      </p>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 text-indigo-500">
              {feature.icon}
            </div>
            <p className="ml-3 text-sm text-gray-700">{feature.text}</p>
          </li>
        ))}
      </ul>
      <button className="mt-8 w-full bg-indigo-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
        Subscribe Now
      </button>
    </div>
  );
};

export default PricingCard;