
import React, { useState, useEffect } from 'react';
import CardDetail from './CardDetail';
import SearchBar from './SearchBar';
import FoodDetail from './FoodDetail';
import '../styles/menu.css';

const Menu = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/menu')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setFoodMenu(data);
        setFilteredMenu(data);
      })
      .catch(error => {
        console.error('Error fetching food menu:', error);
      });
  }, []);

  useEffect(() => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const handleSearch = (searchTerm) => {
    const filtered = foodMenu.filter(foodItem =>
      foodItem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMenu(filtered);
  };

  const addToCart = (foodItem) => {
    setCartItems([...cartItems, foodItem]);
  };

  return (
    <div>
      <h2>Menu</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="menu">
        {filteredMenu.map((foodItem) => (
          <div key={foodItem.id}>
            <CardDetail foodItem={foodItem} />
            <FoodDetail description={foodItem.description} />
            <button onClick={() => addToCart(foodItem)}>Order</button>
          </div>
        ))}
      </div>
      <div>
        <h3>Cart Total: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Menu;
