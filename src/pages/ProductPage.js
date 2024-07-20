import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId); // Assuming you have a list of products and a unique id

  return (
    <div>
      <h1>Product Detail</h1>
      {product ? <ProductDetail product={product} /> : <p>Product not found</p>}
    </div>
  );
};

export default ProductPage;