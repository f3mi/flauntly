import React, { useState, useEffect } from 'react';

const ExampleLanding = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar with OpusClip-style - transparent & changes on scroll */}
      <header className={`navbar dark-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="/" className="font-display font-bold text-2xl text-white">
            Flauntly
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="/" className="nav-link nav-link-active">Home</a>
            <a href="/search" className="nav-link">Search</a>
            <a href="/gift-card" className="nav-link">Send a gift card</a>
            <a href="/login" className="dark-outline-button ml-4">Log in</a>
            <a href="/business" className="primary-button ml-2">List your business</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="mobile-menu-button md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* OpusClip-inspired Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-headline">
            Book local beauty and wellness services
          </h1>
          <p className="hero-description">
            Find and book beauty & wellness appointments at the best salons, spas, and clinics near you.
          </p>
          
          {/* Modern Search Container */}
          <div className="search-container">
            <div className="search-container-inner">
              <div className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Treatment or venue" 
              />
              <div className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <input 
                type="text" 
                className="location-input" 
                placeholder="Location" 
              />
              <button className="search-button">
                Search
              </button>
            </div>
          </div>
          
          {/* Stats Counter */}
          <div className="stats-counter">
            <span className="stats-highlight">378,536</span> appointments booked today
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Why choose Flauntly?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="feature-card">
              <div className="text-primary-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Book 24/7</h3>
              <p className="text-gray-600">Book appointments anytime, day or night, from anywhere.</p>
            </div>
            
            <div className="feature-card">
              <div className="text-primary-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Verified Reviews</h3>
              <p className="text-gray-600">Real reviews from real customers to help you choose.</p>
            </div>
            
            <div className="feature-card">
              <div className="text-primary-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Exclusive Deals</h3>
              <p className="text-gray-600">Special offers and last-minute discounts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to grow your business?</h2>
          <p className="max-w-2xl mx-auto mb-8">Join thousands of beauty and wellness professionals who use Flauntly to fill their appointment books.</p>
          <a href="/business" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-200">
            List your business
          </a>
        </div>
      </section>
    </div>
  );
};

export default ExampleLanding; 