import React, { useState } from "react";
import { toast } from "react-toastify";

const products = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Phone", price: 200 }
];

export default function Task12_ToastCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    // Toast Notification call
    toast.success(`${item.name} added to cart!`, { autoClose: 2000 });
  };

  return (
    <div className="card p-4 mb-4 shadow-sm border-success">
      <h3 className="text-success">12. Toast Notification on Add to Cart</h3>
      <div className="d-flex gap-3 mt-3">
        {products.map((p) => (
          <div key={p.id} className="p-3 border rounded">
            <h5>{p.name} - ${p.price}</h5>
            <button className="btn btn-success btn-sm" onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}