// src/components/Navbar.tsx
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import React, { useEffect } from 'react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  // --- Base CSS classes ---
  const baseNavClass = "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium";
  const activeNavClass = "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium";
  const mobileBaseNavClass = "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700";
  const mobileActiveNavClass = "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700";

  // --- Effect to prevent body scroll when menu is open ---
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    // z-50 ensures navbar stays on top
    <nav className="bg-white shadow-lg fixed w-full z-50 h-16">
      {/* Navbar Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- MODIFICATION: Added items-center --- */}
        <div className="flex justify-between items-center h-16">

          {/* --- MODIFICATION: Logo is now a direct child --- */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={handleNavLinkClick}>
              <span className="text-2xl font-bold text-indigo-600">WebCkraft</span>
            </Link>
          </div>

          {/* --- MODIFICATION: Links container is now a direct child, centered, and grows --- */}
          <div className="hidden sm:flex sm:flex-grow sm:justify-center sm:space-x-8">
            <NavLink to="/" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? activeNavClass : baseNavClass} end> Home </NavLink>
            <NavLink to="/services" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? activeNavClass : baseNavClass}> Services </NavLink>
            <NavLink to="/price" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? activeNavClass : baseNavClass}> Pricing </NavLink>
            <NavLink to="/contact" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? activeNavClass : baseNavClass}> Contact </NavLink>
          </div>

          {/* --- MODIFICATION: Desktop Get Started Button is now a direct child, removed ml-6 --- */}
          <div className="hidden sm:flex sm:items-center">
            <Link
              to="/price" // Directs to the price page
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button (Remains the last element for justify-between on mobile) */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Overlay (Starts below Navbar) --- */}
      {isMenuOpen && (
        <div
          className="fixed top-16 inset-x-0 bottom-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* --- Mobile Menu Panel (Slides below Navbar) --- */}
      <div
        id="mobile-menu"
        className={`
          fixed top-16 right-0 bottom-0 w-64 sm:w-72 bg-white shadow-xl z-40
          transform transition-transform duration-300 ease-in-out
          overflow-y-auto
          sm:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="h-full flex flex-col">
            {/* Close button inside menu */}
             <div className="flex justify-end p-4">
                 <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                 >
                     <span className="sr-only">Close menu</span>
                     <X className="h-6 w-6" />
                 </button>
             </div>

            {/* Navigation Links */}
            <div className="px-2 pt-2 pb-3 space-y-1 flex-grow">
              <NavLink to="/" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? mobileActiveNavClass : mobileBaseNavClass} end> Home </NavLink>
              <NavLink to="/services" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? mobileActiveNavClass : mobileBaseNavClass}> Services </NavLink>
              <NavLink to="/price" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? mobileActiveNavClass : mobileBaseNavClass}> Price </NavLink>
              <NavLink to="/contact" onClick={handleNavLinkClick} className={({ isActive }) => isActive ? mobileActiveNavClass : mobileBaseNavClass}> Contact </NavLink>
            </div>

            {/* --- Mobile Get Started Button Section (Now a Link) --- */}
            <div className="p-4 border-t border-gray-200 mt-auto">
              <Link
                to="/price" // Directs to the price page
                onClick={handleNavLinkClick} // Keep this to close the menu
                className="block w-full text-center bg-indigo-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Get Started
              </Link>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;