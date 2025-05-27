import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

import { PrismaClient } from '@prisma/client';
import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';

// Import routes
import authRoutes from './routes/auth.js';
import businessRoutes from './routes/business.js';
import userRoutes from './routes/user.js';
import bookingRoutes from './routes/booking.js';
import reviewRoutes from './routes/review.js';
import searchRoutes from './routes/search.js';

// Load environment variables
dotenv.config();

// Initialize Prisma Client
const prisma = new PrismaClient();

// Initialize Express app
const app = express();
const httpServer = createServer(app);

// Initialize Socket.IO
const io = new Server(httpServer, {
    cors: {
        origin: process.env.CLIENT_URL || 'http://localhost:5173',
        methods: ['GET', 'POST'],
        credentials: true
    }
});

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});

// Security middleware
app.use(helmet());
app.use(limiter);

// CORS configuration
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
}));

// Logging middleware
app.use(morgan('combined'));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Make Prisma available in request object
app.use((req, res, next) => {
    req.prisma = prisma;
    next();
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Flauntly API is running',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/business', businessRoutes);
app.use('/api/user', userRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/search', searchRoutes);

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Join a chat room
    socket.on('join_chat', (chatId) => {
        socket.join(chatId);
      console.log(`User ${socket.id} joined chat: ${chatId}`);
  });

    // Handle sending messages
    socket.on('send_message', async (data) => {
      try {
        const { chatId, senderId, receiverId, content, type = 'text' } = data;

        // Save message to database
        const message = await prisma.message.create({
            data: {
                chatId,
                senderId,
              receiverId,
              content,
              type
          },
          include: {
              sender: {
                  select: {
                      id: true,
                      firstName: true,
                      lastName: true,
                      profileImage: true
                  }
              }
          }
      });

        // Broadcast message to chat room
        io.to(chatId).emit('receive_message', message);
    } catch (error) {
        console.error('Error saving message:', error);
          socket.emit('message_error', { error: 'Failed to send message' });
      }
  });

    // Handle typing indicator
    socket.on('typing', (data) => {
        socket.to(data.chatId).emit('user_typing', {
            userId: data.userId,
            isTyping: data.isTyping
        });
    });

    // Handle marking messages as read
    socket.on('mark_read', async (data) => {
        try {
            const { chatId, userId } = data;

            await prisma.message.updateMany({
                where: {
                    chatId,
                    receiverId: userId,
                    read: false
                },
                data: {
                    read: true
                }
            });

            socket.to(chatId).emit('messages_read', { chatId, userId });
        } catch (error) {
            console.error('Error marking messages as read:', error);
      }
  });

    // Handle disconnect
    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
  });
});

// Error handling middleware (must be last)
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;

// Graceful shutdown
process.on('SIGTERM', async () => {
    console.log('SIGTERM received, shutting down gracefully');
    await prisma.$disconnect();
    process.exit(0);
});

process.on('SIGINT', async () => {
    console.log('SIGINT received, shutting down gracefully');
    await prisma.$disconnect();
    process.exit(0);
});

httpServer.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 Client URL: ${process.env.CLIENT_URL || 'http://localhost:5173'}`);
}); 