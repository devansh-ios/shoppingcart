import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
const Product = () => {
  const [cart, setCartItem] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setCartItem(data);
 
    };
    fetchItem();
  }, [cart]);

  return (
    <>
      <span className="heading">Products....</span>
      <div className="product_container">
        {cart.map((prod)=>(
<Card image={prod.image} id={prod.id} price={prod.price} title={prod.title}/>
        ))}
      </div>
    </>
  );
};

export default Product;
