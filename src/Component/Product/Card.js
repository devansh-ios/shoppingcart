import React from 'react'

const Card = ({image,price,title,id}) => {
  return (
 <>
    <div className='cart-item'>
        <img src={image}/>
        
    </div>
 </>
  )
}

export default Card