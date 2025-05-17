// src/components/ThankYou.jsx
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <section className="container text-center text-white py-5">
      <h2 className="text-success">🎉 You're Registered!</h2>
      <p className="text-muted mb-4">
        Your BYTEBUNNY soul pact is sealed. You may now sign in.
      </p>
      <Link to="/login" className="btn btn-demonic-cta">
        Sign In
      </Link>
    </section>
  );
}

export default ThankYou;
