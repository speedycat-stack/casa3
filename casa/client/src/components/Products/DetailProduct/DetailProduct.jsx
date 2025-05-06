import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DetailProduct.css';
import farinaImg from '../../../assets/farina.png';
import hlibImg from '../../../assets/hlib.jpg';

const PRODUCTS = {
  '619404300201': {
    id: '619404300201',
    name: "Farina",
    price: "1.0",
    image: farinaImg,
    details: {
      Packaging: 'Paper bag',
      Brands: 'Local',
      Categories: 'Grains, Flour',
      'Origin of ingredients': 'Tunisia',
      'Manufacturing or processing places': 'Tunisie'
    }
  },
  '619404300202': {
    id: '619404300202',
    name: "Hlib Délice",
    price: "1.0",
    image: hlibImg,
    details: {
      Packaging: 'Plastic bottle',
      Brands: 'Délice',
      Categories: 'Dairy, Milk',
      Labels: 'Fresh',
      'Origin of ingredients': 'Tunisia',
      'Manufacturing or processing places': 'Tunisie'
    }
  }
};

const DetailProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const product = PRODUCTS[id];

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, quantity + value);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    navigate('/donation');
  };

  if (!product) {
    return (
      <div className="detail-product">
        <div className="detail-container">
          <h2>Product not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-product">
      <div className="detail-container">
        <div className="product-image-section">
          <img src={product.image} alt={product.name} className="product-detail-image" />
        </div>
        
        <div className="product-info-section">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-id">Product ID: {product.id}</div>
          
          <div className="product-price">{product.price}DT</div>
          
          <div className="product-details">
            <h3>Details:</h3>
            {product.details && Object.entries(product.details).map(([key, value]) => (
              <div key={key} className="detail-item">
                <span className="detail-label">{key}:</span>
                <span className="detail-value">{value}</span>
              </div>
            ))}
          </div>

          <div className="quantity-selector">
            <button onClick={() => handleQuantityChange(-1)} className="quantity-btn">-</button>
            <input 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="quantity-input"
            />
            <button onClick={() => handleQuantityChange(1)} className="quantity-btn">+</button>
          </div>

          <div className="action-buttons">
            <button onClick={handleAddToCart} className="add-to-cart-btn">ADD TO CART</button>
            <button onClick={() => navigate('/donation')} className="buy-now-btn">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;