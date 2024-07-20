import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';

const ProductDetail = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.productName}
        height="300"
        image={`https://picsum.photos/400/400?random=${Math.random()}`} // Random image
      />
      <CardContent>
        <Typography variant="h3">{product.productName}</Typography>
        <Typography variant="body1">Price: ${product.price}</Typography>
        <Typography variant="body1">Rating: {product.rating}</Typography>
        <Typography variant="body1">Discount: {product.discount}%</Typography>
        <Typography variant="body1">Availability: {product.availability}</Typography>
        <Typography variant="body1">Company: {product.company}</Typography>
        <Typography variant="body1">Category: {product.category}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;