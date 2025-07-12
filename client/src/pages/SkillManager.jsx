import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SkillManager.css';

const SkillManager = () => {
  const [skillsOffered, setSkillsOffered] = useState(["React"]);
  const [skillsWanted, setSkillsWanted] = useState(["UI/UX"]);
  const [newOffered, setNewOffered] = useState("");
  const [newWanted, setNewWanted] = useState("");
  const userId = 1; // Replace with actual user ID from auth

  // Load skills from backend on component mount
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/skills/${userId}`);
        setSkillsOffered(res.data.skillsOffered || ["React"]);
        setSkillsWanted(res.data.skillsWanted || ["UI/UX"]);
      } catch (error) {
        console.error('Error fetching skills:', error);
        // Keep default values if API fails
      }
    };
    fetchSkills();
  }, [userId]);

  const addSkill = async (type) => {
    if (type === 'offered' && newOffered.trim()) {
      const newSkills = [...skillsOffered, newOffered.trim()];
      setSkillsOffered(newSkills);
      setNewOffered("");
      await saveSkills(newSkills, skillsWanted);
    } else if (type === 'wanted' && newWanted.trim()) {
      const newSkills = [...skillsWanted, newWanted.trim()];
      setSkillsWanted(newSkills);
      setNewWanted("");
      await saveSkills(skillsOffered, newSkills);
    }
  };

  const deleteSkill = async (type, index) => {
    if (type === 'offered') {
      const newSkills = skillsOffered.filter((_, i) => i !== index);
      setSkillsOffered(newSkills);
      await saveSkills(newSkills, skillsWanted);
    } else {
      const newSkills = skillsWanted.filter((_, i) => i !== index);
      setSkillsWanted(newSkills);
      await saveSkills(skillsOffered, newSkills);
    }
  };

  const saveSkills = async (offered, wanted) => {
    try {
      await axios.put(`http://localhost:5000/api/skills/${userId}`, {
        skillsOffered: offered,
        skillsWanted: wanted,
      });
      console.log('Skills saved successfully');
    } catch (error) {
      console.error('Failed to save skills:', error);
      alert('Failed to save skills. Please try again.');
    }
  };

  return (
    <div className="skill-manager-container">
      <h2 className="skill-manager-title">🛠️ Skill Management</h2>

      <div className="skill-card">
        <h3>Skills I Can Teach</h3>
        <ul>
          {skillsOffered.map((skill, idx) => (
            <li key={idx}>
              {skill}
              <button onClick={() => deleteSkill('offered', idx)} className="del-btn">❌</button>
            </li>
          ))}
        </ul>
        <div className="input-group">
          <input
            value={newOffered}
            onChange={e => setNewOffered(e.target.value)}
            placeholder="Add skill you offer"
          />
          <button onClick={() => addSkill('offered')} className="add-btn">Add</button>
        </div>
      </div>

      <div className="skill-card">
        <h3>Skills I Want to Learn</h3>
        <ul>
          {skillsWanted.map((skill, idx) => (
            <li key={idx}>
              {skill}
              <button onClick={() => deleteSkill('wanted', idx)} className="del-btn">❌</button>
            </li>
          ))}
        </ul>
        <div className="input-group">
          <input
            value={newWanted}
            onChange={e => setNewWanted(e.target.value)}
            placeholder="Add skill you want"
          />
          <button onClick={() => addSkill('wanted')} className="add-btn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default SkillManager;
