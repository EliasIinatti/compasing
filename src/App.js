import React, { useState } from 'react';
import './App.css';
import ProductDetails from './components/ProductDetails';
import QuantitySelector from './components/QuantitySelector';
import TotalPrice from './components/TotalPrice';

function App() {
  const price = 20; // Static price for the product
  const [quantity, setQuantity] = useState(1); // State for quantity

  return (
    <div className="App">
      <h1>Product Page</h1>
      {/* Pass product details to ProductDetails component */}
      <ProductDetails name="Awesome Product" price={price} />
      {/* Pass quantity and setQuantity to QuantitySelector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      {/* Pass quantity and price to TotalPrice */}
      <TotalPrice quantity={quantity} price={price} />
    </div>
  );
}

export default App;

