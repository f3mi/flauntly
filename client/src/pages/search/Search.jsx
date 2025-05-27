import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon, 
  MapPinIcon, 
  CalendarIcon, 
  ClockIcon, 
  AdjustmentsHorizontalIcon,
  FunnelIcon,
  XMarkIcon,
  HeartIcon,
  ShareIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { StarIcon, HeartIcon as HeartSolidIcon } from '@heroicons/react/20/solid';

// Mock data for development
const MOCK_BUSINESSES = [
  {
    id: 1,
    name: 'Serenity Beauty Salon',
    category: 'Beauty Salon',
    rating: 4.9,
    reviewCount: 119,
    location: 'Downtown',
    address: '123 Main St, Downtown',
    phone: '(555) 123-4567',
    distance: '0.5 miles',
    price: '$$',
    openNow: true,
    nextAvailable: 'Today 2:00 PM',
    image: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0eSUyMHNhbG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    services: ['Nails', 'Facials', 'Massage'],
    featured: true
  },
  {
    id: 2,
    name: 'The Healthy Skin Room',
    category: 'Skincare',
    rating: 5.0,
    reviewCount: 78,
    location: 'Westside',
    address: '456 Oak Ave, Westside',
    phone: '(555) 234-5678',
    distance: '1.2 miles',
    price: '$$$',
    openNow: true,
    nextAvailable: 'Tomorrow 10:00 AM',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    services: ['Facials', 'Skincare', 'Beauty Salon'],
    featured: false
  },
  {
    id: 3,
    name: 'Expert Barber',
    category: 'Barber',
    rating: 5.0,
    reviewCount: 2185,
    location: 'Eastside',
    address: '789 Pine St, Eastside',
    phone: '(555) 345-6789',
    distance: '2.1 miles',
    price: '$',
    openNow: false,
    nextAvailable: 'Tomorrow 9:00 AM',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhcmJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    services: ['Barber', 'Haircuts'],
    featured: false
  },
  {
    id: 4,
    name: 'Hilario Hair Salon',
    category: 'Hair Salon',
    rating: 5.0,
    reviewCount: 365,
    location: 'Northside',
    address: '321 Elm St, Northside',
    phone: '(555) 456-7890',
    distance: '0.8 miles',
    price: '$$',
    openNow: true,
    nextAvailable: 'Today 4:30 PM',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    services: ['Hair Salon', 'Hair Color', 'Haircuts'],
    featured: true
  },
  {
    id: 5,
    name: 'Zen Wellness Spa',
    category: 'Spa',
    rating: 4.8,
    reviewCount: 234,
    location: 'Downtown',
    address: '567 Wellness Blvd, Downtown',
    phone: '(555) 567-8901',
    distance: '1.5 miles',
    price: '$$$',
    openNow: true,
    nextAvailable: 'Today 6:00 PM',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    services: ['Massage', 'Spa', 'Wellness'],
    featured: false
  },
  {
    id: 6,
    name: 'Perfect Nails Studio',
    category: 'Nails',
    rating: 4.7,
    reviewCount: 156,
    location: 'Westside',
    address: '890 Beauty Lane, Westside',
    phone: '(555) 678-9012',
    distance: '1.8 miles',
    price: '$$',
    openNow: true,
    nextAvailable: 'Today 3:15 PM',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5haWwlMjBzYWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    services: ['Nails', 'Manicure', 'Pedicure'],
    featured: false
  }
];

// Categories
const CATEGORIES = [
  { id: 'all', name: 'All Categories', count: 6 },
  { id: 'hair-salon', name: 'Hair Salon', count: 1 },
  { id: 'barber', name: 'Barber', count: 1 },
  { id: 'beauty-salon', name: 'Beauty Salon', count: 1 },
  { id: 'nails', name: 'Nails', count: 1 },
  { id: 'skincare', name: 'Skincare', count: 1 },
  { id: 'massage', name: 'Massage', count: 1 },
  { id: 'spa', name: 'Spa', count: 1 },
];

