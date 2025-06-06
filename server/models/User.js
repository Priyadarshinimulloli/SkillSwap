const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  skillsOffered: [String],
  skillsWanted: [String],
  availability: String,
  portfolioLink: String,
  profilePic: { type: String, default: '' }  // Add this line
});

module.exports = mongoose.model('User', userSchema);
