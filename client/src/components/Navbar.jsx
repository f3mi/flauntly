import React, { useState, useEffect, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled;

  return (
    <header className={`navbar ${isTransparent ? 'navbar-transparent' : 'navbar-solid'}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <span className={`text-2xl font-bold ${
              isTransparent ? 'text-white' : 'gradient-text'
            }`}>
              <span className="font-black">F</span>launtly
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Login Link */}
            <Link 
              to="/login" 
              className={`navbar-link ${isTransparent ? 'navbar-link-transparent' : 'navbar-link-solid'}`}
            >
              Login
            </Link>

            {/* List Your Business Link */}
            <Link 
              to="/business" 
              className={`navbar-button ${isTransparent ? 'navbar-button-transparent' : 'navbar-button-solid'}`}
            >
              List your business
            </Link>

            {/* Menu Dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button 
                className={`navbar-link flex items-center ${isTransparent ? 'navbar-link-transparent' : 'navbar-link-solid'}`}
              >
                Menu
                <ChevronDownIcon className="ml-1 h-4 w-4" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="dropdown-menu">
                  <div className="py-1">
                    <div className="dropdown-header">
                      For Customers
                    </div>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/login"
                          className={`dropdown-item ${active ? 'text-blue-700' : 'text-gray-700'}`}
                        >
                          Login or sign up
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/download"
                          className={`dropdown-item ${active ? 'text-blue-700' : 'text-gray-700'}`}
                        >
                          Download the app
                        </Link>
                      )}
                    </Menu.Item>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-header">
                      For Business
                    </div>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/business"
                          className={`dropdown-item ${active ? 'text-blue-700' : 'text-gray-700'}`}
                        >
                          List your business
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          {/* Mobile menu button */}
          <Menu as="div" className="relative md:hidden">
            <Menu.Button 
              className={`navbar-mobile-button ${
                isTransparent ? 'navbar-mobile-button-transparent' : 'navbar-mobile-button-solid'
              }`}
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className={`navbar-mobile-menu dropdown-menu ${
                isTransparent ? 'navbar-mobile-menu-transparent' : 'navbar-mobile-menu-solid'
              }`}>
                <div className="py-1">
                  <div className="dropdown-header">
                    For Customers
                  </div>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/login"
                        className={`dropdown-item ${active ? 'text-blue-700' : 'text-gray-700'}`}
                      >
                        Login or sign up
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/download"
                        className={`dropdown-item ${active ? 'text-blue-700' : 'text-gray-700'}`}
                      >
                        Download the app
                      </Link>
                    )}
                  </Menu.Item>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-header">
                    For Business
                  </div>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/business"
                        className={`dropdown-item ${active ? 'text-blue-700' : 'text-gray-700'}`}
                      >
                        List your business
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 