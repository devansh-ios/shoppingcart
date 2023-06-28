import React from "react";

import Card from "./Card";
import { useSelector } from "react-redux";
const Product = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <span className="heading">Products....</span>
      <div className="product_container">
        {cartItems.map((prod) => (
          <Card key={prod.id} {...prod} />
        ))}
      </div>
    </>
  );
};

export default Product;
