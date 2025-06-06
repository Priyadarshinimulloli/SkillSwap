// Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DashboardProfile from './DashboardProfile';

const Dashboard = () => {
  const email = 'test@example.com'; // your test email

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <DashboardProfile email={email} />
      </header>

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
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '1.5rem',
    paddingRight: '1rem',
    borderBottom: '1px solid #ddd',
    alignItems: 'center',
    height: 60,
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    color: '#3E54AC',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2.5rem',
    color: '#2C2C2C',
    textAlign: 'center',
  },
  navContainer: {
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
  cardHover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
  },
};

export default Dashboard;
