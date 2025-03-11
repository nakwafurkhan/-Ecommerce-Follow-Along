import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = ({ initialData }) => {
  const [productData, setProductData] = useState({
    title: initialData?.title || '',
    subtitle: initialData?.subtitle || '',
    price: initialData?.price || '',
    images: initialData?.images || [],
    imageAlt: initialData?.imageAlt || ''
  });
  const [imagePreviews, setImagePreviews] = useState(initialData?.images || []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  let imagearray=[]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({ ...prev, [name]: value }));
  };

  // Function to upload a single image to Cloudinary
  const uploadImageToCloudinary = async (file) => {
    const cloudName = 'dfbo0aund';
    const uploadPreset = 'ecomm-follow-along'; // Replace with your unsigned upload preset
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    
    const response = await fetch(url, {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    return data.secure_url;
  };

  // Handle multiple image uploads
  const handleImageChange = async (e) => {
    const files = e.target.files;
    if (!files.length) return;
    setError('');

    try {
      // Upload each file and get its Cloudinary URL
      const uploadPromises = Array.from(files).map(file => uploadImageToCloudinary(file));
      const uploadedUrls = await Promise.all(uploadPromises);
      
      // Log the uploaded image URLs
      console.log("Uploaded image URLs:", uploadedUrls);
      
      imagearray=[...uploadedUrls]
      console.log("N",imagearray)

      // Update state with new images
      setProductData(prev => ({
        ...prev,
        images: [...prev.images, ...uploadedUrls]
      }));
      setImagePreviews(prev => ([...prev, ...uploadedUrls]));
    } catch (err) {
      console.error('Upload error:', err);
      setError('Failed to upload one or more images. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
  
    if (!productData.title || !productData.price || productData.images.length === 0) {
      setError('Please fill in all required fields (title, price, and at least one image)');
      setIsSubmitting(false);
      return;
    }
  
    const formattedData = {
      ...productData,
      price: parseFloat(productData.price)
    };
  
    console.log('Submitting data:', formattedData, imagearray);
  
    try {
      const response = await fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedData)
      });
      const data = await response.json();
      console.log('Success:', data);
  
      // Reload the page after successful submission
      window.location.reload();
    } catch (err) {
      console.error(err);
      setError('Failed to save product. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="product-form-container">
      <h2 className="form-title">
        {initialData ? 'Edit Product' : 'Add New Product'}
      </h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title*</label>
          <input
            type="text"
            id="title"
            name="title"
            value={productData.title}
            onChange={handleChange}
            className="form-input"
            placeholder="Product Title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subtitle" className="form-label">Subtitle</label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            value={productData.subtitle}
            onChange={handleChange}
            className="form-input"
            placeholder="Product Subtitle"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price" className="form-label">Price ($)*</label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="form-input"
            placeholder="49.99"
            step="0.01"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageAlt" className="form-label">Image Alt Text</label>
          <input
            type="text"
            id="imageAlt"
            name="imageAlt"
            value={productData.imageAlt}
            onChange={handleChange}
            className="form-input"
            placeholder="Image description for accessibility"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-label">Product Images*</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="form-input file-input"
            accept="image/*"
            multiple
          />
          {imagePreviews.length > 0 && (
            <div className="image-preview-container">
              {imagePreviews.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`Product preview ${index + 1}`}
                  className="image-preview"
                />
              ))}
            </div>
          )}
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : initialData ? 'Update Product' : 'Add Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
