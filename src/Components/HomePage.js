import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddProductForm from './AddProductForm';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import './HomePage.css';
import './ProductList.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    } else {
      const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
      setProducts(savedProducts);
      setFilteredProducts(savedProducts);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);

    
    setProducts(updatedProducts);

   
    if (searchQuery) {
      const updatedFiltered = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(updatedFiltered);
    } else {
      setFilteredProducts(updatedProducts);
    }

   
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <div className="home-container">
      <div className="header">
        <h2 className="home-title">Home Page</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => setActiveSection('addProduct')}>Add Product</button>
        <button className="nav-btn" onClick={() => setActiveSection('search')}>Search Product</button>
      </div>

      <div className="content">
        {activeSection === 'addProduct' && <AddProductForm />}

        {activeSection === 'search' && (
          <>
            <div className="search-bar-container">
              <SearchBar onSearch={handleSearch} />
            </div>
            <ProductList products={filteredProducts} onDelete={handleDeleteProduct} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
