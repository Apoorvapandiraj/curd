import React from 'react';
import { addToCart } from '../utils/cart';

const MenuItem = ({ item }) => {
  const handleAdd = () => {
    addToCart(item);
    alert(`${item.name} added to cart`);
  };

  return (
    <div className="bg-black border border-gold rounded-xl p-4 shadow-lg">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-full h-40 object-cover rounded-lg mb-2"
      />
      <h3 className="text-xl font-bold">{item.name}</h3>
      <p className="text-sm text-gray-400">{item.description}</p>
      <p className="text-lg mt-2 mb-2">₹{item.price}</p>
      <button
        onClick={handleAdd}
        className="bg-gold text-black px-4 py-2 rounded hover:scale-105 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default MenuItem;