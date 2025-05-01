import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid';
import { MapPinIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';

// Mock business data
const MOCK_BUSINESS = {
  id: 1,
  name: 'Serenity Beauty Salon',
  description: 'Experience ultimate relaxation and beauty treatments in our tranquil salon. Our skilled professionals use only premium products to ensure you receive the best service possible.',
  category: 'Beauty Salon',
  rating: 4.9,
  reviewCount: 119,
  location: '123 Main Street, Downtown',
  hours: 'Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM',
  phone: '(555) 123-4567',
  website: 'www.serenitybeauty.com',
  images: [
    'https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0eSUyMHNhbG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5haWwlMjBzYWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1607008829749-c0f284a49841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hc3NhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
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

  return (
    <div className="bg-white">
      {/* Hero section with main image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={business.images[0]}
          alt={business.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-3xl font-bold text-white">{business.name}</h1>
          <div className="mt-2 flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={`h-5 w-5 ${
                    business.rating > rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="ml-2 text-white">
              {business.rating} ({business.reviewCount} reviews)
            </p>
          </div>
          <p className="mt-2 flex items-center text-white">
            <MapPinIcon className="mr-1 h-5 w-5" />
            {business.location}
          </p>
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
                        ? 'border-indigo-500 text-indigo-600'
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
                <div className="mb-6 flex overflow-x-auto">
                  {serviceCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`mr-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ${
                        activeCategory === category
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="space-y-6">
                  {filteredServices.map((service) => (
                    <div
                      key={service.id}
                      className={`rounded-lg border p-4 ${
                        selectedService?.id === service.id
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
                          <p className="mt-1 text-sm text-gray-600">{service.description}</p>
                          <div className="mt-2 flex items-center text-sm text-gray-500">
                            <ClockIcon className="mr-1.5 h-4 w-4 text-gray-400" />
                            {service.duration}
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <p className="text-lg font-medium text-gray-900">{service.price}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button
                          onClick={() => handleServiceSelect(service)}
                          className={`rounded-md px-3.5 py-2 text-sm font-semibold shadow-sm ${
                            selectedService?.id === service.id
                              ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                              : 'bg-white text-indigo-600 ring-1 ring-inset ring-indigo-300 hover:bg-indigo-50'
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
              <div className="py-6">
                <h2 className="text-lg font-medium text-gray-900">About {business.name}</h2>
                <p className="mt-4 text-gray-600">{business.description}</p>
                
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h3 className="text-base font-medium text-gray-900">Business Hours</h3>
                  <p className="mt-2 text-sm text-gray-600">{business.hours}</p>
                </div>
                
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h3 className="text-base font-medium text-gray-900">Contact Information</h3>
                  <div className="mt-2 space-y-2 text-sm text-gray-600">
                    <p>Phone: {business.phone}</p>
                    <p>Website: {business.website}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right column - Booking widget */}
          <div className="mt-8 lg:mt-0">
            <div className="sticky top-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-medium text-gray-900">Book an Appointment</h2>

              {!selectedService ? (
                <div className="mt-4 rounded-md bg-gray-50 p-4 text-sm text-gray-500">
                  Please select a service to continue with booking.
                </div>
              ) : (
                <>
                  <div className="mt-4 rounded-md bg-indigo-50 p-4">
                    <p className="text-sm font-medium text-indigo-800">{selectedService.name}</p>
                    <p className="mt-1 text-xs text-indigo-700">
                      {selectedService.duration} • {selectedService.price}
                    </p>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Select Date
                    </label>
                    <div className="mt-1">
                      <input
                        type="date"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={selectedDate}
                        onChange={(e) => handleDateSelection(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  {selectedDate && (
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Select Time
                      </label>
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        {TIME_SLOTS.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => handleTimeSelection(time)}
                            className={`rounded-md px-2 py-2 text-xs font-medium ${
                              selectedTime === time
                                ? 'bg-indigo-600 text-white'
                                : 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={handleBooking}
                      disabled={!selectedService || !selectedDate || !selectedTime}
                      className={`w-full rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm ${
                        !selectedService || !selectedDate || !selectedTime
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-indigo-600 text-white hover:bg-indigo-500'
                      }`}
                    >
                      Book Now
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 