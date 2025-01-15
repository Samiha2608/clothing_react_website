import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { selectHome } from '../features/homeSlice';

const HomePage = () => {
  const { title, description, bestSellers } = useSelector(selectHome);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Update itemsPerPage based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4); // Large screens
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(3); // Medium screens
      } else {
        setItemsPerPage(1); // Small screens
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < bestSellers.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className="bg-[#F5F3DB] min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 bg-[#EFE8C2]">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 sm:px-12">
            <div>
              <h2 className="text-4xl font-bold text-[#585B42] mb-4">{title}</h2>
              <p className="text-lg mb-6">{description}</p>
              <button className="bg-[#585B42] text-white py-3 px-6 rounded-md">
                Explore Now
              </button>
            </div>
            <img
              src="/clothing images/pic8.jpg"
              alt="Exclusive Offer"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </section>

        {/* Best Selling Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-6">Best Selling</h2>
          <p className="text-center mb-10">
            Get in on the trend with our curated selection of best-selling styles.
          </p>
          <div className="relative max-w-screen-xl mx-auto px-6">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#585B42] text-white w-10 h-10 rounded-full flex items-center justify-center ${
                currentIndex === 0
                  ? 'opacity-50 cursor-not-allowed'
                  : 'opacity-100'
              }`}
              disabled={currentIndex === 0}
            >
              &lt;
            </button>

            {/* Product Grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${itemsPerPage} gap-6`}>
              {bestSellers
                .slice(currentIndex, currentIndex + itemsPerPage)
                .map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 sm:h-48 md:h-56 object-cover"
                      />
                    </Link>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#585B42]">
                        {item.name}
                      </h3>
                      <p className="text-[#585B42] font-semibold">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#585B42] text-white w-10 h-10 rounded-full flex items-center justify-center ${
                currentIndex + itemsPerPage >= bestSellers.length
                  ? 'opacity-50 cursor-not-allowed'
                  : 'opacity-100'
              }`}
              disabled={currentIndex + itemsPerPage >= bestSellers.length}
            >
              &gt;
            </button>
          </div>
        </section>

        {/* Exclusive Offer Section */}
        <section className="py-12 bg-[#EFE8C2]">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 sm:px-12">
            <img
              src="/clothing images/pic9.jpg"
              alt="Exclusive Offer"
              className="w-full rounded-lg object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold text-[#585B42] mb-4">
                Exclusive Offer
              </h2>
              <p className="text-lg mb-6">
                Unlock the unlimited style upgrade with our exclusive offer.
                Enjoy savings of up to 40% off on your latest New Arrivals.
              </p>
              <button className="bg-[#585B42] text-white py-3 px-6 rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
