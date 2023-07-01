import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <>
      <nav>
        <ul className="list">
        <span className="logo">Redux Store</span>

          <NavLink to="/" style={{textDecoration:'none'}}>
          
            <li>Product</li>
          </NavLink>
          <NavLink to="/cart" style={{textDecoration:'none'}}>
            <li>Cart :  {quantity}</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
