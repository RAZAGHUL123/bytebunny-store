// src/App.jsx
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/LoginForm';
import Signup from './components/SignUp';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Store from './components/Store';
import ThankYou from './components/ThankYou';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import About from './components/About'; // ✅ ADDED THIS LINE

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('auth');
    return saved ? JSON.parse(saved) : null;
  });

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header cartItems={cartItems} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!user ? <Login onLogin={setUser} /> : <Navigate to="/dashboard" />} />
        <Route path="/signup" element={<Signup onSignup={setUser} />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/catalog" element={<Store onAddToCart={addToCart} />} />
        <Route path="/catalog/:id" element={<Product onAddToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onRemove={removeFromCart} user={user} />} />
        <Route path="/about" element={<About />} /> {/* ✅ ADDED THIS ROUTE */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
