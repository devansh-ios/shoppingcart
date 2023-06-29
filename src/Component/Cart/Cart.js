import React from 'react'
 import {  useSelector } from 'react-redux/es/hooks/useSelector'
const Cart = () => {
  const product= useSelector(state=>state.cartItems)
 
  return (
    <>
    <h4 className='heading'>Cart....
    
    </h4>
   
  

 


  </>
  )
}

export default Cart