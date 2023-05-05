import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    cartItems : []
}
const cartSlice =createSlice({
    name:'cart',
    initialState,
    reducers :{
        addToCart :(state,action)=>{
            const {payload}=action;
            const {id}=payload
            let cpycurrentcartItems=[...state.cartItems]
            const index =cpycurrentcartItems.findIndex(item=>item.id ===id)
            if (index === -1){
                cpycurrentcartItems.push({
                    ...payload,
                    quantity:1
                })
            }else{
                cpycurrentcartItems[index]={
                    ...cpycurrentcartItems[index],
                    quantity:cpycurrentcartItems[index].quantity +1
                }
            }
            state.cartItems=cpycurrentcartItems
            console.log(state,action)

        },
        removeFromCart : (state,action)=>{
            const {payload}=action
            let updateCurrentItemAfter=[...state.cartItems]
            const indexOfRemovedItem=updateCurrentItemAfter.findIndex(item=>item.id===payload.id)
            const {quantity}=updateCurrentItemAfter[indexOfRemovedItem]
            if (quantity<=1){
                updateCurrentItemAfter=updateCurrentItemAfter.filter(item=>item.id !== payload.id)

            }
            else{
                updateCurrentItemAfter[indexOfRemovedItem]={
                    ...updateCurrentItemAfter[indexOfRemovedItem],
                    quantity:updateCurrentItemAfter[indexOfRemovedItem].quantity-1
                }
            }
            state.cartItems=updateCurrentItemAfter

        }
    }

})
export const { addToCart,removeFromCart }=cartSlice.actions
export default cartSlice.reducer
