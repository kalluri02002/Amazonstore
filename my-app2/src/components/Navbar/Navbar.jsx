import { IconButton , Typography} from "@mui/material"
import {Home ,ShoppingBag} from "@mui/icons-material"
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux"
import "./Navbar.css"
export const Navbar =()=>{
  const navigate=useNavigate()
  const {cartItems} =useSelector(state =>state.cart)
    return (
      <div  className="navbar"
      
      > 
      <h1>Amazon</h1>
        <div className="left" >
          mystore
          <IconButton onClick={()=>navigate("/")} size="large">
            <Home/>
          </IconButton>
         
        </div>
        
        <div className="right">
          cart
          <IconButton onClick={()=>navigate("/cart")} size="large">
            <Typography sx={{color:"red"}}>{cartItems && cartItems.length}</Typography>
            <ShoppingBag/>
          </IconButton>
        </div>
      </div>
        
        
        
    )
}