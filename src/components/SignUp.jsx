// src/components/Signup.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ onSignup }) {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!fullName || !username || !email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    if (password !== confirmPass) {
      setError('Passwords do not match.');
      return;
    }

    const fakeToken = `token_${Date.now()}`;
    const newUser = {
      fullName,
      username,
      email,
      token: fakeToken
    };

    localStorage.setItem('auth', JSON.stringify(newUser));
    onSignup(newUser);
    navigate('/catalog');
  };

  return (
    <section className="container text-white py-5">
      <h2 className="text-danger mb-4">👁️‍🗨️ Create a BYTEBUNNY Account</h2>

      <form
        onSubmit={handleSignup}
        className="bg-dark p-4 rounded border border-danger shadow"
      >
        {error && <p className="text-warning mb-3">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          className="form-control mb-3 bg-black text-white"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Username"
          className="form-control mb-3 bg-black text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          className="form-control mb-3 bg-black text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3 bg-black text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="form-control mb-3 bg-black text-white"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />

        <div className="form-check mb-4">
          <input
            className="form-check-input bg-black"
            type="checkbox"
            id="newsletter"
          />
          <label className="form-check-label text-light" htmlFor="newsletter">
            Subscribe me to cursed item alerts.
          </label>
        </div>

        <button type="submit" className="btn btn-demonic-cta w-100">
          Sign Up
        </button>
      </form>
    </section>
  );
}

export default Signup;
