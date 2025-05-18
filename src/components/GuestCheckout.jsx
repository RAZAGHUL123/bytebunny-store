import { useState } from 'react';

export default function GuestCheckout() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('guestCheckout', JSON.stringify(form));
    alert('Proceeding as guest');
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Guest Checkout</h2>
      <form onSubmit={handleSubmit} className="card p-4 mx-auto" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-teal">Confirm Guest Purchase</button>
      </form>
    </div>
  );
}