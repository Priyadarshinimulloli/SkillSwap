import React from 'react';
import SkillForm from '../components/SkillForm';

const SkillMatchPage = () => {
  const userId = 1; // Replace with dynamic user ID from auth

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛒 Skill Marketplace</h1>
      <p style={styles.subtitle}>Exchange skills and grow together!</p>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Offer and Request Skills</h2>
        <SkillForm userId={userId} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: '#FDF6EC',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.2rem',
    color: '#3E54AC',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '2rem',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    maxWidth: '650px',
    margin: '0 auto',
    borderTop: '6px solid #3E54AC',
    textAlign: 'left',
  },
  cardTitle: {
    color: '#3E54AC',
    fontSize: '1.5rem',
    textAlign: 'center',
    marginBottom: '1rem',
  },
};

export default SkillMatchPage;
