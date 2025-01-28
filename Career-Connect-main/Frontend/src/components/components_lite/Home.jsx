import React, { useRef } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Categories from './Categories';
import LatestJobs from './LatestJobs';
import Footer from './Footer';
import Download from './Download';
import VariableProximity from './VariableProximity';
import Faq from './Faq';
import Contact from './Contact';
import TopRecriters from './TopRecriters';

const Home = () => {
  // Define a containerRef for VariableProximity
  const containerRef = useRef(null);

  return (
    <div>
      <Navbar />
      <Header />
      <Categories />
      <LatestJobs />
      <TopRecriters/>
      <Download />
      <Faq/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default Home;
