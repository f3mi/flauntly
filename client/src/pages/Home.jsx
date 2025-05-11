import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiMapPin, FiCalendar, FiClock } from 'react-icons/fi';
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
  appointments: 727391
};

const Home = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    service: '',
    location: '',
    date: '',
    time: ''
  });
  const [scrolled, setIsScrolled] = useState(false);

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const queryString = new URLSearchParams(searchParams).toString();
    navigate(`/search?${queryString}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero section with beautiful gradient */}
      <section className="relative min-h-[650px] overflow-hidden pt-16" 
        style={{
          background: 'linear-gradient(135deg, #0a1128 0%, #1a237e 30%, #273c75 50%, #3949ab 75%, #5c6bc0 100%)'
        }}>
        {/* Modern animated gradient blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div 
            className="absolute -top-96 -left-40 w-[800px] h-[800px] rounded-full bg-white/10 filter blur-[70px]"
            style={{ animation: 'float 20s ease-in-out infinite alternate' }}
          ></div>
          <div 
            className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-blue-400/15 filter blur-[70px]" 
            style={{ animation: 'floatSlow 25s ease-in-out infinite alternate' }}
          ></div>
          <div 
            className="absolute -bottom-64 left-1/3 w-[500px] h-[500px] rounded-full bg-indigo-600/15 filter blur-[70px]"
            style={{ animation: 'float 18s ease-in-out infinite alternate-reverse' }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-300/10 filter blur-[70px]"
            style={{ animation: 'floatSlow 15s ease-in-out infinite alternate-reverse' }}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tight">
            Book local beauty and wellness services
          </h1>
          
          {/* Search Container */}
          <form 
            onSubmit={handleSearch} 
            className="max-w-3xl mx-auto animate-fade-in animate-scale-in"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-1.5 shadow-xl grid grid-cols-1 md:grid-cols-10 gap-2 relative overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-45deg] animate-shimmer"></div>
              
              <div className="flex items-center bg-gray-50/90 rounded-lg py-2 md:col-span-2 transition-all hover:bg-white/90 focus-within:ring-2 focus-within:ring-blue-400/40">
                <span className="pl-3 pr-1 text-blue-500">
                  <FiSearch size={18} />
                </span>
                <input 
                  type="text" 
                  className="bg-transparent text-gray-800 placeholder-gray-500 w-full pl-1 focus:outline-none rounded-lg text-sm" 
                  placeholder="Treatment or venue"
                  value={searchParams.service}
                  onChange={(e) => setSearchParams({ ...searchParams, service: e.target.value })}
                />
              </div>
              
              <div className="flex items-center bg-gray-50/90 rounded-lg py-2 md:col-span-2 transition-all hover:bg-white/90 focus-within:ring-2 focus-within:ring-blue-400/40">
                <span className="pl-3 pr-1 text-blue-500">
                  <FiMapPin size={18} />
                </span>
                <input 
                  type="text" 
                  className="bg-transparent text-gray-800 placeholder-gray-500 w-full pl-1 focus:outline-none rounded-lg text-sm" 
                  placeholder="Location"
                  value={searchParams.location}
                  onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                />
              </div>
              
              <div className="md:col-span-4 md:contents">
                <div className="flex items-center bg-gray-50/90 rounded-lg py-2 md:col-span-2 transition-all hover:bg-white/90 focus-within:ring-2 focus-within:ring-blue-400/40">
                  <span className="pl-3 pr-1 text-blue-500">
                    <FiCalendar size={18} />
                  </span>
                  <input 
                    type="text" 
                    className="bg-transparent text-gray-800 placeholder-gray-500 w-full pl-1 focus:outline-none rounded-lg text-sm" 
                    placeholder="Date"
                    value={searchParams.date}
                    onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })}
                  />
                </div>
                
                <div className="flex items-center bg-gray-50/90 rounded-lg py-2 md:col-span-2 transition-all hover:bg-white/90 focus-within:ring-2 focus-within:ring-blue-400/40">
                  <span className="pl-3 pr-1 text-blue-500">
                    <FiClock size={18} />
                </span>
                  <input 
                    type="text" 
                    className="bg-transparent text-gray-800 placeholder-gray-500 w-full pl-1 focus:outline-none rounded-lg text-sm" 
                    placeholder="Time"
                    value={searchParams.time}
                    onChange={(e) => setSearchParams({ ...searchParams, time: e.target.value })}
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                className="search-button group relative overflow-hidden"
              >
                <span className="relative z-10">Search</span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
              </button>
            </div>
          </form>
          
          {/* Popular Searches */}
          <div className="mt-5 flex flex-wrap justify-center gap-2 animate-fade-in delay-200">
            <span className="text-xs text-blue-100/80">Popular:</span>
            {['Hair salon', 'Manicure', 'Massage', 'Facial', 'Barber'].map((term, i) => (
              <button 
                key={i} 
                onClick={() => setSearchParams({...searchParams, service: term})}
                className="text-xs px-3 py-1 rounded-full bg-white/10 text-blue-50 hover:bg-white/20 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
          
          {/* Stats Counter */}
          <div className="text-white/80 mt-8 text-sm animate-fade-in delay-300">
            <span className="text-white font-semibold">{stats.appointments.toLocaleString()}</span> appointments booked today
          </div>
          
          {/* App Download Section */}
          <div className="flex flex-col md:flex-row items-center justify-center mt-16 space-y-6 md:space-y-0 md:space-x-8 animate-fade-in delay-400">
            <div className="bg-gradient-to-br from-blue-50/10 to-white/5 backdrop-blur-md p-6 rounded-2xl w-36 h-36 flex items-center justify-center border border-white/20 shadow-lg relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-subtle"></div>
              
              {/* QR code placeholder */}
              <div className="relative z-10 w-full h-full">
                <div className="w-full h-full bg-white/90 rounded-lg flex items-center justify-center">
                  <div className="grid grid-cols-5 grid-rows-5 gap-1 w-5/6 h-5/6">
                    {/* Simulated QR code pattern */}
                    {[...Array(25)].map((_, index) => {
                      // Create a pseudo-random pattern for QR effect 
                      const isBlock = (index % 7 === 0) || (index % 3 === 0) || (index < 8) || (index > 16);
                      return (
                        <div 
                          key={index}
                          className={`${isBlock ? 'bg-blue-900' : 'bg-transparent'} rounded-sm`}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-left text-white">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                Download the Flauntly app
              </h2>
              <p className="text-sm text-blue-100 mb-4 ml-7">Book unforgettable beauty and wellness experiences on the go</p>
              <div className="flex space-x-3 ml-7">
                <a href="#" className="relative group">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-blue-500 blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
                  <button className="relative bg-gradient-to-r from-blue-900 to-indigo-900 border border-blue-700/30 text-white rounded-lg p-2 h-11 w-32 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] opacity-80">Download on</div>
                      <div className="text-sm font-medium">App Store</div>
                    </div>
                  </button>
                </a>
                
                <a href="#" className="relative group">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
                  <button className="relative bg-gradient-to-r from-blue-900 to-indigo-900 border border-blue-700/30 text-white rounded-lg p-2 h-11 w-32 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] opacity-80">Download on</div>
                      <div className="text-sm font-medium">Play Store</div>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Businesses that blend with the hero section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Recommended businesses</h2>
            <Link to="/search" className="text-blue-200 hover:text-white text-sm flex items-center transition-colors">
              View all 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_BUSINESSES.map((business) => (
              <Link key={business.id} to={`/business/${business.id}`} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-white/15">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={business.image} 
                      alt={business.name} 
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-1">
                      <span className="text-xs inline-block py-0.5 px-2 rounded-full bg-blue-500/20 text-blue-50 backdrop-blur-sm">
                        {business.category}
                      </span>
                      <div className="ml-auto flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-white text-sm ml-1">{business.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-lg group-hover:text-blue-200 transition-colors">
                      {business.name}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-blue-100 text-xs flex items-center">
                        <FiMapPin className="mr-1" size={12} />
                        {business.location}
                      </span>
                      <span className="text-blue-100 text-xs">
                        {business.reviewCount} reviews
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* New Businesses Section - now part of the same section with no dividing line */}
        <div className="pt-24 pb-24 relative">
          {/* Extended background gradient that continues from hero */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900 to-white pointer-events-none"></div>
          
          {/* Extra blobs for visual interest in the transition area */}
          <div className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full bg-blue-500/5 filter blur-[150px] pointer-events-none"></div>
          <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-indigo-400/5 filter blur-[130px] pointer-events-none"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="flex justify-between items-center mb-12">
              <div>
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 mb-3 animate-fade-in">
                  Just Joined
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 animate-fade-in">New businesses on Flauntly</h2>
                <p className="text-blue-100 max-w-2xl animate-fade-in delay-100">Discover the latest additions to our beauty and wellness community</p>
              </div>
              <Link to="/search?filter=new" className="hidden md:flex items-center text-white hover:text-blue-200 transition-colors text-sm font-medium">
                Explore all new businesses
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            {/* Carousel-like display of new businesses */}
            <div className="overflow-hidden animate-fade-in delay-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[
                  {
                    id: 101,
                    name: 'Glow Studio',
                    category: 'Skincare',
                    rating: 'New',
                    location: 'West End',
                    image: 'https://images.unsplash.com/photo-1596178060810-72c633ce9383?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    new: true,
                    openingDate: 'Opens June 15'
                  },
                  {
                    id: 102,
                    name: 'Revive Massage Therapy',
                    category: 'Massage',
                    rating: 'New',
                    location: 'Downtown',
                    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hc3NhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                    new: true,
                    openingDate: 'Just Opened'
                  },
                  {
                    id: 103,
                    name: 'Luxe Nails & Spa',
                    category: 'Nails',
                    rating: 'New',
                    location: 'Riverside',
                    image: 'https://images.unsplash.com/photo-1610992013792-9b21520bc495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmFpbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                    new: true,
                    openingDate: 'Just Opened'
                  },
                  {
                    id: 104,
                    name: 'Modern Man Barbers',
                    category: 'Barber',
                    rating: 'New',
                    location: 'Eastside',
                    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFyYmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    new: true,
                    openingDate: 'Opening Soon'
                  }
                ].map((business) => (
                  <Link key={business.id} to={`/business/${business.id}`} className="group">
                    <div className="relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
                      {/* New badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center rounded-full bg-blue-600 px-2.5 py-1 text-xs font-medium text-white">
                          <svg className="mr-1 h-2 w-2 animate-pulse fill-white" viewBox="0 0 6 6" aria-hidden="true">
                            <circle cx="3" cy="3" r="3" />
                          </svg>
                          {business.openingDate}
                        </span>
                      </div>
                      
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={business.image} 
                          alt={business.name} 
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center mb-1">
                          <span className="text-xs inline-block py-0.5 px-2 rounded-full bg-blue-100 text-blue-700">
                            {business.category}
                          </span>
                        </div>
                        <h3 className="text-gray-900 font-bold text-lg group-hover:text-blue-700 transition-colors">
                          {business.name}
                        </h3>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-gray-500 text-xs flex items-center">
                            <FiMapPin className="mr-1" size={12} />
                            {business.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-12 mb-8 md:hidden animate-fade-in delay-300">
              <Link 
                to="/search?filter=new" 
                className="inline-flex items-center px-4 py-2 rounded-full font-medium text-sm text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                Explore all new businesses
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reviews section with improved design */}
      <section className="relative py-20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-100/30 filter blur-[70px]"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-indigo-100/30 filter blur-[70px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 mb-3 animate-fade-in">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 animate-fade-in">What our customers are saying</h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in delay-100">Join thousands of satisfied customers who have transformed their beauty and wellness booking experience with Flauntly</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Lucy Thompson",
                location: "London, UK",
                role: "Regular Customer",
                quote: "The best booking system I've ever used. Easy to find businesses, book appointments, and pay. No more waiting on hold to schedule appointments!",
                rating: 5,
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              },
              {
                name: "Mark Johnson",
                location: "Manchester, UK",
                role: "Loyal User",
                quote: "I've been using Flauntly for over a year now, and it's completely changed how I book my barber appointments. The reminders are so helpful!",
                rating: 5,
                img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              },
              {
                name: "Jane Wilson",
                location: "Edinburgh, UK",
                role: "Beauty Enthusiast",
                quote: "Finding new salons used to be hit or miss. With Flauntly, I can see reviews, photos, and available times all in one place. It's brilliant!",
                rating: 5,
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg p-8 border border-blue-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-${(index+1)*100}`}
              >
                {/* Quote decoration */}
                <div className="absolute -top-4 -left-3 text-6xl text-blue-100 font-serif">"</div>
                
                <div className="relative">
                  {/* Rating stars */}
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      {Array(testimonial.rating).fill(0).map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial content */}
                  <p className="text-gray-600 mb-8 relative z-10">"{testimonial.quote}"</p>
                  
                  {/* Profile */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.img} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-100"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-blue-600 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-xs">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* More reviews button */}
          <div className="flex justify-center mt-12">
            <a 
              href="/reviews" 
              className="group inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium rounded-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span>View all reviews</span> 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 text-gray-400">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Verified Reviews</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-1l1-1 1-1-0.257-0.257A6 6 0 1118 8zm-6-4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">40,000+ Reviews</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm">4.8 Average Rating</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trending Businesses Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-64 right-0 w-96 h-96 rounded-full bg-blue-50 filter blur-[100px]"></div>
        <div className="absolute -bottom-24 -left-12 w-64 h-64 rounded-full bg-indigo-50 filter blur-[80px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-700 mb-3 animate-fade-in">
              Most Popular
            </div>
            <h2 className="text-3xl font-bold gradient-text mb-4 animate-fade-in">Trending on Flauntly</h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in delay-100">
              These businesses are making waves with our customers - book now to avoid missing out!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 201,
                name: 'The Beauty Lab',
                category: 'Beauty Salon',
                trending: '23% more bookings this week',
                rating: 4.9,
                reviewCount: 162,
                location: 'Central',
                image: 'https://images.unsplash.com/photo-1595917164709-a009ed58e05a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYXV0eSUyMHNhbG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              },
              {
                id: 202,
                name: 'Pure Skin Aesthetics',
                category: 'Skincare',
                trending: 'Popular with VIPs',
                rating: 4.8,
                reviewCount: 97,
                location: 'Highgate',
                image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              },
              {
                id: 203,
                name: 'The Grooming Lounge',
                category: 'Men\'s Grooming',
                trending: 'Featured on GQ',
                rating: 4.9,
                reviewCount: 214,
                location: 'Soho',
                image: 'https://images.unsplash.com/photo-1626015353946-150c16088d83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhcmJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              }
            ].map((business, index) => (
              <Link key={business.id} to={`/business/${business.id}`} className={`group animate-fade-in delay-${(index+1)*100}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={business.image} 
                      alt={business.name} 
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                    />
                    {/* Trending indicator */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                        </svg>
                        Trending
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-xs inline-block py-0.5 px-2 rounded-full bg-blue-100 text-blue-800 mb-2">
                          {business.category}
                        </span>
                        <h3 className="text-gray-900 font-bold text-lg group-hover:text-blue-700 transition-colors">
                          {business.name}
                        </h3>
                      </div>
                      <div className="bg-yellow-50 rounded-lg p-1 flex items-center">
                        <span className="text-yellow-500 font-bold">★</span>
                        <span className="text-gray-800 font-semibold text-sm ml-1">{business.rating}</span>
                      </div>
                    </div>
                    <p className="text-blue-600 text-xs font-medium mb-3">
                      {business.trending}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-xs flex items-center">
                        <FiMapPin className="mr-1" size={12} />
                        {business.location}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {business.reviewCount} reviews
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <Link 
              to="/search?filter=trending" 
              className="group inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span>Discover all trending businesses</span> 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Top-rated destination section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 mb-3">
            Industry Leader
          </div>
          <h2 className="text-2xl font-bold gradient-text mb-6">The top-rated destination for beauty and wellness</h2>
          <p className="text-gray-600 mb-12">One solution, one software. Trusted by the best in the beauty and wellness industry</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text mb-2">1 billion+</p>
              <p className="text-gray-600 text-sm">Appointments booked on Flauntly</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text mb-2">120,000+</p>
              <p className="text-gray-600 text-sm">partner businesses</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text mb-2">120+ countries</p>
              <p className="text-gray-600 text-sm">using Flauntly</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text mb-2">450,000+</p>
              <p className="text-gray-600 text-sm">stylists and professionals</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Business CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 to-indigo-900 py-20 text-white">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-500/10 filter blur-[50px]"></div>
          <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-indigo-400/10 filter blur-[60px]"></div>
          <div className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-blue-300/10 filter blur-[30px]"></div>
          
          {/* Diagonal lines decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute h-0.5 bg-white/30" 
                  style={{ 
                    width: '140%', 
                    top: `${i * 10}%`, 
                    left: '-20%', 
                    transform: 'rotate(-15deg)'
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Abstract shape */}
          <div className="absolute -right-24 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-600/10 rounded-full"></div>
          <div className="absolute -left-32 bottom-0 w-64 h-64 border border-blue-400/20 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center mb-5 rounded-full bg-blue-700/40 px-3 py-1 text-sm backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                For salon & spa owners
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Scale your beauty business with Flauntly
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Join the 120,000+ beauty and wellness businesses using Flauntly to grow their client base, streamline operations, and boost revenue.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Free salon management software',
                  'Attract new clients with marketplace exposure',
                  'Reduce no-shows with automated reminders',
                  'Analytics to grow your business'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <a 
                  href="/business" 
                  className="gradient-button py-3 px-8 rounded-lg hover:scale-105 transition-transform flex items-center w-full sm:w-auto justify-center"
                >
                  <span>Get started for free</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="/demo" 
                  className="gradient-button-outline py-3 px-8 rounded-lg hover:scale-105 transition-transform backdrop-blur-sm border border-white/20 flex items-center w-full sm:w-auto justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  <span>Schedule a demo</span>
                </a>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-gradient-to-br from-blue-700/50 to-indigo-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl transform rotate-3 transition-transform hover:rotate-0">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Business Performance</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-sm text-blue-100 mb-2">Monthly bookings</p>
                    <div className="flex items-end justify-between">
                      <p className="text-2xl font-bold">267</p>
                      <p className="text-green-400 text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                        </svg>
                        +32%
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-sm text-blue-100 mb-2">New clients</p>
                    <div className="flex items-end justify-between">
                      <p className="text-2xl font-bold">54</p>
                      <p className="text-green-400 text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                        </svg>
                        +18%
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-sm text-blue-100 mb-2">Revenue</p>
                    <div className="flex items-end justify-between">
                      <p className="text-2xl font-bold">$15,840</p>
                      <p className="text-green-400 text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                        </svg>
                        +24%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 