import React from 'react';
import { Link } from 'react-router-dom';
const ProductList = [
    {id:'p1', title:'product-1'},
    {id:'p2', title:'product-2'},
    {id:'p3', title:'product-3'}];

export default function Products() {
  return (
    <>
        <h2>Products Page</h2>
        <ul>
            {ProductList.map(product => (
                <li key={product.id}><Link to={product.id}>{product.title}</Link></li>
            ))}
        </ul>
    </>
  )
}
