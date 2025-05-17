// src/components/Product.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Product({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch('/catalog.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(product => product.id === parseInt(id));
        if (found) {
          setItem(found);
        } else {
          navigate('/catalog');
        }
      });
  }, [id, navigate]);

  if (!item) return <p className="text-white text-center py-5">Loading item...</p>;

  return (
    <section className="container product-page text-light py-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={item.image}
            alt={item.name}
            className="product-image"
/>

        </div>
        <div className="col-md-6">
          <h2 className="product-title">{item.name}</h2>
          <h4 className="text-success">${item.price.toFixed(2)}</h4>

          <p className="product-description">{item.description}</p>

          <div className="product-disclosure mt-4">
            <h5>⚠️ Disclosure</h5>
            <p>{item.disclosure}</p>
          </div>

          <button
            className="btn btn-demonic-cta mt-4 me-3"
            onClick={() => onAddToCart(item)}
          >
            🛒 Add to Cart
          </button>

          <button
            className="btn btn-outline-secondary mt-4"
            onClick={() => navigate('/cart')}
          >
            View Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default Product;
