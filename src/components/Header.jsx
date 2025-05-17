// src/components/Header.jsx
import { Link, useNavigate } from 'react-router-dom';

function Header({ cartItems }) {
  const navigate = useNavigate();

  // Check for logged-in user
  const user = JSON.parse(localStorage.getItem('auth'));

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/');
    window.location.reload(); // optional full reset
  };

  const cartCount = cartItems?.length || 0;

  return (
    <header className="bytebunny-nav">
      {/* Logo & Title back to home */}
      <div className="nav-left">
        <Link to="/" className="flex items-center no-underline">
          <img
            src="/bytebunny-logo.png"
            alt="ByteBunny Logo"
            className="nav-logo"
          />
          <h1 className="nav-title">BYTEBUNNY</h1>
        </Link>
      </div>

      {/* Nav links */}
      <nav className="nav-right">
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/catalog" className="nav-link">Catalog</Link></li>
          <li className="position-relative">
            <Link to="/cart" className="nav-link">
              Cart
              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </Link>
          </li>

          {!user ? (
            <>
              <li><Link to="/login" className="nav-link">Login</Link></li>
              <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
              <li>
                <button onClick={handleLogout} className="nav-link btn btn-link text-danger p-0">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
