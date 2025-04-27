import api from '../services/api';

// Set auth token as default header for all requests
export const setAuthToken = token => {
    if (token) {
        api.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete api.defaults.headers.common['x-auth-token'];
    }
}; 