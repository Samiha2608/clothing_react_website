import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#6F6A42] text-white p-4 mt-10">
      <div className="container mx-auto grid grid-cols-4 gap-4">
        <div>
          <h2>LOGO</h2>
          <h4 className="font-bold leading-8">Social Media</h4>
          <div className="flex space-x-4 mt-2">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Shop</h3>
          <ul className="leading-8">
            <li>Products Overview</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="leading-8">
            <li>About Us</li>
            <li>Contact</li>
            <li>Support</li>
            <li>News</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Stay Up to Date</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 bg-[#6F6A42] text-white border border-white"
            />
            <button className="p-2 bg-[#EFE8C2] text-black ml-2">Submit</button>
          </form>
        </div>
      </div>
      <hr className="border-t border-[#EFE8C2] my-4" />
      <div className="text-center">
        <a href="#" className="mx-2">Terms</a>
        <a href="#" className="mx-2">Privacy</a>
        <a href="#" className="mx-2">Cookies</a>
      </div>
    </footer>
  );
};

export default Footer;
