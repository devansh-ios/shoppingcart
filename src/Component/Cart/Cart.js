import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cartSlice";
import { useEffect } from "react";
import {modalActions} from "../../Store/modalSlice"
import Modal from "../modal/Modal";
import { useState } from "react";
const Cart = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart);
 
 


  const {isOpen}= useSelector(state=>state.modal)
  const { quantity, totalPrice, cartItems } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(cartActions.calculatePrice());
  }, [cartItems]);

  const cartHandlerRemover = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };
  if (quantity === 0) {
    return <p className="error_message"> Nothing in the cart ... :( </p>;
  }
  const clearCart = () => {
    dispatch(cartActions.removeAll());
  };

  return (
    <>
  {isOpen &&  <Modal/>}
      <h4 className="heading">Cart....</h4>
      
      <div className="cart-layout">
        {product.cartItems.map((prod) => (
          <div className="cart-item-layout" key={prod.id}>
            <img src={prod.image} alt={prod.title} />
            <h4>{prod.title}</h4>

            <div className="cart-second-container">
              <h4>INR {prod.price}</h4>
              <button
                className="btn removeBtn"
                onClick={() => cartHandlerRemover(prod.id)}
              >
                {" "}
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="total_price">
          <h4 className="tp"> total Price :-INR <em>{totalPrice.toFixed(2)}</em></h4>
          <button className="btn" onClick={() => clearCart()}>
            Remove All
          </button>
         
          <button className="btn" onClick={()=>{
            dispatch(modalActions.openModal())
          }}>Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
