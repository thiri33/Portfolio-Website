import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import AboutContact from '../components/AboutContact';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="I'm a friendly Front-End Developer." />
      <AboutContact />
      <Footer />
    </div>
  );
};

export default About;
