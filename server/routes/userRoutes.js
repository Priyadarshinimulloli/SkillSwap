const express = require('express');
const User = require('../models/User');
const { signup, login } = require('../controllers/authController');
const router = express.Router();

// Authentication routes
router.post('/auth/register', signup);
router.post('/auth/login', login);

// Create or update profile
router.post('/profile', async (req, res) => {
  const {
    email,
    name,
    bio,
    contact,
    skillsOffered,
    skillsWanted,
    availability,
    portfolioLink,
    skillVerificationStatus,
    profilePic
  } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      // Update existing user profile
      user.name = name || user.name;
      user.bio = bio || user.bio;
      user.contact = contact || user.contact;
      user.skillsOffered = skillsOffered || user.skillsOffered;
      user.skillsWanted = skillsWanted || user.skillsWanted;
      user.availability = availability || user.availability;
      user.portfolioLink = portfolioLink || user.portfolioLink;
      user.skillVerificationStatus = skillVerificationStatus || user.skillVerificationStatus;
      user.profilePic = profilePic || user.profilePic;

      await user.save();
      res.status(200).json({ message: 'Profile updated successfully', user });
    } else {
      // Create new profile
      user = await User.create({
        email,
        name,
        bio,
        contact,
        skillsOffered,
        skillsWanted,
        availability,
        portfolioLink,
        skillVerificationStatus,
        profilePic
      });
      res.status(201).json({ message: 'Profile created successfully', user });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

// Get profile by email
router.get('/userprofile/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
