// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/Menu';
import Cart from './components/ContactUs';
import SuggestionForm from './components/SuggestionForm'; // Import SuggestionForm component

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
          <Route path="/suggestion" element={<SuggestionForm />} /> {/* Add SuggestionForm route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
