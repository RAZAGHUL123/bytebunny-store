// src/components/CatalogCarousel.jsx
import { Carousel } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CatalogCarousel() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/catalog.json')
      .then((res) => res.json())
      .then(setItems)
      .catch((err) => console.error('Failed to load catalog:', err));
  }, []);

  if (!items.length) return null;

  return (
    <Carousel fade controls={false} indicators interval={3500} pause="hover">
      {items.map((item) => (
        <Carousel.Item
          key={item.id}
          onClick={() => navigate(`/catalog/${item.id}`)}
          style={{ cursor: 'pointer' }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="d-block w-100"
            style={{ height: '300px', objectFit: 'cover', borderRadius: '10px' }}
          />
          <Carousel.Caption>
            <h5 className="text-light">{item.name}</h5>
            <p className="text-info">${item.price.toFixed(2)}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CatalogCarousel;
