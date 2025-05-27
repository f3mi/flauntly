import express from 'express';
import { param, query } from 'express-validator';
import { authenticate } from '../middleware/auth.js';
import {
    getUserProfile,
    getUserBookings,
    getUserReviews,
    getUserFavorites,
    addToFavorites,
    removeFromFavorites
} from '../controllers/userController.js';

const router = express.Router();

// @route   GET /api/user/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', authenticate, getUserProfile);

// @route   GET /api/user/bookings
// @desc    Get user bookings
// @access  Private
router.get(
    '/bookings',
    authenticate,
    [
        query('status').optional().isIn(['pending', 'confirmed', 'completed', 'cancelled']).withMessage('Invalid status'),
        query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
        query('limit').optional().isInt({ min: 1, max: 20 }).withMessage('Limit must be between 1 and 20')
    ],
    getUserBookings
);

// @route   GET /api/user/reviews
// @desc    Get user reviews
// @access  Private
router.get(
    '/reviews',
    authenticate,
    [
        query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
        query('limit').optional().isInt({ min: 1, max: 20 }).withMessage('Limit must be between 1 and 20')
    ],
    getUserReviews
);

// @route   GET /api/user/favorites
// @desc    Get user favorite businesses
// @access  Private
router.get('/favorites', authenticate, getUserFavorites);

// @route   POST /api/user/favorites/:businessId
// @desc    Add business to favorites
// @access  Private
router.post(
    '/favorites/:businessId',
    authenticate,
    [param('businessId').isUUID().withMessage('Invalid business ID')],
    addToFavorites
);

// @route   DELETE /api/user/favorites/:businessId
// @desc    Remove business from favorites
// @access  Private
router.delete(
    '/favorites/:businessId',
    authenticate,
    [param('businessId').isUUID().withMessage('Invalid business ID')],
    removeFromFavorites
);

export default router; 