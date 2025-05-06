import { useState, useEffect } from 'react';
import laitImg from '../../../assets/lait.png';
import farinaImg from '../../../assets/farina.png';
import hlibImg from '../../../assets/hlib.jpg';
import hrissaImg from '../../../assets/hrissa.png';
import makarounaImg from '../../../assets/makarouna.png';

const dummyProducts = [
  {
    id: '619404300201',
    name: 'Farina',
    price: '1.5',
    image: farinaImg,
    details: {
      Packaging: 'Paper bag',
      Brands: 'Local',
      Categories: 'Grains, Flour',
      'Origin of ingredients': 'Tunisia',
      'Manufacturing or processing places': 'Tunisie'
    }
  },
  {
    id: '619404300202',
    name: 'Hlib Délice',
    price: '1.0',
    image: hlibImg,
    details: {
      Packaging: 'Plastic bottle',
      Brands: 'Délice',
      Categories: 'Dairy, Milk',
      Labels: 'Fresh',
      'Origin of ingredients': 'Tunisia',
      'Manufacturing or processing places': 'Tunisie'
    }
  },
  // Add more dummy products here
];

const useProducts = (productId = null) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
        
        if (productId) {
          const product = dummyProducts.find(p => p.id.toString() === productId.toString());
          if (!product) {
            throw new Error('Product not found');
          }
          setProducts([product]);
        } else {
          setProducts(dummyProducts);
        }
        
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  return {
    products,
    loading,
    error,
    filters,
    setFilters,
    product: productId ? products[0] : null
  };
};

export default useProducts;