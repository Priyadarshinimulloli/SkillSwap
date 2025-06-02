import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import PeerLearning from './pages/PeerLearning';
import VideoCall from './pages/VideoCall';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} /> {/* Home */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/peer-learning" element={<PeerLearning />} />
      <Route path="/call/:channelName" element={<VideoCall />} />
      
      {/* Wildcard route - must be last */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
