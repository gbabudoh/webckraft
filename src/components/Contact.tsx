import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Assume this is Contact.tsx - if it's Contact.js, remove React.FC and type annotations
const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    // Use environment variables for sensitive keys (recommended)
    // Example: process.env.REACT_APP_EMAILJS_SERVICE_ID
    const serviceID = 'YOUR_SERVICE_ID';     // Replace with your actual ID
    const templateID = 'YOUR_TEMPLATE_ID';  // Replace with your actual ID
    const publicKey = 'YOUR_PUBLIC_KEY';    // Replace with your actual Key

    if (!serviceID || serviceID === 'YOUR_SERVICE_ID' || !templateID || templateID === 'YOUR_TEMPLATE_ID' || !publicKey || publicKey === 'YOUR_PUBLIC_KEY') {
      console.error("EmailJS credentials are not configured properly.");
      setStatus('error');
      // Optionally display a user-friendly message
      alert("Contact form configuration is incomplete. Please contact support.");
      return;
    }

    try {
      await emailjs.sendForm(serviceID, templateID, form.current, publicKey);
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
    } catch (error) {
      console.error('EMAILJS ERROR:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
    }
  };

  // Define common input classes for easier maintenance
  const inputClasses = "mt-1 block w-full rounded-md border-gray-300 bg-white py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50 text-base placeholder-gray-400";
  // Slightly different focus ring for better visibility: focus:ring focus:ring-indigo-200 focus:ring-opacity-50

  return (
    // Removed pt-20, padding handled by App.tsx's <main> tag
    <div>
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
              Have a question or want to discuss your project? We're here to help!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"> {/* Added padding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="mt-4 text-lg text-gray-500">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="mt-8 space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-lg font-medium text-gray-900">+44 (0) 123 456 7890</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-lg font-medium text-gray-900">contact@webcraft.com</p>
                </div>
              </div>
              {/* Office */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Office</p>
                  <p className="text-lg font-medium text-gray-900">123 Business Street, London, UK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10"> {/* Increased padding */}
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1"> {/* Added mb-1 */}
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  placeholder="Your Full Name" // Added placeholder
                  className={inputClasses} // Use shared classes
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1"> {/* Added mb-1 */}
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  placeholder="your.email@example.com" // Added placeholder
                  className={inputClasses} // Use shared classes
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1"> {/* Added mb-1 */}
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Reason for contacting" // Added placeholder
                  className={inputClasses} // Use shared classes
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> {/* Added mb-1 */}
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5} // Increased rows slightly for more space
                  required
                  placeholder="Please describe your inquiry..." // Added placeholder
                  className={inputClasses} // Use shared classes
                />
              </div>

              {/* Submit Button and Status */}
              <div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    // Adjusted padding/height for the button to match inputs better
                    className={`w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 ${
                      status === 'sending'
                        ? 'bg-indigo-400 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                  >
                    {status === 'sending' ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <p className="mt-4 text-sm text-green-600 text-center">Message sent successfully! We'll be in touch soon.</p>
                  )}
                  {status === 'error' && (
                    <p className="mt-4 text-sm text-red-600 text-center">Failed to send message. Please check configuration or try again later.</p>
                  )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;