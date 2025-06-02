// src/pages/Matches.jsx
import React from 'react';

const mockMatches = [
  {
    id: 1,
    name: "Aarav Sharma",
    skillsOffered: ["React", "Node.js"],
    skillsWanted: ["UI/UX", "Python"],
    matchScore: 92,
  },
  {
    id: 2,
    name: "Meera Iyer",
    skillsOffered: ["Photoshop", "Illustrator"],
    skillsWanted: ["React", "Firebase"],
    matchScore: 87,
  },
  {
    id: 3,
    name: "Rohit Verma",
    skillsOffered: ["Python", "Data Science"],
    skillsWanted: ["Marketing", "Public Speaking"],
    matchScore: 79,
  },
];

const Matches = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🔍 Match Suggestions</h2>
      <div style={styles.list}>
        {mockMatches.map(user => (
          <div key={user.id} style={styles.card}>
            <h3>{user.name}</h3>
            <p><strong>Offers:</strong> {user.skillsOffered.join(', ')}</p>
            <p><strong>Wants:</strong> {user.skillsWanted.join(', ')}</p>
            <p><strong>Match Score:</strong> {user.matchScore}%</p>
            <div style={styles.buttons}>
              <button style={styles.btn}>Connect</button>
              <button style={{ ...styles.btn, backgroundColor: '#00b894' }}>Request Swap</button>
            </div>
          </div>
        ))}
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
    marginBottom: '1.5rem',
  },
  list: {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    background: '#f1f1f1',
    borderRadius: '10px',
    padding: '1rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  buttons: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  btn: {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#0984e3',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Matches;
