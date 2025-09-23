# Software House Website

A modern, full-stack software house website built with React, TypeScript, Node.js, and Express. This project showcases a professional software development company's portfolio, services, and contact information.

## 🚀 Features

- **Modern Frontend**: Built with React 18, TypeScript, and Material-UI
- **Responsive Design**: Mobile-first design that works on all devices
- **RESTful API**: Node.js/Express backend with JWT authentication
- **Project Portfolio**: Showcase of completed projects with filtering
- **Blog System**: Content management for articles and insights
- **Contact Integration**: Contact form with email notifications
- **SEO Optimized**: Meta tags, structured data, and performance optimization

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Material-UI** - Beautiful and accessible UI components
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations and transitions
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, minimalist web framework
- **MongoDB** - NoSQL database for flexible data storage
- **JWT** - Secure authentication and authorization
- **bcryptjs** - Password hashing
- **Nodemailer** - Email sending capabilities

### Development Tools
- **Concurrently** - Run multiple commands simultaneously
- **Nodemon** - Auto-restart server during development
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting

## 📁 Project Structure

```
software-house-website/
├── client/                 # React frontend application
│   ├── public/            # Static assets
│   │   ├── index.html     # Main HTML template
│   │   └── manifest.json  # PWA manifest
│   ├── src/               # Source code
│   │   ├── components/    # Reusable components
│   │   │   └── layout/    # Layout components (Header, Footer)
│   │   ├── pages/         # Page components
│   │   ├── theme.ts       # Material-UI theme configuration
│   │   ├── App.tsx        # Main app component
│   │   ├── index.tsx      # App entry point
│   │   └── index.css      # Global styles
│   ├── package.json       # Frontend dependencies
│   └── tsconfig.json      # TypeScript configuration
├── server/                # Node.js backend API
│   ├── src/               # Server source code
│   │   └── routes/        # API route handlers
│   ├── index.js           # Server entry point
│   ├── package.json       # Backend dependencies
│   └── tsconfig.json      # TypeScript configuration
├── uploads/               # File uploads directory
├── .env.example           # Environment variables template
├── package.json           # Root package configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd software-house-website
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install

   # Install client dependencies
   npm run install-client

   # Install server dependencies
   npm run install-server
   ```

3. **Environment Setup**
   ```bash
   # Copy environment template
   cp .env.example .env

   # Edit .env file with your configuration
   nano .env
   ```

4. **Start the development servers**
   ```bash
   # Start both client and server concurrently
   npm run dev

   # Or start them separately:
   npm run client    # Frontend on http://localhost:3000
   npm run server    # Backend on http://localhost:5000
   ```

5. **Build for production**
   ```bash
   # Build the frontend
   npm run build

   # Start production server
   npm start
   ```

## 📝 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/software-house

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key

# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Contact Information
CONTACT_EMAIL=contact@softwarehouse.com
CONTACT_PHONE=+1 (555) 123-4567
CONTACT_ADDRESS=123 Tech Street, Silicon Valley, CA 94000

# Social Media
LINKEDIN_URL=https://linkedin.com/company/softwarehouse
TWITTER_URL=https://twitter.com/softwarehouse
GITHUB_URL=https://github.com/softwarehouse

# Client URL
CLIENT_URL=http://localhost:3000
```

## 🔧 Available Scripts

### Root Level
- `npm run dev` - Start both client and server in development mode
- `npm run install-all` - Install all dependencies
- `npm run build` - Build the client for production
- `npm start` - Start the production server

### Client
- `npm run start` - Start the React development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

### Server
- `npm run dev` - Start server with nodemon
- `npm start` - Start production server
- `npm run test` - Run server tests

## 🌟 Features Overview

### Frontend Pages
- **Home** - Hero section, services overview, and call-to-action
- **About** - Company story, team, and values
- **Services** - Detailed service offerings with pricing
- **Projects** - Portfolio showcase with filtering
- **Blog** - Articles and insights
- **Contact** - Contact form and company information

### Backend API Endpoints
- `GET /api/health` - Health check
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/contact` - Submit contact form
- `GET /api/blog` - Get blog posts
- `GET /api/blog/:slug` - Get single blog post

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting
- CORS configuration
- Helmet.js security headers
- Input validation and sanitization

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🚀 Deployment

### Heroku Deployment
1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Deploy using Git
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

### Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up -d
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email contact@softwarehouse.com or create an issue in the repository.

## 🙏 Acknowledgments

- Material-UI for the beautiful component library
- React community for excellent documentation and tools
- All contributors who help improve this project

---

Built with ❤️ by the Software House team
