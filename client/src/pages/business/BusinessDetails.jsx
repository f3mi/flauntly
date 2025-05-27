import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StarIcon, HeartIcon as HeartSolidIcon } from '@heroicons/react/20/solid';
import { 
  MapPinIcon, 
  ClockIcon, 
  CalendarIcon, 
  PhoneIcon,
  GlobeAltIcon,
  ShareIcon,
  HeartIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

// Mock business data
const MOCK_BUSINESS = {
  id: 1,
  name: 'Serenity Beauty Salon',
  description: 'Experience ultimate relaxation and beauty treatments in our tranquil salon. Our skilled professionals use only premium products to ensure you receive the best service possible. We pride ourselves on creating a peaceful environment where you can unwind and rejuvenate.',
  category: 'Beauty Salon',
  rating: 4.9,
  reviewCount: 119,
  location: '123 Main Street, Downtown',
  address: '123 Main Street, Downtown, NY 10001',
  distance: '0.5 miles away',
  hours: {
    monday: '9:00 AM - 8:00 PM',
    tuesday: '9:00 AM - 8:00 PM',
    wednesday: '9:00 AM - 8:00 PM',
    thursday: '9:00 AM - 8:00 PM',
    friday: '9:00 AM - 8:00 PM',
    saturday: '9:00 AM - 8:00 PM',
    sunday: '10:00 AM - 6:00 PM'
  },
  phone: '(555) 123-4567',
  website: 'www.serenitybeauty.com',
  email: 'info@serenitybeauty.com',
  price: '$$',
  openNow: true,
  featured: true,
  amenities: ['WiFi', 'Parking', 'Wheelchair Accessible', 'Credit Cards', 'Gift Cards'],
  images: [
    'https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0eSUyMHNhbG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5haWwlMjBzYWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1607008829749-c0f284a49841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hc3NhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  ],
  services: [
    {
      id: 1,
      name: 'Classic Manicure',
      description: 'A traditional manicure with nail shaping, cuticle care, hand massage, and polish application.',
      duration: '30 min',
      price: '$35',
      category: 'Nails',
    },
    {
      id: 2,
      name: 'Gel Manicure',
      description: 'Long-lasting gel polish that dries instantly and stays shiny for up to two weeks.',
      duration: '45 min',
      price: '$45',
      category: 'Nails',
    },
    {
      id: 3,
      name: 'Facial Treatment',
      description: 'Customized facial to cleanse, exfoliate, and hydrate your skin for a radiant complexion.',
      duration: '60 min',
      price: '$75',
      category: 'Facials',
    },
    {
      id: 4,
      name: 'Deep Tissue Massage',
      description: 'Therapeutic massage that focuses on realigning deeper layers of muscles and connective tissue.',
      duration: '60 min',
      price: '$90',
      category: 'Massage',
    },
    {
      id: 5,
      name: 'Hot Stone Massage',
      description: 'Heated stones are placed on specific areas of the body to help relax and ease tense muscles.',
      duration: '75 min',
      price: '$110',
      category: 'Massage',
    },
  ],
  reviews: [
    {
      id: 1,
      author: 'Sarah M.',
      rating: 5,
      date: '3 weeks ago',
      comment: 'Amazing experience! The staff was friendly and professional. My manicure looks perfect.',
    },
    {
      id: 2,
      author: 'Michael T.',
      rating: 4,
      date: '1 month ago',
      comment: 'Great massage, really helped with my back pain. The atmosphere is very relaxing.',
    },
    {
      id: 3,
      author: 'Lisa K.',
      rating: 5,
      date: '2 months ago',
      comment: 'I love this place! The facial was exactly what my skin needed. Will definitely be back!',
    },
  ],
};

// Available time slots
const TIME_SLOTS = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
];

export default function BusinessDetails() {
  const { id } = useParams();
  const business = MOCK_BUSINESS; // In a real app, fetch business by ID
  
  const [activeTab, setActiveTab] = useState('services');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  
  // Service category tabs
  const serviceCategories = [...new Set(business.services.map(service => service.category))];
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);
  
  const filteredServices = activeCategory 
    ? business.services.filter(service => service.category === activeCategory)
    : business.services;

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    // Reset booking details
    setSelectedDate('');
    setSelectedTime('');
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (!selectedService || !selectedDate || !selectedTime) {
      alert('Please select a service, date, and time');
      return;
    }
    
    // In a real app, this would send the booking to the API
    alert(`Booking confirmed for ${selectedService.name} on ${selectedDate} at ${selectedTime}`);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % business.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + business.images.length) % business.images.length);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const getCurrentDay = () => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[new Date().getDay()];
  };

  return (
    <div className="bg-white min-h-screen pt-16">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link to="/search" className="text-gray-500 hover:text-gray-700">
                  Search
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-900 font-medium">{business.name}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative h-96 overflow-hidden bg-gray-900">
        <img
          src={business.images[currentImageIndex]}
          alt={business.name}
          className="h-full w-full object-cover"
        />
        
        {/* Image Navigation */}
        {business.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeftIcon className="h-5 w-5 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRightIcon className="h-5 w-5 text-gray-800" />
            </button>
          </>
        )}

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {business.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={toggleFavorite}
            className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
          >
            {isFavorite ? (
              <HeartSolidIcon className="h-5 w-5 text-red-500" />
            ) : (
              <HeartIcon className="h-5 w-5 text-gray-700" />
            )}
          </button>
          <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
            <ShareIcon className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Featured Badge */}
        {business.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Business Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{business.name}</h1>
                  <p className="mt-1 text-lg text-gray-600">{business.category}</p>
                </div>
                <div className="ml-4 flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${business.openNow ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className={`text-sm font-medium ${business.openNow ? 'text-green-700' : 'text-red-700'}`}>
                    {business.openNow ? 'Open now' : 'Closed'}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={`h-5 w-5 ${
                          business.rating > rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-900">{business.rating}</span>
                  <span className="ml-1 text-sm text-gray-500">({business.reviewCount} reviews)</span>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  <span>{business.location}</span>
                  <span className="mx-2">•</span>
                  <span>{business.distance}</span>
                  <span className="mx-2">•</span>
                  <span className="font-medium">{business.price}</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {business.amenities.slice(0, 4).map((amenity) => (
                  <span
                    key={amenity}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {amenity}
                  </span>
                ))}
                {business.amenities.length > 4 && (
                  <span className="text-xs text-gray-500">
                    +{business.amenities.length - 4} more
                  </span>
                )}
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:ml-8 flex gap-3">
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <PhoneIcon className="h-4 w-4 mr-2" />
                Call
              </a>
              <button
                onClick={() => setShowBookingModal(true)}
                className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Left column - Business info */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {['services', 'reviews', 'about'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium capitalize`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="py-6">
                <div className="mb-6 flex overflow-x-auto pb-2">
                  {serviceCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`mr-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        activeCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {filteredServices.map((service) => (
                    <div
                      key={service.id}
                      className={`rounded-xl border p-6 transition-all hover:shadow-md ${
                        selectedService?.id === service.id
                          ? 'border-blue-500 bg-blue-50 shadow-md'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                          <p className="mt-2 text-sm text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                        {selectedService?.id === service.id && (
                          <div className="ml-4 flex-shrink-0">
                            <div className="flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                              <CheckIcon className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <ClockIcon className="mr-1.5 h-4 w-4" />
                            {service.duration}
                          </div>
                          <div className="text-lg font-bold text-gray-900">{service.price}</div>
                        </div>
                        
                        <button
                          onClick={() => handleServiceSelect(service)}
                          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                            selectedService?.id === service.id
                              ? 'bg-blue-600 text-white'
                              : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                          }`}
                        >
                          {selectedService?.id === service.id ? 'Selected' : 'Select'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="py-6">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Customer Reviews</h2>
                  <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800">
                    {business.rating} / 5
                  </span>
                </div>
                <div className="space-y-6">
                  {business.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={`h-4 w-4 ${
                                review.rating > rating ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="ml-2 text-sm text-gray-500">
                          {review.author} • {review.date}
                        </p>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="py-6 space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">About {business.name}</h2>
                  <p className="text-gray-600 leading-relaxed">{business.description}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    {Object.entries(business.hours).map(([day, hours]) => (
                      <div key={day} className={`flex justify-between py-2 px-3 rounded-lg ${
                        getCurrentDay() === day ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
                      }`}>
                        <span className={`font-medium capitalize ${
                          getCurrentDay() === day ? 'text-blue-900' : 'text-gray-900'
                        }`}>
                          {day}
                        </span>
                        <span className={getCurrentDay() === day ? 'text-blue-700' : 'text-gray-600'}>
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <PhoneIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Phone</p>
                        <a href={`tel:${business.phone}`} className="text-blue-600 hover:text-blue-700">
                          {business.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <GlobeAltIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Website</p>
                        <a href={`https://${business.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                          {business.website}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPinIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Address</p>
                        <p className="text-gray-600">{business.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {business.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center">
                        <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right column - Business info sidebar */}
          <div className="mt-8 lg:mt-0 space-y-6">
            {/* Quick Info Card */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Status</span>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${business.openNow ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className={`text-sm font-medium ${business.openNow ? 'text-green-700' : 'text-red-700'}`}>
                      {business.openNow ? 'Open now' : 'Closed'}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Today's Hours</span>
                  <span className="text-sm font-medium text-gray-900">
                    {business.hours[getCurrentDay()]}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Price Range</span>
                  <span className="text-sm font-medium text-gray-900">{business.price}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Distance</span>
                  <span className="text-sm font-medium text-gray-900">{business.distance}</span>
                </div>
              </div>
            </div>

            {/* Booking Widget */}
            <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Book an Appointment</h3>

              {!selectedService ? (
                <div className="rounded-lg bg-gray-50 p-4 text-center">
                  <CalendarIcon className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">
                    Select a service from the Services tab to start booking
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
                    <p className="font-medium text-blue-900">{selectedService.name}</p>
                    <div className="mt-1 flex items-center justify-between text-sm text-blue-700">
                      <span>{selectedService.duration}</span>
                      <span className="font-semibold">{selectedService.price}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      value={selectedDate}
                      onChange={(e) => handleDateSelection(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  {selectedDate && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Time
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {TIME_SLOTS.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => handleTimeSelection(time)}
                            className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                              selectedTime === time
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleBooking}
                    disabled={!selectedService || !selectedDate || !selectedTime}
                    className={`w-full rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      !selectedService || !selectedDate || !selectedTime
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Book Appointment
                  </button>
                </div>
              )}
            </div>

            {/* Contact Actions */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
              
              <div className="space-y-3">
                <a
                  href={`tel:${business.phone}`}
                  className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  Call Now
                </a>
                
                <a
                  href={`https://${business.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  <GlobeAltIcon className="h-4 w-4 mr-2" />
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 