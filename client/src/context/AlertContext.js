import React, { createContext, useState } from 'react';

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([]);

    // Add an alert
    const setAlert = (message, severity = 'info', timeout = 5000) => {
        const id = Math.random().toString(36).substring(2);

        setAlerts(prev => [...prev, { id, message, severity }]);

        // Auto remove alert after timeout
        if (timeout) {
            setTimeout(() => removeAlert(id), timeout);
        }

        return id;
    };

    // Remove an alert by ID
    const removeAlert = (id) => {
        setAlerts(prev => prev.filter(alert => alert.id !== id));
    };

    return (
        <AlertContext.Provider
            value={{
                alerts,
                setAlert,
                removeAlert
            }}
        >
            {children}
        </AlertContext.Provider>
    );
}; 