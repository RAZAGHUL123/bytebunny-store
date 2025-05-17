// src/components/Home.jsx
import { Link } from 'react-router-dom';
import CatalogCarousel from './CatalogCarousel'; // assuming same folder or adjust path

function Home() {
  return (
    <section className="home-hero text-center">
      {/* Carousel Preview of Products */}
      <div className="carousel-wrapper">
        <CatalogCarousel />
      </div>

      {/* Logo */}
      <img
        src="/bytebunny-logo.png"
        alt="BYTEBUNNY"
        className="hero-logo mt-4"
      />

      {/* Headline */}
      <h1 className="glitch-title" data-text="WELCOME TO BYTEBUNNY">
        WELCOME TO BYTEBUNNY
      </h1>

      {/* Subheadline */}
      <p className="hero-subtext">
        Cursed relics. Celtic echoes. Cartoons that never aired.  
        <br />
        Shop carefully — some items shop back.
      </p>

      {/* CTA Button */}
      <Link to="/catalog" className="btn btn-demonic-cta">
        🧧 View Catalog
      </Link>
    </section>
  );
}

export default Home;
