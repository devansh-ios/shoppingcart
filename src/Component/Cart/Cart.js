import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart);
  const quantity = useSelector((state) => state.cart.quantity);
  const cartHandlerRemover = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };
  if (quantity === 0) {
    return <p className="error_message"> Nothing in the cart  ... :( </p>;
  }

  return (
    <>
      <h4 className="heading">Cart....</h4>
      <div className="cart-layout">
        {product.cartItems.map((prod) => (
          <div className="cart-item-layout" key={prod.id}>
            <img src={prod.image} alt={prod.title} />
            <h4>{prod.title}</h4>

            <div className="cart-second-container">
              <button
                className="btn"
                onClick={() => cartHandlerRemover(prod.id)}
              >
                {" "}
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
