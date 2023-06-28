import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../Store/cartSlice';
const Card = ({id,image,title,price}) => {
  
  const dispatch = useDispatch();
  return (
 <>
    <div className='cart-item' key={id}>
        <img src={image} alt={title}/>
        <h4>{title}</h4>
        <h4>Rs:- {price}</h4>
        <button onClick={()=>{
dispatch(cartActions.addTocart())
        }}> Add to cart</button>
        
    </div>
 </>
  )
}

export default Card