import React from 'react';
import { formatDistance, generateStarRating } from '../../utils';

const BusinessCard = ({ 
  business, 
  onFavorite, 
  onShare, 
  onClick,
  showDistance = true,
  showFavorite = true,
  className = '' 
}) => {
  const {
    id,
    name,
    category,
    rating,
    reviewCount,
    priceRange,
    distance,
    image,
    status,
    featured,
    services = [],
    address
  } = business;

  const handleCardClick = () => {
    if (onClick) {
      onClick(business);
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (onFavorite) {
      onFavorite(business);
    }
  };

  const handleShareClick = (e) => {
    e.stopPropagation();
    if (onShare) {
      onShare(business);
    }
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden ${className}`}
      onClick={handleCardClick}
    >
      {/* Image Section */}
      <div className="relative h-48 bg-gray-200">
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
        
        {/* Status Badge */}
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
          status === 'open' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {status === 'open' ? 'Open' : 'Closed'}
        </div>
        
        {/* Action Buttons */}
        <div className="absolute bottom-2 right-2 flex space-x-2">
          {showFavorite && (
            <button
              onClick={handleFavoriteClick}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition-all duration-200"
            >
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>
          )}
          
          <button
            onClick={handleShareClick}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition-all duration-200"
          >
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        {/* Business Name and Category */}
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>
          <p className="text-sm text-gray-600">{category}</p>
        </div>
        
        {/* Rating and Reviews */}
        <div className="flex items-center mb-2">
          <span className="text-yellow-400 mr-1">{generateStarRating(rating)}</span>
          <span className="text-sm text-gray-600">
            {rating} ({reviewCount} reviews)
          </span>
        </div>
        
        {/* Price Range and Distance */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-700">
            {priceRange && '•'.repeat(priceRange)}
          </span>
          {showDistance && distance && (
            <span className="text-sm text-gray-600">
              {formatDistance(distance)}
            </span>
          )}
        </div>
        
        {/* Services */}
        {services.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {services.slice(0, 3).map((service, index) => (
                <span 
                  key={index}
                  className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                >
                  {service}
                </span>
              ))}
              {services.length > 3 && (
                <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                  +{services.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
        
        {/* Address */}
        {address && (
          <p className="text-sm text-gray-600 truncate">{address}</p>
        )}
        
        {/* Call to Action */}
        <div className="mt-3 pt-3 border-t border-gray-200">
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard; 