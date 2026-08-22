

import { useState } from "react";

function App(){
  const[count,setCount]=useState([10,20,30]);

  function Handle(){
    setCount([...count,40]);
  }

  return(
    <>
    <p>This is counter for react app</p>
    <h1>Counter:{count}</h1>
    <button onClick={Handle}>Increament</button>
    </>
  )
}

export default App