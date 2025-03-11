import React, { useState, useEffect } from 'react';
import './Collection.css';
import ProductGrid from './ProductGrid';

const Collection = () => {
  // State for filters and search
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    rating: 'all',
    sortBy: 'newest'
  });
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  
  // Categories data (you can replace with your actual categories)
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'tshirts', name: 'T-Shirts' },
    { id: 'hoodies', name: 'Hoodies' },
    { id: 'accessories', name: 'Accessories' }
  ];
  
  // Price ranges
  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'under25', name: 'Under $25' },
    { id: '25to50', name: '$25 to $50' },
    { id: 'over50', name: 'Over $50' }
  ];
  
  // Rating options
  const ratingOptions = [
    { id: 'all', name: 'All Ratings' },
    { id: '4plus', name: '4+ Stars' },
    { id: '3plus', name: '3+ Stars' }
  ];
  
  // Sort options
  const sortOptions = [
    { id: 'newest', name: 'Newest' },
    { id: 'priceAsc', name: 'Price: Low to High' },
    { id: 'priceDesc', name: 'Price: High to Low' },
    { id: 'bestSelling', name: 'Best Selling' }
  ];
  
  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const clearFilters = () => {
    setFilters({
      category: 'all',
      priceRange: 'all',
      rating: 'all',
      sortBy: 'newest'
    });
    setSearchTerm('');
  };
  
  const toggleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };
  
  return (
    <div className="collection-page">
      <div className="collection-header">
        <h1 className="collection-title">Our Collection</h1>
        <p className="collection-subtitle">Faith-inspired clothing that makes a statement</p>
      </div>
      
      {/* Search and Filter Controls */}
      <div className="collection-controls">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="search-button">
            <span className="search-icon"></span>
          </button>
        </div>
        
        <button className="filter-toggle" onClick={toggleFilterMenu}>
          <span className="filter-icon"></span>
          Filters
          <span className={`arrow-icon ${isFilterMenuOpen ? 'up' : 'down'}`}></span>
        </button>
      </div>
      
      {/* Filter Panel (expands on mobile) */}
      <div className={`filter-panel ${isFilterMenuOpen ? 'open' : ''}`}>
        <div className="filter-section">
          <h3>Category</h3>
          <div className="filter-options">
            {categories.map(category => (
              <label key={category.id} className="filter-option">
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === category.id}
                  onChange={() => handleFilterChange('category', category.id)}
                />
                <span>{category.name}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="filter-section">
          <h3>Price</h3>
          <div className="filter-options">
            {priceRanges.map(range => (
              <label key={range.id} className="filter-option">
                <input
                  type="radio"
                  name="priceRange"
                  checked={filters.priceRange === range.id}
                  onChange={() => handleFilterChange('priceRange', range.id)}
                />
                <span>{range.name}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="filter-section">
          <h3>Rating</h3>
          <div className="filter-options">
            {ratingOptions.map(option => (
              <label key={option.id} className="filter-option">
                <input
                  type="radio"
                  name="rating"
                  checked={filters.rating === option.id}
                  onChange={() => handleFilterChange('rating', option.id)}
                />
                <span>{option.name}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="filter-section">
          <h3>Sort By</h3>
          <select
            className="sort-select"
            value={filters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        
        <button className="clear-filters" onClick={clearFilters}>
          Clear All Filters
        </button>
      </div>
      
      {/* Active Filters Summary */}
      <div className="active-filters">
        <span className="results-count">
          Showing 12 products
        </span>
        
        {filters.category !== 'all' && (
          <span className="filter-tag">
            {categories.find(c => c.id === filters.category)?.name}
            <button onClick={() => handleFilterChange('category', 'all')}>×</button>
          </span>
        )}
        
        {filters.priceRange !== 'all' && (
          <span className="filter-tag">
            {priceRanges.find(p => p.id === filters.priceRange)?.name}
            <button onClick={() => handleFilterChange('priceRange', 'all')}>×</button>
          </span>
        )}
        
        {filters.rating !== 'all' && (
          <span className="filter-tag">
            {ratingOptions.find(r => r.id === filters.rating)?.name}
            <button onClick={() => handleFilterChange('rating', 'all')}>×</button>
          </span>
        )}
        
        {searchTerm && (
          <span className="filter-tag">
            Search: "{searchTerm}"
            <button onClick={() => setSearchTerm('')}>×</button>
          </span>
        )}
      </div>
      
      {/* Products Grid */}
      <div className="collection-products">
        {/* This integrates with your existing ProductGrid component */}
        <ProductGrid 
          filters={filters}
          searchTerm={searchTerm}
        />
      </div>
      
      {/* Pagination */}
      <div className="pagination">
        <button className="pagination-arrow prev" disabled>
          &lt;
        </button>
        <button className="pagination-number active">1</button>
        <button className="pagination-number">2</button>
        <button className="pagination-number">3</button>
        <span className="pagination-ellipsis">...</span>
        <button className="pagination-number">8</button>
        <button className="pagination-arrow next">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Collection;