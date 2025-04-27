import React from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useTheme
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
    ContentCut,
    Search,
    CalendarMonth,
    Chat,
    Star,
    CheckCircle
} from '@mui/icons-material';

const Home = () => {
    const theme = useTheme();

    // Featured stylists (would come from API in a real app)
    const featuredStylists = [
        {
            id: 1,
            name: 'Emma Thompson',
            specialty: 'Hair Colorist',
            image: 'https://source.unsplash.com/random/300x200/?hairstylist,woman',
            rating: 4.9,
            reviews: 124
        },
        {
            id: 2,
            name: 'James Wilson',
            specialty: 'Barber',
            image: 'https://source.unsplash.com/random/300x200/?barber,man',
            rating: 4.8,
            reviews: 98
        },
        {
            id: 3,
            name: 'Olivia Garcia',
            specialty: 'Makeup Artist',
            image: 'https://source.unsplash.com/random/300x200/?makeup,artist',
            rating: 4.7,
            reviews: 87
        }
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    pt: 12,
                    pb: 12,
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
                                Find the Perfect Stylist for Your Look
                            </Typography>
                            <Typography variant="h6" paragraph sx={{ mb: 4, opacity: 0.9 }}>
                                Connect with skilled hairdressers and makeup artists in your area.
                                Book appointments, chat, and get the style you've always wanted.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                <Button
                                    component={RouterLink}
                                    to="/search"
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    startIcon={<Search />}
                                >
                                    Find a Stylist
                                </Button>
                                <Button
                                    component={RouterLink}
                                    to="/register"
                                    variant="outlined"
                                    color="inherit"
                                    size="large"
                                >
                                    Join as a Stylist
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Box
                                component="img"
                                src="https://source.unsplash.com/random/600x400/?hairstylist,salon"
                                alt="Stylist at work"
                                sx={{
                                    width: '100%',
                                    borderRadius: 4,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                                }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* How It Works Section */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
                    How It Works
                </Typography>
                <Typography variant="h6" textAlign="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
                    Simple steps to find your perfect stylist and book appointments
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                            <Box sx={{ my: 2 }}>
                                <Search fontSize="large" color="primary" sx={{ fontSize: 60 }} />
                            </Box>
                            <CardContent>
                                <Typography variant="h5" component="h3" gutterBottom>
                                    Search
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Browse stylists by service, location, price, and ratings to find your perfect match.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                            <Box sx={{ my: 2 }}>
                                <CalendarMonth fontSize="large" color="primary" sx={{ fontSize: 60 }} />
                            </Box>
                            <CardContent>
                                <Typography variant="h5" component="h3" gutterBottom>
                                    Book
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Select your preferred service, date and time based on the stylist's availability.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                            <Box sx={{ my: 2 }}>
                                <ContentCut fontSize="large" color="primary" sx={{ fontSize: 60 }} />
                            </Box>
                            <CardContent>
                                <Typography variant="h5" component="h3" gutterBottom>
                                    Get Styled
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Enjoy your service and share your experience by rating and reviewing your stylist.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            {/* Featured Stylists Section */}
            <Box sx={{ bgcolor: 'grey.50', py: 10 }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                        <Typography variant="h3" component="h2">
                            Featured Stylists
                        </Typography>
                        <Button
                            component={RouterLink}
                            to="/search"
                            variant="contained"
                        >
                            View All
                        </Button>
                    </Box>

                    <Grid container spacing={4}>
                        {featuredStylists.map((stylist) => (
                            <Grid item xs={12} sm={6} md={4} key={stylist.id}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={stylist.image}
                                        alt={stylist.name}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography variant="h5" component="h3" gutterBottom>
                                            {stylist.name}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" gutterBottom>
                                            {stylist.specialty}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <Star sx={{ color: 'gold', mr: 0.5 }} />
                                            <Typography variant="body2" component="span" fontWeight="bold">
                                                {stylist.rating}
                                            </Typography>
                                            <Typography variant="body2" component="span" color="text.secondary" sx={{ ml: 1 }}>
                                                ({stylist.reviews} reviews)
                                            </Typography>
                                        </Box>
                                        <Button
                                            component={RouterLink}
                                            to={`/stylists/${stylist.id}`}
                                            variant="outlined"
                                            fullWidth
                                        >
                                            View Profile
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* For Stylists Section */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" component="h2" gutterBottom>
                            Are You a Stylist?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Join Flauntly and take your business to the next level. Our platform helps you connect with clients,
                            manage bookings, and showcase your portfolio.
                        </Typography>

                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircle color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Create a professional profile to showcase your work" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircle color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Set your own pricing and availability" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircle color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Manage bookings and client communications in one place" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircle color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Build your reputation with ratings and reviews" />
                            </ListItem>
                        </List>

                        <Button
                            component={RouterLink}
                            to="/register"
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{ mt: 2 }}
                        >
                            Join as a Stylist
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src="https://source.unsplash.com/random/600x400/?hairstylist,salon,work"
                            alt="Stylist at work"
                            sx={{
                                width: '100%',
                                borderRadius: 4,
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home; 