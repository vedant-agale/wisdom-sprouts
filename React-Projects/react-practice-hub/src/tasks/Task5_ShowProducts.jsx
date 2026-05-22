import React from "react";

const products = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Phone", price: 200 }
];

export default function Task5_ShowProducts() {
  return (
    <div className="card p-4 mb-4 shadow-sm border-secondary">
      <h3 className="text-secondary">5. Show Products</h3>
      <div className="row mt-3">
        {products.map((p) => (
          <div key={p.id} className="col-md-6 mb-2">
            <div className="card p-3 bg-light border-0 shadow-sm">
              <h5>{p.name}</h5>
              <p className="text-success fw-bold m-0 mb-2">${p.price}</p>
              <button 
                className="btn btn-dark btn-sm" 
                onClick={() => console.log(`${p.name} added to cart!`)}
              >
                Add to Cart (Check Console)
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}