import React, { useState, createContext, useContext } from "react";

// 1. Context banaya
const CartContext = createContext();

// 2. Chhota Navbar component
const MiniNavbar = () => {
  const { cart } = useContext(CartContext);
  return <h4 className="m-0">🛒 Cart Items: <span className="text-primary">{cart.length}</span></h4>;
};

// 3. Main Component (Provider ke sath)
export default function Task8_ContextCart() {
  const [cart, setCart] = useState([]);

  return (
    <div className="card p-4 mb-4 shadow-sm border-warning">
      <h3 className="text-warning mb-4">8. Cart Count in Navbar (useContext)</h3>
      
      {/* 4. Provider Wrapper */}
      <CartContext.Provider value={{ cart, setCart }}>
        <div className="p-3 bg-light rounded border border-warning shadow-sm">
          {/* Navbar Context use kar raha hai */}
          <MiniNavbar />
          <hr />
          <button 
            className="btn btn-warning" 
            onClick={() => setCart([...cart, "New Item"])}
          >
            Add Item to Global Cart
          </button>
        </div>
      </CartContext.Provider>
    </div>
  );
}