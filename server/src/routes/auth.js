import express from 'express';
import { body } from 'express-validator';
import { authenticate } from '../middleware/auth.js';
import {
    register,
    login,
    getCurrentUser,
    updateProfile,
    changePassword
} from '../controllers/authController.js';

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register user
// @access  Public
router.post(
    '/register',
    [
        body('firstName').notEmpty().withMessage('First name is required'),
        body('lastName').notEmpty().withMessage('Last name is required'),
        body('email').isEmail().withMessage('Please include a valid email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
        body('role').optional().isIn(['customer', 'business']).withMessage('Role must be either customer or business')
    ],
    register
);

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Please include a valid email'),
        body('password').exists().withMessage('Password is required')
    ],
    login
);

// @route   GET /api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', authenticate, getCurrentUser);

// @route   PUT /api/auth/profile
// @desc    Update user profile
// @access  Private
router.put(
    '/profile',
    authenticate,
    [
        body('firstName').optional().notEmpty().withMessage('First name cannot be empty'),
        body('lastName').optional().notEmpty().withMessage('Last name cannot be empty'),
        body('phoneNumber').optional().isMobilePhone().withMessage('Please provide a valid phone number')
    ],
    updateProfile
);

// @route   PUT /api/auth/password
// @desc    Change user password
// @access  Private
router.put(
    '/password',
    authenticate,
    [
        body('currentPassword').exists().withMessage('Current password is required'),
        body('newPassword').isLength({ min: 6 }).withMessage('New password must be at least 6 characters')
    ],
    changePassword
);

export default router; 