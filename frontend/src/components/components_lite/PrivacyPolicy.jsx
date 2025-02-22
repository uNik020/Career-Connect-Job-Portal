import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function PrivacyPolicy() {
  return (
    <>
    <Navbar/>
    <div className="privacy-policy-container p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">Privacy Policy</h1>
      <p className="text-lg mb-4">
        At <strong>Career Connect</strong>, your privacy is of utmost importance to us. This privacy policy document outlines the types of personal information that is collected and how we use it.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
      <p className="text-lg mb-4">
        We collect personal information that you provide when using Career Connect, such as:
        <ul className="list-disc pl-8 mt-2">
          <li>Your name, email, and contact details</li>
          <li>Employment history, skills, and resume information</li>
          <li>Usage data for site functionality and improvement</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
      <p className="text-lg mb-4">
        Your personal information is used to:
        <ul className="list-disc pl-8 mt-2">
          <li>Provide and personalize job opportunities for you</li>
          <li>Improve and optimize the website experience</li>
          <li>Communicate with you about job listings and updates</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
      <p className="text-lg mb-4">
        We implement strong security measures to protect your personal data from unauthorized access, alteration, or disclosure. However, please note that no method of internet transmission is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
      <p className="text-lg mb-4">
        You have the right to access, update, or delete your personal information at any time. To make any changes to your account or for any questions, please contact us.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Changes to This Privacy Policy</h2>
      <p className="text-lg mb-4">
        We may update this privacy policy from time to time. Any changes will be reflected on this page with the updated date. Please review this policy periodically to stay informed.
      </p>

      <p className="text-lg mt-6">
        If you have any questions about this privacy policy, feel free to <a href="/contact" className="text-blue-600 underline">contact us</a>.
      </p>
    </div>
    <Footer/>
    </>
  );
}

export default PrivacyPolicy;
