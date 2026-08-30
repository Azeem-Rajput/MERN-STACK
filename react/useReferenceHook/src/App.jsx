import { useRef, useState } from 'react'

function App() {
  const [time, setTime] = useState(0)

  const intervalIdRef=useRef(null);

  function handleStart(){
    if(intervalIdRef.current!=null)
    {
      return;
    }
    intervalIdRef.current=setInterval(()=>{
      setTime(time=>time+1)
    },1000)
  }
  function handleStop(){
    clearInterval(intervalIdRef.current);
    intervalIdRef.current=null;
  }
  function handleReset(){
    clearInterval(intervalIdRef.current);
    setTime(0);
  }
  return (
    <>
     <h1>Stopwatch: {time}</h1>
     <button onClick={handleStart}>start</button>
     <button onClick={handleStop}>stop</button>
     <button onClick={handleReset}>reset</button>
    </>
  )
}

export default App
