import { useContext, useState } from "react"
import { CartContext } from "../App";

function Product({item}){
    const[btn,setBtn]=useState(false);
    const {cart,setCart}=useContext(CartContext)
    return(
        <>
        <div>
        <h1>Name: {item.name}</h1>
        <h1>price: {item.price}</h1>
        
        {
            btn ? <button onClick={()=>{setBtn(false),setCart(cart=>cart-1)}}>Remove</button> : <button onClick={()=>{setBtn(true),setCart(cart=>cart+1)}}>Add</button>
        }
        </div>
        </>
    )
}
export default Product;