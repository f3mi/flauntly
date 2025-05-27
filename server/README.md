# Flauntly Backend Server

A modern Express.js backend server for the Flauntly business discovery platform, built with Prisma, PostgreSQL, and Socket.IO.

## Features

- **Authentication & Authorization**: JWT-based auth with role-based access control
- **Business Management**: Complete CRUD operations for business profiles
- **Booking System**: Appointment scheduling and management
- **Review System**: Customer reviews and ratings
- **Search & Discovery**: Advanced search with filters and location-based queries
- **Real-time Chat**: Socket.IO powered messaging system
- **Security**: Helmet, rate limiting, CORS protection
- **Validation**: Express-validator for input validation
- **Database**: Prisma ORM with PostgreSQL

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT (jsonwebtoken)
- **Real-time**: Socket.IO
- **Security**: Helmet, express-rate-limit, bcryptjs
- **Validation**: express-validator
- **Development**: Nodemon, ESLint, Prettier

## Project Structure

```
server/
├── src/
│   ├── controllers/        # Route handlers
│   │   ├── authController.js
│   │   ├── businessController.js
│   │   ├── userController.js
│   │   ├── bookingController.js
│   │   ├── reviewController.js
│   │   └── searchController.js
│   ├── routes/            # API routes
│   │   ├── auth.js
│   │   ├── business.js
│   │   ├── user.js
│   │   ├── booking.js
│   │   ├── review.js
│   │   └── search.js
│   ├── middleware/        # Custom middleware
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── notFound.js
│   └── index.js          # Main server file
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed.js          # Database seeding
├── package.json
├── .env.example         # Environment variables template
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/password` - Change password

### Business Management
- `GET /api/business` - Get all businesses (with filters)
- `GET /api/business/:id` - Get business by ID
- `POST /api/business` - Create business profile
- `PUT /api/business/:id` - Update business profile
- `DELETE /api/business/:id` - Delete business profile
- `GET /api/business/:id/services` - Get business services
- `POST /api/business/:id/services` - Add service
- `GET /api/business/:id/reviews` - Get business reviews
- `GET /api/business/:id/stats` - Get business statistics

### User Management
- `GET /api/user/profile` - Get user profile
- `GET /api/user/bookings` - Get user bookings
- `GET /api/user/reviews` - Get user reviews
- `GET /api/user/favorites` - Get favorite businesses
- `POST /api/user/favorites/:businessId` - Add to favorites
- `DELETE /api/user/favorites/:businessId` - Remove from favorites

### Booking System
- `POST /api/booking` - Create new booking
- `GET /api/booking/:id` - Get booking details
- `PUT /api/booking/:id/status` - Update booking status
- `DELETE /api/booking/:id` - Cancel booking
- `GET /api/booking/business/:businessId` - Get business bookings
- `GET /api/booking/available-slots/:businessId/:serviceId` - Get available slots

### Reviews
- `POST /api/review` - Create review
- `GET /api/review/:id` - Get review by ID
- `PUT /api/review/:id` - Update review
- `DELETE /api/review/:id` - Delete review
- `GET /api/review/business/:businessId` - Get business reviews
- `GET /api/review/user/:userId` - Get user reviews

### Search & Discovery
- `GET /api/search/businesses` - Search businesses
- `GET /api/search/categories` - Get business categories
- `GET /api/search/nearby` - Get nearby businesses
- `GET /api/search/popular` - Get popular businesses
- `GET /api/search/featured` - Get featured businesses

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone and navigate to server directory**
   ```bash
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your configuration:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/flauntly_db"
   JWT_SECRET="your-super-secret-jwt-key"
   JWT_EXPIRES_IN="7d"
   PORT=5000
   NODE_ENV="development"
   CLIENT_URL="http://localhost:5173"
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev
   
   # (Optional) Seed database
   npm run prisma:seed
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:5000`

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run build` - Generate Prisma client
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio
- `npm run prisma:seed` - Seed database
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm test` - Run tests

## Database Schema

The application uses the following main entities:

- **User**: Customer and business user accounts
- **StylistProfile**: Business profile information
- **Service**: Services offered by businesses
- **Booking**: Appointment bookings
- **Review**: Customer reviews and ratings
- **Message**: Chat messages
- **Chat**: Chat conversations
- **PortfolioImage**: Business portfolio images

## Socket.IO Events

### Client to Server
- `join_chat` - Join a chat room
- `send_message` - Send a message
- `typing` - Typing indicator
- `mark_read` - Mark messages as read

### Server to Client
- `receive_message` - Receive new message
- `user_typing` - User typing notification
- `messages_read` - Messages marked as read
- `message_error` - Message sending error

## Security Features

- **Helmet**: Security headers
- **Rate Limiting**: Prevent abuse
- **CORS**: Cross-origin resource sharing
- **JWT Authentication**: Secure token-based auth
- **Password Hashing**: bcryptjs for password security
- **Input Validation**: express-validator
- **Error Handling**: Comprehensive error middleware

## Development

### Code Style
- ESLint configuration for code quality
- Prettier for code formatting
- ES6+ modules with import/export

### Error Handling
- Centralized error handling middleware
- Prisma error handling
- JWT error handling
- Validation error handling

### Testing
```bash
npm test
```

## Production Deployment

1. Set `NODE_ENV=production`
2. Use `npm start` instead of `npm run dev`
3. Set up proper database connection
4. Configure environment variables
5. Set up reverse proxy (nginx)
6. Enable SSL/TLS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run linting and tests
6. Submit a pull request

## License

MIT License - see LICENSE file for details 