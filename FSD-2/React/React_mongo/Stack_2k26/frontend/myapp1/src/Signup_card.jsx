import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/signup', {username,password});
     alert('User signed up successfully.'+username);
     setUsername('');
     setPassword('');
     }
 catch (error) {
      console.error('Error signing up:', error);
     alert('An error occurred.');
    }
  };
return (
  <div className="container vh-100 d-flex justify-content-center align-items-center">
    <div className="card shadow-lg p-4" style={{ width: "400px" }}>
      <h2 className="text-center text-primary mb-4">
        Sign Up
      </h2>

      <form onSubmit={handleSignup}>

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100">
          Sign Up
        </button>

      </form>
    </div>
  </div>
);
}

export default Signup;


