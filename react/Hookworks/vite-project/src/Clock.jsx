import { useState } from "react";
import Counting from "./Counting";

function Clock(){
    const[clocks,setClocks]=useState(["A","B","C"]);

    function handle(){
        setClocks(["D",...clocks]);
    }
    return(
        <>
        <button onClick={handle}>Increament clocks</button>
        <div>
            {
                clocks.map(clock=><Counting key={clock} name={clock}></Counting>)
            }
        </div>
        </>
    )
}

export default Clock;