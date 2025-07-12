const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Routes
app.use('/api', userRoutes);
app.use('/api', sessionRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'SkillSwap API is running! 🚀' });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('🚀 Server running on port 5000')))
  .catch(err => console.error('❌ MongoDB connection error:', err));
