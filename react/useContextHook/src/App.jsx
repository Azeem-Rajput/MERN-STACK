import { useState, createContext} from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'


// export const Context=createContext()

export const CartContext =createContext()
function App() {
  // const [count, setCount] = useState(0)
  const[cart,setCart]=useState(0);
  return (
    <>
    {/* <Context value={{count,setCount}}> */}
    <CartContext value={{cart,setCart}}>
     <Header />
     <Body />
     <Footer/>
     </CartContext>
     {/* </Context> */}
    </>
  )
}

export default App
