// src/components/LoginForm.jsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Create this for custom styles
import logo from '../assets/bytebunny-logo.png'; // Replace with actual logo path

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add actual auth logic
    alert(`Logging in as ${email}`);
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="login-card p-4 rounded">
        <div className="text-center mb-3">
          <img src={logo} alt="BYTEBUNNY Logo" className="logo" />
          <h2 className="text-light mt-3">Welcome to BYTEBUNNY</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control bg-dark text-light border-danger"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control bg-dark text-light border-danger"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-danger w-100">Login</button>
        </form>
      </div>
    </div>
  );
}
