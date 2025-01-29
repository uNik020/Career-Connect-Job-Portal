import React from 'react';
import Navbar from './Navbar'; // Adjust the import path as necessary
import Footer from './Footer';

const TermsOfService = () => {
  return (
    <div className="terms-of-service">
      <Navbar /> {/* Include the Navbar component here */}

      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 id="terms-and-conditions" className="text-3xl font-semibold text-center mb-6">
          Terms and Conditions
        </h1>

        <section id="introduction" className="section mb-4">
          <h2 className="text-2xl font-bold mb-2">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to Career<span className="text-[#512b95]">Connect</span>. These Terms and Conditions govern your use of our website located at [XYZ].
          </p>
          <p className="text-gray-700">
            By accessing or using our website, you agree to comply with these terms.
          </p>
        </section>

        <section id="acceptance-of-terms" className="section mb-4">
          <h2 className="text-2xl font-bold mb-2">2. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By using our website, you confirm that you accept these Terms and Conditions and that you agree to comply with them.
          </p>
          <p className="text-gray-700">
            If you do not agree with any part of these terms, you must not use our website.
          </p>
        </section>

        <section id="changes-to-terms" className="section mb-4">
          <h2 className="text-2xl font-bold mb-2">3. Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to modify these Terms and Conditions at any time.
          </p>
          <p className="text-gray-700">
            Any changes will be effective immediately upon posting on this page.
          </p>
          <p className="text-gray-700">
            Your continued use of the website after any changes constitutes your acceptance of the new Terms and Conditions.
          </p>
        </section>

        <section id="user-responsibilities" className="section mb-4">
          <h2 className="text-2xl font-bold mb-2">4. User Responsibilities</h2>
          <p className="text-gray-700">
            You agree to use the website only for lawful purposes and in a way that does not infringe the rights of Career<span className="text-[#512b95]">Connect</span>, restrict, or inhibit anyone else's use and enjoyment of the website.
          </p>
        </section>

        <section id="intellectual-property" className="section mb-4">
          <h2 className="text-2xl font-bold mb-2">5. Intellectual Property</h2>
          <p className="text-gray-700">
            All content, trademarks, and other intellectual property on the website are owned by or licensed to [Your Website Name].
          </p>
          <p className="text-gray-700">
            You may not reproduce, distribute, or create derivative works from any content without our express written permission.
          </p>
        </section>

        <section id="limitation-of-liability" className="section mb-4">
          <h2 className="text-2xl font-bold mb-2">6. Limitation of Liability</h2>
          <p className="text-gray-700">
            To the fullest extent permitted by law, [Your Website Name] shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the website.
          </p>
        </section>

        <section id="governing-law" className="section mb-4">
          <h2 className="text-2xl font-bold mb-2">7. Governing Law</h2>
          <p className="text-gray-700">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction].
          </p>
          <p className="text-gray-700">
            Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].
          </p>
        </section>

        <section id="contact-information" className="section mb-4">
          <h2 className="text-2xl font-bold mb-2">8. Contact Information</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms and Conditions, please contact us at [Your Contact Information].
          </p>
        </section>
      </div>
      <Footer/>
    </div>
   
  );
};

export default TermsOfService;