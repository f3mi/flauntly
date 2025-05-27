import express from 'express';
import { body, param, query } from 'express-validator';
import { authenticate, authorize } from '../middleware/auth.js';
import {
    getAllBusinesses,
    getBusinessById,
    createBusiness,
    updateBusiness,
    deleteBusiness,
    getBusinessServices,
    addBusinessService,
    updateBusinessService,
    deleteBusinessService,
    getBusinessReviews,
    getBusinessStats
} from '../controllers/businessController.js';

const router = express.Router();

// @route   GET /api/business
// @desc    Get all businesses with filtering and pagination
// @access  Public
router.get(
    '/',
    [
        query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
        query('limit').optional().isInt({ min: 1, max: 50 }).withMessage('Limit must be between 1 and 50'),
        query('category').optional().isString().withMessage('Category must be a string'),
        query('location').optional().isString().withMessage('Location must be a string'),
        query('search').optional().isString().withMessage('Search must be a string')
    ],
    getAllBusinesses
);

// @route   GET /api/business/:id
// @desc    Get business by ID
// @access  Public
router.get(
    '/:id',
    [param('id').isUUID().withMessage('Invalid business ID')],
    getBusinessById
);

// @route   POST /api/business
// @desc    Create new business profile
// @access  Private (Business users only)
router.post(
    '/',
    authenticate,
    authorize('business'),
    [
        body('name').notEmpty().withMessage('Business name is required'),
        body('description').notEmpty().withMessage('Business description is required'),
        body('category').notEmpty().withMessage('Business category is required'),
        body('location').isObject().withMessage('Location must be an object'),
        body('location.address').notEmpty().withMessage('Address is required'),
        body('location.latitude').isFloat().withMessage('Latitude must be a number'),
        body('location.longitude').isFloat().withMessage('Longitude must be a number'),
        body('businessHours').isObject().withMessage('Business hours must be an object'),
        body('contactInfo.phone').optional().isMobilePhone().withMessage('Invalid phone number'),
        body('contactInfo.email').optional().isEmail().withMessage('Invalid email address')
    ],
    createBusiness
);

// @route   PUT /api/business/:id
// @desc    Update business profile
// @access  Private (Business owner only)
router.put(
    '/:id',
    authenticate,
    authorize('business'),
    [
        param('id').isUUID().withMessage('Invalid business ID'),
        body('name').optional().notEmpty().withMessage('Business name cannot be empty'),
        body('description').optional().notEmpty().withMessage('Business description cannot be empty'),
        body('category').optional().notEmpty().withMessage('Business category cannot be empty'),
        body('location').optional().isObject().withMessage('Location must be an object'),
        body('businessHours').optional().isObject().withMessage('Business hours must be an object')
    ],
    updateBusiness
);

// @route   DELETE /api/business/:id
// @desc    Delete business profile
// @access  Private (Business owner only)
router.delete(
    '/:id',
    authenticate,
    authorize('business'),
    [param('id').isUUID().withMessage('Invalid business ID')],
    deleteBusiness
);

// @route   GET /api/business/:id/services
// @desc    Get business services
// @access  Public
router.get(
    '/:id/services',
    [param('id').isUUID().withMessage('Invalid business ID')],
    getBusinessServices
);

// @route   POST /api/business/:id/services
// @desc    Add service to business
// @access  Private (Business owner only)
router.post(
    '/:id/services',
    authenticate,
    authorize('business'),
    [
        param('id').isUUID().withMessage('Invalid business ID'),
        body('name').notEmpty().withMessage('Service name is required'),
        body('description').notEmpty().withMessage('Service description is required'),
        body('duration').isInt({ min: 1 }).withMessage('Duration must be a positive integer'),
        body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
        body('category').notEmpty().withMessage('Service category is required')
    ],
    addBusinessService
);

// @route   PUT /api/business/:businessId/services/:serviceId
// @desc    Update business service
// @access  Private (Business owner only)
router.put(
    '/:businessId/services/:serviceId',
    authenticate,
    authorize('business'),
    [
        param('businessId').isUUID().withMessage('Invalid business ID'),
        param('serviceId').isUUID().withMessage('Invalid service ID'),
        body('name').optional().notEmpty().withMessage('Service name cannot be empty'),
        body('description').optional().notEmpty().withMessage('Service description cannot be empty'),
        body('duration').optional().isInt({ min: 1 }).withMessage('Duration must be a positive integer'),
        body('price').optional().isFloat({ min: 0 }).withMessage('Price must be a positive number')
    ],
    updateBusinessService
);

// @route   DELETE /api/business/:businessId/services/:serviceId
// @desc    Delete business service
// @access  Private (Business owner only)
router.delete(
    '/:businessId/services/:serviceId',
    authenticate,
    authorize('business'),
    [
        param('businessId').isUUID().withMessage('Invalid business ID'),
        param('serviceId').isUUID().withMessage('Invalid service ID')
    ],
    deleteBusinessService
);

// @route   GET /api/business/:id/reviews
// @desc    Get business reviews
// @access  Public
router.get(
    '/:id/reviews',
    [
        param('id').isUUID().withMessage('Invalid business ID'),
        query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
        query('limit').optional().isInt({ min: 1, max: 20 }).withMessage('Limit must be between 1 and 20')
    ],
    getBusinessReviews
);

// @route   GET /api/business/:id/stats
// @desc    Get business statistics
// @access  Private (Business owner only)
router.get(
    '/:id/stats',
    authenticate,
    authorize('business'),
    [param('id').isUUID().withMessage('Invalid business ID')],
    getBusinessStats
);

export default router; 