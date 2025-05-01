import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Mock featured businesses
const FEATURED_BUSINESSES = [
  {
    id: 1,
    name: 'Serenity Beauty Salon',
    category: 'Beauty Salon',
    rating: 4.9,
    reviewCount: 119,
    location: 'Downtown',
    image: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0eSUyMHNhbG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'The Healthy Skin Room',
    category: 'Skincare',
    rating: 5.0,
    reviewCount: 78,
    location: 'Westside',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'Expert Barber',
    category: 'Barber',
    rating: 5.0,
    reviewCount: 2185,
    location: 'Eastside',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhcmJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    name: 'Hilario Hair Salon',
    category: 'Hair Salon',
    rating: 5.0,
    reviewCount: 365,
    location: 'Northside',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
];

// Categories
const CATEGORIES = [
  { name: 'Hair Salon', icon: '💇‍♀️' },
  { name: 'Barber', icon: '💈' },
  { name: 'Nails', icon: '💅' },
  { name: 'Massage', icon: '💆‍♂️' },
  { name: 'Facials', icon: '✨' },
  { name: 'Spa', icon: '🧖‍♀️' },
  { name: 'Eyebrows & Lashes', icon: '👁️' },
  { name: 'Waxing', icon: '🦵' },
];

// Mock stats
const stats = {
  businesses: 25000,
  locations: 140,
  reviews: 75800
};

const Home = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    service: '',
    location: '',
  });
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState({
    hero: true, // Set hero to true initially for immediate animation
    categories: false,
    featured: false,
    cta: false
  });
  const [searchFocused, setSearchFocused] = useState(false);

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check if sections are in viewport for animation
      const categoriesSection = document.querySelector('.features-section');
      const featuredSection = document.querySelector('.featured-section');
      const ctaSection = document.querySelector('.cta-section');
      
      if (categoriesSection && isElementInViewport(categoriesSection)) {
        setIsVisible(prev => ({ ...prev, categories: true }));
      }
      
      if (featuredSection && isElementInViewport(featuredSection)) {
        setIsVisible(prev => ({ ...prev, featured: true }));
      }
      
      if (ctaSection && isElementInViewport(ctaSection)) {
        setIsVisible(prev => ({ ...prev, cta: true }));
      }
    };

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
      );
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    setTimeout(handleScroll, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const queryString = new URLSearchParams(searchParams).toString();
    navigate(`/search?${queryString}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero section with OpusClip-inspired dark theme */}
      <section className="hero-section">
        {/* Animated background blobs */}
        <div className="hero-blob hero-blob-1 animate-float"></div>
        <div className="hero-blob hero-blob-2 animate-float-slow"></div>
        <div className="hero-blob hero-blob-3 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-4 text-center">
          <h1 className={`hero-headline animate-slide-up`}>
            Discover Local Businesses Near You
          </h1>
          <p className={`hero-description animate-slide-up delay-200`}>
            Find, review, and connect with the best local businesses in your area.
            Join thousands of satisfied customers finding exactly what they need.
          </p>
          
          {/* Modern Search Container */}
          <form 
            onSubmit={handleSearch} 
            className={`search-container animate-fade-in delay-300 ${searchFocused ? 'animate-glow' : ''}`}
          >
            <div className="search-container-inner">
              <div className="flex items-center flex-1 border-r border-gray-100">
                <span className="search-icon">
                  <FiSearch size={20} />
                </span>
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="What are you looking for?"
                  value={searchParams.service}
                  onChange={(e) => setSearchParams({ ...searchParams, service: e.target.value })}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>
              <div className="flex items-center flex-1">
                <span className="search-icon">
                  <FiMapPin size={20} />
                </span>
                <input 
                  type="text" 
                  className="location-input" 
                  placeholder="Location"
                  value={searchParams.location}
                  onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>
              <button type="submit" className="search-button">
                <span className="z-10 relative">Search</span>
                <span className="absolute inset-0 overflow-hidden">
                  <span className="absolute inset-0 bg-white/20 animate-shimmer" style={{ left: '-100%' }}></span>
                </span>
              </button>
            </div>
          </form>
          
          {/* Stats Counter */}
          <div className="stats-counter animate-fade-in delay-400">
            <span className="stats-highlight animate-pulse-subtle">{stats.businesses.toLocaleString()}</span> businesses •{' '}
            <span className="stats-highlight animate-pulse-subtle">{stats.locations.toLocaleString()}</span> locations •{' '}
            <span className="stats-highlight animate-pulse-subtle">{stats.reviews.toLocaleString()}</span> reviews
          </div>
        </div>
      </section>

      {/* Categories section */}
      <div className="features-section">
        <div className="container mx-auto px-4 py-10">
          <h2 className={`section-title ${isVisible.categories ? 'animate-slide-up' : 'opacity-0'}`}>
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 mt-10">
            {CATEGORIES.map((category, index) => (
              <div
                key={category.name}
                className={`feature-card flex flex-col items-center p-5 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg ${
                  isVisible.categories ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${100 * index}ms` }}
                onClick={() => navigate(`/search?service=${category.name}`)}
              >
                <span className="text-3xl mb-3 animate-float" style={{ animationDelay: `${200 * index}ms` }}>{category.icon}</span>
                <span className="text-sm font-medium text-gray-900">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured businesses section */}
      <div className="featured-section bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className={`section-title ${isVisible.featured ? 'animate-slide-up' : 'opacity-0'}`}>
            Recommended for You
          </h2>
          <p className={`mt-4 text-lg text-center text-gray-600 max-w-2xl mx-auto ${
            isVisible.featured ? 'animate-fade-in delay-200' : 'opacity-0'
          }`}>
            Discover top-rated salons and spas in your area
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_BUSINESSES.map((business, index) => (
              <div
                key={business.id}
                className={`feature-card overflow-hidden group cursor-pointer hover:-translate-y-2 transition-all duration-300 ${
                  isVisible.featured ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${200 * index}ms` }}
                onClick={() => navigate(`/business/${business.id}`)}
              >
                <div className="aspect-h-3 aspect-w-4 bg-gray-200 group-hover:opacity-90 overflow-hidden relative">
                  <img
                    src={business.image}
                    alt={business.name}
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:animate-shimmer pointer-events-none"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">{business.name}</h3>
                  <div className="mt-1 flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={`h-4 w-4 flex-shrink-0 ${
                            business.rating > rating ? 'text-yellow-400 animate-pulse-subtle' : 'text-gray-200'
                          }`}
                          style={{ animationDelay: `${100 * rating}ms` }}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="ml-1 text-sm text-gray-500">
                      {business.rating} ({business.reviewCount})
                    </p>
                  </div>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <MapPinIcon className="mr-1 h-4 w-4 animate-pulse-subtle" style={{ animationDelay: '1s' }} />
                    {business.location}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{business.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/search')}
              className={`primary-button relative overflow-hidden ${isVisible.featured ? 'animate-fade-in delay-500' : 'opacity-0'}`}
            >
              <span className="relative z-10">View all</span>
              {/* Button shine effect */}
              <span className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" 
                style={{
                  background: 'linear-gradient(45deg, rgba(56, 189, 248, 0.2) 0%, rgba(232, 121, 249, 0.2) 100%)'
                }}></span>
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-6 ${isVisible.cta ? 'animate-slide-up' : 'opacity-0'}`}>
            Ready to grow your business?
          </h2>
          <p className={`max-w-2xl mx-auto mb-8 ${isVisible.cta ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
            Join thousands of beauty and wellness professionals who use Flauntly to fill their appointment books.
          </p>
          <a 
            href="/business" 
            className={`relative bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-200 hover:scale-105 ${
              isVisible.cta ? 'animate-scale-in delay-400' : 'opacity-0'
            }`}
          >
            <span className="relative z-10">List your business</span>
            <span className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" 
              style={{
                background: 'linear-gradient(45deg, rgba(56, 189, 248, 0.2) 0%, rgba(232, 121, 249, 0.2) 100%)'
              }}></span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home; 