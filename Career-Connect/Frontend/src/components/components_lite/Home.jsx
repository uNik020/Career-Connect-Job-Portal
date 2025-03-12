import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import Header from "./Header";
import Categories from "./Categories";
import LatestJobs from "./LatestJobs";
import TestimonialSection from "./TestiMonials";
import Download from "./Download";
import TopRecriters from "./TopRecriters";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "Recruiter") {
      navigate("/admin/companies");
    }
  }, [user, navigate]);

  // **🔥 Staggered Scroll Animation Variants**
  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const fadeSlideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Header />

      {/* **🔥 Scroll Animations with Staggered & Slide Effects** */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Categories />
      </motion.div>

      <motion.div
        variants={fadeSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <LatestJobs />
      </motion.div>

      <motion.div
        variants={fadeSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <TestimonialSection />
      </motion.div>

      <motion.div
        variants={fadeSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Download />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <TopRecriters />
      </motion.div>

      <motion.div
        variants={fadeSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Faq />
      </motion.div>

      <motion.div
        variants={fadeSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Contact />
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;