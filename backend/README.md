# Registration System Backend

Node.js Express backend for the registration system with MongoDB integration.

## 🚀 Features

- User registration and management
- Admin functionality
- Statistics and analytics
- RESTful API design
- Input validation with Joi
- MongoDB data persistence
- CORS enabled for frontend integration
- Health check endpoint

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## 🛠️ Installation

1. Clone the repository
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## 🔧 Configuration

Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/registration_system
```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
The server will start with hot-reload using nodemon.

### Production Mode
```bash
npm start
```

### Database Seeding
```bash
npm run seed
```
This will populate the database with initial data.

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/          # Database configuration
│   ├── controllers/     # Route controllers
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── validations/     # Input validation schemas
│   ├── seeders/         # Database seeding scripts
│   ├── app.js           # Express app configuration
│   └── server.js        # Server entry point
├── .env                 # Environment variables
├── .gitignore          # Git ignore file
├── Dockerfile          # Docker configuration
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## 🌐 API Endpoints

### Health Check
- `GET /health` - Check server status

### Registration
- `POST /api/register` - Register a new user
- `GET /api/register` - Get all registrations

### Statistics
- `GET /api/stats` - Get system statistics

### Admin
- `GET /api/admin/users` - Get all users (admin only)
- `PUT /api/admin/users/:id` - Update user (admin only)
- `DELETE /api/admin/users/:id` - Delete user (admin only)

## 🛡️ Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Joi** - Data validation library
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 🐳 Docker Support

The backend is containerized and can be run using Docker Compose:

```bash
docker-compose up backend
```

This will build and start the backend service along with MongoDB.

## 📊 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| MONGO_URI | MongoDB connection string | mongodb://localhost:27017/registration_system |

## 🔍 Validation

All API endpoints use Joi for input validation to ensure data integrity and security.