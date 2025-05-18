import { Carousel, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CatalogCarousel() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/catalog.json')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(item => item.image?.trim());
        setItems(filtered);
      })
      .catch(err => console.error('Failed to load catalog:', err))
      .finally(() => setLoading(false));
  }, []);

  const styles = {
    image: {
      height: '300px',
      objectFit: 'cover',
      borderRadius: '10px',
      transition: 'transform 0.6s ease-in-out',
    },
    item: {
      cursor: 'pointer',
    },
    captionTitle: {
      textShadow: '0 0 5px rgba(0,0,0,0.7)',
    }
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="light" />
      </div>
    );
  }

  if (!items.length) return null;

  return (
    <Carousel fade controls={false} indicators interval={6000} pause="hover">
      {items.map(item => (
        <Carousel.Item
          key={item.id}
          onClick={() => navigate(`/catalog/${item.id}`)}
          style={styles.item}
        >
          <img
            src={item.image}
            alt={item.name}
            className="d-block w-100"
            style={styles.image}
            onError={(e) => { e.target.src = '/fallback.jpg'; }} // Optional fallback image
          />
          <Carousel.Caption>
            <h5 className="text-light" style={styles.captionTitle}>
              {item.name.length > 30 ? item.name.slice(0, 27) + '…' : item.name}
            </h5>
            <p className="text-info">${item.price.toFixed(2)}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
