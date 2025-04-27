import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const PrivateRoute = ({ children, role }) => {
    const { isAuthenticated, loading, user } = useContext(AuthContext);

    // Show loading state while checking authentication
    if (loading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    // Redirect to login if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // If a specific role is required, verify the user has that role
    if (role && user.role !== role) {
        // Redirect based on role
        if (user.role === 'stylist') {
            return <Navigate to="/stylist/dashboard" replace />;
        }

        if (user.role === 'customer') {
            return <Navigate to="/customer/dashboard" replace />;
        }

        // Default redirect if unknown role
        return <Navigate to="/" replace />;
    }

    // If authenticated and proper role, render the component
    return children;
};

export default PrivateRoute; 