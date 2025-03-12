import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Rocket, ShieldCheck, Users, Mail, MapPin } from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  return (
   <div>
    <Navbar/>
     <motion.div initial="hidden" animate="visible" className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 relative pb-8">
            About CareerConnect
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#512b95] rounded-full"></div>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming the way professionals connect with opportunities worldwide
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div variants={fadeInUp} className="bg-gradient-to-r from-[#512b95] to-[#2b5295] text-white rounded-2xl p-8 mb-16 shadow-xl">
          <div className="max-w-3xl mx-auto">
            <Briefcase className="h-12 w-12 mb-6" />
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              To create a seamless ecosystem where talent meets opportunity through innovative technology and human-centric design.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[{ icon: Rocket, title: "Innovation Driven", text: "Pioneering AI-powered solutions for smarter career matches" },
            { icon: ShieldCheck, title: "Trust & Transparency", text: "Verified listings and secure data handling practices" },
            { icon: Users, title: "Community Focus", text: "Supporting career growth through learning resources" }]
            .map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <Icon className="h-8 w-8 mb-4 text-[#512b95]" />
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div variants={fadeInUp} className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/2">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team working"
              className="rounded-xl shadow-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2023, CareerConnect emerged from a vision to modernize the recruitment process.
            </p>
            <div className="flex gap-6">
              {[{ count: "50M+", label: "Monthly Connections" }, { count: "150+", label: "Countries Served" }].map((item, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-[#512b95] mb-2">{item.count}</div>
                  <div className="text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
    <Footer/>
   </div>
  );
};

export default About;