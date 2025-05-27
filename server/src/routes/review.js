import express from 'express';
import { body, param, query } from 'express-validator';
import { authenticate, authorize } from '../middleware/auth.js';
import {
    createReview,
    getReviewById,
    updateReview,
    deleteReview,
    getBusinessReviews,
    getUserReviews
} from '../controllers/reviewController.js';

const router = express.Router();

// @route   POST /api/review
// @desc    Create new review
// @access  Private (Customer only)
router.post(
    '/',
    authenticate,
    authorize('customer'),
    [
        body('bookingId').isUUID().withMessage('Invalid booking ID'),
        body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
        body('comment').optional().isString().withMessage('Comment must be a string')
    ],
    createReview
);

// @route   GET /api/review/:id
// @desc    Get review by ID
// @access  Public
router.get(
    '/:id',
    [param('id').isUUID().withMessage('Invalid review ID')],
    getReviewById
);

// @route   PUT /api/review/:id
// @desc    Update review
// @access  Private (Review author only)
router.put(
    '/:id',
    authenticate,
    [
        param('id').isUUID().withMessage('Invalid review ID'),
        body('rating').optional().isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
        body('comment').optional().isString().withMessage('Comment must be a string')
    ],
    updateReview
);

// @route   DELETE /api/review/:id
// @desc    Delete review
// @access  Private (Review author only)
router.delete(
    '/:id',
    authenticate,
    [param('id').isUUID().withMessage('Invalid review ID')],
    deleteReview
);

// @route   GET /api/review/business/:businessId
// @desc    Get business reviews
// @access  Public
router.get(
    '/business/:businessId',
    [
        param('businessId').isUUID().withMessage('Invalid business ID'),
        query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
        query('limit').optional().isInt({ min: 1, max: 20 }).withMessage('Limit must be between 1 and 20'),
        query('rating').optional().isInt({ min: 1, max: 5 }).withMessage('Rating filter must be between 1 and 5')
    ],
    getBusinessReviews
);

// @route   GET /api/review/user/:userId
// @desc    Get user reviews
// @access  Public
router.get(
    '/user/:userId',
    [
        param('userId').isUUID().withMessage('Invalid user ID'),
        query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
        query('limit').optional().isInt({ min: 1, max: 20 }).withMessage('Limit must be between 1 and 20')
    ],
    getUserReviews
);

export default router; 