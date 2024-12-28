import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchClick = () => {
    onSearch(searchQuery); 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      <button className="search-btn" onClick={handleSearchClick}>
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
