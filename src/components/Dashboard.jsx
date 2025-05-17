// src/components/Dashboard.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('auth');
    if (!stored) {
      navigate('/login');
    } else {
      setUser(JSON.parse(stored));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/');
  };

  return user ? (
    <section className="container text-white py-5">
      <h2 className="text-danger mb-4">👤 Welcome, {user.username}!</h2>
      <p className="text-muted">Here’s your cursed online hub.</p>

      <div className="bg-dark p-4 mt-4 rounded border border-danger">
        <h4 className="text-light">📦 Orders</h4>
        <p className="text-muted">You have no active curses at this time.</p>
      </div>

      <div className="bg-dark p-4 mt-4 rounded border border-danger">
        <h4 className="text-light">🧧 Featured Item</h4>
        <p className="text-danger">Jawbox Plush (Possessed)</p>
        <p className="text-muted">Reappears in carts without consent.</p>
      </div>

      <button className="btn btn-outline-danger mt-4" onClick={handleLogout}>
        Log Out
      </button>
    </section>
  ) : null;
}

export default Dashboard;
