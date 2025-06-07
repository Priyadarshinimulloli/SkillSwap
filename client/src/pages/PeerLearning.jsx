import React from 'react';
import { Link } from 'react-router-dom';

const PeerLearning = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Peer Learning</h2>
      <p style={styles.subtitle}>Connect with learners and start a session!</p>

      <div style={styles.sessionBox}>
        <p><strong>Matched Peer:</strong> Ankit Sharma (Skill: Web Dev)</p>
        <a
          href="https://skillswap-hq.daily.co/Blih9bMKCAk3IE1G5kV4"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.joinBtn}
        >
          Join Video Call 🎥
        </a>
      </div>

      <div style={styles.videoContainer}>
        <iframe
          title="Video Call Room"
          src="https://skillswap-hq.daily.co/Blih9bMKCAk3IE1G5kV4"
          allow="camera; microphone; fullscreen; speaker; display-capture"
          style={styles.iframe}
        />
      </div>

      <Link to="/dashboard" style={styles.backBtn}>← Back to Dashboard</Link>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '700px',
    margin: '0 auto',
    backgroundColor: '#F0F4FF',  // light blue background
    borderRadius: '12px',
    boxShadow: '0 6px 18px rgba(68, 56, 80, 0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#443850',  // dark purple text
    textAlign: 'center',
    minHeight: '90vh',
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: '0.5rem',
    fontWeight: '700',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#6c6c7d',  // softer purple-grey
  },
  sessionBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '1.5rem 2rem',
    boxShadow: '0 6px 15px rgba(62, 84, 172, 0.15)', // blue shadow
    marginBottom: '2rem',
    fontSize: '1.1rem',
  },
  joinBtn: {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '0.9rem 1.8rem',
    backgroundColor: '#3E54AC', // theme blue
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
  },
  videoContainer: {
    marginBottom: '2rem',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(68, 56, 80, 0.15)',
  },
  iframe: {
    width: '100%',
    height: '450px',
    border: 'none',
  },
  backBtn: {
    display: 'inline-block',
    fontSize: '1rem',
    color: '#3E54AC',  // blue for link
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'color 0.2s ease',
  },
};

export default PeerLearning;
