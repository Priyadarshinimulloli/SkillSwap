import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';  // or Signup if you want to rename
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Home route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Use 'register' instead of 'signup' */}
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect unknown routes */}
      </Routes>
    </Router>
  );
};

export default App;
