import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MagnifyingGlassIcon, MapPinIcon, CalendarIcon, ClockIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';

// Mock data for development
const MOCK_BUSINESSES = [
  {
    id: 1,
    name: 'Serenity Beauty Salon',
    category: 'Beauty Salon',
    rating: 4.9,
    reviewCount: 119,
    location: 'Downtown',
    image: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0eSUyMHNhbG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    services: ['Nails', 'Facials', 'Massage']
  },
  {
    id: 2,
    name: 'The Healthy Skin Room',
    category: 'Skincare',
    rating: 5.0,
    reviewCount: 78,
    location: 'Westside',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    services: ['Facials', 'Skincare', 'Beauty Salon']
  },
  {
    id: 3,
    name: 'Expert Barber',
    category: 'Barber',
    rating: 5.0,
    reviewCount: 2185,
    location: 'Eastside',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhcmJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    services: ['Barber', 'Haircuts']
  },
  {
    id: 4,
    name: 'Hilario Hair Salon',
    category: 'Hair Salon',
    rating: 5.0,
    reviewCount: 365,
    location: 'Northside',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    services: ['Hair Salon', 'Hair Color', 'Haircuts']
  },
];

// Categories
const CATEGORIES = [
  { id: 'all', name: 'All Categories' },
  { id: 'hair-salon', name: 'Hair Salon' },
  { id: 'barber', name: 'Barber' },
  { id: 'beauty-salon', name: 'Beauty Salon' },
  { id: 'nails', name: 'Nails' },
  { id: 'skincare', name: 'Skincare' },
  { id: 'massage', name: 'Massage' },
  { id: 'spa', name: 'Spa' },
];

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [businesses, setBusinesses] = useState([]);
  const [filters, setFilters] = useState({
    service: searchParams.get('service') || '',
    location: searchParams.get('location') || '',
    date: searchParams.get('date') || '',
    time: searchParams.get('time') || '',
  });

  useEffect(() => {
    // In a real app, we would fetch data from the API based on the search params
    // For now, we'll use the mock data
    setBusinesses(MOCK_BUSINESSES);
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams(filters);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    // In a real app, this would filter the businesses by category
  };

  return (
    <div className="bg-white">
      {/* Search bar */}
      <div className="bg-gradient-to-b from-purple-100 to-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSearch} className="flex flex-col gap-3 p-4 bg-white rounded-xl shadow-lg md:flex-row">
            <div className="flex-1 min-w-0">
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  placeholder="Treatment or venue"
                  value={filters.service}
                  onChange={(e) => setFilters({ ...filters, service: e.target.value })}
                />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  placeholder="Location"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                />
              </div>
            </div>

            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8">
          {/* Category filters */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-gray-900">Search Results</h2>
            <div className="flex items-center space-x-2">
              <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-500">Filters</span>
            </div>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Results */}
          <div className="mt-8 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {businesses.map((business) => (
              <div key={business.id} className="group">
                <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg">
                  <img
                    src={business.image}
                    alt={business.name}
                    className="h-56 w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{business.name}</h3>
                    <div className="mt-1 flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={`h-4 w-4 flex-shrink-0 ${
                              business.rating > rating ? 'text-yellow-400' : 'text-gray-200'
                            }`}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="ml-1 text-sm text-gray-500">
                        {business.rating} ({business.reviewCount})
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{business.location}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex flex-wrap gap-1">
                    {business.services.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 