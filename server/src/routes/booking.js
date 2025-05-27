import express from 'express';
import { body, param, query } from 'express-validator';
import { authenticate, authorize } from '../middleware/auth.js';
import {
    createBooking,
    getBookingById,
    updateBookingStatus,
    cancelBooking,
    getBusinessBookings,
    getAvailableSlots
} from '../controllers/bookingController.js';

const router = express.Router();

// @route   POST /api/booking
// @desc    Create new booking
// @access  Private (Customer only)
router.post(
    '/',
    authenticate,
    authorize('customer'),
    [
        body('businessId').isUUID().withMessage('Invalid business ID'),
        body('serviceId').isUUID().withMessage('Invalid service ID'),
        body('dateTime').isISO8601().withMessage('Invalid date time format'),
        body('notes').optional().isString().withMessage('Notes must be a string')
    ],
    createBooking
);

// @route   GET /api/booking/:id
// @desc    Get booking by ID
// @access  Private
router.get(
    '/:id',
    authenticate,
    [param('id').isUUID().withMessage('Invalid booking ID')],
    getBookingById
);

// @route   PUT /api/booking/:id/status
// @desc    Update booking status
// @access  Private (Business owner only)
router.put(
    '/:id/status',
    authenticate,
    authorize('business'),
    [
        param('id').isUUID().withMessage('Invalid booking ID'),
        body('status').isIn(['confirmed', 'completed', 'cancelled']).withMessage('Invalid status')
    ],
    updateBookingStatus
);

// @route   DELETE /api/booking/:id
// @desc    Cancel booking
// @access  Private
router.delete(
    '/:id',
    authenticate,
    [param('id').isUUID().withMessage('Invalid booking ID')],
    cancelBooking
);

// @route   GET /api/booking/business/:businessId
// @desc    Get business bookings
// @access  Private (Business owner only)
router.get(
    '/business/:businessId',
    authenticate,
    authorize('business'),
    [
        param('businessId').isUUID().withMessage('Invalid business ID'),
        query('status').optional().isIn(['pending', 'confirmed', 'completed', 'cancelled']).withMessage('Invalid status'),
        query('date').optional().isISO8601().withMessage('Invalid date format'),
        query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
        query('limit').optional().isInt({ min: 1, max: 50 }).withMessage('Limit must be between 1 and 50')
    ],
    getBusinessBookings
);

// @route   GET /api/booking/available-slots/:businessId/:serviceId
// @desc    Get available booking slots
// @access  Public
router.get(
    '/available-slots/:businessId/:serviceId',
    [
        param('businessId').isUUID().withMessage('Invalid business ID'),
        param('serviceId').isUUID().withMessage('Invalid service ID'),
        query('date').isISO8601().withMessage('Date is required and must be valid')
    ],
    getAvailableSlots
);

export default router; 