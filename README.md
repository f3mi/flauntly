# Flauntly

A platform connecting self-employed hairdressers and makeup artists with customers.

## Features

### For Stylists
- Create professional profiles
- Upload portfolio images
- Set service pricing
- Manage availability
- Accept or reschedule booking requests
- Real-time chat with customers

### For Customers
- Search for stylists by service, price, location, and rating
- View stylist portfolios and profiles
- Book appointments
- Chat with stylists
- Rate and review after appointments

## Tech Stack

### Frontend
- React.js (mobile-first design)
- React Router
- Socket.io (client)
- Material-UI for component styling
- Redux for state management
- Firebase/AWS SDK for image uploads

### Backend
- Node.js with Express
- JWT Authentication
- Socket.io (server)
- PostgreSQL database
- Sequelize ORM
- Location services (Google Maps API/OpenStreetMap)

## Project Structure

```
flauntly/
├── client/                # React frontend
│   ├── public/            # Static files
│   └── src/
│       ├── components/    # Reusable components
│       ├── context/       # Context API providers
│       ├── hooks/         # Custom hooks
│       ├── pages/         # Page components
│       ├── services/      # API services
│       ├── store/         # Redux store (optional)
│       ├── styles/        # Global styles
│       └── utils/         # Utility functions
├── server/                # Node.js backend
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   └── utils/             # Utility functions
└── README.md              # Project documentation
```

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/flauntly.git
cd flauntly

# Install dependencies for client and server
npm run install-all

# Run development server (both frontend and backend)
npm run dev
```

## Environment Setup

Create `.env` files in both client and server directories with the necessary environment variables.

### Server .env
```
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret
DATABASE_URL=your_postgresql_connection_string
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_KEY=your_aws_secret_key
AWS_REGION=eu-west-2
S3_BUCKET_NAME=your_bucket_name
MAPS_API_KEY=your_maps_api_key
CLIENT_URL=http://localhost:3000
```

### Client .env
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_MAPS_API_KEY=your_maps_api_key
REACT_APP_AWS_REGION=eu-west-2
REACT_APP_S3_BUCKET_NAME=your_bucket_name
```

## Database Setup

1. Create a PostgreSQL database named 'flauntly'
2. The tables will be automatically created when you run the server for the first time (Sequelize sync)

## API Documentation

The API provides the following endpoints:

- Authentication: `/api/auth`
- Users: `/api/users`
- Stylists: `/api/stylists`
- Bookings: `/api/bookings`
- Messages: `/api/messages`
- Reviews: `/api/reviews`

Detailed API documentation is available within the codebase as comments.

## Deployment
- Frontend: Vercel
- Backend: AWS/DigitalOcean 