import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'; // Importing the CSS file

const Home = () => {
  // State to track selected category
  const [category, setCategory] = useState('all');
  
  // State to track cart items
  const [cart, setCart] = useState([]);

  // Array of products with category, description, image, and price
  const products = [
    { name: "Air Force 1, Baskets Femme, En Stock, Nike, Promo week, Sneakers", category: "Nike", description: "Nike Air Force 1 Low Valentine’s Day (2023)", image: "https://stickystore.tn/wp-content/uploads/2023/08/2-768x768.png", price: "203,00 د.ت" },
    { name: "Baskets Femme, Baskets Homme, Dunk Low, En Stock, Nike, Nike Dunk, Sneakers", category: "Nike", description: "Concepts X Nike SB Dunk Low Green Lobster", image: "https://stickystore.tn/wp-content/uploads/2023/08/WhatsApp-Image-2024-12-04-at-18.00.49_903f35a5-768x768.jpg", price: "209,00 د.ت" },
    { name: "Baskets Homme, Dunk Low, Nike, Nike Dunk, Sneakers", category: "Nike", description: "Nike SB Dunk Low Diamond Supply", image: "https://stickystore.tn/wp-content/uploads/2024/06/Copy-of-Template-Produit-90-600x600.png", price: "209,00 د.ت" },
    { name: "Baskets Homme, Collaborations, Dunk Low, Nike, Nike Dunk, Sneakers, Travis scott", category: "Nike", description: "Travis Scott X Nike SB Dunk Low", image: "https://stickystore.tn/wp-content/uploads/2023/03/2.png", price: "209,00 د.ت" },
    { name: "Adidas, Adidas Samba", category: "Adidas", description: "Adidas Samba OG Black", image: "https://stickystore.tn/wp-content/uploads/2023/12/Produit-site-23.png", price: "249,00 د.ت" },
    { name: "Adidas, Adidas Campus, Baskets Femme, Sneakers", category: "Adidas", description: "Adidas Campus 00s Red", image: "https://stickystore.tn/wp-content/uploads/2024/06/Copy-of-Template-Produit-89.png", price: "199,00 د.ت" },
    { name: "Adidas, Adidas Campus, Baskets Femme, Sneakers", category: "Adidas", description: "Adidas Campus 00s Bark Brown", image: "https://stickystore.tn/wp-content/uploads/2023/11/Produit-site-26.png", price: "259,00 د.ت" },
    { name: "Adidas Campus 00s “Dark Green”", category: "Adidas", description: "Adidas, Adidas Campus, Baskets Femme, Sneakers", image: "https://stickystore.tn/wp-content/uploads/2023/11/Produit-site-19.png", price: "259,00 د.ت" },
    { name: "Baskets Femme, Baskets Homme, New Balance, New Balance 530, Sneakers", category: "New Balance", description: "New Balance 530 White Grey Navy", image: "https://stickystore.tn/wp-content/uploads/2023/02/Untitled-design.png", price: "249,00 د.ت" },
    { name: "En Stock, New Balance, New Balance 9060, Sneakers", category: "New Balance", description: "New Balance 9060 Black Castlerock", image: "https://stickystore.tn/wp-content/uploads/2023/07/Produit-site-6.png", price: "269,00 د.ت" },
    { name: "Baskets Femme, En Stock, New Balance, New Balance 9060, Nouveautés, Sneakers", category: "New Balance", description: "New Balance 9060 ‘Moonbeam Vintage Rose", image: "https://stickystore.tn/wp-content/uploads/2024/10/8.png", price: "259,00 د.ت" },
  ];

  // Filter products based on selected category
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  // Handle adding product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img src="https://stickystore.tn/wp-content/uploads/2024/12/cvcvcvb.png" alt="First slide" className="d-block w-100" />
          <Carousel.Caption>
   
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://stickystore.tn/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-04-at-16.38.52_9438da9f.jpg" alt="Second slide" className="d-block w-100" />
          <Carousel.Caption>
           
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h3>🔥 Upgrade Your Style – Shop the Latest Trends! 🔥</h3>

      {/* Category selection with border clicks */}
      <div className="category-selector">
        <div
          className={`category-item ${category === 'all' ? 'active' : ''}`}
          onClick={() => setCategory('all')}
        >
          All
        </div>
        <div
          className={`category-item ${category === 'Nike' ? 'active' : ''}`}
          onClick={() => setCategory('Nike')}
        >
          Nike
        </div>
        <div
          className={`category-item ${category === 'Adidas' ? 'active' : ''}`}
          onClick={() => setCategory('Adidas')}
        >
          Adidas
        </div>
        <div
          className={`category-item ${category === 'New Balance' ? 'active' : ''}`}
          onClick={() => setCategory('New Balance')}
        >
          New Balance
        </div>
      </div>

      {/* Display filtered products */}
      <div className="card-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={index} className="card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p><strong>{product.price}</strong></p>
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>

      {/* Optionally display cart */}
      <div className="cart">
        <h3>Cart</h3>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
