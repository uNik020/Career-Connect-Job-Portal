import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Navbar from './Navbar';

const TermsOfService = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulated loading delay
  }, []);

  return (
    <div>
      <Navbar/>
       <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <motion.div
            className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-between mb-8"
          >
            <Link
              to="/"
              className="text-purple-600 hover:text-purple-800 text-sm font-medium transition duration-150"
            >
              ← Return to JobPortal
            </Link>
            <span className="text-sm text-gray-500">Last Updated: July 15, 2024</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-12 text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
              <div className="mt-2 w-16 h-1 bg-purple-600 mx-auto rounded-full" />
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Welcome to JobPortal! These terms outline the rules and regulations for using our platform.
              By accessing or using our services, you agree to comply with these terms.
            </p>
          </motion.div>

          {/* Horizontal Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12 overflow-x-auto scrollbar-hide"
          >
            <nav className="flex space-x-6 pb-4">
              {['Eligibility', 'Accounts', 'Content'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap px-4 py-2 bg-white rounded-lg shadow-sm text-gray-600 hover:text-purple-600 hover:shadow-md transition-all"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-10">
            {[
              {
                id: "eligibility",
                title: "1. Eligibility Requirements",
                content: (
                  <>
                    <p className="mb-4">To use JobPortal, you must:</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-purple-50 p-6 rounded-xl"
                      >
                        <h3 className="font-semibold text-purple-800 mb-2">Job Seekers</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                          <li>Be at least 18 years old</li>
                          <li>Provide accurate professional information</li>
                          <li>Have legal right to work in target country</li>
                        </ul>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-purple-50 p-6 rounded-xl"
                      >
                        <h3 className="font-semibold text-purple-800 mb-2">Employers</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                          <li>Be authorized company representative</li>
                          <li>Provide valid business documentation</li>
                          <li>Comply with employment laws</li>
                        </ul>
                      </motion.div>
                    </div>
                  </>
                ),
              },
              {
                id: "accounts",
                title: "2. Account Management",
                content: (
                  <ul className="list-decimal pl-6 space-y-4 text-gray-600">
                    <li>
                      <span className="font-semibold">Account Security:</span> You are responsible for maintaining the confidentiality of your login credentials
                    </li>
                    <li>
                      <span className="font-semibold">Accuracy:</span> Must provide current and complete profile information
                    </li>
                    <li>
                      <span className="font-semibold">Notification:</span> Immediately inform us of any unauthorized account use
                    </li>
                  </ul>
                ),
              },
              {
                id: "content",
                title: "3. User Content",
                content: (
                  <div className="space-y-4">
                    <p>You retain ownership of content you post, but grant us:</p>
                    <motion.div
                      className="grid md:grid-cols-3 gap-4 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      {['Worldwide', 'Non-exclusive', 'Royalty-free'].map((term) => (
                        <div key={term} className="bg-white p-4 rounded-xl border border-purple-100">
                          <span className="text-purple-600 font-semibold">{term}</span>
                          <span className="block text-sm text-gray-500 mt-1">License</span>
                        </div>
                      ))}
                    </motion.div>
                    <p className="text-gray-500 text-sm mt-4">
                      Prohibited content includes illegal, discriminatory, or misleading information
                    </p>
                  </div>
                ),
              }
            ].map((section) => (
              <Section key={section.id} id={section.id} title={section.title} content={section.content} />
            ))}
          </div>
        </motion.div>
      )}
    </div>
    <Footer/>
    </div>
  );
};

const Section = ({ id, title, content }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="scroll-mt-20 bg-white rounded-2xl shadow-md p-8"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">{title}</h2>
      <div className="text-gray-600 leading-relaxed">{content}</div>
    </motion.section>
  );
  
};

export default TermsOfService;