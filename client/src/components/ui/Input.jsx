import React from 'react';

const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  className = '',
  icon,
  ...props
}) => {
  const baseClasses = 'w-full px-3 py-2 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500';
  
  const stateClasses = error 
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
    : 'border-gray-300 focus:border-blue-500';
    
  const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white';
  
  const inputClasses = `${baseClasses} ${stateClasses} ${disabledClasses} ${className}`.trim();

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={`${inputClasses} ${icon ? 'pl-10' : ''}`}
          {...props}
        />
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input; 