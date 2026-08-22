import { useState } from "react"


function Counting({name}){
    const[counts,setCounts]=useState(0);
    return(
        <>
        <div>
        <p>Our first counter app is: {name}</p>
        <h2>Counter: {counts}</h2>
        <button onClick={()=>setCounts(counts+1)}>Increament</button>
        </div>
        </>
    )
}

export default Counting;