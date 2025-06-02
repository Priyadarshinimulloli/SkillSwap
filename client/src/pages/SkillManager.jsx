import React, { useState } from 'react';

const SkillManager = () => {
  const [skillsOffered, setSkillsOffered] = useState(["React"]);
  const [skillsWanted, setSkillsWanted] = useState(["UI/UX"]);
  const [newOffered, setNewOffered] = useState("");
  const [newWanted, setNewWanted] = useState("");

  const addSkill = (type) => {
    if (type === 'offered' && newOffered.trim()) {
      setSkillsOffered([...skillsOffered, newOffered.trim()]);
      setNewOffered("");
    } else if (type === 'wanted' && newWanted.trim()) {
      setSkillsWanted([...skillsWanted, newWanted.trim()]);
      setNewWanted("");
    }
  };

  const deleteSkill = (type, index) => {
    if (type === 'offered') {
      setSkillsOffered(skillsOffered.filter((_, i) => i !== index));
    } else {
      setSkillsWanted(skillsWanted.filter((_, i) => i !== index));
    }
  };

  return (
    <div style={styles.container}>
      <h2>🛠️ Skill Management</h2>

      <div style={styles.section}>
        <h3>Skills I Can Teach</h3>
        <ul>
          {skillsOffered.map((skill, idx) => (
            <li key={idx}>
              {skill}
              <button onClick={() => deleteSkill('offered', idx)} style={styles.del}>❌</button>
            </li>
          ))}
        </ul>
        <input
          value={newOffered}
          onChange={e => setNewOffered(e.target.value)}
          placeholder="Add skill you offer"
        />
        <button onClick={() => addSkill('offered')} style={styles.addBtn}>Add</button>
      </div>

      <div style={styles.section}>
        <h3>Skills I Want to Learn</h3>
        <ul>
          {skillsWanted.map((skill, idx) => (
            <li key={idx}>
              {skill}
              <button onClick={() => deleteSkill('wanted', idx)} style={styles.del}>❌</button>
            </li>
          ))}
        </ul>
        <input
          value={newWanted}
          onChange={e => setNewWanted(e.target.value)}
          placeholder="Add skill you want"
        />
        <button onClick={() => addSkill('wanted')} style={styles.addBtn}>Add</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: 'auto',
    textAlign: 'center',
  },
  section: {
    marginBottom: '2rem',
  },
  addBtn: {
    marginLeft: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#0984e3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  del: {
    marginLeft: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: 'red',
  },
};

export default SkillManager;
