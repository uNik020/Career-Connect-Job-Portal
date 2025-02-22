import React, { useEffect, useRef } from 'react';
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
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // Define a containerRef for VariableProximity
  const containerRef = useRef(null);

  const {user} = useSelector((store)=>store.auth);
  const navigate = useNavigate();
  
  useEffect(()=>{
    if (user?.role === 'Recruiter') {
      navigate("/admin/companies");
    }
  })

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
