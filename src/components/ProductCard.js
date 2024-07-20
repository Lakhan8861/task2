import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.productName}
        height="140"
        image={`https://picsum.photos/200/300?random=${Math.random()}`}     />
    
      <CardContent>
        <Typography variant="h5">{product.productName}</Typography>
        <Typography variant="body2">Price: ${product.price}</Typography>
        <Typography variant="body2">Rating: {product.rating}</Typography>
        <Typography variant="body2">Discount: {product.discount}%</Typography>
        <Typography variant="body2">Availability: {product.availability}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;