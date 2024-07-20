import React from 'react';
import ProductList from '../components/ProductList';

const AllProducts = () => {
  // Example state values; you can manage this state using hooks or context as needed
  const company = 'AMZ';
  const category = 'Laptop';
  const top = 10;
  const minPrice = 1;
  const maxPrice = 10000;

  return (
    <div>
      <h1>All Products</h1>
      <ProductList
        company={company}
        category={category}
        top={top}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
    </div>
  );
};

export default AllProducts;