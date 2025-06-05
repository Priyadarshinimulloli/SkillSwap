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
            <h3 style={styles.userName}>{user.name}</h3>
            <p><strong>Offers:</strong> {user.skillsOffered.join(', ')}</p>
            <p><strong>Wants:</strong> {user.skillsWanted.join(', ')}</p>
            <p><strong>Match Score:</strong> {user.matchScore}%</p>
            <div style={styles.buttons}>
              <button style={styles.connectBtn}>Connect</button>
              <button style={styles.swapBtn}>Request Swap</button>
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
    maxWidth: '1000px',
    margin: '2rem auto',
    backgroundColor: '#F0F4FF',  // Light blue background
    borderRadius: '12px',
    boxShadow: '0 6px 18px rgba(68, 56, 80, 0.1)', // subtle purple shadow
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#443850',  // dark purple text
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: '2rem',
    fontWeight: '700',
    textAlign: 'center',
  },
  list: {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  },
  card: {
    backgroundColor: '#FFFFFF', // white card
    borderRadius: '12px',
    padding: '1.5rem 2rem',
    boxShadow: '0 8px 24px rgba(62, 84, 172, 0.12)', // blue shadow
    transition: 'transform 0.3s ease',
  },
  userName: {
    marginBottom: '0.5rem',
    color: '#3E54AC', // blue for user name
  },
  buttons: {
    marginTop: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  connectBtn: {
    padding: '0.6rem 1.5rem',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#3E54AC',  // theme blue
    color: '#fff',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(62, 84, 172, 0.3)',
    transition: 'background-color 0.3s ease',
  },
  swapBtn: {
    padding: '0.6rem 1.5rem',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#00b894', // green
    color: '#fff',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0, 184, 148, 0.3)',
    transition: 'background-color 0.3s ease',
  },
};

export default Matches;
