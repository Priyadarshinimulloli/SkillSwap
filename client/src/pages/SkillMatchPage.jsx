import React from 'react';
import SkillForm from '../components/SkillForm'; // ✅ correct path

const SkillMatchPage = () => {
  const userId = 1; // Replace with dynamic value if using login

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛒 Skill Marketplace</h1>
      <p style={styles.subtitle}>Exchange skills and grow together!</p>

      {/* 🛠️ SkillForm appears here */}
      <div style={styles.formSection}>
        <h2 style={styles.formTitle}>Offer and Request Skills</h2>
        <SkillForm userId={userId} />
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
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    color: '#555',
  },
  formSection: {
    marginTop: '2rem',
    textAlign: 'left',
    maxWidth: '600px',
    marginInline: 'auto',
  },
  formTitle: {
    fontSize: '1.4rem',
    marginBottom: '1rem',
    textAlign: 'center',
  }
};

export default SkillMatchPage;
