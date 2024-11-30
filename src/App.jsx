import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ClothingPage from './pages/ClothingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactUsPage from './pages/ContactUsPage'; // Import Contact Us page
import AboutUsPage from './pages/AboutUsPage'; // Import About Us page
import { Provider } from 'react-redux';
import store from './features/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/clothing" element={<ClothingPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<ContactUsPage />} /> {/* Add this line */}
          <Route path="/about" element={<AboutUsPage />} /> {/* Add this line */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
