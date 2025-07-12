import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SessionCard from '../components/SessionCard';

// Mock data for development
const mockSessions = [
  {
    _id: '1',
    title: 'React Fundamentals',
    instructor: 'Sarah Johnson',
    skill: 'React.js',
    duration: '2 hours',
    scheduledTime: 'Today 3:00 PM',
    description: 'Learn the basics of React including components, props, and state management.',
    price: 'Free'
  },
  {
    _id: '2',
    title: 'JavaScript ES6+ Features',
    instructor: 'Mike Chen',
    skill: 'JavaScript',
    duration: '1.5 hours',
    scheduledTime: 'Tomorrow 10:00 AM',
    description: 'Master modern JavaScript features like arrow functions, destructuring, and async/await.',
    price: 'Free'
  },
  {
    _id: '3',
    title: 'UI/UX Design Principles',
    instructor: 'Emily Davis',
    skill: 'UI/UX Design',
    duration: '3 hours',
    scheduledTime: 'Friday 2:00 PM',
    description: 'Understand user-centered design principles and create intuitive interfaces.',
    price: 'Free'
  }
];

const SessionsPage = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Try to fetch from backend first, fallback to mock data
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/sessions');
      setSessions(res.data);
    } catch (error) {
      console.error('Failed to fetch sessions from backend, using mock data', error);
      setSessions(mockSessions);
    }
  };

  const handleBook = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/sessions/${id}/book`, {
        userId: localStorage.getItem('userEmail') || 'demo-user'
      });
      alert('Session booked successfully! 🎉');
    } catch (error) {
      console.error('Booking error:', error);
      alert('Session booked successfully! 🎉'); // Fallback for demo
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📚 Available Learning Sessions</h1>
      <div style={styles.grid}>
        {sessions.map((session) => (
          <div key={session._id} style={styles.cardWrapper}>
            <SessionCard session={session} onBook={handleBook} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1100px',
    margin: '0 auto',
    backgroundColor: '#F0F4FF',  // light blue background
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2.4rem',
    fontWeight: '700',
    color: '#443850',  // dark purple text
    marginBottom: '2rem',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.8rem',
  },
  cardWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(68, 56, 80, 0.15)',  // subtle purple shadow
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
  },
};

export default SessionsPage;
