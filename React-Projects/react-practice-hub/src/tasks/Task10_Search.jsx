import React, { useState } from "react";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" },
  { id: 4, name: "Smartwatch" }
];

export default function Task10_Search() {
  const [search, setSearch] = useState("");

  // Search Logic (Case insensitive)
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card p-4 mb-4 shadow-sm border-warning">
      <h3 className="text-warning">10. Search Products</h3>
      
      <input
        type="text"
        className="form-control mt-3 mb-3"
        placeholder="Type to search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="list-group">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <li key={p.id} className="list-group-item">{p.name}</li>
          ))
        ) : (
          <li className="list-group-item text-danger">No products found matching "{search}"</li>
        )}
      </ul>
    </div>
  );
}