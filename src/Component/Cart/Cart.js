import React from 'react'
 import {  useSelector } from 'react-redux/es/hooks/useSelector'
 import { useDispatch } from 'react-redux'
import { cartActions } from '../../Store/cartSlice'
 const Cart = () => {
  const dispatch = useDispatch()
  const product= useSelector(state=>state.cart)

 const cartHandlerRemover=(id)=>{
dispatch(cartActions.removeFromCart(id))
}
  return (
    <>
    <h4 className='heading'>Cart....</h4>
 {product.cartItems.map((prod)=>(
 
  <div className="cart-item" key={prod.id}>
    <img src={prod.image} alt={prod.title} />
    <h4>Rs:- {prod.price}</h4>
    <button onClick={()=>cartHandlerRemover(prod.id)}> Remove</button>
  </div>
 )) }


 
  

 


  </>
  )
}

export default Cart