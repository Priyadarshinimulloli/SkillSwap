import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [contact, setContact] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, bio, contact, profilePic });
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <h2 className="profile-title">👤 Edit Your Profile</h2>
        <form className="profile-form" onSubmit={handleSubmit}>
          <label>Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
          </label>

          <label>Bio:
            <textarea value={bio} onChange={e => setBio(e.target.value)} rows={3} />
          </label>

          <label>Contact:
            <input type="text" value={contact} onChange={e => setContact(e.target.value)} />
          </label>

          <label>Profile Picture:
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </label>

          {preview && (
            <img src={preview} alt="Profile Preview" className="profile-preview" />
          )}

          <button type="submit" className="profile-button">💾 Save Profile</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
