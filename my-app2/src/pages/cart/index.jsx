import {  Typography, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import{ Add ,Remove} from "@mui/icons-material"
import { addToCart, removeFromCart } from "../../feutures/cardslice";
import "./style.css"

export const Cart =()=>{
    const {cartItems} =useSelector(state => state.cart)
    const dispatch =useDispatch()
    if (cartItems.length===0){
      return(
        <Typography>
          No items hear😊
        </Typography>
      )
    }
    return (
        <div
         className="grid-container1"
        >
        {cartItems && cartItems.length > 0
          ? cartItems.map((item) => (
              <div key={item.id} className="kall1">
                <div  >
                  <img style={{width:"100%", height:"100%"}}  src={item.thumbnail} alt="" />
                </div>
                <div >
                  <Typography>{item.title}</Typography>
                  <Typography>{item.price}</Typography>
                </div>
                <div >
                  <Typography>{item.description}</Typography>
                </div>
                <div >
                  <IconButton onClick={()=>dispatch(addToCart(item))}><Add/></IconButton>
                  <Typography>{item.quantity}</Typography>
                  <IconButton onClick={()=>dispatch(removeFromCart(item))}><Remove/></IconButton>
                </div>
              </div>
            ))
          : null}
        
      </div>
    )
}