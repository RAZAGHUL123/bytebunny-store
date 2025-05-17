function Cart({ cartItems, onRemove, user }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="container py-5 text-white">
      <h2 className="mb-4 text-danger">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-muted">The cart is empty… for now.</p>
      ) : (
        <ul className="list-group mb-4">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white border border-danger"
            >
              <div>
                <h5>{item.name}</h5>
                <p className="mb-1 text-muted">${item.price.toFixed(2)}</p>
              </div>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => onRemove(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <h4>Total: <span className="text-success">${total.toFixed(2)}</span></h4>

      <div className="mt-4">
        {user ? (
          <button className="btn btn-demonic">Proceed to Checkout</button>
        ) : (
          <>
            <p className="text-warning">You are not signed in.</p>
            <a href="/login" className="btn btn-outline-warning me-2">Sign In</a>
            <button className="btn btn-demonic">Continue as Guest</button>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
