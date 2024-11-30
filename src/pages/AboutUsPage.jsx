// src/pages/AboutUsPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUsPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">

        <section className="py-10 bg-white flex items-center justify-center">
  <div className="max-w-screen-xl mx-auto flex items-center bg-white p-10 rounded-lg shadow-lg">
 
    <div className="ml-10 flex flex-col items-start">
      <h2 className="text-3xl font-bold text-[#585B42] mb-4">About Us</h2>
      <p className="mb-4">Welcome to Logo – your ultimate destination for 
cool and trendy fashion! At Logo, we are 
dedicated to providing the latest styles that 
resonate with the vibrant and dynamic spirit of 
today's youth. Our collection is carefully curated 
to ensure that every piece embodies the 
cutting-edge trends and timeless coolness that 
define your unique style.</p>

    
    </div>
    <img src="/clothing images/pic8.jpg" alt="Exclusive Offer" className="w-1/2 rounded-lg" />
  </div>
</section>
<section className="py-10 bg-white flex items-center justify-center">
  <div className="max-w-screen-xl mx-auto flex flex-col items-center bg-[#EFE8C2] p-10 rounded-lg shadow-lg">
    
    {/* Centered Mission Heading */}
    <h3 className="text-2xl font-bold text-[#585B42] mb-4">Our Mission</h3>

    <div className="flex items-center w-full">
      {/* Left Side for Text */}
      
      {/* Right Side for Image */}
      <img src="/clothing images/pic7.jpg" alt="Exclusive Offer" className="w-1/2 rounded-lg" />
      <div className="ml-10 flex flex-col items-start w-1/2">
       
        <p className="mb-4">
        Our mission is simple: to inspire and empower youngsters to express 
themselves through fashion. Whether you're looking for the perfect outfit for a 
night out, a casual day at school, or anything in between, Logo has you 
covered. We believe in fashion as a form of self-expression, and our diverse 
range of clothing is designed to cater to every mood and moment.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="py-10 bg-white flex flex-col items-center">
  <h2 className="text-3xl font-bold text-[#585B42] mb-8">Our Team</h2>
  <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {/* Team Member 1 */}
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img src="/clothing images/pic1.jpg" alt="Team Member 1" className="w-full h-40 object-cover rounded-lg mb-4" />

    </div>

    {/* Team Member 2 */}
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img src="/clothing images/pic3.jpg" alt="Team Member 2" className="w-full h-40 object-cover rounded-lg mb-4" />
  
    </div>

    {/* Team Member 3 */}
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img src="/clothing images/pic1.jpg" alt="Team Member 3" className="w-full h-40 object-cover rounded-lg mb-4" />
  
    </div>

    {/* Team Member 4 */}
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img src="/clothing images/pic3.jpg" alt="Team Member 4" className="w-full h-40 object-cover rounded-lg mb-4" />
     
    </div>
  </div>
</section>
<section className="bg-[#6F6A42] py-4 mx-4 md:mx-10 lg:mx-20 flex items-center justify-between px-2">
  <div className="max-w-screen-xl mx-auto flex justify-between w-full">
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-1">Stay in the Loop</h2>
      <p>Subscribe to receive the latest news and updates about TDA.</p>
      <p>We promise not to spam you!</p>
    </div>
    
    <div className="flex items-center">
      <input 
        type="email" 
        placeholder="Enter your email address" 
        className="bg-white text-[#6F6A42] border border-[#6F6A42] rounded-l-md py-2 px-4 focus:outline-none"
      />
      <button 
        className="bg-white text-[#6F6A42] py-2 px-4 rounded-r-md hover:bg-[#EFE8C2] transition-colors focus:outline-none"
      >
        Continue
      </button>
    </div>
  </div>
</section>



        </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
