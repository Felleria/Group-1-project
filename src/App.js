import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/Menu';
import Cart from './components/Cart';

import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <h1>Food Palace</h1>
        <div>
          {/* Other content goes here */}
        </div>
        
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
