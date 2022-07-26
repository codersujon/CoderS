import React from 'react';
import Slider from '../components/Slider/Slider';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Portfolio from '../components/Portfolio/Portfolio';

const Pages = () => {
  return (
    <>
        <Slider />
        <About />
        <Services />
        <Portfolio />
    </>
  )
}

export default Pages