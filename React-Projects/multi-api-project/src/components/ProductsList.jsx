import React from 'react';
import useFetch from '../hooks/useFetch';

const ProductsList = () => {
  // Dekh, same hook use kiya bas URL badal diya!
  const { 
    data: products, 
    loading, 
    error, 
    deleteItem, 
    refreshData 
  } = useFetch('https://fakestoreapi.com/products');

  if (loading) return <h4 className="text-center mt-4 text-success">Loading Products...</h4>;
  if (error) return <h4 className="text-center mt-4 text-danger">Error: {error.message}</h4>;

  return (
    <div className="container mt-5 pt-4 border-top">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-success">🛍️ Fake Store Products</h2>
        <button className="btn btn-outline-success fw-bold" onClick={refreshData}>
          🔄 Refresh Products
        </button>
      </div>

      <div className="row">
        {/* Main sirf starting ke 6 products dikha raha hu taaki page zyada lamba na ho */}
        {products.slice(0, 6).map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100 p-3 border-0 bg-light">
              <img 
                src={product.image} 
                className="card-img-top mx-auto" 
                alt={product.title} 
                style={{ height: "150px", width: "auto", mixBlendMode: "multiply" }} 
              />
              <div className="card-body d-flex flex-column text-center">
                <h6 className="card-title fw-bold text-truncate" title={product.title}>
                  {product.title}
                </h6>
                <p className="card-text text-success fw-bold fs-5">${product.price}</p>
                
                {/* Delete functionality bhi direct hook se aa rahi hai */}
                <button 
                  className="btn btn-danger btn-sm mt-auto fw-bold"
                  onClick={() => deleteItem(product.id)}
                >
                  🗑️ Delete Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;