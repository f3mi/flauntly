import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';
import { setAuthToken } from '../utils/setAuthToken';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Load user on initial render or when token changes
    useEffect(() => {
        const loadUser = async () => {
            if (token) {
                setAuthToken(token);
                try {
                    const res = await api.get('/api/auth/me');
                    setUser(res.data.user);
                    setIsAuthenticated(true);
                } catch (err) {
                    console.error('Error loading user:', err);
                    setToken(null);
                    setUser(null);
                    setIsAuthenticated(false);
                    localStorage.removeItem('token');
                }
            }
            setLoading(false);
        };

        loadUser();
    }, [token]);

    // Register user
    const register = async (formData) => {
        try {
            setLoading(true);
            setError(null);

            const res = await api.post('/api/auth/register', formData);

            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
            setUser(res.data.user);
            setIsAuthenticated(true);
            setLoading(false);

            return res.data;
        } catch (err) {
            setLoading(false);
            setError(
                err.response?.data?.message ||
                'Registration failed. Please try again.'
            );
            throw err;
        }
    };

    // Login user
    const login = async (email, password) => {
        try {
            setLoading(true);
            setError(null);

            const res = await api.post('/api/auth/login', { email, password });

            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
            setUser(res.data.user);
            setIsAuthenticated(true);
            setLoading(false);

            return res.data;
        } catch (err) {
            setLoading(false);
            setError(
                err.response?.data?.message ||
                'Login failed. Please check your credentials.'
            );
            throw err;
        }
    };

    // Logout
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        setIsAuthenticated(false);
    };

    // Update user profile
    const updateProfile = async (formData) => {
        try {
            setLoading(true);
            setError(null);

            const res = await api.put('/api/users/profile', formData);

            setUser(res.data.user);
            setLoading(false);

            return res.data;
        } catch (err) {
            setLoading(false);
            setError(
                err.response?.data?.message ||
                'Failed to update profile. Please try again.'
            );
            throw err;
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuthenticated,
                loading,
                error,
                register,
                login,
                logout,
                updateProfile
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}; 