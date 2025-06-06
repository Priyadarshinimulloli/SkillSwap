const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes'); // ✅ Import first

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use('/api', userRoutes); // ✅ Then use

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('🚀 Server running on port 5000')))
  .catch(err => console.error('❌ MongoDB connection error:', err));
