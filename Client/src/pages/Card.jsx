import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const ProductCard = ({
  id,
  initialData = null,
  onAddToCart,
  hoverEffect = true,
  className
}) => {
  const [product, setProduct] = useState(initialData);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetch product data if not provided
  useEffect(() => {
    if (!initialData && id) {
      fetchProductData();
    }
  }, []);

  // Fetch single product data
  const fetchProductData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/products/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product data');
      }
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Next image function
  const nextImage = (e) => {
    e.stopPropagation();
    if (product && product.images && product.images.length > 0) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Previous image function
  const prevImage = (e) => {
    e.stopPropagation();
    if (product && product.images && product.images.length > 0) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
      );
    }
  };

  // Handle add to cart
  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (product && onAddToCart) {
      onAddToCart(product);
    }
  };

  // Navigate to product details
  const goToProductDetails = () => {
    window.location.href = `/product/${product.id}`;
  };

  if (loading) {
    return <div className="product-card-skeleton"></div>;
  }

  if (error || !product) {
    return <div className="product-card-error">Unable to load product</div>;
  }

  return (
    <div 
      className={`product-card ${hoverEffect ? 'product-card-hover' : ''} ${className || ''}`}
      onClick={goToProductDetails}
    >
      <div className="product-image-container">
        {product.images && product.images.length > 0 ? (
          <>
            <div 
              className="product-image" 
              style={{ backgroundImage: `url(${product.images[currentImageIndex]})` }}
              role="img"
              aria-label={product.name || "Product image"}
            />
            {product.images.length > 1 && (
              <div className="image-navigation">
                <button className="nav-button prev" onClick={prevImage}>&#10094;</button>
                <div className="image-indicators">
                  {product.images.map((_, index) => (
                    <span 
                      key={index} 
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                    ></span>
                  ))}
                </div>
                <button className="nav-button next" onClick={nextImage}>&#10095;</button>
              </div>
            )}
          </>
        ) : (
          <div className="product-image-placeholder">No Image Available</div>
        )}
        {product.discount && (
          <div className="product-discount-badge">{product.discount}% OFF</div>
        )}
      </div>
      
      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description?.substring(0, 100)}{product.description?.length > 100 ? '...' : ''}</p>
        
        <div className="product-price-container">
          {product.discount ? (
            <>
              <span className="product-original-price">${product.price.toFixed(2)}</span>
              <span className="product-price">${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
            </>
          ) : (
            <span className="product-price">${product.price?.toFixed(2)}</span>
          )}
        </div>
        
        <div className="product-actions">
          <button className="action-button view-details">View Details</button>
          <button className="action-button add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  initialData: PropTypes.object,
  onAddToCart: PropTypes.func,
  hoverEffect: PropTypes.bool,
  className: PropTypes.string
};

export default ProductCard;