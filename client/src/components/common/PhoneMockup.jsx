import React from 'react';

const PhoneMockup = ({ 
  children, 
  variant = 'ios', 
  size = 'medium',
  className = '',
  showNotch = true 
}) => {
  const sizeClasses = {
    small: 'w-48 h-96',
    medium: 'w-64 h-[32rem]',
    large: 'w-80 h-[40rem]'
  };

  const frameColor = variant === 'ios' ? 'bg-gray-900' : 'bg-gray-800';

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Phone Frame */}
      <div className={`w-full h-full ${frameColor} rounded-3xl p-2 shadow-2xl`}>
        {/* Screen */}
        <div className="w-full h-full bg-black rounded-2xl overflow-hidden relative">
          {/* Notch (for iOS) */}
          {showNotch && variant === 'ios' && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
          )}
          
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-black z-10 flex items-center justify-between px-4 text-white text-xs">
            <div className="flex items-center space-x-1">
              <span>9:41</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full opacity-50"></div>
              </div>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48L3.5 14.4l-.35-.95zm2.8-2.8L5.47 12 6.95 10.15l1.48.85-.95.35zm5.05.05L12 8.47l1.48.85-.85 1.48L11.4 9.5l-.4-.25zm5.05 2.8L17.47 12l1.48 1.85-.85 1.48-.95-.35zm2.8 2.8L20.53 16l1.48-1.85.85 1.48-.95.35z"/>
              </svg>
              <div className="w-6 h-3 border border-white rounded-sm">
                <div className="w-4 h-1.5 bg-white rounded-sm m-0.5"></div>
              </div>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="pt-8 h-full bg-white overflow-hidden">
            {children}
          </div>
          
          {/* Home Indicator (for iOS) */}
          {variant === 'ios' && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
          )}
        </div>
      </div>
      
      {/* Side Buttons */}
      <div className="absolute left-0 top-16 w-1 h-8 bg-gray-700 rounded-r-sm"></div>
      <div className="absolute left-0 top-28 w-1 h-12 bg-gray-700 rounded-r-sm"></div>
      <div className="absolute left-0 top-44 w-1 h-12 bg-gray-700 rounded-r-sm"></div>
      <div className="absolute right-0 top-20 w-1 h-16 bg-gray-700 rounded-l-sm"></div>
    </div>
  );
};

export default PhoneMockup; 