import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-50 border-t border-gray-200 py-12">
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="sparelogo.png" 
                alt="Career Connect Logo" 
                className="h-10 w-10 transition-opacity hover:opacity-80"
              />
              <span className="ml-3 text-2xl font-bold text-gray-900">Career Connect</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Connecting talent with opportunity worldwide
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-4 md:mt-0">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="mt-4 md:mt-0">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/PrivacyPolicy" 
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/Tos" 
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mt-4 md:mt-0">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {['facebook-f', 'twitter', 'linkedin-in', 'instagram'].map((icon) => (
                <a 
                  key={icon}
                  href="#"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label={`Follow us on ${icon}`}
                >
                  <i className={`fa-brands fa-${icon} text-lg`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                Need help? <br/>
                <a href="mailto:support@careerconnect.com" className="text-blue-600 hover:underline">
                  support@careerconnect.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Career Connect. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/accessibility" className="text-sm text-gray-500 hover:text-blue-600">
              Accessibility
            </Link>
            <Link to="/sitemap" className="text-sm text-gray-500 hover:text-blue-600">
              Sitemap
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;