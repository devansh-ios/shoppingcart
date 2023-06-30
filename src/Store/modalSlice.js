import { createSlice } from "@reduxjs/toolkit";
 const initialState=({
    isOpen:false
})    

const modalSlice = createSlice({
    name:"modal",
    initialState,
    reducers:{
        openModal(state){
state.isOpen=true
        },
        closeModal(state){
state.isOpen=false
        }

    }
})
export default modalSlice 
export const modalActions = modalSlice.actions