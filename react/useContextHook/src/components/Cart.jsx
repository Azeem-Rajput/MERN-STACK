import { useContext } from "react";
import { CartContext } from "../App";

function Cart(){
    const {cart}=useContext(CartContext)
    return(
        <h1>Total parcels:{cart}</h1>
    )
}
export default Cart;