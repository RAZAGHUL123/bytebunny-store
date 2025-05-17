// src/components/ItemCard.jsx
import { Link } from 'react-router-dom';

function ItemCard({ item, onAddToCart }) {
  return (
    <div className="card bg-dark text-light border border-danger h-100 shadow-sm">
      <div className="image-wrapper">
        <img
          src={item.image}
          alt={item.name}
          className="product-image"
        />
      </div>

      <div className="card-body d-flex flex-column">
        <Link to={`/catalog/${item.id}`} className="text-decoration-none">
          <h5 className="card-title text-danger">{item.name}</h5>
        </Link>

        <p className="card-text small text-muted">{item.description.slice(0, 80)}...</p>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="text-success">${item.price.toFixed(2)}</span>
          <button
            className="btn btn-sm btn-demonic"
            onClick={() => onAddToCart(item)}
          >
            🛒 Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
