import React from 'react';

function QuantitySelector({ quantity, setQuantity }) {
  const handleChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div className="quantity-selector">
      <label>Quantity:</label>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        min="1"
      />
    </div>
  );
}

export default QuantitySelector;
