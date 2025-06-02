 const express = require('express');
 const cors = require('cors');
 const mongoose = require('mongoose');
 require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

 // MongoDB Connection
 mongoose.connect(process.env.MONGO_URI)
   .then(() => console.log('✅ Connected to MongoDB'))
 .catch((err) => console.error('❌ MongoDB connection failed:', err.message));


// // // Test Route
// // app.get('/', (req, res) => {
// //   res.send('SkillSwap backend is running!');
// // });

// // // Start Server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`🚀 Server running on port ${PORT}`);
//  import express from 'express';
//  import dotenv from 'dotenv';
//  import cors from 'cors';
//  import connectDB from './config/db.js';
// import userRoutes from './routes/userRoutes.js';

//  dotenv.config();
//  connectDB();

// const app = express();
// app.use(cors());
//  app.use(express.json());

//  app.use('/api/users', userRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // Connect to MongoDB
// // mongoose.connect('mongodb://localhost:27017/skillmatch', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // }).then(() => console.log('MongoDB connected'))
// //   .catch(err => console.log('MongoDB connection error:', err));

// // // Define schema & model
// // const userSchema = new mongoose.Schema({
// //   username: { type: String, required: true },
// //   skillsOffered: [String],
// //   skillsWanted: [String]
// // });
// // const User = mongoose.model('User', userSchema);

// // // API Routes
// // app.get('/api/users/:id/skills', async (req, res) => {
// //   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json({
//       skillsOffered: user.skillsOffered,
//       skillsWanted: user.skillsWanted
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// app.put('/api/users/:id/skills', async (req, res) => {
//   try {
//     const { skillsOffered, skillsWanted } = req.body;
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     user.skillsOffered = skillsOffered || [];
//     user.skillsWanted = skillsWanted || [];

//     await user.save();

//     res.json({
//       skillsOffered: user.skillsOffered,
//       skillsWanted: user.skillsWanted
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// app.post('/api/users', async (req, res) => {
//   try {
//     const { username } = req.body;
//     const newUser = new User({ username, skillsOffered: [], skillsWanted: [] });
//     await newUser.save();
//     res.json(newUser);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
