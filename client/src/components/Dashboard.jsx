import React from 'react';

export default function Dashboard() {
  const token = localStorage.getItem('authToken');
  if (!token) {
    window.location.href = '/login';
    return null;
  }

  return (
    <div>
      <h2>Welcome to your Dashboard</h2>
      <button onClick={() => {
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      }}>
        Logout
      </button>
    </div>
  );
}
