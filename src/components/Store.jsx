// src/components/Store.jsx
import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';

function Store({ onAddToCart }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/catalog.json')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error('Error loading catalog:', err));
  }, []);

  return (
    <section className="container py-5">
      <h2 className="text-center text-danger mb-4">🛒 Cursed Catalog</h2>
      <div className="row g-4">
        {items.map((item) => (
          <div className="col-md-4" key={item.id}>
            <ItemCard item={item} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Store;
