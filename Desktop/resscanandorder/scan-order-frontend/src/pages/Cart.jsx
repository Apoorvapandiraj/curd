import React, { useEffect, useState } from 'react';
import { getCart, removeFromCart, clearCart } from '../utils/cart';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const tableId = localStorage.getItem('tableId');

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const handleRemove = (index) => {
    removeFromCart(index);
    setCartItems(getCart());
  };

  const handlePlaceOrder = () => {
    alert('Order placed! (Backend will be connected later)');
    clearCart();
    setCartItems([]);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="p-6 min-h-screen bg-black text-gold">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <p className="mb-6 text-lg">Table ID: <span className="underline">{tableId}</span></p>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Go back to the menu!</p>
      ) : (
        <>
          <div className="grid gap-4 mb-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="border border-gold p-4 rounded-lg flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-400">₹{item.price}</p>
                </div>
                <button
                  onClick={() => handleRemove(index)}
                  className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:scale-105 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-4">Total: ₹{total}</h2>

          <button
            onClick={handlePlaceOrder}
            className="bg-gold text-black px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Place Order
          </button>
        </>
      )}
    </section>
  );
};

export default Cart;