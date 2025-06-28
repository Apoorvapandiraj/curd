import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-gold px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">Royal Dine</Link>
      <div className="space-x-4">
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;