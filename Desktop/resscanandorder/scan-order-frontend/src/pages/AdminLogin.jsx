import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // MOCK AUTH (replace with API call later)
    if (email === 'admin@royaldine.com' && password === 'admin123') {
      localStorage.setItem('adminToken', 'mock-token');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-black text-gold px-4">
      <form
        onSubmit={handleLogin}
        className="bg-black border border-gold p-8 rounded-lg w-full max-w-md shadow-xl"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Login</h1>

        <label className="block mb-2">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 mb-4 rounded bg-black border border-gold text-gold"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 mb-6 rounded bg-black border border-gold text-gold"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-gold text-black py-2 rounded hover:scale-105 transition"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default AdminLogin;