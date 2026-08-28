import { useCallback, useMemo, useState } from 'react'
import Sum from './Sum'
import Post from './Post'


function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(100000)

  const prime=useMemo(()=>{
    let total=0;

    if(number>1)
    {
      total++;
    }
    for(let i=3;i<=number;i++)
    {
      total++;
      for(let j=2;j<i;j++)
      {
        if(i%j==0)
        {
          total--;
          break;
        }
      }
    }
    return total;
  },[number])

  const handleClick=useCallback(()=>{
    console.log("Handle some events", count)
  },[count])


  const obj=useMemo(()=>{
    return {name:'Azeem',age:20}
  },[])

  console.log("App render")
  return (
    <>
    <h1>Counter:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increament</button>
    <h2>Your current number is: {number}</h2>
    <button onClick={()=>setNumber(number+10000)}>Increament</button>
    <h3>Total prime numbers: {prime}</h3>
    <button onClick={handleClick}>click</button>
    <Sum number={number}></Sum>
    <Post value={obj}></Post>
    
    </>
  )
  
}

export default App
