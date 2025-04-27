import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import StylistSearch from './pages/StylistSearch';
import StylistProfile from './pages/StylistProfile';
import CustomerDashboard from './pages/CustomerDashboard';
import StylistDashboard from './pages/StylistDashboard';
import BookingPage from './pages/BookingPage';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';

// Components
import PrivateRoute from './components/routing/PrivateRoute';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AlertNotification from './components/common/AlertNotification';

// Context
import { AuthProvider } from './context/AuthContext';
import { AlertProvider } from './context/AlertContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6a1b9a', // Deep Purple
    },
    secondary: {
      main: '#ff4081', // Pink
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <AlertProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Navbar />
            <AlertNotification />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/search" element={<StylistSearch />} />
              <Route path="/stylists/:id" element={<StylistProfile />} />

              <Route
                path="/customer/dashboard"
                element={
                  <PrivateRoute role="customer">
                    <CustomerDashboard />
                  </PrivateRoute>
                }
              />

              <Route
                path="/stylist/dashboard"
                element={
                  <PrivateRoute role="stylist">
                    <StylistDashboard />
                  </PrivateRoute>
                }
              />

              <Route
                path="/book/:stylistId"
                element={
                  <PrivateRoute role="customer">
                    <BookingPage />
                  </PrivateRoute>
                }
              />

              <Route
                path="/chat"
                element={
                  <PrivateRoute>
                    <Chat />
                  </PrivateRoute>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </Router>
        </ThemeProvider>
      </AlertProvider>
    </AuthProvider>
  );
}

export default App;
