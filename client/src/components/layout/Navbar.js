import React, { useState, useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
    Link,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Divider
} from '@mui/material';
import {
    Menu as MenuIcon,
    ContentCut,
    Search,
    CalendarMonth,
    Chat,
    Dashboard,
    Login,
    Logout,
    Person,
    PersonAdd
} from '@mui/icons-material';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    // Mobile menu state
    const [mobileOpen, setMobileOpen] = useState(false);

    // User menu state
    const [anchorElUser, setAnchorElUser] = useState(null);

    // Toggle mobile drawer
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Open user menu
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    // Close user menu
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // Handle logout
    const handleLogout = () => {
        logout();
        handleCloseUserMenu();
        navigate('/');
    };

    // Mobile drawer content
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Flauntly
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={RouterLink} to="/">
                        <ListItemIcon>
                            <ContentCut />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={RouterLink} to="/search">
                        <ListItemIcon>
                            <Search />
                        </ListItemIcon>
                        <ListItemText primary="Find Stylists" />
                    </ListItemButton>
                </ListItem>

                {isAuthenticated && (
                    <>
                        <ListItem disablePadding>
                            <ListItemButton
                                component={RouterLink}
                                to={user.role === 'stylist' ? '/stylist/dashboard' : '/customer/dashboard'}
                            >
                                <ListItemIcon>
                                    <Dashboard />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component={RouterLink} to="/chat">
                                <ListItemIcon>
                                    <Chat />
                                </ListItemIcon>
                                <ListItemText primary="Messages" />
                            </ListItemButton>
                        </ListItem>

                        {user.role === 'customer' && (
                            <ListItem disablePadding>
                                <ListItemButton component={RouterLink} to="/customer/bookings">
                                    <ListItemIcon>
                                        <CalendarMonth />
                                    </ListItemIcon>
                                    <ListItemText primary="My Bookings" />
                                </ListItemButton>
                            </ListItem>
                        )}

                        <ListItem disablePadding>
                            <ListItemButton onClick={handleLogout}>
                                <ListItemIcon>
                                    <Logout />
                                </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItemButton>
                        </ListItem>
                    </>
                )}

                {!isAuthenticated && (
                    <>
                        <ListItem disablePadding>
                            <ListItemButton component={RouterLink} to="/login">
                                <ListItemIcon>
                                    <Login />
                                </ListItemIcon>
                                <ListItemText primary="Login" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component={RouterLink} to="/register">
                                <ListItemIcon>
                                    <PersonAdd />
                                </ListItemIcon>
                                <ListItemText primary="Register" />
                            </ListItemButton>
                        </ListItem>
                    </>
                )}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* Logo and Title - Desktop */}
                        <ContentCut sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component={RouterLink}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Flauntly
                        </Typography>

                        {/* Mobile Menu Icon */}
                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="open drawer"
                                edge="start"
                                color="inherit"
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>

                        {/* Logo and Title - Mobile */}
                        <ContentCut sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component={RouterLink}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Flauntly
                        </Typography>

                        {/* Desktop Navigation */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                component={RouterLink}
                                to="/search"
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Find Stylists
                            </Button>

                            {isAuthenticated && user.role === 'customer' && (
                                <>
                                    <Button
                                        component={RouterLink}
                                        to="/customer/dashboard"
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        Dashboard
                                    </Button>
                                    <Button
                                        component={RouterLink}
                                        to="/customer/bookings"
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        My Bookings
                                    </Button>
                                </>
                            )}

                            {isAuthenticated && user.role === 'stylist' && (
                                <Button
                                    component={RouterLink}
                                    to="/stylist/dashboard"
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Dashboard
                                </Button>
                            )}
                        </Box>

                        {/* User Menu Section */}
                        <Box sx={{ flexGrow: 0 }}>
                            {isAuthenticated ? (
                                <>
                                    <Tooltip title="Open menu">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar
                                                alt={`${user.firstName} ${user.lastName}`}
                                                src={user.profileImage || '/static/images/avatar/default.jpg'}
                                            />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        <MenuItem
                                            onClick={() => {
                                                handleCloseUserMenu();
                                                navigate('/profile');
                                            }}
                                        >
                                            <ListItemIcon>
                                                <Person fontSize="small" />
                                            </ListItemIcon>
                                            <Typography textAlign="center">Profile</Typography>
                                        </MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                handleCloseUserMenu();
                                                navigate('/chat');
                                            }}
                                        >
                                            <ListItemIcon>
                                                <Chat fontSize="small" />
                                            </ListItemIcon>
                                            <Typography textAlign="center">Messages</Typography>
                                        </MenuItem>

                                        <Divider />

                                        <MenuItem onClick={handleLogout}>
                                            <ListItemIcon>
                                                <Logout fontSize="small" />
                                            </ListItemIcon>
                                            <Typography textAlign="center">Logout</Typography>
                                        </MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <Box sx={{ display: 'flex' }}>
                                    <Button
                                        component={RouterLink}
                                        to="/login"
                                        color="inherit"
                                        sx={{ mr: 1 }}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        component={RouterLink}
                                        to="/register"
                                        variant="contained"
                                        color="secondary"
                                    >
                                        Register
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Navigation Drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar; 