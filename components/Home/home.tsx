import React from 'react'
import Hero from './Hero/Hero';
import About from './About/About';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default home;
