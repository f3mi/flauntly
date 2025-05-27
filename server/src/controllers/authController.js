import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '7d'
    });
};

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res, next) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { firstName, lastName, email, password, phoneNumber, role = 'customer' } = req.body;

        // Check if user already exists
        const existingUser = await req.prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: 'User already exists with this email'
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = await req.prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword,
                phoneNumber,
                role
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                phoneNumber: true,
                role: true,
                profileImage: true,
                createdAt: true
            }
        });

        // Generate token
        const token = generateToken(user.id);

        res.status(201).json({
            success: true,
            data: {
                token,
                user
            }
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req, res, next) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { email, password } = req.body;

        // Find user by email
        const user = await req.prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials'
            });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials'
            });
        }

        // Generate token
        const token = generateToken(user.id);

        // Remove password from response
        const { password: _, ...userWithoutPassword } = user;

        res.json({
            success: true,
            data: {
                token,
                user: userWithoutPassword
            }
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
export const getCurrentUser = async (req, res, next) => {
    try {
        const user = await req.prisma.user.findUnique({
            where: { id: req.user.id },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                phoneNumber: true,
                role: true,
                profileImage: true,
                createdAt: true,
                updatedAt: true
            }
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        res.json({
            success: true,
            data: user
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
export const updateProfile = async (req, res, next) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { firstName, lastName, phoneNumber, profileImage } = req.body;

        const updatedUser = await req.prisma.user.update({
            where: { id: req.user.id },
            data: {
                ...(firstName && { firstName }),
                ...(lastName && { lastName }),
                ...(phoneNumber && { phoneNumber }),
                ...(profileImage && { profileImage })
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                phoneNumber: true,
                role: true,
                profileImage: true,
                updatedAt: true
            }
        });

        res.json({
            success: true,
            data: updatedUser
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Change user password
// @route   PUT /api/auth/password
// @access  Private
export const changePassword = async (req, res, next) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { currentPassword, newPassword } = req.body;

        // Get user with password
        const user = await req.prisma.user.findUnique({
            where: { id: req.user.id }
        });

        // Check current password
        const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);

        if (!isCurrentPasswordValid) {
            return res.status(400).json({
                success: false,
                error: 'Current password is incorrect'
            });
        }

        // Hash new password
        const salt = await bcrypt.genSalt(12);
        const hashedNewPassword = await bcrypt.hash(newPassword, salt);

        // Update password
        await req.prisma.user.update({
            where: { id: req.user.id },
            data: { password: hashedNewPassword }
        });

        res.json({
            success: true,
            message: 'Password updated successfully'
        });
    } catch (error) {
        next(error);
    }
}; 