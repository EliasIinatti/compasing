import React, { useEffect, useState } from 'react';

function TotalPrice({ quantity, price }) {
  const [totalPrice, setTotalPrice] = useState(price);

  useEffect(() => {
    setTotalPrice(quantity * price);
  }, [quantity, price]);

  return (
    <div className="total-price">
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
}

export default TotalPrice;
