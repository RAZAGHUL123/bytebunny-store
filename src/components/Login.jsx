// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake login
    localStorage.setItem('auth', JSON.stringify({ email }));
    navigate('/dashboard');
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center min-vh-100">
      <div className="login-card p-4 rounded shadow">
        <h2 className="text-center text-glitch mb-4">BYTEBUNNY.d0z</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-muted">Agent Email</label>
            <input
              type="email"
              className="form-control bg-dark text-light border-danger"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-muted">Clearance Code</label>
            <input
              type="password"
              className="form-control bg-dark text-light border-danger"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-danger w-100">
            Authenticate
          </button>
        </form>
        <p className="text-muted small mt-3 text-center">
          Unauthorized use punishable by containment.
        </p>
      </div>
    </div>
  );
}
