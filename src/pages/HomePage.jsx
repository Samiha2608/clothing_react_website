import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { selectHome } from '../features/homeSlice';

const HomePage = () => {
  const { title, description, bestSellers } = useSelector(selectHome);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const [selectedCategory, setSelectedCategory] = useState('sale');

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

  // Filter products based on the selected category
  const filteredProducts = bestSellers.filter(item => item.category.toLowerCase() === selectedCategory);

  return (
    <div className="bg-[#F5F3DB] min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-10 bg-[#F5F3DB] flex items-center justify-center">
          <div className="max-w-screen-xl mx-auto flex items-center bg-[#EFE8C2] p-10 rounded-lg shadow-lg">
            <div className="ml-10">
              <h2 className="text-3xl font-bold text-[#585B42] mb-4">{title}</h2>
              <p>{description}</p>
              <button className="bg-[#585B42] text-white py-2 px-4 rounded-md mt-4">Explore Now</button>
            </div>
            <img src="/clothing images/pic8.jpg" alt="Exclusive Offer" className="w-1/2 rounded-lg" />
          </div>
        </section>

        {/* Best Selling Section */}
        <section className="py-10">
          <h2 className="text-2xl font-bold text-center mb-4">Best Selling</h2>
          <p className="text-center mb-4">Get in on the trend with our curated selection of best-selling style</p>
          <div className="flex items-center justify-center">
            <button 
              onClick={handlePrev} 
              className={`bg-[#585B42] text-white py-2 px-4 rounded-md mr-4 transition-opacity duration-300 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
              disabled={currentIndex === 0} // Disable if at the start
            >
              &lt; {/* Left arrow */}
            </button>

            <div className="transition-transform duration-300 ease-in-out">
              <div className="grid grid-cols-4 gap-4 max-w-screen-xl mx-auto">
                {bestSellers.slice(currentIndex, currentIndex + itemsPerPage).map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Link to={`/product/${item.id}`}>
                      <img src={item.image} alt={item.name} className="w-full cursor-pointer" />
                    </Link>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#585B42]">{item.name}</h3>
                      <p className="text-[#585B42] font-semibold">${item.price}</p> {/* Display product price */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={handleNext} 
              className={`bg-[#585B42] text-white py-2 px-4 rounded-md ml-4 transition-opacity duration-300 ${currentIndex + itemsPerPage >= bestSellers.length ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
              disabled={currentIndex + itemsPerPage >= bestSellers.length} // Disable if at the end
            >
              &gt; {/* Right arrow */}
            </button>
          </div>

          {/* See More Button */}
          <div className="flex justify-center mt-6">
            <Link to="/all-products">
              <button className="border border-black text-black py-2 px-4 rounded-md bg-transparent hover:bg-black hover:text-white transition-colors duration-300">
                See More
              </button>
            </Link>
          </div>

          {/* Repeated Best Selling Heading and Tabs */}
          <h2 className="text-2xl font-bold text-center mt-10 mb-4">Best Selling</h2>
          <div className="flex justify-center space-x-10 mt-2 my-6">
            {['sale', 'hot', 'new arrival', 'accessories'].map(category => (
              <Link to="#" key={category} onClick={() => { setSelectedCategory(category); setCurrentIndex(0); }}>
                <span className={`text-black border-b-2 border-transparent hover:border-black cursor-pointer ${selectedCategory === category ? 'border-black' : ''}`}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </Link>
            ))}
          </div>

          {/* Display filtered products based on the selected category */}
          <div className="transition-transform duration-300 ease-in-out">
            <div className="grid grid-cols-4 gap-4 max-w-screen-xl mx-auto">
              {filteredProducts.slice(currentIndex, currentIndex + itemsPerPage).map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.name} className="w-full cursor-pointer" />
                  </Link>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#585B42]">{item.name}</h3>
                    <p className="text-[#585B42] font-semibold">${item.price}</p> {/* Display product price */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exclusive Offer Section */}
        <section className="py-10 bg-[#F5F3DB] flex items-center justify-center">
          <div className="max-w-screen-xl mx-auto flex items-center bg-[#F5F3DB] p-10 rounded-lg shadow-lg">
            <img src="clothing images/pic9.jpg" alt="Exclusive Offer" className="w-1/2 rounded-lg"/>
            <div className="ml-10">
              <h2 className="text-3xl font-bold text-[#585B42] mb-4">Exclusive Offer</h2>
              <p className="text-[#585B42] mb-6">
                Unlock the unlimited style upgrade with our exclusive offer. Enjoy savings of up to 40% off on your latest New Arrivals.
              </p>
              <div className="flex space-x-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#585B42]">05</div>
                  <div className="text-sm text-[#585B42]">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#585B42]">17</div>
                  <div className="text-sm text-[#585B42]">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#585B42]">20</div>
                  <div className="text-sm text-[#585B42]">Min</div>
                </div>
              </div>
              <button className="bg-[#585B42] text-white py-2 px-6 rounded-md">Shop Now</button>
            </div>
          </div>
        </section>

        {/* Cool & Trendy Clothes Section */}
        <section className="py-10">
          <h2 className="text-2xl font-bold text-center mb-4">Cool & Trendy Clothes For You</h2>
          <p className="text-center mb-4">Lorem ipsum dolor sit amet consectetur.</p>
          <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto">
            {[1, 2, 3].map(index => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={`/clothing images/pic${index + 3}.jpg`} alt={`Accessories ${index}`} className="w-full h-96 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#585B42]">Accessories</h3>
                  <p className="text-[#585B42]">Lorem ipsum dolor sit amet consectetur. Mi enim a curabitur odio risus donec quis donec vel.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

{/* Clients Feedback Section */}
<section className="py-10">
  <h2 className="text-2xl font-bold text-center mb-4">Clients Feedback</h2>
  <p className="text-center mb-4">What our clients say about us!</p>
  <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto">
    {[
      {
        feedback: "The customer experience was exceptional from start to finish. The website is user friendly, the checkout process was smooth and the clothes I ordered fit perfectly. I’m beyond satisfied!",
        name: "Maria Shabbir",
      },
      {
        feedback: "I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended!",
        name: "Beenish Mumtaz",
      },
      {
        feedback: "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!",
        name: "Ayra Khan",
      },
    ].map((item, index) => (
      <div 
        key={index} 
        className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:bg-[#EFE8C2] hover:scale-105"
      >
        <div className="p-4">
          <p className="font-bold text-[#585B42]">{item.name}</p>
          <p className="text-gray-600 italic mt-2">"{item.feedback}"</p>
        </div>
      </div>
    ))}
  </div>
</section>


      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
