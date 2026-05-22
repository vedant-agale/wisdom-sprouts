import React, { useReducer } from "react";

// Reducer function: Batata hai ki Action ke hisab se kya karna hai
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "TOTAL":
      const total = state.reduce((sum, item) => sum + item.price, 0);
      alert(`Total Price: $${total}`);
      return state;
    default:
      return state;
  }
};

export default function Task9_ReducerCart() {
  // useReducer setup
  const [cart, dispatch] = useReducer(reducer, []);

  return (
    <div className="card p-4 mb-4 shadow-sm border-warning">
      <h3 className="text-warning">9. Calculate Total Price (useReducer)</h3>
      
      <div className="d-flex flex-wrap gap-2 mt-3 mb-3">
        <button 
          className="btn btn-outline-dark" 
          onClick={() => dispatch({ type: "ADD", payload: { name: "Phone", price: 200 } })}
        >
          Add Phone ($200)
        </button>
        <button 
          className="btn btn-outline-dark" 
          onClick={() => dispatch({ type: "ADD", payload: { name: "Laptop", price: 500 } })}
        >
          Add Laptop ($500)
        </button>
        <button 
          className="btn btn-success fw-bold" 
          onClick={() => dispatch({ type: "TOTAL" })}
        >
          Show Total (Alert)
        </button>
      </div>

      <ul className="list-group">
        {cart.length === 0 ? <li className="list-group-item text-muted">Cart is empty</li> : null}
        {cart.map((item, i) => (
          <li key={i} className="list-group-item">
            {item.name} - <span className="text-success fw-bold">${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}