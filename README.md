# 🎯 SkillSwap - Peer-to-Peer Skill Exchange Platform

## 🚀 **Project Overview**

SkillSwap is a modern web application that connects learners and teachers in a peer-to-peer skill exchange ecosystem. Users can offer their expertise while learning new skills from others in the community.

## ✨ **Key Features**

### 🔐 **Authentication System**
- User registration and login pages
- Basic authentication flow
- Profile management interface

### 👤 **Profile Management**
- User profile form with personal information
- Contact details and bio management
- Profile editing interface

### 🧠 **Skill Management**
- Dedicated skill manager page
- Add/edit skills interface
- Skills organization system

### 🛒 **Skill Marketplace**
- Skill marketplace page
- Browse available opportunities
- Skill exchange interface

### 📚 **Learning Sessions**
- Sessions management page
- Learning session interface
- Session browsing functionality

### 🎥 **Video Integration**
- Video call page setup
- Room-based video calling
- Peer-to-peer learning interface

### 💬 **Communication**
- Integrated ChatBox component
- Toggle chat functionality
- User communication interface

### 🤝 **Peer Learning**
- Dedicated peer learning page
- Connection interface
- Collaborative learning features

### 🏠 **Dashboard Navigation**
- Centralized dashboard hub
- Clean sidebar navigation
- Quick access to all features

## 🛠 **Technology Stack**

### **Frontend**
- **React 19.1.0** - Modern UI framework
- **React Router DOM 6.30.1** - Client-side routing
- **Axios 1.9.0** - HTTP client for API calls
- **CSS-in-JS** - Styled components
- **Vite 6.3.5** - Fast development build tool

### **Backend**
- **Node.js & Express.js** - Server framework
- **MongoDB & Mongoose** - Database and ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin requests

### **Development**
- **ESLint** - Code linting
- **Vite** - Development server and build tool
- **Git** - Version control

## 🚦 **Getting Started**

### **Prerequisites**
- Node.js (v16+)
- MongoDB Atlas account
- Git

### **Installation**

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/Priyadarshinimulloli/SkillSwap.git
   cd SkillSwap
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm run install:all
   \`\`\`

3. **Environment Setup**
   \`\`\`bash
   # Server environment is already configured with MongoDB Atlas
   # Located at: server/.env
   \`\`\`

4. **Start the frontend application**
   ```bash
   cd client
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Navigate through dashboard to explore features

## 🎯 **Demo Access**
- The application has authentication pages for login and signup
- All core pages are accessible through the dashboard navigation
- Frontend runs independently for demonstration purposes

## 📱 **User Journey**

1. **Registration/Login** → Access authentication pages
2. **Dashboard** → Navigate through the main hub
3. **Profile Management** → Complete personal information
4. **Skill Manager** → Add and organize skills
5. **Marketplace** → Browse skill opportunities
6. **Learning Sessions** → Access session management
7. **Peer Learning** → Connect with other learners
8. **Chat Integration** → Use built-in communication


### **Innovation**
- Peer-to-peer skill exchange model
- Integrated video learning platform
- Smart matching algorithm

### **Technical Excellence**
- Modern React architecture
- RESTful API design
- Responsive mobile-first design
- Real-time features

### **User Experience**
- Intuitive navigation
- Clean, modern UI
- Comprehensive feature set
- Seamless user flow

### **Scalability**
- MongoDB Atlas cloud database
- Modular component architecture
- API-first design
- Environment-based configuration

## 📊 **Project Statistics**
- **Frontend**: 10+ React components
- **Backend**: 5+ API endpoints  
- **Pages**: 8+ functional pages
- **Features**: 8+ core features
- **Development Time**: Hackathon sprint

## 🎯 **Current Feature Status**

### ✅ **Working Features**
- Dashboard with navigation
- User authentication pages (Login/Signup)
- Profile management form
- Skill manager interface
- Marketplace page
- Learning sessions page
- Peer learning page
- Video call page
- ChatBox component
- Responsive design

### 🚧 **In Development**
- Backend API integration
- Database connectivity
- Real-time features
- Advanced functionality

## 🎨 **Design System**
- **Primary Color**: #3E54AC (Professional Blue)
- **Background**: #FDF6EC (Warm Cream)
- **Accent**: #FEE440 (Bright Yellow)
- **Typography**: Segoe UI
- **Layout**: Card-based, responsive design

## 🚀 **Future Enhancements**
- Real-time chat with WebSocket
- Advanced matching algorithms
- Skill verification system
- Payment integration
- Mobile app development
- AI-powered recommendations

## 👥 **Team**
- **Developer**: Priyadarshinimulloli
- **Project**: SkillSwap



---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/skillswap.git
cd skillswap

2. Setup Backend

cd server
npm install
touch .env

Add to .env file:
MONGO_URI=your_mongodb_connection_string

node server.js

3. Setup Frontend

cd ../client
npm install
npm run dev
