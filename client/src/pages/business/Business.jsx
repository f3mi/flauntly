import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon, 
  MapPinIcon, 
  FunnelIcon,
  HeartIcon,
  ShareIcon,
  PhoneIcon,
  StarIcon as StarOutlineIcon,
  AdjustmentsHorizontalIcon,
  ViewColumnsIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline';
import { StarIcon, HeartIcon as HeartSolidIcon } from '@heroicons/react/20/solid';

// Mock data for all businesses
const ALL_BUSINESSES = [
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
    featured: true,
    description: 'Experience ultimate relaxation and beauty treatments in our tranquil salon.'
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
    featured: false,
    description: 'Professional skincare treatments for healthy, glowing skin.'
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
    featured: false,
    description: 'Traditional barbering with modern techniques and classic style.'
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
    featured: true,
    description: 'Creative hair styling and coloring by experienced professionals.'
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
    featured: false,
    description: 'Holistic wellness treatments in a peaceful, zen-like environment.'
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
    featured: false,
    description: 'Nail artistry and care with the latest trends and techniques.'
  },
  {
    id: 7,
    name: 'Urban Cuts Barbershop',
    category: 'Barber',
    rating: 4.6,
    reviewCount: 89,
    location: 'Downtown',
    address: '234 Urban Ave, Downtown',
    phone: '(555) 789-0123',
    distance: '0.3 miles',
    price: '$',
    openNow: true,
    nextAvailable: 'Today 1:00 PM',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhcmJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    services: ['Haircuts', 'Beard Trim', 'Styling'],
    featured: false,
    description: 'Modern barbershop with urban style and contemporary cuts.'
  },
  {
    id: 8,
    name: 'Glow Beauty Bar',
    category: 'Beauty Salon',
    rating: 4.8,
    reviewCount: 203,
    location: 'Northside',
    address: '456 Glow Street, Northside',
    phone: '(555) 890-1234',
    distance: '1.1 miles',
    price: '$$',
    openNow: false,
    nextAvailable: 'Tomorrow 11:00 AM',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    services: ['Makeup', 'Eyebrows', 'Lashes'],
    featured: true,
    description: 'Beauty treatments that enhance your natural glow and confidence.'
  }
];

const CATEGORIES = [
  { id: 'all', name: 'All Categories', count: ALL_BUSINESSES.length },
  { id: 'beauty-salon', name: 'Beauty Salon', count: ALL_BUSINESSES.filter(b => b.category === 'Beauty Salon').length },
  { id: 'hair-salon', name: 'Hair Salon', count: ALL_BUSINESSES.filter(b => b.category === 'Hair Salon').length },
  { id: 'barber', name: 'Barber', count: ALL_BUSINESSES.filter(b => b.category === 'Barber').length },
  { id: 'spa', name: 'Spa', count: ALL_BUSINESSES.filter(b => b.category === 'Spa').length },
  { id: 'nails', name: 'Nails', count: ALL_BUSINESSES.filter(b => b.category === 'Nails').length },
  { id: 'skincare', name: 'Skincare', count: ALL_BUSINESSES.filter(b => b.category === 'Skincare').length },
];

const SORT_OPTIONS = [
  { id: 'featured', name: 'Featured First' },
  { id: 'rating', name: 'Highest Rated' },
  { id: 'distance', name: 'Nearest' },
  { id: 'reviews', name: 'Most Reviewed' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
];

const LOCATIONS = [
  { id: 'all', name: 'All Locations' },
  { id: 'downtown', name: 'Downtown' },
  { id: 'westside', name: 'Westside' },
  { id: 'eastside', name: 'Eastside' },
  { id: 'northside', name: 'Northside' },
];

export default function Business() {
  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [favorites, setFavorites] = useState(new Set());
  const [filters, setFilters] = useState({
    priceRange: 'all',
    rating: 'all',
    openNow: false,
  });

  useEffect(() => {
    setBusinesses(ALL_BUSINESSES);
    setFilteredBusinesses(ALL_BUSINESSES);
  }, []);

  useEffect(() => {
    let filtered = [...businesses];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(business =>
        business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.services.some(service => 
          service.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(business => 
        business.category.toLowerCase().replace(' ', '-') === selectedCategory
      );
    }

    // Filter by location
    if (selectedLocation !== 'all') {
      filtered = filtered.filter(business =>
        business.location.toLowerCase() === selectedLocation
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
      case 'reviews':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
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
  }, [businesses, selectedCategory, selectedLocation, sortBy, searchQuery, filters]);

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
    setSelectedCategory('all');
    setSelectedLocation('all');
    setSortBy('featured');
    setSearchQuery('');
    setFilters({
      priceRange: 'all',
      rating: 'all',
      openNow: false,
    });
  };

  return (
    <div className="bg-white min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Amazing Businesses
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find the perfect beauty and wellness services near you. Browse through our curated collection of top-rated businesses.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-300 py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search businesses, services, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
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

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <FunnelIcon className="h-4 w-4" />
                Filters
              </button>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort:</span>
                <select
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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

              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <Squares2X2Icon className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <ViewColumnsIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <select
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    {LOCATIONS.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
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

                <div className="flex items-end">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={filters.openNow}
                      onChange={(e) => setFilters({ ...filters, openNow: e.target.checked })}
                    />
                    <span className="ml-2 text-sm text-gray-700">Open now</span>
                  </label>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredBusinesses.length} businesses found
          </h2>
          <p className="text-gray-600 mt-1">
            Showing the best beauty and wellness businesses in your area
          </p>
        </div>

        {filteredBusinesses.length === 0 ? (
          <div className="text-center py-12">
            <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">No businesses found</h3>
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
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3' 
            : 'space-y-6'
          }>
            {filteredBusinesses.map((business) => (
              <div 
                key={business.id} 
                className={`group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
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
                <div className={`overflow-hidden ${
                  viewMode === 'list' ? 'w-48 h-32' : 'aspect-[4/3]'
                }`}>
                  <img
                    src={business.image}
                    alt={business.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Business info */}
                <div className="p-4 flex-1">
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

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {business.description}
                  </p>

                  {/* Location and distance */}
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{business.location}</span>
                    <span className="text-gray-400">•</span>
                    <span>{business.distance}</span>
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
              Load more businesses
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 