import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'; 
import farinaImg from "../../assets/farina.png";
import hlibImg from "../../assets/hlib.jpg";
import hrissaImg from "../../assets/hrissa.png";
import makarounaImg from "../../assets/makarouna.png";
import ProductModal from './ProductModal';
import AddtoModal from './AddtoModal'; 

const products = [
  { id: '619404300201', name: "Farina", price: "1DT", image: farinaImg, details: {
    Packaging: 'Paper bag',
    Brands: 'Local',
    Categories: 'Grains, Flour',
    'Origin of ingredients': 'Tunisia',
    'Manufacturing or processing places': 'Tunisie'
  } },
  { id: '619404300202', name: "Hlib Délice", price: "1DT", image: hlibImg, details: {
    Packaging: 'Plastic bottle',
    Brands: 'Délice',
    Categories: 'Dairy, Milk',
    Labels: 'Fresh',
    'Origin of ingredients': 'Tunisia',
    'Manufacturing or processing places': 'Tunisie'
  } },
  { id: '3', name: "Hrissa", price: "1DT", image: hrissaImg },
  { id: '4', name: "Makarouna", price: "1DT", image: makarounaImg },
  { id: 5, name: "Farina", price: "1DT", image: farinaImg },
  { id: 6, name: "Hlib Délice", price: "1DT", image: hlibImg },
  { id: 7, name: "Hrissa", price: "1DT", image: hrissaImg },
  { id: 8, name: "Makarouna", price: "1DT", image: makarounaImg },
  { id: 9, name: "Hlib Délice", price: "1DT", image: hlibImg },
];

const Product = () => {
  const navigate = useNavigate();
  const [modalProduct, setModalProduct] = useState(null);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id} onClick={() => handleProductClick(product)}>
          <div className="product-image-container">
            <img src={product.image} alt={product.name} className="product-image" />
          </div>
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;