import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardProfile from './DashboardProfile';
import ChatBox from '../components/ChatBox';

const Dashboard = () => {
  const email = 'test@example.com';
  const [showChat, setShowChat] = useState(false);

  const handleNotificationClick = () => {
    alert('🔔 You have no new notifications at the moment!');
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
          <Link to="/sessions" style={styles.navLink}>🎥 Learning Sessions</Link>
        </nav>
      </div>

      {/* Main content */}
      <div style={styles.main}>
        <div style={styles.topbar}>
          <span onClick={handleNotificationClick} style={styles.notifications}>🔔 Notifications</span>
          <DashboardProfile email={email} />
        </div>

        <div style={styles.content}>
          <h1 style={styles.title}>🚀 Welcome to SkillSwap Dashboard</h1>
          <p style={styles.subtitle}>Grow, Learn, and Share Skills with Peers</p>

          <div style={styles.cardGrid}>
            <Link to="/profile" style={styles.card}>👤 My Profile</Link>
            <Link to="/marketplace" style={styles.card}>🛒 Skill Marketplace</Link>
            <Link to="/peer-learning" style={styles.card}>🔗 Peer Learning</Link>
            <Link to="/sessions" style={styles.card}>🎥 Learning Sessions</Link>
            <Link to="/skills" style={styles.card}>🧠 Manage My Skills</Link>
            <Link to="/matches" style={styles.card}>💡 Match Suggestions</Link>
          </div>
        </div>

        {/* Chat Toggle Button */}
        <button onClick={toggleChat} style={styles.chatButton}>
          {showChat ? '❌' : '💬'}
        </button>

        {/* Conditional ChatBox */}
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
    fontWeight: '500',
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
    display: 'block',
  },
  main: {
    flex: 1,
    padding: '2rem',
    paddingRight: '3rem',
    position: 'relative',
    overflowY: 'auto',
  },
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2rem',
    alignItems: 'center',
  },
  notifications: {
    cursor: 'pointer',
    fontSize: '1.2rem',
  },
  content: {
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#3E54AC',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#2C2C2C',
    marginBottom: '2rem',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
    maxWidth: 1000,
    margin: '0 auto',
    marginBottom: '6rem', // Add space for chat button
  },
    card: {
    padding: '1.5rem',
    backgroundColor: '#3E54AC',
    borderRadius: 14,
    textDecoration: 'none',
    color: '#FFFFFF',
    fontSize: '1.1rem',
    fontWeight: '600',
    boxShadow: '0 6px 14px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    textAlign: 'center',
    cursor: 'pointer',
  },
  chatButton: {
    position: 'fixed',
    bottom: '20px',
    right: '30px',
    backgroundColor: '#3E54AC',
    color: '#fff',
    padding: '1rem',
    border: 'none',
    borderRadius: '50%',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 6px 14px rgba(0, 0, 0, 0.15)',
    zIndex: 1002,
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  },
  chatBox: {
    position: 'fixed',
    bottom: '100px',
    right: '30px',
    width: '380px',
    height: '500px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    zIndex: 1001,
    overflow: 'hidden',
  },
};

// Add responsive styles for chat
const mediaQuery = window.matchMedia('(max-width: 768px)');
const isMobile = mediaQuery.matches;

if (isMobile) {
  styles.chatBox = {
    ...styles.chatBox,
    width: '90vw',
    height: '70vh',
    right: '5vw',
    bottom: '100px',
  };
  
  styles.chatButton = {
    ...styles.chatButton,
    right: '20px',
    bottom: '20px',
  };
}

export default Dashboard;
