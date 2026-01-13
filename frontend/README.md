# Registration System Frontend

React frontend application for the registration system with modern UI and responsive design.

## 🚀 Features

- User registration interface
- Admin dashboard
- Responsive design with Tailwind CSS
- React Router for navigation
- Context API for state management
- Axios for API communication
- Modern UI with Lucide React icons
- Form validation and error handling
- Real-time data updates

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Backend API server running

## 🛠️ Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## 🔧 Configuration

Create a `.env` file in the root directory with the following variables:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

For production:
```env
VITE_API_BASE_URL=https://your-production-api.com/api
```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
The application will start on `http://localhost:5173` with hot-reload.

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## 📁 Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── contexts/        # React Context providers
│   ├── pages/           # Page components
│   ├── services/        # API service functions
│   ├── App.css          # App-specific styles
│   ├── App.jsx          # Main App component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── .env                 # Environment variables
├── .env.production      # Production environment variables
├── .gitignore          # Git ignore file
├── Dockerfile          # Docker configuration
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML template
├── nginx.conf          # Nginx configuration for production
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## 🌐 Application Routes

- `/` - User registration page
- `/admin` - Admin dashboard

## 🛡️ Technologies Used

- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **Lucide React** - Icon library
- **Context API** - State management

## 🎨 UI Components

The application includes reusable components for:
- Forms and inputs
- Buttons and interactions
- Data tables
- Modals and dialogs
- Loading states
- Error messages

## 🔗 API Integration

The frontend communicates with the backend API through:
- Centralized API service functions
- Axios interceptors for error handling
- Environment-based API URLs
- Request/response logging

## 🐳 Docker Support

The frontend is containerized and can be run using Docker Compose:

```bash
docker-compose up frontend
```

This will build and start the frontend service with Nginx serving the production build.

## 📊 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| VITE_API_BASE_URL | Backend API base URL | http://localhost:5000/api |

## 🎯 Development Workflow

1. Start the backend API server
2. Run `npm run dev` in the frontend directory
3. Open `http://localhost:5173` in your browser
4. Make changes to the code
5. See hot-reload updates automatically