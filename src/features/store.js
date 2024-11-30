// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import clothingReducer from '../features/clothingSlice';
import homeReducer from '../features/homeSlice';
import cartReducer from '../features/cartSlice'; // Import the cart slice

const store = configureStore({
  reducer: {
    clothing: clothingReducer,
    home: homeReducer,
    cart: cartReducer, // Add the cart reducer here
  },
});

export default store;
