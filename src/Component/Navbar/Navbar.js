import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Navbar = () => {
  const amount = useSelector(state=>state.cart.total)
  return (
    <>
      <nav>
        <ul className="list">
        <span className="logo">Redux Store</span>

          <NavLink to="/" style={{textDecoration:'none'}}>
          
            <li>Product</li>
          </NavLink>
          <NavLink to="/cart" style={{textDecoration:'none'}}>
            <li>Cart :  {amount}</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
