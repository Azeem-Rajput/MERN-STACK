import { useState } from "react";

// useState.count=2,setCount
// setCount sy aap count ki value ko update kr sakty ho,and App function ko re-render kr sakty ho

function App()
{
  let [count,setCount]=useState(0);





  function Increamentno(){
    count++;
    setCount(count);

    // console.log(count);
    // const para=document.querySelector('p');
    // para.textContent=`counter: ${count}`;
  } 

return(
  <>
  <p >counter: {count}</p>
  <button onClick={Increamentno}>increament</button>
  </>
  )
}

export default App;