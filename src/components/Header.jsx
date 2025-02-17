import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectCart } from '../features/cartSlice';

const Header = () => {
  const { items } = useSelector(selectCart);
  const totalItems = items.length;

  // State for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#F5F3DB] p-4 shadow-md flex justify-between items-center">
      <div className="text-2xl font-bold">Logo</div>
      
      {/* Mobile menu toggle button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '×' : '☰'}
      </button>

      {/* Navigation links */}
      <nav className={`md:flex ${menuOpen ? 'block' : 'hidden'} md:space-x-4`}>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/clothing">Store</Link></li>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li className="relative">
            <Link to="/cart" className="flex items-center">
              <FaShoppingCart className="text-xl" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
