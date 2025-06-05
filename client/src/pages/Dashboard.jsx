// pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚀 Welcome to SkillSwap Dashboard</h1>
      <p style={styles.subtitle}>Grow, Learn, and Share Skills with Peers</p>

      <div style={styles.navContainer}>
        <Link to="/profile" style={styles.card}>👤 My Profile</Link>
        <Link to="/marketplace" style={styles.card}>🛒 Skill Marketplace</Link>
        <Link to="/peer-learning" style={styles.card}>🔗 Peer Learning</Link>
        <Link to="/call/demo-channel" style={styles.card}>🎥 Learning Sessions</Link>
        <Link to="/skills" style={styles.card}>🧠 Manage My Skills</Link>
        <Link to="/matches" style={styles.card}>💡 Match Suggestions</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    minHeight: '100vh',
    backgroundColor: '#FDF6EC',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
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
  navContainer: {
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
};

export default Dashboard;
