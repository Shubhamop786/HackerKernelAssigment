import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AddProductForm from './Components/AddProductForm';
import ProductList from './Components/ProductList';
import LoginPage from './Components/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="/product-list" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;
