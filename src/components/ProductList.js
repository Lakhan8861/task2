import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductCard from './ProductCard';

const ProductList = ({ company, category, top, minPrice, maxPrice }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(company, category, top, minPrice, maxPrice);
      setProducts(data);
    };

    fetchProducts();
  }, [company, category, top, minPrice, maxPrice]);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={`${product.productName}-${Math.random()}`} product={product} />
      ))}
    </div>
  );
};

export default ProductList;