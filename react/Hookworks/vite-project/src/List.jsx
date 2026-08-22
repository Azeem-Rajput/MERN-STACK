import { useState } from "react";
import Food from "./Food"

function List(){
    const[fooditems,setFooditems]=useState(["Apple","melon","banana"])

    function Handle(){
        setFooditems(["Mango",...fooditems]);
    }

    return(
        <>
        <button onClick={Handle}>Increament</button>
        <Food foods={fooditems}></Food>              // this is arguments passes in function
        </>
    )
}

export default List