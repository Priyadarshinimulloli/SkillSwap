import React, { useState } from 'react';

const Profile = () => {
  // State for profile fields
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [contact, setContact] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle profile picture selection and preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just log the data
    console.log({ name, bio, contact, profilePic });

    // TODO: send this data to backend API for saving profile
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:<br />
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <br /><br />

        <label>
          Bio:<br />
          <textarea
            value={bio}
            onChange={e => setBio(e.target.value)}
            rows={3}
          />
        </label>
        <br /><br />

        <label>
          Contact:<br />
          <input
            type="text"
            value={contact}
            onChange={e => setContact(e.target.value)}
          />
        </label>
        <br /><br />

        <label>
          Profile Picture:<br />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
        <br />
        {preview && (
          <img
            src={preview}
            alt="Profile Preview"
            style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: '50%', marginTop: 10 }}
          />
        )}
        <br /><br />

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default Profile;
