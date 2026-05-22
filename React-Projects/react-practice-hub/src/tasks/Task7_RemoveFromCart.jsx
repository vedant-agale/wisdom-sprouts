import React, { useState } from "react";

export default function Task7_RemoveFromCart() {
  // Initial cart mein pehle se 2 items hain
  const [cart, setCart] = useState(["Laptop", "Phone"]);

  const removeItem = (itemToRemove) => {
    // Jo item click hua hai, usko chhod kar baaki sab rakh lo
    setCart(cart.filter((c) => c !== itemToRemove));
  };

  return (
    <div className="card p-4 mb-4 shadow-sm border-secondary">
      <h3 className="text-secondary">7. Remove Item from Cart</h3>
      <ul className="list-group mt-3">
        {cart.length === 0 ? <li className="list-group-item">Cart is empty!</li> : null}
        
        {cart.map((c, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
            {c}
            <button className="btn btn-sm btn-danger" onClick={() => removeItem(c)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}