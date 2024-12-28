import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-price">
                ${parseFloat(product.price || 0).toFixed(2)}
              </span>
            </div>
            <button
              className="delete-btn"
              aria-label={`Delete ${product.name}`} 
            >
              ❌
            </button>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
 