import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { SentimentDissatisfied } from '@mui/icons-material';

const NotFound = () => {
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    py: 10
                }}
            >
                <SentimentDissatisfied sx={{ fontSize: 100, color: 'primary.main', mb: 4 }} />

                <Typography variant="h1" component="h1" gutterBottom fontWeight="bold">
                    404
                </Typography>

                <Typography variant="h4" component="h2" gutterBottom>
                    Page Not Found
                </Typography>

                <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: 600 }}>
                    The page you are looking for might have been removed, had its name changed,
                    or is temporarily unavailable.
                </Typography>

                <Button
                    component={RouterLink}
                    to="/"
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    Back to Home
                </Button>
            </Box>
        </Container>
    );
};

export default NotFound; 