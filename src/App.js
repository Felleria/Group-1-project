// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        </div>

        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
      </div>
    </Router>
  );
};

export default App;