const SORT_OPTIONS = [
  { id: 'relevance', name: 'Most Relevant' },
  { id: 'rating', name: 'Highest Rated' },
  { id: 'distance', name: 'Nearest' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
];

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [favorites, setFavorites] = useState(new Set());
  const [filters, setFilters] = useState({
    service: searchParams.get('service') || '',
    location: searchParams.get('location') || '',
    date: searchParams.get('date') || '',
    time: searchParams.get('time') || '',
    priceRange: 'all',
    rating: 'all',
    openNow: false,
    distance: 'all'
  });

  useEffect(() => {
    setBusinesses(MOCK_BUSINESSES);
    setFilteredBusinesses(MOCK_BUSINESSES);
  }, []);

  useEffect(() => {
    let filtered = [...businesses];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(business => 
        business.category.toLowerCase().replace(' ', '-') === selectedCategory
      );
    }

    // Filter by search terms
    if (filters.service) {
      filtered = filtered.filter(business =>
        business.name.toLowerCase().includes(filters.service.toLowerCase()) ||
        business.services.some(service => 
          service.toLowerCase().includes(filters.service.toLowerCase())
        )
      );
    }

    if (filters.location) {
      filtered = filtered.filter(business =>
        business.location.toLowerCase().includes(filters.location.toLowerCase()) ||
        business.address.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by price range
    if (filters.priceRange !== 'all') {
      filtered = filtered.filter(business => business.price === filters.priceRange);
    }

    // Filter by rating
    if (filters.rating !== 'all') {
      const minRating = parseFloat(filters.rating);
      filtered = filtered.filter(business => business.rating >= minRating);
    }

    // Filter by open now
    if (filters.openNow) {
      filtered = filtered.filter(business => business.openNow);
    }

    // Sort results
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'distance':
        filtered.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price.length - b.price.length);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price.length - a.price.length);
        break;
      default:
        // Featured first, then by rating
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
        });
    }

    setFilteredBusinesses(filtered);
  }, [businesses, selectedCategory, filters, sortBy]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams(filters);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const toggleFavorite = (businessId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(businessId)) {
      newFavorites.delete(businessId);
    } else {
      newFavorites.add(businessId);
    }
    setFavorites(newFavorites);
  };

  const clearFilters = () => {
    setFilters({
      service: '',
      location: '',
      date: '',
      time: '',
      priceRange: 'all',
      rating: 'all',
      openNow: false,
      distance: 'all'
    });
    setSelectedCategory('all');
    setSortBy('relevance');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200 pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <form onSubmit={handleSearch} className="space-y-4">
            {/* Main search inputs */}
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="flex-1">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Search for treatments, venues, or services..."
                    value={filters.service}
                    onChange={(e) => setFilters({ ...filters, service: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="relative">
                  <MapPinIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Location or address..."
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <FunnelIcon className="h-5 w-5" />
                  Filters
                </button>

                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Advanced filters */}
            {showFilters && (
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      value={filters.date}
                      onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time
                    </label>
                    <select
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      value={filters.time}
                      onChange={(e) => setFilters({ ...filters, time: e.target.value })}
                    >
                      <option value="">Any time</option>
                      <option value="morning">Morning (6AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 6PM)</option>
                      <option value="evening">Evening (6PM - 10PM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Price Range
                    </label>
                    <select
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      value={filters.priceRange}
                      onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                    >
                      <option value="all">All prices</option>
                      <option value="$">$ - Budget friendly</option>
                      <option value="$$">$$ - Moderate</option>
                      <option value="$$$">$$$ - Premium</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Minimum Rating
                    </label>
                    <select
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      value={filters.rating}
                      onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
                    >
                      <option value="all">Any rating</option>
                      <option value="4.5">4.5+ stars</option>
                      <option value="4.0">4.0+ stars</option>
                      <option value="3.5">3.5+ stars</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={filters.openNow}
                      onChange={(e) => setFilters({ ...filters, openNow: e.target.checked })}
                    />
                    <span className="ml-2 text-sm text-gray-700">Open now</span>
                  </label>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Category filters and results header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">
              {filteredBusinesses.length} results found
            </h1>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select
                className="rounded-md border border-gray-300 px-3 py-1 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Results grid */}
        {filteredBusinesses.length === 0 ? (
          <div className="text-center py-12">
            <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">No results found</h3>
            <p className="mt-2 text-gray-500">
              Try adjusting your search criteria or filters to find what you're looking for.
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBusinesses.map((business) => (
              <div key={business.id} className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Featured badge */}
                {business.featured && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Action buttons */}
                <div className="absolute top-3 right-3 z-10 flex gap-2">
                  <button
                    onClick={() => toggleFavorite(business.id)}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
                  >
                    {favorites.has(business.id) ? (
                      <HeartSolidIcon className="h-4 w-4 text-red-500" />
                    ) : (
                      <HeartIcon className="h-4 w-4 text-gray-600" />
                    )}
                  </button>
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors">
                    <ShareIcon className="h-4 w-4 text-gray-600" />
                  </button>
                </div>

                {/* Business image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={business.image}
                    alt={business.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Business info */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                        {business.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{business.category}</p>
                    </div>
                    <div className="text-right ml-2">
                      <div className="flex items-center gap-1">
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <span className="font-medium text-gray-900">{business.rating}</span>
                      </div>
                      <p className="text-xs text-gray-500">({business.reviewCount})</p>
                    </div>
                  </div>

                  {/* Location and distance */}
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{business.location}</span>
                    <span className="text-gray-400">•</span>
                    <span className="font-medium">{business.distance}</span>
                    <span className="text-gray-400">•</span>
                    <span className="font-medium">{business.price}</span>
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {business.services.slice(0, 3).map((service) => (
                      <span
                        key={service}
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                    {business.services.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{business.services.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Status and availability */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${business.openNow ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span className={`text-sm font-medium ${business.openNow ? 'text-green-700' : 'text-red-700'}`}>
                        {business.openNow ? 'Open now' : 'Closed'}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">
                      Next: {business.nextAvailable}
                    </span>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <Link
                      to={`/business/${business.id}`}
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </Link>
                    <a
                      href={`tel:${business.phone}`}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <PhoneIcon className="h-5 w-5 text-gray-600" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load more button */}
        {filteredBusinesses.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Load more results
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 