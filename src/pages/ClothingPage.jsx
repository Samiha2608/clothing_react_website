import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectClothing } from '../features/clothingSlice'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

const ClothingPage = () => {
  const { clothingItems } = useSelector(selectClothing);
  const [filters, setFilters] = useState({
    priceRange: [120, 300],
    categories: [],
    brands: [],
    sizes: [],
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFilterVisible, setIsFilterVisible] = useState(false); // State to manage filter visibility

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev };
      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter(item => item !== value);
      } else {
        updatedFilters[filterType].push(value);
      }
      return updatedFilters;
    });
  };

  const filteredItems = clothingItems.filter(item => {
    const withinPriceRange = item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(item.filter);
    const matchesBrand = filters.brands.length === 0 || filters.brands.includes(item.brand);
    const matchesSize = filters.sizes.length === 0 || filters.sizes.includes(item.size);
    
    return withinPriceRange && matchesCategory && matchesBrand && matchesSize;
  });

  const handleNext = () => {
    if (currentIndex + 1 < filteredItems.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-[#F5F3DB] min-h-screen flex flex-col">
      <Header />

      {/* Horizontal Section */}
      <section className="bg-[#6F6A42] py-4">
        <h2 className="text-2xl text-left text-white px-10">Ladies Top</h2>
        <p className="text-left text-white mt-2 px-10">
          Slash Sales begins in August. Get up to 80% Discount on all products <Link to="/read-more" className="underline">Read More</Link>
        </p>
      </section>

      {/* Filter and Products Section */}
      <main className="flex-grow py-10 max-w-screen-xl mx-auto flex flex-col md:flex-row">
        {/* Left Side: Filter Options */}
        <div className={`w-full md:w-1/4 bg-white rounded-lg shadow-lg p-4 mb-4 md:mb-0 ${isFilterVisible ? 'block' : 'hidden'}`}>
          <h4 className="text-lg font-bold mb-4">Total Products: {filteredItems.length}</h4>

          {/* Price Filter */}
          <h3 className="text-lg font-bold mb-4">Price</h3>
          <div className="mb-4">
            <p className="text-sm">Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}</p>
            <input 
              type="range" 
              min="120" 
              max="300" 
              step="10" 
              value={filters.priceRange[0]} 
              onChange={(e) => setFilters(prev => ({ ...prev, priceRange: [Number(e.target.value), prev.priceRange[1]] }))}
              className="w-full" 
            />
            <input 
              type="range" 
              min="120" 
              max="300" 
              step="10" 
              value={filters.priceRange[1]} 
              onChange={(e) => setFilters(prev => ({ ...prev, priceRange: [prev.priceRange[0], Number(e.target.value)] }))}
              className="w-full" 
            />
          </div>

          {/* Filter Heading */}
          <h4 className="font-semibold mb-2">Filter By</h4>
          <ul className="mb-4">
            <li><label><input type="checkbox" onChange={() => handleFilterChange('categories', 'Women')} /> Women</label></li>
            <li><label><input type="checkbox" onChange={() => handleFilterChange('categories', 'Men')} /> Men</label></li>
            <li><label><input type="checkbox" onChange={() => handleFilterChange('categories', 'Girls')} /> Girls</label></li>
            <li><label><input type="checkbox" onChange={() => handleFilterChange('categories', 'Babies')} /> Babies</label></li>
          </ul>

          {/* Brands Filter */}
          <h4 className="font-semibold mb-2">Brands</h4>
          <ul className="mb-4">
            <li><label><input type="checkbox" onChange={() => handleFilterChange('brands', 'Gucci')} /> Gucci</label></li>
            <li><label><input type="checkbox" onChange={() => handleFilterChange('brands', 'Zara')} /> Zara</label></li>
          </ul>

          {/* Size Filter */}
          <h4 className="font-semibold mb-2">Size</h4>
          <ul>
            <li><label><input type="checkbox" onChange={() => handleFilterChange('sizes', 'Large')} /> Large</label></li>
            <li><label><input type="checkbox" onChange={() => handleFilterChange('sizes', 'Medium')} /> Medium</label></li>
          </ul>
        </div>

        {/* Toggle Button for Filters */}
        <button 
          onClick={() => setIsFilterVisible(prev => !prev)} 
          className="md:hidden bg-[#6F6A42] text-white py-2 px-4 rounded-md mb-4 self-start mx-auto"
        >
          {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
        </button>

        {/* Right Side: Products Display */}
        <div className="w-full md:w-3/4">
          <h2 className="text-2xl font-bold text-center mb-4">Clothing Collection</h2>
          <div className="min-h-[300px]">
            {filteredItems.length === 0 ? (
              <p className="text-center text-lg">No items match your filters.</p>
            ) : (
              <div className="relative">
                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#585B42] text-white w-10 h-10 rounded-full flex items-center justify-center ${
                    currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                  }`}
                  disabled={currentIndex === 0}
                >
                  &lt;
                </button>

                {/* Product Grid */}
                <div className="flex justify-center">
                  <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                    {filteredItems.slice(currentIndex, currentIndex + 1).map((item) => (
                      <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full" />
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-[#585B42]">{item.name}</h3>
                          <Link to={`/product/${item.id}`}>
                            <button className="bg-[#585B42] text-white py-2 px-4 rounded-md mt-2">View Details</button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#585B42] text-white w-10 h-10 rounded-full flex items-center justify-center ${
                    currentIndex + 1 >= filteredItems.length ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                  }`}
                  disabled={currentIndex + 1 >= filteredItems.length}
                >
                  &gt;
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ClothingPage;
