import React, { useState } from 'react';
import { Button } from '../../components/ui';
import { QRCode, PhoneMockup, TestimonialCard } from '../../components/common';

const Download = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('ios');

  const features = [
    {
      icon: '🔍',
      title: 'Smart Search',
      description: 'Find businesses near you with advanced filters and real-time results.'
    },
    {
      icon: '📅',
      title: 'Easy Booking',
      description: 'Book appointments and services directly from the app with instant confirmation.'
    },
    {
      icon: '⭐',
      title: 'Reviews & Ratings',
      description: 'Read authentic reviews and ratings from verified customers.'
    },
    {
      icon: '📍',
      title: 'Location Services',
      description: 'Get directions, view business hours, and contact information instantly.'
    },
    {
      icon: '💳',
      title: 'Secure Payments',
      description: 'Pay securely through the app with multiple payment options.'
    },
    {
      icon: '🔔',
      title: 'Smart Notifications',
      description: 'Get notified about booking confirmations, reminders, and special offers.'
    }
  ];

  const screenshots = [
    {
      id: 1,
      title: 'Home Screen',
      image: '/api/placeholder/300/600',
      description: 'Beautiful home screen with featured businesses'
    },
    {
      id: 2,
      title: 'Search Results',
      image: '/api/placeholder/300/600',
      description: 'Advanced search with filters and sorting'
    },
    {
      id: 3,
      title: 'Business Details',
      image: '/api/placeholder/300/600',
      description: 'Detailed business information and booking'
    },
    {
      id: 4,
      title: 'Booking Flow',
      image: '/api/placeholder/300/600',
      description: 'Simple and intuitive booking process'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Downloads' },
    { number: '10K+', label: 'Businesses' },
    { number: '4.8', label: 'App Rating' },
    { number: '100K+', label: 'Bookings' }
  ];

  const testimonials = [
    {
      testimonial: "Flauntly has completely changed how I discover local businesses. The app is so intuitive and the booking process is seamless!",
      author: "Sarah Johnson",
      role: "Regular User",
      rating: 5
    },
    {
      testimonial: "As a business owner, listing on Flauntly has brought us so many new customers. The platform is fantastic!",
      author: "Mike Chen",
      role: "Business Owner",
      rating: 5
    },
    {
      testimonial: "I love how easy it is to find and book services near me. The reviews are really helpful too!",
      author: "Emily Davis",
      role: "App User",
      rating: 5
    }
  ];

  const handleDownload = (platform) => {
    // In a real app, these would be actual app store links
    const links = {
      ios: 'https://apps.apple.com/app/flauntly',
      android: 'https://play.google.com/store/apps/details?id=com.flauntly'
    };
    
    // For demo purposes, we'll just show an alert
    alert(`Redirecting to ${platform === 'ios' ? 'App Store' : 'Google Play'}...`);
    // window.open(links[platform], '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Download the
                <span className="text-blue-600 block">Flauntly App</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover and book local businesses on the go. Get instant access to thousands of services right at your fingertips.
              </p>
              
              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button
                  onClick={() => handleDownload('ios')}
                  className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </button>
                
                <button
                  onClick={() => handleDownload('android')}
                  className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
              
              {/* QR Code */}
              <div className="flex items-center justify-center lg:justify-start">
                <QRCode 
                  value="https://flauntly.app/download"
                  size={128}
                  title="Download App"
                  description="Scan to download"
                />
              </div>
            </div>
            
            {/* Right Content - Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <PhoneMockup size="large" variant="ios">
                  <div className="h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold mb-2">Flauntly</div>
                      <div className="text-lg opacity-90">Mobile App</div>
                      <div className="mt-8 space-y-4">
                        <div className="bg-white bg-opacity-20 rounded-lg p-4 mx-8">
                          <div className="text-sm">🔍 Search Businesses</div>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-lg p-4 mx-8">
                          <div className="text-sm">📅 Book Services</div>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-lg p-4 mx-8">
                          <div className="text-sm">⭐ Read Reviews</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </PhoneMockup>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                  Free Download
                </div>
                <div className="absolute -bottom-4 -left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                  4.8 ⭐ Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One App
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover powerful features designed to make finding and booking local services effortless.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See It in Action
            </h2>
            <p className="text-xl text-gray-600">
              Take a look at the beautiful and intuitive interface
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {screenshots.map((screenshot) => (
              <div key={screenshot.id} className="text-center">
                <PhoneMockup size="small" className="mx-auto mb-4">
                  <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                    <div className="text-center">
                      <div className="text-4xl mb-4">
                        {screenshot.id === 1 && '🏠'}
                        {screenshot.id === 2 && '🔍'}
                        {screenshot.id === 3 && '🏢'}
                        {screenshot.id === 4 && '📅'}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">{screenshot.title}</div>
                      <div className="mt-4 space-y-2">
                        <div className="bg-white rounded p-2 text-xs">Feature 1</div>
                        <div className="bg-white rounded p-2 text-xs">Feature 2</div>
                        <div className="bg-blue-500 text-white rounded p-2 text-xs">Action</div>
                      </div>
                    </div>
                  </div>
                </PhoneMockup>
                <h3 className="font-semibold text-gray-900 mb-2">{screenshot.title}</h3>
                <p className="text-sm text-gray-600">{screenshot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied users who love the Flauntly experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial.testimonial}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Platform Selection */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your Platform
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Available on both iOS and Android devices
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setSelectedPlatform('ios')}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-200 ${
                selectedPlatform === 'ios'
                  ? 'bg-white text-blue-600'
                  : 'bg-blue-500 text-white hover:bg-blue-400'
              }`}
            >
              iOS (iPhone & iPad)
            </button>
            <button
              onClick={() => setSelectedPlatform('android')}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-200 ${
                selectedPlatform === 'android'
                  ? 'bg-white text-blue-600'
                  : 'bg-blue-500 text-white hover:bg-blue-400'
              }`}
            >
              Android
            </button>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {selectedPlatform === 'ios' ? 'iOS Requirements' : 'Android Requirements'}
            </h3>
            <div className="text-blue-100 space-y-2">
              {selectedPlatform === 'ios' ? (
                <>
                  <p>• iOS 12.0 or later</p>
                  <p>• Compatible with iPhone, iPad, and iPod touch</p>
                  <p>• 50MB storage space</p>
                  <p>• Internet connection required</p>
                </>
              ) : (
                <>
                  <p>• Android 6.0 (API level 23) or higher</p>
                  <p>• 50MB storage space</p>
                  <p>• Internet connection required</p>
                  <p>• Location services recommended</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of users who are already discovering amazing local businesses
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleDownload('ios')}
              variant="primary"
              size="large"
              className="bg-blue-600 hover:bg-blue-700"
            >
              Download for iOS
            </Button>
            <Button
              onClick={() => handleDownload('android')}
              variant="outline"
              size="large"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              Download for Android
            </Button>
          </div>
          
          <div className="mt-8 text-gray-400">
            <p>Free download • No subscription required • Secure & trusted</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download; 