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
 <div className='cart-layout'>
 {product.cartItems.map((prod)=>(
 
  <div className="cart-item-layout" key={prod.id}>
    <img src={prod.image} alt={prod.title} />
   <h4>{prod.title}</h4>
    <button className='btn'>+</button>
    <p>{product.quantity}</p>
    <button className='btn'>-</button>
    
    <button className='btn' onClick={()=>cartHandlerRemover(prod.id)}> Remove</button>

  </div>
 )) }
 </div>


 
  

 


  </>
  )
}

export default Cart