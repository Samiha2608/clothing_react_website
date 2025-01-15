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

  // Handler to update filters
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

  // Filter clothing items based on selected filters
  const filteredItems = clothingItems.filter(item => {
    const withinPriceRange = item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(item.filter);
    const matchesBrand = filters.brands.length === 0 || filters.brands.includes(item.brand);
    const matchesSize = filters.sizes.length === 0 || filters.sizes.includes(item.size);
    
    return withinPriceRange && matchesCategory && matchesBrand && matchesSize;
  });

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
      <main className="flex-grow py-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-6">
  {/* Left Side: Filter Options */}
  <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-lg p-4">
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

    {/* Other Filters */}
    <h4 className="font-semibold mb-2">Filter By</h4>
    <ul className="mb-4">
      <li><label><input type="checkbox" onChange={() => handleFilterChange('categories', 'Women')} /> Women</label></li>
      <li><label><input type="checkbox" onChange={() => handleFilterChange('categories', 'Men')} /> Men</label></li>
      <li><label><input type="checkbox" onChange={() => handleFilterChange('categories', 'Girls')} /> Girls</label></li>
      <li><label><input type="checkbox" onChange={() => handleFilterChange('categories', 'Babies')} /> Babies</label></li>
    </ul>
  </div>

  {/* Right Side: Products Display */}
  <div className="w-full lg:w-3/4">
    <h2 className="text-2xl font-bold text-center mb-4">Clothing Collection</h2>
    <div className="min-h-[300px]">
      {filteredItems.length === 0 ? (
        <p className="text-center text-lg">No items match your filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#585B42]">{item.name}</h3>
                <Link to={`/product/${item.id}`}>
                  <button className="bg-[#585B42] text-white py-2 px-4 rounded-md mt-2">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
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
