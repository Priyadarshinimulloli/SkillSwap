import React from 'react';
import { Link } from 'react-router-dom';

const PeerLearning = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Peer Learning</h2>
      <p style={styles.subtitle}>Connect with learners and start a session!</p>

      <div style={styles.sessionBox}>
        <p><strong>Matched Peer:</strong> Ankit Sharma (Skill: Web Dev)</p>
        <a href="https://skillswap-hq.daily.co/Blih9bMKCAk3IE1G5kV4" target="_blank" rel="noopener noreferrer" style={styles.joinBtn}>
          Join Video Call 🎥
        </a>
      </div>

      <div style={styles.videoContainer}>
        <iframe
          title="Video Call Room"
          src="https://skillswap-hq.daily.co/Blih9bMKCAk3IE1G5kV4"
          allow="camera; microphone; fullscreen; speaker; display-capture"
          style={{ width: '100%', height: '450px', border: 'none', borderRadius: '10px' }}
        />
      </div>

      <Link to="/dashboard" style={styles.backBtn}>← Back to Dashboard</Link>
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
  sessionBox: {
    border: '1px solid #ccc',
    padding: '1.5rem',
    borderRadius: '10px',
    marginBottom: '2rem',
    backgroundColor: '#f9f9f9',
  },
  joinBtn: {
    display: 'inline-block',
    padding: '0.8rem 1.5rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '1rem',
  },
  videoContainer: {
    marginBottom: '2rem',
  },
  backBtn: {
    textDecoration: 'none',
    fontSize: '1rem',
    color: '#333',
  }
};

export default PeerLearning;
