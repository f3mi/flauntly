import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              Flauntly
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/search" className="text-gray-600 hover:text-gray-900">
              Search
            </Link>
            <Link to="/gift-card" className="text-gray-600 hover:text-gray-900">
              Send a gift card
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-900">
              Log in
            </Link>
            <Link 
              to="/business" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full 
                         text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 
                         focus:ring-offset-2 focus:ring-gray-500 border-gray-200"
            >
              List your business
            </Link>
          </div>

          <div className="sm:hidden">
            <button 
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 
                         hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 
                         focus:ring-inset focus:ring-gray-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 