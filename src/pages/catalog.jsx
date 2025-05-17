// src/pages/Catalog.jsx
import ItemCard from '../components/ItemCard';
import { useEffect, useState } from 'react';

export default function Catalog() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/catalog.json')
      .then(res => res.json())
      .then(setItems);
  }, []);

  return (
    <div className="container py-4">
      <h2 className="text-center text-danger mb-4">The Relic Catalog</h2>
      <div className="row g-4">
        {items.map(item => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
            <ItemCard item={item} onAddToCart={() => {}} />
          </div>
        ))}
      </div>
    </div>
  );
}