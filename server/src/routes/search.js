import express from 'express';
import { query } from 'express-validator';
import {
    searchBusinesses,
    getBusinessCategories,
    getNearbyBusinesses,
    getPopularBusinesses,
    getFeaturedBusinesses
} from '../controllers/searchController.js';

const router = express.Router();

// @route   GET /api/search/businesses
// @desc    Search businesses with filters
// @access  Public
router.get(
    '/businesses',
    [
        query('q').optional().isString().withMessage('Search query must be a string'),
        query('category').optional().isString().withMessage('Category must be a string'),
        query('location').optional().isString().withMessage('Location must be a string'),
        query('latitude').optional().isFloat().withMessage('Latitude must be a number'),
        query('longitude').optional().isFloat().withMessage('Longitude must be a number'),
        query('radius').optional().isFloat({ min: 0.1, max: 100 }).withMessage('Radius must be between 0.1 and 100 km'),
        query('minRating').optional().isFloat({ min: 0, max: 5 }).withMessage('Minimum rating must be between 0 and 5'),
        query('maxPrice').optional().isFloat({ min: 0 }).withMessage('Maximum price must be positive'),
        query('sortBy').optional().isIn(['rating', 'distance', 'price', 'popularity']).withMessage('Invalid sort option'),
        query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
        query('limit').optional().isInt({ min: 1, max: 50 }).withMessage('Limit must be between 1 and 50')
    ],
    searchBusinesses
);

// @route   GET /api/search/categories
// @desc    Get all business categories
// @access  Public
router.get('/categories', getBusinessCategories);

// @route   GET /api/search/nearby
// @desc    Get nearby businesses
// @access  Public
router.get(
    '/nearby',
    [
        query('latitude').isFloat().withMessage('Latitude is required and must be a number'),
        query('longitude').isFloat().withMessage('Longitude is required and must be a number'),
        query('radius').optional().isFloat({ min: 0.1, max: 100 }).withMessage('Radius must be between 0.1 and 100 km'),
        query('category').optional().isString().withMessage('Category must be a string'),
        query('limit').optional().isInt({ min: 1, max: 20 }).withMessage('Limit must be between 1 and 20')
    ],
    getNearbyBusinesses
);

// @route   GET /api/search/popular
// @desc    Get popular businesses
// @access  Public
router.get(
    '/popular',
    [
        query('category').optional().isString().withMessage('Category must be a string'),
        query('location').optional().isString().withMessage('Location must be a string'),
        query('limit').optional().isInt({ min: 1, max: 20 }).withMessage('Limit must be between 1 and 20')
    ],
    getPopularBusinesses
);

// @route   GET /api/search/featured
// @desc    Get featured businesses
// @access  Public
router.get(
    '/featured',
    [
        query('limit').optional().isInt({ min: 1, max: 10 }).withMessage('Limit must be between 1 and 10')
    ],
    getFeaturedBusinesses
);

export default router; 