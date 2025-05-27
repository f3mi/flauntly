import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiMapPin, FiCalendar, FiClock, FiStar, FiTrendingUp } from 'react-icons/fi';
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
      {/* Enhanced Hero section with modern design */}
      <section className="relative min-h-[100vh] overflow-hidden pt-16" 
        style={{
          background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 25%, #2d2d5f 50%, #4a4a8a 75%, #6b6bb5 100%)'
        }}>
        {/* Enhanced animated gradient blobs with better positioning */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div 
            className="absolute -top-96 -left-40 w-[900px] h-[900px] rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/15 filter blur-[100px]"
            style={{ animation: 'float 25s ease-in-out infinite alternate' }}
          ></div>
          <div 
            className="absolute top-1/4 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-l from-indigo-400/20 to-blue-500/15 filter blur-[90px]" 
            style={{ animation: 'floatSlow 30s ease-in-out infinite alternate' }}
          ></div>
          <div 
            className="absolute -bottom-64 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-purple-600/15 to-indigo-500/20 filter blur-[80px]"
            style={{ animation: 'float 20s ease-in-out infinite alternate-reverse' }}
          ></div>
          <div 
            className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-300/10 to-indigo-400/15 filter blur-[70px]"
            style={{ animation: 'floatSlow 18s ease-in-out infinite alternate-reverse' }}
          ></div>
          
          {/* Subtle geometric patterns */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-full"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-white/15 rounded-lg rotate-45"></div>
            <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-white/10 rounded-full"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 text-center">
          {/* Enhanced headline with better typography */}
          <div className="mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm mb-8">
              <FiTrendingUp className="mr-2 h-4 w-4" />
              <span>Trusted by 120,000+ beauty professionals worldwide</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              Book beauty & wellness
              <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                experiences you'll love
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
              Discover and book appointments with top-rated beauty professionals in your area. 
              <span className="block mt-2 text-lg text-blue-200/70">Simple, fast, and always reliable.</span>
            </p>
          </div>
          
          {/* Enhanced Search Container with glass morphism */}
          <form 
            onSubmit={handleSearch} 
            className="max-w-4xl mx-auto animate-fade-in animate-scale-in mb-12"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Enhanced shimmer effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-shimmer"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                <div className="md:col-span-3 flex items-center bg-gray-50/80 rounded-xl py-4 px-4 transition-all hover:bg-white/90 focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:bg-white group">
                  <span className="text-blue-600 group-focus-within:text-blue-700 transition-colors">
                    <FiSearch size={20} />
                  </span>
                  <input 
                    type="text" 
                    className="bg-transparent text-gray-800 placeholder-gray-500 w-full ml-3 focus:outline-none text-base font-medium" 
                    placeholder="What service do you need?"
                    value={searchParams.service}
                    onChange={(e) => setSearchParams({ ...searchParams, service: e.target.value })}
                  />
                </div>
                
                <div className="md:col-span-3 flex items-center bg-gray-50/80 rounded-xl py-4 px-4 transition-all hover:bg-white/90 focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:bg-white group">
                  <span className="text-blue-600 group-focus-within:text-blue-700 transition-colors">
                    <FiMapPin size={20} />
                  </span>
                  <input 
                    type="text" 
                    className="bg-transparent text-gray-800 placeholder-gray-500 w-full ml-3 focus:outline-none text-base font-medium" 
                    placeholder="Where?"
                    value={searchParams.location}
                    onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                  />
                </div>
                
                <div className="md:col-span-2 flex items-center bg-gray-50/80 rounded-xl py-4 px-4 transition-all hover:bg-white/90 focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:bg-white group">
                  <span className="text-blue-600 group-focus-within:text-blue-700 transition-colors">
                    <FiCalendar size={20} />
                  </span>
                  <input 
                    type="text" 
                    className="bg-transparent text-gray-800 placeholder-gray-500 w-full ml-3 focus:outline-none text-base font-medium" 
                    placeholder="Date"
                    value={searchParams.date}
                    onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })}
                  />
                </div>
                
                <div className="md:col-span-2 flex items-center bg-gray-50/80 rounded-xl py-4 px-4 transition-all hover:bg-white/90 focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:bg-white group">
                  <span className="text-blue-600 group-focus-within:text-blue-700 transition-colors">
                    <FiClock size={20} />
                  </span>
                  <input 
                    type="text" 
                    className="bg-transparent text-gray-800 placeholder-gray-500 w-full ml-3 focus:outline-none text-base font-medium" 
                    placeholder="Time"
                    value={searchParams.time}
                    onChange={(e) => setSearchParams({ ...searchParams, time: e.target.value })}
                  />
                </div>
                
                <div className="md:col-span-2">
                  <button 
                    type="submit" 
                    className="w-full h-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-xl font-semibold text-base hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <FiSearch className="mr-2 h-5 w-5" />
                      Search
                    </span>
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
                  </button>
                </div>
              </div>
            </div>
          </form>
          
          {/* Enhanced Popular Searches */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in delay-200 mb-16">
            <span className="text-sm text-blue-200/70 font-medium">Popular searches:</span>
            {['Hair salon', 'Manicure', 'Massage', 'Facial', 'Barber'].map((term, i) => (
              <button 
                key={i} 
                onClick={() => setSearchParams({...searchParams, service: term})}
                className="text-sm px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-blue-100 hover:bg-white/20 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-105"
              >
                {term}
              </button>
            ))}
          </div>
          
          {/* Enhanced Stats Counter with better visual design */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white/90 animate-fade-in delay-300 mb-20">
            <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-lg font-semibold">{stats.appointments.toLocaleString()}</span>
              <span className="text-blue-200/80 ml-2">appointments booked today</span>
            </div>
            
            <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <FiStar className="text-yellow-400 mr-2 h-5 w-5" />
              <span className="text-lg font-semibold">4.9</span>
              <span className="text-blue-200/80 ml-2">average rating</span>
            </div>
          </div>
          
          {/* Enhanced App Download Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 animate-fade-in delay-400">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl hover:scale-105 transition-all duration-500 group-hover:bg-white/15">
                {/* QR code with modern design */}
                <div className="w-40 h-40 bg-white/95 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <div className="grid grid-cols-6 grid-rows-6 gap-1 w-32 h-32">
                    {[...Array(36)].map((_, index) => {
                      const isBlock = (index % 7 === 0) || (index % 3 === 0) || (index < 12) || (index > 23) || (index === 14) || (index === 21);
                      return (
                        <div 
                          key={index}
                          className={`${isBlock ? 'bg-gradient-to-br from-blue-700 to-indigo-800' : 'bg-transparent'} rounded-sm`}
                        ></div>
                      );
                    })}
                  </div>
                </div>
                <p className="text-white/80 text-sm text-center">Scan to download</p>
              </div>
            </div>
            
            <div className="text-center lg:text-left text-white max-w-md">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 text-sm mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                Mobile App Available
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                Beauty at your
                <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  fingertips
                </span>
              </h2>
              
              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed">
                Book appointments, discover new services, and manage your beauty routine with our award-winning mobile app.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#" className="group relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <button className="relative bg-black/80 backdrop-blur-md border border-white/20 text-white rounded-2xl px-6 py-4 flex items-center justify-center hover:scale-105 transition-all duration-300 min-w-[160px]">
                    <svg className="h-8 w-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-80">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </button>
                </a>
                
                <a href="#" className="group relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <button className="relative bg-black/80 backdrop-blur-md border border-white/20 text-white rounded-2xl px-6 py-4 flex items-center justify-center hover:scale-105 transition-all duration-300 min-w-[160px]">
                    <svg className="h-8 w-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-80">Get it on</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </button>
                </a>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-6 mt-8 text-sm text-blue-200/70">
                <div className="flex items-center">
                  <FiStar className="text-yellow-400 mr-1 h-4 w-4" />
                  <span>4.8 rating</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>500K+ downloads</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Recommended Businesses Section - now integrated within hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white/90 mb-4">
                <FiTrendingUp className="mr-2 h-4 w-4" />
                <span>Handpicked for you</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Recommended businesses</h2>
              <p className="text-blue-200/80 text-lg">Discover top-rated beauty professionals in your area</p>
            </div>
            <Link to="/search" className="text-blue-200 hover:text-white text-sm flex items-center transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mt-4 md:mt-0">
              View all businesses
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_BUSINESSES.map((business, index) => (
              <Link key={business.id} to={`/business/${business.id}`} className={`group animate-fade-in delay-${(index+1)*100}`}>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.05] hover:bg-white/15 border border-white/20">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={business.image} 
                      alt={business.name} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                    />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-block py-1 px-3 rounded-full bg-white/90 backdrop-blur-md text-gray-800 text-xs font-semibold shadow-lg">
                        {business.category}
                      </span>
                    </div>
                    
                    {/* Rating badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="flex items-center bg-black/70 backdrop-blur-md text-white px-2 py-1 rounded-full text-xs font-medium">
                        <FiStar className="text-yellow-400 mr-1 h-3 w-3 fill-current" />
                        <span>{business.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 relative z-20">
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-200 transition-colors leading-tight">
                      {business.name}
                    </h3>
                    
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-blue-100/80 flex items-center">
                        <FiMapPin className="mr-1 h-4 w-4" />
                        {business.location}
                      </span>
                      <span className="text-blue-100/80">
                        {business.reviewCount} reviews
                      </span>
                    </div>
                    
                    {/* Hover action */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button className="w-full bg-white/20 backdrop-blur-md text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors border border-white/30">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
      </section>
      
      {/* New Businesses Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 mb-3 animate-fade-in">
                Just Joined
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 animate-fade-in">New businesses on Flauntly</h2>
              <p className="text-gray-600 max-w-2xl animate-fade-in delay-100">Discover the latest additions to our beauty and wellness community</p>
            </div>
            <Link to="/search?filter=new" className="hidden md:flex items-center text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium">
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
        
      </section>
      
      {/* Reviews section */}
      <section className="py-24 bg-white">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 text-blue-700 text-sm mb-6 animate-fade-in">
              <FiStar className="mr-2 h-4 w-4 text-yellow-500" />
              <span className="font-medium">Customer Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-fade-in leading-tight">
              Loved by beauty enthusiasts
              <span className="block text-3xl md:text-4xl text-gray-600 font-normal mt-2">worldwide</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-100 leading-relaxed">
              Join over 2 million satisfied customers who have transformed their beauty and wellness booking experience with Flauntly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                name: "Lucy Thompson",
                location: "London, UK",
                role: "Regular Customer",
                quote: "The best booking system I've ever used. Easy to find businesses, book appointments, and pay. No more waiting on hold to schedule appointments!",
                rating: 5,
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
                service: "Hair & Nails"
              },
              {
                name: "Mark Johnson",
                location: "Manchester, UK",
                role: "Loyal User",
                quote: "I've been using Flauntly for over a year now, and it's completely changed how I book my barber appointments. The reminders are so helpful!",
                rating: 5,
                img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
                service: "Barber Services"
              },
              {
                name: "Jane Wilson",
                location: "Edinburgh, UK",
                role: "Beauty Enthusiast",
                quote: "Finding new salons used to be hit or miss. With Flauntly, I can see reviews, photos, and available times all in one place. It's brilliant!",
                rating: 5,
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
                service: "Spa & Wellness"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] animate-fade-in delay-${(index+1)*100} overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quote decoration with modern styling */}
                <div className="absolute -top-2 -left-2 text-5xl text-blue-200/40 font-serif transform rotate-12">"</div>
                
                <div className="relative z-10">
                  {/* Enhanced rating stars */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex text-yellow-400">
                      {Array(testimonial.rating).fill(0).map((_, i) => (
                        <FiStar key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                  
                  {/* Enhanced testimonial content */}
                  <p className="text-gray-700 mb-8 relative z-10 text-lg leading-relaxed font-medium">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Enhanced profile section */}
                  <div className="flex items-center">
                    <div className="relative">
                      <img 
                        src={testimonial.img} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-blue-600 text-sm font-medium">{testimonial.role}</p>
                      <p className="text-gray-500 text-xs flex items-center mt-1">
                        <FiMapPin className="mr-1 h-3 w-3" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Subtle hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200/50 transition-colors duration-500"></div>
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
      <section className="py-16 bg-white">
        
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
      <section className="py-16 bg-white">
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
      <section className="py-20 bg-blue-800 text-white">
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