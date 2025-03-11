import React, { useState, useEffect } from 'react';
import ProductCard from './Card';
import './ProductGrid.css';

const ProductGrid = ({ filters = {}, searchTerm = '' }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [filters]); // Re-fetch when filters change

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // Build query parameters
      let url = 'http://localhost:5000/products';
      let queryParams = [];
      
      // Add category from filters or default
      const category = filters.category || 'clothing';
      queryParams.push(`category=${encodeURIComponent(category)}`);
      
      // Add limit
      const limit = filters.limit || 12;
      queryParams.push(`limit=${limit}`);
      
      // Add sorting
      let sortBy = 'newest';
      if (filters.sortBy) {
        switch (filters.sortBy) {
          case 'priceAsc':
            sortBy = 'price_asc';
            break;
          case 'priceDesc':
            sortBy = 'price_desc';
            break;
          case 'bestSelling':
            sortBy = 'popularity';
            break;
          case 'newest':
            sortBy = 'date_desc';
            break;
          default:
            sortBy = filters.sortBy;
            break;
        }
      }
      queryParams.push(`sortBy=${sortBy}`);
      
      // Add price range filters
      if (filters.priceRange) {
        let minPrice, maxPrice;
        switch (filters.priceRange) {
          case 'under25':
            maxPrice = 25;
            break;
          case '25to50':
            minPrice = 25;
            maxPrice = 50;
            break;
          case 'over50':
            minPrice = 50;
            break;
          default:
            break;
        }
        
        if (minPrice) queryParams.push(`minPrice=${minPrice}`);
        if (maxPrice) queryParams.push(`maxPrice=${maxPrice}`);
      }
      
      // Add rating filter
      if (filters.rating) {
        let minRating;
        switch (filters.rating) {
          case '4plus':
            minRating = 4;
            break;
          case '3plus':
            minRating = 3;
            break;
          default:
            break;
        }
        
        if (minRating) queryParams.push(`minRating=${minRating}`);
      }
      
      // Add search term if present
      if (searchTerm) {
        queryParams.push(`search=${encodeURIComponent(searchTerm)}`);
      }
      
      if (queryParams.length > 0) {
        url += `?${queryParams.join('&')}`;
      }
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      // Check if product already exists in cart
      const itemExists = prevItems.find(item => item.id === product.id);
      
      if (itemExists) {
        // Increase quantity if already in cart
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    // Show success message
    showToast(`${product.name} added to cart!`);
  };

  const showToast = (message) => {
    // Create and show a toast notification
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 300);
      }, 2000);
    }, 100);
  };

  if (loading) {
    return (
      <div className="product-grid-container">
        <div className="product-grid">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="product-card-skeleton"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-error-container">
        <p>Error loading products: {error}</p>
        <button onClick={fetchProducts}>Try Again</button>
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="no-products-container">
        <p>No products found matching your criteria.</p>
        <p>Try adjusting your filters or search term.</p>
      </div>
    );
  }

  return (
    <div className="product-grid-container">
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            initialData={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid; 