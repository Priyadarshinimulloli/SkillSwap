const express = require('express');
const router = express.Router();

// Mock sessions data (replace with MongoDB model later)
const sessions = [
  {
    _id: '1',
    title: 'React Fundamentals',
    instructor: 'Sarah Johnson',
    skill: 'React.js',
    duration: '2 hours',
    scheduledTime: 'Today 3:00 PM',
    description: 'Learn the basics of React including components, props, and state management.',
    price: 'Free',
    bookedBy: []
  },
  {
    _id: '2',
    title: 'JavaScript ES6+ Features',
    instructor: 'Mike Chen',
    skill: 'JavaScript',
    duration: '1.5 hours',
    scheduledTime: 'Tomorrow 10:00 AM',
    description: 'Master modern JavaScript features like arrow functions, destructuring, and async/await.',
    price: 'Free',
    bookedBy: []
  },
  {
    _id: '3',
    title: 'UI/UX Design Principles',
    instructor: 'Emily Davis',
    skill: 'UI/UX Design',
    duration: '3 hours',
    scheduledTime: 'Friday 2:00 PM',
    description: 'Understand user-centered design principles and create intuitive interfaces.',
    price: 'Free',
    bookedBy: []
  }
];

// Get all sessions
router.get('/sessions', (req, res) => {
  res.json(sessions);
});

// Book a session
router.post('/sessions/:id/book', (req, res) => {
  const sessionId = req.params.id;
  const { userId = 'demo-user' } = req.body;
  
  const session = sessions.find(s => s._id === sessionId);
  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }
  
  if (!session.bookedBy.includes(userId)) {
    session.bookedBy.push(userId);
  }
  
  res.json({ 
    message: 'Session booked successfully!', 
    session 
  });
});

// Get user's skills
router.get('/skills/:userId', (req, res) => {
  // Mock response - replace with actual database query
  res.json({
    skillsOffered: ['React', 'JavaScript'],
    skillsWanted: ['UI/UX', 'Python']
  });
});

// Update user's skills
router.put('/skills/:userId', (req, res) => {
  const { skillsOffered, skillsWanted } = req.body;
  
  // Mock response - replace with actual database update
  res.json({
    message: 'Skills updated successfully',
    skillsOffered,
    skillsWanted
  });
});

module.exports = router;
