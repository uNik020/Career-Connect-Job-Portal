import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-700 py-6">
      <footer className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="logo.png" alt="Career Connect Logo" className="h-8 w-8" />
            <span className="ml-2 text-lg font-bold text-white">Career Connect</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" target="_blank" className="text-white hover:text-gray-300 transition duration-300">
              <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a href="#" target="_blank" className="text-white hover:text-gray-300 transition duration-300">
              <i className="fa-brands fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#" target="_blank" className="text-white hover:text-gray-300 transition duration-300">
              <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a href="#" target="_blank" className="text-white hover:text-gray-300 transition duration-300">
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition duration-300">About Us</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition duration-300">Contact Us</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition duration-300">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="mt-2">
              <li>
                <Link to="/PrivacyPolicy" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/Tos" className="text-gray-300 hover:text-white transition duration-300">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Career Connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;