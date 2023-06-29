import React from "react";
import { useState, useEffect } from "react";
 
 
import Card from "./Card";

const Product = () => {
 
const [loading,setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {

      try{
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
      }
      catch(err){
setLoading(false)

      }
    };
    fetchProduct();
  }, []);
 

  return (
    <>
      <span className="heading">Products....</span>


      {!loading && <p className="error_message"> Failed to fetch the product</p>}
      <div className="product_container">
        {product.map((prod) => (
     <Card key={prod.id} prod={prod} {...prod}/>
        ))}
      </div>
    </>
  );
};

export default Product;
