// Hooks in react
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  let [counter, setCounter] = useState(0)

  // let counter = 0

  const addValue = () => {
    setCounter(counter+1)
    console.log("value added", counter)
  }

  const subtractValue = () => {
    counter = counter - 1
    console.log("value subtracted", counter)
    setCounter(counter)
  }

  return (
    <>
      <h1>
        Chai aur react
      </h1>
      <h2>
        counter value: {counter}
      </h2>
      <button onClick={addValue}> Add value_{counter}</button><br/><br></br>
      <button onClick={subtractValue}> Subtract value_{counter}</button><br/><br></br>
    </>
  )
}

export default App
