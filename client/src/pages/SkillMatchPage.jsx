import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Mock marketplace data
const mockSkillListings = [
  {
    id: 1,
    user: 'Sarah Johnson',
    skillOffered: 'React.js',
    skillWanted: 'UI/UX Design',
    experience: '3 years',
    rating: 4.8,
    availability: 'Weekends'
  },
  {
    id: 2,
    user: 'Mike Chen',
    skillOffered: 'Python',
    skillWanted: 'JavaScript',
    experience: '5 years',
    rating: 4.9,
    availability: 'Evenings'
  },
  {
    id: 3,
    user: 'Emily Davis',
    skillOffered: 'UI/UX Design',
    skillWanted: 'React.js',
    experience: '4 years',
    rating: 4.7,
    availability: 'Flexible'
  }
];

const SkillMatchPage = () => {
  const [skillListings, setSkillListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Use mock data for now
    setSkillListings(mockSkillListings);
  }, []);

  const filteredListings = skillListings.filter(listing =>
    listing.skillOffered.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.skillWanted.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleConnect = (userId) => {
    alert(`Connection request sent to ${userId}! 🤝`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛒 Skill Marketplace</h1>
      <p style={styles.subtitle}>Discover skills and connect with learners!</p>

      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.listingsGrid}>
        {filteredListings.map((listing) => (
          <div key={listing.id} style={styles.listingCard}>
            <h3 style={styles.userName}>{listing.user}</h3>
            <div style={styles.skillExchange}>
              <span style={styles.offers}>Offers: <strong>{listing.skillOffered}</strong></span>
              <span style={styles.wants}>Wants: <strong>{listing.skillWanted}</strong></span>
            </div>
            <p style={styles.experience}>Experience: {listing.experience}</p>
            <p style={styles.rating}>Rating: ⭐ {listing.rating}</p>
            <p style={styles.availability}>Available: {listing.availability}</p>
            <button
              onClick={() => handleConnect(listing.user)}
              style={styles.connectButton}
            >
              Connect & Exchange
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: '#FDF6EC',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    color: '#3E54AC',
    marginBottom: '0.5rem',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  searchContainer: {
    maxWidth: '500px',
    margin: '0 auto 2rem auto',
  },
  searchInput: {
    width: '100%',
    padding: '1rem',
    border: '2px solid #ddd',
    borderRadius: '12px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  listingsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  listingCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    borderTop: '4px solid #3E54AC',
    transition: 'transform 0.3s ease',
  },
  userName: {
    color: '#3E54AC',
    fontSize: '1.3rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  skillExchange: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  offers: {
    color: '#00b894',
    fontSize: '1rem',
  },
  wants: {
    color: '#e17055',
    fontSize: '1rem',
  },
  experience: {
    color: '#666',
    marginBottom: '0.5rem',
  },
  rating: {
    color: '#666',
    marginBottom: '0.5rem',
  },
  availability: {
    color: '#666',
    marginBottom: '1.5rem',
  },
  connectButton: {
    width: '100%',
    padding: '0.8rem',
    backgroundColor: '#3E54AC',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default SkillMatchPage;
