import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ cartItems }) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const user = JSON.parse(localStorage.getItem('auth'));
  const cartCount = cartItems?.length || 0;

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark px-3 fixed-top w-100">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="./images/bytebunny-logo.png" alt="ByteBunny Logo" width="40" height="40" className="me-2" />
          BYTEBUNNY
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">Catalog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link d-flex align-items-center" to="/cart">
                <FaShoppingCart className="me-1" />
                {cartCount > 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
            {!user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <button onClick={handleLogout} className="btn btn-link nav-link text-danger p-0">
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
