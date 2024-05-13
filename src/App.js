
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Menu from './components/Menu';
import Contact from './components/ContactUs';
import SuggestionForm from './components/SuggestionForm'; 

import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <h1>Food Palace</h1>
        <div>
          
        </div>
        
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/suggestion" element={<SuggestionForm />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
