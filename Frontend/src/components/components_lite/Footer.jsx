import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="bg-[#6A38C2] text-white p-10">
        <footer className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div className="w-1/4">
              <img src="logo.png" alt="Career Connect Logo" className="h-10 w-10" />
            </div>
            <div className="w-1/4 text-right">
              <ul className="flex justify-end">
                <li className="mr-4">
                  <a href="#" target="_blank" className="text-white hover:text-gray-300">
                    <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" target="_blank" className="text-white hover:text-gray-300">
                    <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" target="_blank" className="text-white hover:text-gray-300">
                    <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="text-white hover:text-gray-300">
                    <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between mb-10">
            <div className="w-1/4">
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul>
                <li className="mb-2">
                  <a href="/" className="text-white hover:text-gray-300">Home</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">Contact Us</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="w-1/4">
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">Blog</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-300">Career Advice</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">Job Search Tips</a>
                </li>
              </ul>
            </div>
            <div className="w-1/4">
              <h4 className="text-lg font-bold mb-4">Support</h4>
              <ul>
                <li className="mb-2">
                  <Link className="text-white hover:text-gray-300" to="/PrivacyPolicy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p>&copy; Copyright 2025 Career Connect. All rights reserved</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
