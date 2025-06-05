// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const profileRoutes = require('./routes/profileRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // To serve profile pictures
app.use('/api/profile', profileRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('Server started on port 5000')))
  .catch(err => console.error(err));
