// Hooks in react
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  let [counter, setCounter] = useState(0)
  let [warning_message, warn_function] = useState("")

  // let counter = 0

  const addValue = () => {
    setCounter(counter+1)
    if(counter >=0){
      warn_function("")
    }
    console.log("value added", counter)
  }

  const subtractValue = () => {
    counter = counter - 1
    if(counter < 0){
      counter = counter + 1
      console.log("Value can't be negative")
      warn_function("Value can't be negative")
      return 
    }
    else{
      console.log("value subtracted", counter)
      setCounter(counter)
    }
    
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
      <h2>
        {warning_message}
      </h2>
    </>
  )
}

export default App
