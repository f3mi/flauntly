// App Configuration
export const APP_CONFIG = {
    name: 'Flauntly',
    description: 'Discover and book local businesses',
    version: '1.0.0',
};

// API Configuration
export const API_CONFIG = {
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
    timeout: 10000,
};

// Business Categories
export const BUSINESS_CATEGORIES = [
    'All Categories',
    'Restaurants',
    'Beauty & Spa',
    'Health & Fitness',
    'Automotive',
    'Home Services',
    'Professional Services',
    'Shopping',
    'Entertainment',
    'Education',
    'Travel & Tourism',
];

// Price Ranges
export const PRICE_RANGES = [
    { label: 'Any Price', value: 'any' },
    { label: '$', value: '1' },
    { label: '$$', value: '2' },
    { label: '$$$', value: '3' },
    { label: '$$$$', value: '4' },
];

// Sort Options
export const SORT_OPTIONS = [
    { label: 'Most Relevant', value: 'relevance' },
    { label: 'Highest Rated', value: 'rating' },
    { label: 'Nearest', value: 'distance' },
    { label: 'Most Reviewed', value: 'reviews' },
    { label: 'Price: Low to High', value: 'price_asc' },
    { label: 'Price: High to Low', value: 'price_desc' },
];

// Default Values
export const DEFAULTS = {
    itemsPerPage: 12,
    maxSearchRadius: 50, // km
    defaultLocation: 'Current Location',
};

// UI Constants
export const UI_CONSTANTS = {
    navbarHeight: '80px',
    footerHeight: '200px',
    sidebarWidth: '300px',
    maxContentWidth: '1200px',
};

// Status Types
export const BUSINESS_STATUS = {
    OPEN: 'open',
    CLOSED: 'closed',
    TEMPORARILY_CLOSED: 'temporarily_closed',
};

// Rating Constants
export const RATING = {
    MIN: 1,
    MAX: 5,
    DEFAULT: 0,
}; 