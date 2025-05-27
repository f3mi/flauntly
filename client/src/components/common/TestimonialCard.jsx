import React from 'react';

const TestimonialCard = ({ 
  testimonial, 
  author, 
  role, 
  avatar, 
  rating = 5,
  className = '' 
}) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className={`bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {/* Rating */}
      <div className="flex items-center mb-4">
        {renderStars()}
      </div>
      
      {/* Testimonial Text */}
      <blockquote className="text-gray-700 mb-6 leading-relaxed">
        "{testimonial}"
      </blockquote>
      
      {/* Author Info */}
      <div className="flex items-center">
        {avatar ? (
          <img 
            src={avatar} 
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mr-4">
            <span className="text-white font-semibold text-lg">
              {author.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          {role && <div className="text-sm text-gray-600">{role}</div>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 