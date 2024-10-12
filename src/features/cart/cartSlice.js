import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts : [],
    cartCount: 0,
    
}
 
let cartNo = 1

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartProducts.push(action.payload)
            state.cartCount = state.cartProducts.length
            
        },


    }
})


export const {addToCart} = cartSlice.actions
export default cartSlice.reducer