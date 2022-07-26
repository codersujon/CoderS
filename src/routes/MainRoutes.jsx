import React from 'react';
import Pages from '../pages/Pages';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Portfolio from '../components/Portfolio/Portfolio';
import { Routes, Route } from "react-router-dom";
const MainRoutes = () => {
  return (
    <>
        <Routes>
              <Route exact path="/" element={<Pages/>}/>
              <Route exact path="/home" element={<Pages/>}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/services" element={<Services/>}/>
              <Route exact path="/portfolio" element={<Portfolio/>}/>
        </Routes>
    </>
  )
}

export default MainRoutes