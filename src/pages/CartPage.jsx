// src/pages/CartPage.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../features/cartSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrease = (id) => dispatch(increaseQuantity(id));
  const handleDecrease = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(id));
    }
  };
  const handleRemove = (id) => dispatch(removeFromCart(id));
  const handleCheckout = () => {
    // Implement checkout logic here
    navigate('/checkout'); // Navigate to checkout page
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex-1 py-8 px-4 md:px-8 lg:px-12">
        <main className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">Your Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-gray-600 text-lg">Your cart is empty</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <img 
                      src={item.image || 'path/to/fallback-image.jpg'} 
                      alt={item.name} 
                      className="w-24 h-24 object-cover rounded-lg border border-gray-300" 
                    />
                    <div className="ml-6">
                      <h2 className="text-xl font-bold text-gray-900">{item.name}</h2>
                      <p className="text-lg text-gray-700 mt-1">Price: ${item.price}</p>
                      <div className="flex items-center mt-2">
                        <button onClick={() => handleDecrease(item.id)} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                          <FaMinus />
                        </button>
                        <span className="mx-3 text-lg text-gray-900">{item.quantity}</span>
                        <button onClick={() => handleIncrease(item.id)} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => handleRemove(item.id)} className="text-red-600 hover:text-red-800 focus:outline-none">
                    <FaTrash />
                  </button>
                </div>
              ))}
              <div className="flex justify-end mt-6">
                <button 
                  onClick={handleCheckout} 
                  className="bg-yellow-400 text-black py-2 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition-colors focus:outline-none"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
