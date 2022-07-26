import React from 'react';
import Header from './common/Header/Header';
import MainRoutes from './routes/MainRoutes';
import Footer from './common/Footer/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Header />
          <MainRoutes />
          <Footer />
      </Router>
    </>
  );
}

export default App;
