const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: process.env.CLIENT_URL || 'http://localhost:5173',
        methods: ['GET', 'POST']
    }
});

const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/stylists', require('./routes/stylists'));
app.use('/api/bookings', require('./routes/bookings'));

// Socket.io connection handling
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('join_chat', (chatId) => {
        socket.join(chatId);
    });

    socket.on('send_message', async (data) => {
        const { chatId, senderId, message, type } = data;

        try {
            // Save message to database
            await prisma.message.create({
                data: {
                    chatId,
                    senderId,
                    content: message,
                    type
                }
            });

            // Broadcast message to chat room
            io.to(chatId).emit('receive_message', data);
        } catch (error) {
            console.error('Error saving message:', error);
        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 