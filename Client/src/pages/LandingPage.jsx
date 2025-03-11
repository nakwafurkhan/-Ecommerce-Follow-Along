import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import './LoginSignup.css';
import ProductGrid from './ProductGrid';


// Define a simple Card component for testimonials and collection items
// This is separate from the ProductCard used in ProductGrid
const Card = ({ children, title, subtitle, price, image, imageAlt, actionButton, actionButtonText, className, hoverEffect }) => {
  return (
    <div className={`card ${className || ''} ${hoverEffect ? 'hover-effect' : ''}`}>
      {image && (
        <div className="card-image">
          <img src={image} alt={imageAlt || title} />
        </div>
      )}
      {title && <h3 className="card-title">{title}</h3>}
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      {price !== undefined && <p className="card-price">${price.toFixed(2)}</p>}
      {actionButton && actionButtonText && (
        <button className="card-action" onClick={actionButton}>
          {actionButtonText}
        </button>
      )}
      {children}
    </div>
  );
};

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('login');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // State for login/signup form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  // Collection items data
  const collectionItems = [
    {
      id: 1,
      title: "God With Us",
      subtitle: "Premium hoodie with inspirational message",
      price: 49.99,
      image: "https://via.placeholder.com/600x800/f0f0f0/cccccc",
      imageAlt: "God With Us hoodie"
    },
    {
      id: 2,
      title: "Walk By Faith",
      subtitle: "Signature tee with empowering design",
      price: 34.99,
      image: "https://via.placeholder.com/600x800/f0f0f0/cccccc",
      imageAlt: "Walk By Faith t-shirt"
    },
    {
      id: 3,
      title: "Don't Give Up",
      subtitle: "Modern graphic tee for everyday inspiration",
      price: 34.99,
      image: "https://via.placeholder.com/600x800/f0f0f0/cccccc",
      imageAlt: "Don't Give Up t-shirt"
    }
  ];
  
  // Feature cards data
  const featureCards = [
    {
      id: 1,
      title: "Sustainable Materials",
      subtitle: "Ethically sourced organic cotton and eco-friendly production processes",
      iconClass: "sustainability"
    },
    {
      id: 2,
      title: "Premium Quality",
      subtitle: "Durable construction and premium fabrics for lasting comfort",
      iconClass: "quality"
    },
    {
      id: 3,
      title: "Meaningful Messages",
      subtitle: "Designs that inspire and uplift with Scripture-based encouragement",
      iconClass: "message"
    },
    {
      id: 4,
      title: "Faith Community",
      subtitle: "10% of proceeds support youth faith initiatives worldwide",
      iconClass: "community"
    }
  ];
  
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      content: "These designs are fire! I wear my Faith Threads hoodie everywhere and people always ask about it.",
      author: "Josh M.",
      role: "College Student",
      avatar: "avatar1"
    },
    {
      id: 2,
      content: "The quality is amazing - so soft and comfortable. Plus I love having my faith represented in such a stylish way.",
      author: "Sarah K.",
      role: "Creative Director",
      avatar: "avatar2"
    },
    {
      id: 3,
      content: "It's more than just clothing. These pieces help me start conversations about what matters most to me.",
      author: "Marcus L.",
      role: "Youth Minister",
      avatar: "avatar3"
    }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = modalType === 'login'
      ? 'http://localhost:5000/auth/login'
      : 'http://localhost:5000/auth/signup';
      
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      alert(data.message);
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
    } catch (error) {
      alert('An error occurred');
    }
  };
  
  const toggleForm = () => {
    const newType = modalType === 'login' ? 'signup' : 'login';
    setModalType(newType);
    setFormData({
      email: '',
      password: '',
      confirmPassword: ''
    });
  };
  
  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrollPosition > 50 ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo-container">
            <h1 className="logo">FAITH THREADS</h1>
          </div>
          <div 
            className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="collection" className="nav-link" onClick={() => setIsMenuOpen(false)}>Collection</a>
            <a href="#features" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <div className="auth-buttons">
              <button className="btn-login" onClick={() => openModal('login')}>Login</button>
              <button className="btn-signup" onClick={() => openModal('signup')}>Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section
        id="home"
        className="hero-section"
        style={{ transform: `translateY(${scrollPosition * 0.3}px)` }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Wear Your Faith</h1>
          <p className="hero-subtitle">
            Clothing that inspires, uplifts, and spreads positivity
          </p>
          <button className="cta-button">Explore Collection</button>
        </div>
        <div className="hero-image-container">
          <div
            className="hero-image"
            style={{ transform: `translateY(${-scrollPosition * 0.2}px)` }}
          ></div>
        </div>
        <div className="hero-overlay"></div>
      </section>
      
      {/* Collection Preview */}
      {/* <section id="collection" className="collection-section">
        <h2 className="section-title">Latest Collection</h2>
        <div className="collection-grid">
          {collectionItems.map(item => (
            <Card
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              image={item.image}
              imageAlt={item.imageAlt}
              actionButton={() => window.location.href = '#shop'}
              actionButtonText="Shop Now"
            />
          ))}
        </div>
      </section> */}


      {/* Product Grid Section */}
      <section id="products" className="products-section">
      <h2 className="section-title">Shop Our Products</h2>
      <ProductGrid />
      </section>
      
      {/* Features Section */}
      <section id="features" className="features-section">
        <h2 className="section-title">Why Choose Faith Threads</h2>
        <div className="features-container">
          {featureCards.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className={`feature-icon ${feature.iconClass}`}></div>
              <h3>{feature.title}</h3>
              <p>{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </section>
      

      
      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section">
        <h2 className="section-title">From Our Community</h2>
        <div className="testimonials-container">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial">
              <Card className="testimonial-content" hoverEffect={true}>
                <p>{testimonial.content}</p>
                <div className="testimonial-author">
                  <div className={`author-avatar ${testimonial.avatar}`}></div>
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Join Our Community</h2>
          <p>
            Get 15% off your first order and stay updated on new designs and exclusive offers
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h2>FAITH THREADS</h2>
            <p>Faith-inspired clothing that makes a statement</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Shop</h3>
              <a href="#collection">Collection</a>
              <a href="#men">Men</a>
              <a href="#women">Women</a>
              <a href="#accessories">Accessories</a>
            </div>
            <div className="footer-column">
              <h3>Company</h3>
              <a href="#about">About Us</a>
              <a href="#mission">Our Mission</a>
              <a href="#sustainability">Sustainability</a>
              <a href="#careers">Careers</a>
            </div>
            <div className="footer-column">
              <h3>Support</h3>
              <a href="#faq">FAQ</a>
              <a href="#shipping">Shipping & Returns</a>
              <a href="#sizing">Sizing Guide</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#instagram" className="social-icon instagram"></a>
              <a href="#tiktok" className="social-icon tiktok"></a>
              <a href="#twitter" className="social-icon twitter"></a>
              <a href="#youtube" className="social-icon youtube"></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Faith Threads. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>
      
      {/* Authentication Modal */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="auth-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <div className="modal-header">
              <h2>
                {modalType === 'login'
                  ? 'Welcome Back'
                  : 'Create Account'}
              </h2>
            </div>
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  required
                />
              </div>
              {modalType === 'signup' && (
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                    required
                  />
                </div>
              )}
              <button type="submit" className="auth-submit">
                {modalType === 'login' ? 'Login' : 'Sign Up'}
              </button>
            </form>
            <p className="form-switch">
              {modalType === 'login'
                ? "Don't have an account?"
                : "Already have an account?"}
              <button
                type="button"
                className="switch-btn"
                onClick={toggleForm}
              >
                {modalType === 'login' ? 'Sign Up' : 'Login'}
              </button>
            </p>
            <div className="auth-divider">
              <span>or</span>
            </div>
            <div className="social-auth">
              <button className="social-auth-btn google">
                <span className="social-icon google-icon"></span>
                Continue with Google
              </button>
              <button className="social-auth-btn apple">
                <span className="social-icon apple-icon"></span>
                Continue with Apple
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;