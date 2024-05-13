// Navbar.js
import React from 'react';
import '../styles/navbar.css'; // Import CSS file

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/about">Home</a></li>
        <li><a href="/cart">Contact Us</a></li>
        <li><a href="/suggestion">Suggestion</a></li> {/* New link for suggestion page */}
      </ul>
    </nav>
  );
};

export default Navbar;
