# Registration System

A full-stack web application for user registration and management with admin dashboard.

## 🚀 Project Overview

This registration system consists of a React frontend and Node.js backend with MongoDB database, providing a complete solution for user registration, management, and administrative oversight.

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │   Database      │
│   (React)       │◄──►│   (Node.js)     │◄──►│   (MongoDB)     │
│   Port: 3000    │    │   Port: 5000    │    │   Port: 27017   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Node.js (v18+) for local development
- MongoDB (for local development)

### Using Docker (Recommended)

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd registration-system
   ```

2. Start all services:
   ```bash
   docker-compose up
   ```

3. Access the applications:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Backend Health: http://localhost:5000/health

### Local Development

1. **Start the Backend:**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

2. **Start the Frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Start MongoDB:**
   ```bash
   docker run -d -p 27017:27017 --name mongo mongo
   ```

## 📁 Project Structure

```
registration-system/
├── backend/                 # Node.js API server
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── validations/    # Input validation
│   │   ├── seeders/        # Database seeding
│   │   ├── app.js          # Express app setup
│   │   └── server.js       # Server entry point
│   ├── .env                # Environment variables
│   ├── Dockerfile          # Docker configuration
│   └── package.json        # Dependencies
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── contexts/       # React contexts
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── public/             # Static assets
│   ├── .env                # Environment variables
│   ├── Dockerfile          # Docker configuration
│   └── package.json        # Dependencies
├── docker/                 # Docker configurations
│   └── mongo/              # MongoDB setup
├── docker-compose.yml      # Multi-container setup
└── README.md              # This file
```

## 🔧 Configuration

### Backend Environment Variables
Create `backend/.env`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/registration_system
```

### Frontend Environment Variables
Create `frontend/.env`:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## 🐳 Docker Services

The application consists of three main services:

1. **MongoDB** - Database service
2. **Backend** - API server
3. **Frontend** - Web application (served by Nginx)

### Docker Commands

```bash
# Start all services
docker-compose up

# Start in detached mode
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild and start
docker-compose up --build
```
