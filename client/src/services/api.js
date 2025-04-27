import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add an interceptor to handle errors globally
api.interceptors.response.use(
    // Handle successful responses
    response => response,

    // Handle errors
    error => {
        // Log errors for debugging
        console.error('API Error:', error);

        // Handle session expiration/unauthorized access
        if (error.response && error.response.status === 401) {
            // Clear user data from localStorage if token is invalid
            if (localStorage.getItem('token')) {
                localStorage.removeItem('token');
                window.location.href = '/login?session=expired';
            }
        }

        // Pass the error to the caller
        return Promise.reject(error);
    }
);

export default api; 