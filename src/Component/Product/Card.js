import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../Store/cartSlice'
const Card = ({image,title,price,id,prod}) => {
    const dispatch = useDispatch()

    const cartHandler=(prod)=>{
    dispatch(cartActions.addTocart(prod))
}
  return (
    <div className="cart-item" key={id}>
    <img src={image} alt={title} />
    <h4>{title}</h4>
    <h4>Rs:- {price}</h4>
    <button onClick={()=>cartHandler(prod)}> Add to cart</button>
  </div>
  )
}

export default Card