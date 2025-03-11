import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLoginForm ? 'http://localhost:5000/auth/login' : 'http://localhost:5000/auth/signup';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
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
    setIsLoginForm(!isLoginForm);
    setFormData({
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="form-toggle">
          <button 
            className={`toggle-btn ${isLoginForm ? 'active' : ''}`}
            onClick={() => setIsLoginForm(true)}
          >
            Login
          </button>
          <button 
            className={`toggle-btn ${!isLoginForm ? 'active' : ''}`}
            onClick={() => setIsLoginForm(false)}
          >
            Sign Up
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>{isLoginForm ? 'Welcome Back' : 'Create Account'}</h2>
          
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

          {!isLoginForm && (
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

          <button type="submit" className="submit-btn">
            {isLoginForm ? 'Login' : 'Sign Up'}
          </button>

          <p className="form-switch">
            {isLoginForm ? "Don't have an account?" : "Already have an account?"}
            <button type="button" className="switch-btn" onClick={toggleForm}>
              {isLoginForm ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
