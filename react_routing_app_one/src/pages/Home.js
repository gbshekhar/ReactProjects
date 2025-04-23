import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate =  useNavigate();

  function navigateHandler(){
    navigate('products');
  }
  return (
    <div>
        <h2>Home Page</h2>
        <div><Link to="products">List of Products</Link></div>
        <button onClick={navigateHandler}>Click For Products</button>
    </div>
  )
}
