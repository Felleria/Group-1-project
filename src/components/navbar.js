
import React from 'react';
import '../styles/navbar.css'; 
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/Menu">Menu</a></li>
        <li><a href="/Contact">Contact Us</a></li>
        <li><a href="/suggestion">Suggestion</a></li> 
      </ul>
    </nav>
  );
};

export default Navbar;
