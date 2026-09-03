import { useState } from "react"
// import Counter from "./Counter"
import Product from "./Product"

function Body(){
    const [items,setItems]=useState(
    [{id:1,name:"Milk",price:200},
        {id:2,name:"protein",price:20000},
        {id:3,name:"yougurt",price:100},
        {id:4,name:"Ghee",price:3000}]
    )
    return(
        <>
        <h1>I am the blinket body</h1>
        {/* <Counter ></Counter> */}
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"50px"}}>
            {
            items.map((item)=><Product key={item.id} item={item}></Product>)
            }
        </div>
        </>
    )
}
export default Body