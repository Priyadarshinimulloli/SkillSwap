// // App.jsx
// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';

// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';
// import Dashboard from './pages/Dashboard';
// import Profile from './pages/Profile';
// import PeerLearning from './pages/PeerLearning';
// import VideoCall from './pages/VideoCall';
// import SkillManager from './pages/SkillManager';
// import Matches from './pages/Matches';
// import SkillMatchPage from './pages/SkillMatchPage';

// const App = () => {
//   return (
//     <Routes>
//       {/* Redirect root to login */}
//       <Route path="/" element={<Navigate to="/login" replace />} />

//       {/* Auth Routes */}
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/register" element={<SignupPage />} />

//       {/* Main App Routes */}
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/profile" element={<Profile />} />
//       <Route path="/peer-learning" element={<PeerLearning />} />
//       <Route path="/call/:channelName" element={<VideoCall />} />
//       <Route path="/skills" element={<SkillManager />} />
//       <Route path="/matches" element={<Matches />} />
//       <Route path="/marketplace" element={<SkillMatchPage />} />

//       {/* Wildcard fallback */}
//       <Route path="*" element={<Navigate to="/login" replace />} />

//     </Routes>
//   );
// };

// export default App;
// pages/Dashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChatBox from './components/ChatBox';

const Dashboard = () => {
  const [showChat, setShowChat] = useState(false);

  const handleNotificationClick = () => {
    alert('🔔 You have no new notifications at the moment!');
    // In future, replace alert with dropdown or modal.
  };

  const toggleChat = () => {
    setShowChat((prev) => !prev);
  };

  return (
    <div style={styles.wrapper}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>SkillSwap</h2>
        <nav style={styles.nav}>
          <Link to="/dashboard" style={styles.navLink}>🏠 Dashboard</Link>
          <Link to="/profile" style={styles.navLink}>👤 My Profile</Link>
          <Link to="/marketplace" style={styles.navLink}>🛒 Marketplace</Link>
          <Link to="/peer-learning" style={styles.navLink}>🔗 Peer Learning</Link>
          <Link to="/skills" style={styles.navLink}>🧠 Manage Skills</Link>
          <Link to="/matches" style={styles.navLink}>💡 Match Suggestions</Link>
          <Link to="/call/demo-channel" style={styles.navLink}>🎥 Learning Sessions</Link>
        </nav>
      </div>

      {/* Main Area */}
      <div style={styles.main}>
        <div style={styles.topbar}>
          <span onClick={handleNotificationClick} style={styles.notifications}>🔔 Notifications</span>
          <span style={styles.user}>🙍‍♂️ Hello, User</span>
        </div>

        <div style={styles.content}>
          <h1 style={styles.title}>🚀 Welcome to SkillSwap Dashboard</h1>
          <p style={styles.subtitle}>Grow, Learn, and Share Skills with Peers</p>

          <div style={styles.cardGrid}>
            <Link to="/profile" style={styles.card}>👤 My Profile</Link>
            <Link to="/marketplace" style={styles.card}>🛒 Skill Marketplace</Link>
            <Link to="/peer-learning" style={styles.card}>🔗 Peer Learning</Link>
            <Link to="/call/demo-channel" style={styles.card}>🎥 Learning Sessions</Link>
            <Link to="/skills" style={styles.card}>🧠 Manage My Skills</Link>
            <Link to="/matches" style={styles.card}>💡 Match Suggestions</Link>
          </div>
        </div>

        {/* ✅ Chat Button */}
        <button onClick={toggleChat} style={styles.chatButton}>
          {showChat ? '❌ Close Chat' : '💬 Open Chat'}
        </button>

        {/* ✅ Conditional ChatBox */}
        {showChat && (
          <div style={styles.chatBox}>
            <ChatBox />
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#FDF6EC',
  },
  sidebar: {
    width: '220px',
    backgroundColor: '#3E54AC',
    color: '#fff',
    padding: '2rem 1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  sidebarTitle: {
    fontSize: '1.8rem',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 2rem',
    position: 'relative',
  },
  topbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '2rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #ccc',
  },
  notifications: {
    cursor: 'pointer',
    fontWeight: '600',
  },
  user: {
    fontWeight: '600',
  },
  content: {
    paddingTop: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    color: '#3E54AC',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2.5rem',
    color: '#2C2C2C',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    padding: '1.5rem',
    backgroundColor: '#3E54AC',
    borderRadius: '14px',
    textDecoration: 'none',
    color: '#FFFFFF',
    fontSize: '1.1rem',
    fontWeight: '600',
    boxShadow: '0 6px 14px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  chatButton: {
    position: 'fixed',
    bottom: '25px',
    right: '25px',
    backgroundColor: '#3E54AC',
    color: '#fff',
    padding: '12px 20px',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    zIndex: 999,
  },
  chatBox: {
    position: 'fixed',
    bottom: '80px',
    right: '25px',
    width: '300px',
    height: '400px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
    zIndex: 998,
    overflow: 'hidden',
  },
};

export default Dashboard;
