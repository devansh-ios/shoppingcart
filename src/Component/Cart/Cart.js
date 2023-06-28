import React from 'react'
 import {  useSelector } from 'react-redux/es/hooks/useSelector'
const Cart = () => {
  const quantity= useSelector(state=>state.cartItems)
 const cardItem = useSelector(state=>state.cardItem)
  if(quantity===0){
  return(
    <p className='error_message'>Nothing in the Cart... :(</p>
  )
}
  return (
    <>
    <h4 className='heading'>Cart....
    
    </h4>
    {cardItem.map((prod)=>(
<>
<h1>hello</h1>
</>
    ))}


 


  </>
  )
}

export default Cart