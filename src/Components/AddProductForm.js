import React, { useState } from 'react';

const AddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [error, setError] = useState('');

  const handleAddProduct = () => {
    if (!productName || !productPrice) {
      setError('Please fill out both fields.');
      return;
    }

    const newProduct = { name: productName, price: productPrice };
    let products = JSON.parse(localStorage.getItem('products')) || [];

    if (products.some((prod) => prod.name === productName)) {
      setError('Product already exists!');
      return;
    }

    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    setProductName('');
    setProductPrice('');
    setError('');
  };

  return (
    <div>
      <h3>Add Product</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProductForm;
