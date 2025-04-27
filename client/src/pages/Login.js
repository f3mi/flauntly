import React, { useState, useContext, useEffect } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Paper,
    Grid,
    Link,
    InputAdornment,
    IconButton,
    Alert,
    CircularProgress
} from '@mui/material';
import { Visibility, VisibilityOff, Login as LoginIcon } from '@mui/icons-material';
import { AuthContext } from '../context/AuthContext';
import { AlertContext } from '../context/AlertContext';

const Login = () => {
    const { login, isAuthenticated, loading, error } = useContext(AuthContext);
    const { setAlert } = useContext(AlertContext);
    const navigate = useNavigate();
    const location = useLocation();

    // Get redirect URL from query params or default to dashboard
    const getRedirectPath = () => {
        const searchParams = new URLSearchParams(location.search);
        const redirectPath = searchParams.get('redirect');
        return redirectPath || '/customer/dashboard';
    };

    // Redirect authenticated users
    useEffect(() => {
        if (isAuthenticated) {
            navigate(getRedirectPath(), { replace: true });
        }

        // Check if redirected from session expiration
        if (location.search.includes('session=expired')) {
            setAlert('Your session has expired. Please login again.', 'warning');
        }
    }, [isAuthenticated, navigate, location.search, setAlert]);

    // Form state
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [formError, setFormError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { email, password } = formData;

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError('');

        // Validate form
        if (!email || !password) {
            setFormError('Please enter both email and password');
            return;
        }

        setIsSubmitting(true);

        try {
            await login(email, password);
            // No need to navigate here as the useEffect will handle redirection
        } catch (err) {
            setFormError(err.response?.data?.message || 'Login failed. Please try again.');
            setIsSubmitting(false);
        }
    };

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Grid container spacing={4}>
                {/* Left column with image and text */}
                <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
                            Welcome Back!
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Sign in to access your account, book appointments with top stylists,
                            and manage your beauty journey.
                        </Typography>
                        <Box
                            component="img"
                            src="https://source.unsplash.com/random/600x800/?salon,beauty"
                            alt="Beauty salon"
                            sx={{
                                width: '100%',
                                borderRadius: 2,
                                mt: 2
                            }}
                        />
                    </Box>
                </Grid>

                {/* Right column with login form */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                        <Box sx={{ mb: 3, textAlign: 'center' }}>
                            <Typography variant="h4" component="h1" gutterBottom>
                                Login
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Enter your credentials to access your account
                            </Typography>
                        </Box>

                        {(formError || error) && (
                            <Alert severity="error" sx={{ mb: 3 }}>
                                {formError || error}
                            </Alert>
                        )}

                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={togglePasswordVisibility}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ mt: 3, mb: 2 }}
                                disabled={isSubmitting}
                                startIcon={isSubmitting ? <CircularProgress size={20} /> : <LoginIcon />}
                            >
                                {isSubmitting ? 'Signing In...' : 'Sign In'}
                            </Button>

                            <Grid container>
                                <Grid item xs>
                                    <Link component={RouterLink} to="/forgot-password" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link component={RouterLink} to="/register" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login; 