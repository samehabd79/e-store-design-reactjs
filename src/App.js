import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';

// Create the CartContext
const CartContext = createContext();

const App = () => {
  // Define the state for cart count
  const [cartCount, setCartCount] = useState(0);

  // Create the cart context value
  const cartContextValue = {
    cartCount,
    setCartCount,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/Cart" element={<Cart />} />
          
        </Routes>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
