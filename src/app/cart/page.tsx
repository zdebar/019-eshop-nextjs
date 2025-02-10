'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Cart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Product 1", price: 100, quantity: 1 },
    { id: 2, name: "Product 2", price: 150, quantity: 2 },
  ]);

  const handleRemove = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: number, change: number) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <p>{item.name}</p>
                  <p>${item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-semibold">Total: ${calculateTotal()}</p>
            <Link href="/checkout" className="px-4 py-2 bg-blue-500 text-white rounded">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
}
