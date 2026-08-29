import { useState } from 'react'

function App() {
  const [time, setTime] = useState(0)

  function handleStart(){
    setInterval(()=>{
      setTime(time+1)
    },1000)
  }
  return (
    <>
     <h1>Stopwatch: {time}</h1>
     <button onClick={handleStart}>start</button>
     <button>stop</button>
     <button>reset</button>
    </>
  )
}

export default App
