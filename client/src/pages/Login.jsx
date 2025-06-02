import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
