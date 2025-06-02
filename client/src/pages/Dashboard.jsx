import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to SkillSwap Dashboard</h1>
      <p style={styles.subtitle}>Grow, Learn, and Share Skills with Peers</p>

      <div style={styles.navContainer}>
        <Link to="/profile" style={styles.card}>👤 My Profile</Link>
        <Link to="/marketplace" style={styles.card}>🛒 Skill Marketplace</Link>
        <Link to="/sessions" style={styles.card}>🎥 Learning Sessions</Link>
        <Link to="/credits" style={styles.card}>💰 Barter Credits</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    color: '#555',
  },
  navContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  card: {
    padding: '1.5rem',
    background: '#f0f0f0',
    borderRadius: '10px',
    textDecoration: 'none',
    color: '#333',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  }
};

export default Dashboard;
