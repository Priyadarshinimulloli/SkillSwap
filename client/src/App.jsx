// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Profile from './pages/Profile'; 

// const Home = () => <h1>Welcome to SkillSwap!</h1>;

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/profile" element={<Profile />} /> 
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// };

// export default App;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} /> {/* 👈 Home route */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
