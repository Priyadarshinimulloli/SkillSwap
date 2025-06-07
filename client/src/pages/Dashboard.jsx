import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardProfile from './DashBoardProfile';
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
          <Link to="/call/demo-channel" style={styles.navLink}>🎥 Learning Sessions</Link>
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
            <Link to="/call/demo-channel" style={styles.card}>🎥 Learning Sessions</Link>
            <Link to="/skills" style={styles.card}>🧠 Manage My Skills</Link>
            <Link to="/matches" style={styles.card}>💡 Match Suggestions</Link>
          </div>
        </div>

        {/* Chat Toggle Button */}
        <button onClick={toggleChat} style={styles.chatButton}>
          {showChat ? '❌ Close Chat' : '💬 Open Chat'}
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
  },
  main: {
    flex: 1,
    padding: '2rem',
    position: 'relative',
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
    padding: '0.8rem 1.5rem',
    border: 'none',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 6px 14px rgba(0, 0, 0, 0.15)',
    zIndex: 1000,
  },
  chatBox: {
    position: 'fixed',
    bottom: '80px',
    right: '30px',
    width: '320px',
    height: '400px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    zIndex: 999,
    overflow: 'hidden',
  },
  // Add to `card` style:
'card:hover': {
  transform: 'translateY(-4px)',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
}

};



export default Dashboard;
