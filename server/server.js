const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const User = require('./models/User');
const Transaction = require('./models/Transaction');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection string — replace with your own
const mongoURI = 'mongodb+srv://priyadarshinimulloli:priya01@cluster0.p1ssx.mongodb.net/skillswap?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Health check
app.get('/', (req, res) => {
  res.send('SkillSwap backend is running');
});

// Create a new user
app.post('/users', async (req, res) => {
  try {
    const { name, email, skillsOffered, skillsWanted } = req.body;
    const user = new User({ name, email, skillsOffered, skillsWanted });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get user info by id
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Transfer credits from one user to another
app.post('/users/transfer', async (req, res) => {
  try {
    const { fromUserId, toUserId, credits, description } = req.body;

    if (!credits || credits <= 0) return res.status(400).json({ error: 'Invalid credits amount' });
    if (!fromUserId || !toUserId) return res.status(400).json({ error: 'Both user IDs required' });

    if (fromUserId === toUserId) return res.status(400).json({ error: 'Cannot transfer credits to self' });

    const fromUser = await User.findById(fromUserId);
    const toUser = await User.findById(toUserId);

    if (!fromUser || !toUser) return res.status(404).json({ error: 'User(s) not found' });
    if (fromUser.credits < credits) return res.status(400).json({ error: 'Insufficient credits' });

    // Perform credit transfer
    fromUser.credits -= credits;
    toUser.credits += credits;

    await fromUser.save();
    await toUser.save();

    // Record transaction
    const transaction = new Transaction({
      fromUser: fromUser._id,
      toUser: toUser._id,
      credits,
      description,
    });
    await transaction.save();

    res.json({ fromUser, toUser, transaction });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all transactions (optional - for admin or user viewing)
app.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate('fromUser', 'name email')
      .populate('toUser', 'name email')
      .sort({ createdAt: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
