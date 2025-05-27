import { API_CONFIG } from '../constants';

// Base API class
class ApiService {
    constructor() {
        this.baseURL = API_CONFIG.baseURL;
        this.timeout = API_CONFIG.timeout;
    }

    // Generic request method
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        };

        try {
            const response = await fetch(url, config);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }

    // GET request
    async get(endpoint, params = {}) {
        const queryString = new URLSearchParams(params).toString();
        const url = queryString ? `${endpoint}?${queryString}` : endpoint;

        return this.request(url, {
            method: 'GET',
        });
    }

    // POST request
    async post(endpoint, data = {}) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    // PUT request
    async put(endpoint, data = {}) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    // DELETE request
    async delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE',
        });
    }
}

// Create API service instance
const apiService = new ApiService();

// Business API methods
export const businessAPI = {
    // Get all businesses
    getBusinesses: (params = {}) => {
        return apiService.get('/businesses', params);
    },

    // Get business by ID
    getBusinessById: (id) => {
        return apiService.get(`/businesses/${id}`);
    },

    // Search businesses
    searchBusinesses: (searchParams) => {
        return apiService.get('/businesses/search', searchParams);
    },

    // Get businesses by category
    getBusinessesByCategory: (category, params = {}) => {
        return apiService.get(`/businesses/category/${category}`, params);
    },

    // Get featured businesses
    getFeaturedBusinesses: (limit = 6) => {
        return apiService.get('/businesses/featured', { limit });
    },

    // Get business reviews
    getBusinessReviews: (businessId, params = {}) => {
        return apiService.get(`/businesses/${businessId}/reviews`, params);
    },

    // Add business review
    addBusinessReview: (businessId, reviewData) => {
        return apiService.post(`/businesses/${businessId}/reviews`, reviewData);
    },

    // Get business services
    getBusinessServices: (businessId) => {
        return apiService.get(`/businesses/${businessId}/services`);
    },

    // Book service
    bookService: (businessId, bookingData) => {
        return apiService.post(`/businesses/${businessId}/bookings`, bookingData);
    },
};

// User API methods
export const userAPI = {
    // Register user
    register: (userData) => {
        return apiService.post('/auth/register', userData);
    },

    // Login user
    login: (credentials) => {
        return apiService.post('/auth/login', credentials);
    },

    // Logout user
    logout: () => {
        return apiService.post('/auth/logout');
    },

    // Get user profile
    getProfile: () => {
        return apiService.get('/user/profile');
    },

    // Update user profile
    updateProfile: (profileData) => {
        return apiService.put('/user/profile', profileData);
    },

    // Get user bookings
    getBookings: () => {
        return apiService.get('/user/bookings');
    },

    // Get user favorites
    getFavorites: () => {
        return apiService.get('/user/favorites');
    },

    // Add to favorites
    addToFavorites: (businessId) => {
        return apiService.post('/user/favorites', { businessId });
    },

    // Remove from favorites
    removeFromFavorites: (businessId) => {
        return apiService.delete(`/user/favorites/${businessId}`);
    },
};

// Location API methods
export const locationAPI = {
    // Get current location
    getCurrentLocation: () => {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error('Geolocation is not supported by this browser.'));
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    reject(error);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 600000, // 10 minutes
                }
            );
        });
    },

    // Geocode address
    geocodeAddress: (address) => {
        return apiService.get('/location/geocode', { address });
    },

    // Reverse geocode coordinates
    reverseGeocode: (lat, lng) => {
        return apiService.get('/location/reverse-geocode', { lat, lng });
    },

    // Get nearby businesses
    getNearbyBusinesses: (lat, lng, radius = 10) => {
        return apiService.get('/location/nearby', { lat, lng, radius });
    },
};

// Categories API methods
export const categoriesAPI = {
    // Get all categories
    getCategories: () => {
        return apiService.get('/categories');
    },

    // Get category by ID
    getCategoryById: (id) => {
        return apiService.get(`/categories/${id}`);
    },
};

// Export default API service
export default apiService; 