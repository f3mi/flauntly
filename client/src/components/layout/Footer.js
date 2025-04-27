import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                py: 6,
                mt: 'auto'
            }}
            component="footer"
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Flauntly
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Connect with talented hairdressers and makeup artists in your area.
                            Book appointments, chat with stylists, and showcase your portfolio.
                        </Typography>
                        <Box>
                            <IconButton color="inherit" aria-label="Facebook">
                                <Facebook />
                            </IconButton>
                            <IconButton color="inherit" aria-label="Instagram">
                                <Instagram />
                            </IconButton>
                            <IconButton color="inherit" aria-label="Twitter">
                                <Twitter />
                            </IconButton>
                            <IconButton color="inherit" aria-label="LinkedIn">
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box component="ul" sx={{ p: 0, listStyle: 'none' }}>
                            <Box component="li" sx={{ mb: 1 }}>
                                <Link component={RouterLink} to="/" color="inherit" underline="hover">
                                    Home
                                </Link>
                            </Box>
                            <Box component="li" sx={{ mb: 1 }}>
                                <Link component={RouterLink} to="/search" color="inherit" underline="hover">
                                    Find Stylists
                                </Link>
                            </Box>
                            <Box component="li" sx={{ mb: 1 }}>
                                <Link component={RouterLink} to="/register" color="inherit" underline="hover">
                                    Join as a Stylist
                                </Link>
                            </Box>
                            <Box component="li" sx={{ mb: 1 }}>
                                <Link component={RouterLink} to="/login" color="inherit" underline="hover">
                                    Login
                                </Link>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Support
                        </Typography>
                        <Box component="ul" sx={{ p: 0, listStyle: 'none' }}>
                            <Box component="li" sx={{ mb: 1 }}>
                                <Link component={RouterLink} to="/help" color="inherit" underline="hover">
                                    Help Center
                                </Link>
                            </Box>
                            <Box component="li" sx={{ mb: 1 }}>
                                <Link component={RouterLink} to="/contact" color="inherit" underline="hover">
                                    Contact Us
                                </Link>
                            </Box>
                            <Box component="li" sx={{ mb: 1 }}>
                                <Link component={RouterLink} to="/privacy" color="inherit" underline="hover">
                                    Privacy Policy
                                </Link>
                            </Box>
                            <Box component="li" sx={{ mb: 1 }}>
                                <Link component={RouterLink} to="/terms" color="inherit" underline="hover">
                                    Terms of Service
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.2)' }} />

                <Typography variant="body2" align="center">
                    © {new Date().getFullYear()} Flauntly. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer; 