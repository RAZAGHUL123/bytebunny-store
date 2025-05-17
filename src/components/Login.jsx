import { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'bytebunny') {
      localStorage.setItem('auth', JSON.stringify({ username }));
      onLogin(username);
    } else {
      alert('Denied. The demons don’t recognize your soul.');
    }
  };

  return (
    <section id="login" className="bg-black text-red-600 py-16">
      <form
        onSubmit={handleLogin}
        className="max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow-md border border-red-800"
      >
        <h2 className="text-2xl mb-4 font-bold">Demonic Access Panel</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-2 bg-black border border-red-500 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 bg-black border border-red-500 text-white"
        />
        <button
          type="submit"
          className="w-full bg-red-700 hover:bg-red-900 text-white py-2 rounded"
        >
          🔐 Unlock
        </button>
      </form>
    </section>
  );
}

export default Login;
