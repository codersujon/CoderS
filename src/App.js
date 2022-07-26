import React from 'react';
import Header from './common/Header/Header';
import Pages from './pages/Pages';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Header />
          <Routes>
             <Route exact path="/" element={<Pages/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
