import React from 'react';
import './ProductFilters.css';

const CATEGORIES = [
  { value: 'all', label: 'All Products' },
  { value: 'dairy', label: 'Dairy' },
  { value: 'condiments', label: 'Condiments' },
  { value: 'grains', label: 'Grains' },
  { value: 'pasta', label: 'Pasta' }
];

const SORT_OPTIONS = [
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' }
];

const ProductFilters = ({ filters, onFilterChange }) => {
  const handleCategoryChange = (e) => {
    onFilterChange({ ...filters, category: e.target.value });
  };

  const handleSortChange = (e) => {
    const [sortBy, order] = e.target.value.split('-');
    onFilterChange({ ...filters, sortBy, order });
  };

  return (
    <div className="product-filters">
      <select 
        value={filters.category} 
        onChange={handleCategoryChange}
        className="filter-select"
      >
        {CATEGORIES.map(category => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>

      <select 
        value={`${filters.sortBy}-${filters.order}`}
        onChange={handleSortChange}
        className="filter-select"
      >
        {SORT_OPTIONS.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilters;