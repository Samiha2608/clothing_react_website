import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectHome } from '../features/homeSlice';
import { selectClothing } from '../features/clothingSlice';
import { addToCart } from '../features/cartSlice'; // Import the addToCart action
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { bestSellers } = useSelector(selectHome);
  const { clothingItems } = useSelector(selectClothing);
  
  const product = [...bestSellers, ...clothingItems].find(item => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch addToCart with the product
  };

  // Get similar products based on category
  const similarProducts = [...bestSellers, ...clothingItems].filter(item => 
    item.id !== product.id && item.category === product.category
  ).slice(0, 4);

  return (
    <div className="bg-[#F5F3DB] min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10">
        <div className="max-w-screen-xl mx-auto flex items-start bg-white p-10 rounded-lg shadow-lg">
          <img src={product.image} alt={product.name} className="w-1/2 rounded-lg" />
          <div className="ml-10">
            <h2 className="text-3xl font-bold text-[#585B42] mb-4">{product.name}</h2>
            <p className="text-lg text-[#585B42]">Price: ${product.price}</p>
            <p className="text-lg text-[#585B42]">Brand: {product.brand}</p>
            <p className="text-lg text-[#585B42]">Category: {product.category}</p>
            <p className="text-lg text-[#585B42]">Available Size: {product.size}</p>
            
            {/* Size Chart */}
            <div className="mt-4">
              <h3 className="text-xl font-bold text-[#585B42]">Size Chart</h3>
              <select className="mt-2 p-2 border border-gray-400 rounded">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            {/* Color Chart */}
            <div className="mt-4">
              <h3 className="text-xl font-bold text-[#585B42]">Color Options</h3>
              <div className="flex space-x-4 mt-2">
                <div className="w-10 h-10 bg-red-500 rounded-full cursor-pointer" />
                <div className="w-10 h-10 bg-blue-500 rounded-full cursor-pointer" />
                <div className="w-10 h-10 bg-green-500 rounded-full cursor-pointer" />
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart} 
              className="mt-4 bg-yellow-400 text-black py-2 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition-colors focus:outline-none"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Similar Products */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#585B42] mb-4 px-6">Similar Products</h2>
          <div className="grid grid-cols-4 gap-4 px-6">
            {similarProducts.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded" />
                <h3 className="mt-2 text-lg font-bold">{item.name}</h3>
                <p className="text-lg">${item.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
