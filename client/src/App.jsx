// App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import PeerLearning from './pages/PeerLearning';
import VideoCall from './pages/VideoCall';
import SkillManager from './pages/SkillManager';
import Matches from './pages/Matches';
import SkillMatchPage from './pages/SkillMatchPage';

const App = () => {
  return (
    <Routes>
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignupPage />} />

      {/* Main App Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/peer-learning" element={<PeerLearning />} />
      <Route path="/call/:channelName" element={<VideoCall />} />
      <Route path="/skills" element={<SkillManager />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="/marketplace" element={<SkillMatchPage />} />

      {/* Wildcard fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
    
  );
};

export default App;
