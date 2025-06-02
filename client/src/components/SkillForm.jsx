import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SkillForm = ({ userId }) => {
  const [skillsOffered, setSkillsOffered] = useState([]);
  const [skillsWanted, setSkillsWanted] = useState([]);

  const [newTeachSkill, setNewTeachSkill] = useState('');
  const [newLearnSkill, setNewLearnSkill] = useState('');

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/skills/${userId}`);
        setSkillsOffered(res.data.skillsOffered || []);
        setSkillsWanted(res.data.skillsWanted || []);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };
    fetchSkills();
  }, [userId]);

  const addTeachSkill = () => {
    const skill = newTeachSkill.trim();
    if (skill && !skillsOffered.includes(skill)) {
      setSkillsOffered([...skillsOffered, skill]);
      setNewTeachSkill('');
    }
  };

  const addLearnSkill = () => {
    const skill = newLearnSkill.trim();
    if (skill && !skillsWanted.includes(skill)) {
      setSkillsWanted([...skillsWanted, skill]);
      setNewLearnSkill('');
    }
  };

  const removeTeachSkill = (skill) => {
    setSkillsOffered(skillsOffered.filter(s => s !== skill));
  };

  const removeLearnSkill = (skill) => {
    setSkillsWanted(skillsWanted.filter(s => s !== skill));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/skills/${userId}`, {
        skillsOffered,
        skillsWanted,
      });
      alert('Skills updated!');
    } catch (err) {
      console.error(err);
      alert('Failed to update skills.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-4 py-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl space-y-8">
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 tracking-wide">
          Update Your Skills
        </h2>

        {/* Teach Skills */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Skills You Can Teach</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {skillsOffered.map(skill => (
              <div key={skill} className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full flex items-center gap-2 shadow-sm">
                {skill}
                <button type="button" onClick={() => removeTeachSkill(skill)} className="text-red-500 hover:text-red-700 font-bold">&times;</button>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newTeachSkill}
              onChange={e => setNewTeachSkill(e.target.value)}
              className="flex-grow border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Add a skill"
            />
            <button
              type="button"
              onClick={addTeachSkill}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
            >
              Add
            </button>
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* Learn Skills */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Skills You Want to Learn</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {skillsWanted.map(skill => (
              <div key={skill} className="bg-green-100 text-green-800 px-4 py-1 rounded-full flex items-center gap-2 shadow-sm">
                {skill}
                <button type="button" onClick={() => removeLearnSkill(skill)} className="text-red-500 hover:text-red-700 font-bold">&times;</button>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newLearnSkill}
              onChange={e => setNewLearnSkill(e.target.value)}
              className="flex-grow border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Add a skill"
            />
            <button
              type="button"
              onClick={addLearnSkill}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300"
            >
              Add
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
        >
          Save Skills
        </button>
      </form>
    </div>
  );
};

export default SkillForm;
