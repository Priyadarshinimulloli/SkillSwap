import React from 'react';

const Register = () => {
  return (
    <div>
      <h2>Register Page</h2>
      <form>
        <input type="text" placeholder="Username" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
