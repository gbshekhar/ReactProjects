import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetails() {
   const params =  useParams();
  return (
    <div>
        <h2>ProductDetails - {params.productId}</h2>
        <p><Link to=".." relative="path">Back</Link></p>
    </div>
  )
}
