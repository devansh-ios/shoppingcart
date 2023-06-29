import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cartSlice";
import Card from "./Card";
const Product = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, []);
 

  return (
    <>
      <span className="heading">Products....</span>
      <div className="product_container">
        {product.map((prod) => (
     <Card key={prod.id} prod={prod} {...prod}/>
        ))}
      </div>
    </>
  );
};

export default Product;
