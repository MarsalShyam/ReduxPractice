import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { decrement,increment } from './counter/counterSlice'

function App() {
  const count=useSelector((state) => state.counter.value);
  const dispatch = useDispatch()


  return (
    <>
      <div>
        <p>the count of number is {count}</p>
        <button onClick={()=>{dispatch(increment())}}>Incre</button>
        <button onClick={()=>dispatch(decrement())}>Decre</button>
      </div>
    </>
  )
}

export default App
