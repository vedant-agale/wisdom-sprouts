import React, { useState } from "react";

export default function Task6_AddToCart() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // Purana cart copy karo aur naya item daal do
    setCart([...cart, item]);
  };

  return (
    <div className="card p-4 mb-4 shadow-sm border-secondary">
      <h3 className="text-secondary">6. Add Item to Cart</h3>
      <div className="d-flex gap-2 mt-3 mb-3">
        <button className="btn btn-outline-primary" onClick={() => addItem("Laptop")}>Add Laptop</button>
        <button className="btn btn-outline-primary" onClick={() => addItem("Phone")}>Add Phone</button>
      </div>
      <div className="p-2 bg-light rounded">
        <p className="fw-bold m-0 fs-5">
          Cart Items: <span className="text-primary fw-normal">{cart.length === 0 ? "Empty" : cart.join(", ")}</span>
        </p>
      </div>
    </div>
  );
}