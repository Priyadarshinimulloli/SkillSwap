const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: String,
  bio: String,
  contact: String,
  profilePicUrl: String
});

module.exports = mongoose.model('Profile', ProfileSchema);
