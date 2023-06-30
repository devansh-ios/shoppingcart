import React from 'react'
import { useDispatch } from 'react-redux'
import { modalActions } from '../../Store/modalSlice'
import { cartActions } from '../../Store/cartSlice'
const Modal = () => {
    const dispatch = useDispatch()
  return (
  <>
    <div className='endingContainer'>
        <div className='ending_message'>
        <p >Thank you for shopping here ..</p>
        <button className='btn' onClick={()=>{
            dispatch(modalActions.closeModal())
            dispatch(cartActions.removeAll())
        }}>Welcome</button>
    </div>
    </div>
  </>
  )
}

export default Modal