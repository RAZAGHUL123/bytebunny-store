import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // This should be in src/components/Login.css
import logo from '../assets/bytebunny-logo.png';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${email}`);
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-card bg-dark text-light p-4 rounded shadow">
        <div className="text-center mb-4">
          <img src={logo} alt="BYTEBUNNY Logo" className="logo mb-2" />
          <h2>Welcome to BYTEBUNNY</h2>
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
          <div className="mb-4">
            <input
              type="password"
              className="form-control bg-dark text-light border-danger"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-danger w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
