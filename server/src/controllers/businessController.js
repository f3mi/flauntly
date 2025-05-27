import { validationResult } from 'express-validator';

// @desc    Get all businesses with filtering and pagination
// @route   GET /api/business
// @access  Public
export const getAllBusinesses = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { page = 1, limit = 10, category, location, search } = req.query;
        const skip = (page - 1) * limit;

        // Build where clause
        const where = {};
        if (category) where.category = { contains: category, mode: 'insensitive' };
        if (search) {
            where.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } }
            ];
        }

        const [businesses, total] = await Promise.all([
            req.prisma.stylistProfile.findMany({
                where,
                skip: parseInt(skip),
                take: parseInt(limit),
                include: {
                    user: {
                        select: {
                            firstName: true,
                            lastName: true,
                            profileImage: true
                        }
                    },
                    services: true,
                    _count: {
                        select: { bookings: true }
                    }
                },
                orderBy: { rating: 'desc' }
            }),
            req.prisma.stylistProfile.count({ where })
        ]);

        res.json({
            success: true,
            data: {
                businesses,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / limit)
                }
            }
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get business by ID
// @route   GET /api/business/:id
// @access  Public
export const getBusinessById = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { id } = req.params;

        const business = await req.prisma.stylistProfile.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        firstName: true,
                        lastName: true,
                        profileImage: true,
                        email: true
                    }
                },
                services: true,
                portfolio: true,
                bookings: {
                    include: {
                        review: true
                    }
                }
            }
        });

        if (!business) {
            return res.status(404).json({
                success: false,
                error: 'Business not found'
            });
        }

        res.json({
            success: true,
            data: business
        });
    } catch (error) {
        next(error);
    }
};

// Placeholder functions for other business operations
export const createBusiness = async (req, res, next) => {
    res.status(501).json({
        success: false,
        error: 'Not implemented yet'
    });
};

export const updateBusiness = async (req, res, next) => {
    res.status(501).json({
        success: false,
        error: 'Not implemented yet'
    });
};

export const deleteBusiness = async (req, res, next) => {
    res.status(501).json({
        success: false,
        error: 'Not implemented yet'
    });
};

export const getBusinessServices = async (req, res, next) => {
    try {
        const { id } = req.params;

        const services = await req.prisma.service.findMany({
            where: { stylistId: id },
            orderBy: { name: 'asc' }
        });

        res.json({
            success: true,
            data: services
        });
    } catch (error) {
        next(error);
    }
};

export const addBusinessService = async (req, res, next) => {
    res.status(501).json({
        success: false,
        error: 'Not implemented yet'
    });
};

export const updateBusinessService = async (req, res, next) => {
    res.status(501).json({
        success: false,
        error: 'Not implemented yet'
    });
};

export const deleteBusinessService = async (req, res, next) => {
    res.status(501).json({
        success: false,
        error: 'Not implemented yet'
    });
};

export const getBusinessReviews = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;

        const reviews = await req.prisma.review.findMany({
            where: {
                booking: {
                    stylistId: id
                }
            },
            include: {
                customer: {
                    select: {
                        firstName: true,
                        lastName: true,
                        profileImage: true
                    }
                }
            },
            skip: parseInt(skip),
            take: parseInt(limit),
            orderBy: { createdAt: 'desc' }
        });

        res.json({
            success: true,
            data: reviews
        });
    } catch (error) {
        next(error);
    }
};

export const getBusinessStats = async (req, res, next) => {
    res.status(501).json({
        success: false,
        error: 'Not implemented yet'
    });
}; 