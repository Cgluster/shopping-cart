import React from 'react';
import './App.css';
import Inventory from './features/inventory/Inventory';

function App() {
  return (
    <>
    <div className="title-header">
     <h1>Shopping Cart</h1>
    </div>

    <Inventory />
    </>
  );
}

export default App;

// Create cards for each item I will display on my home page.
// Example:
// Product Name with short description
// Picture of the product
// Add to cart button

// Have a separate page for the cart...