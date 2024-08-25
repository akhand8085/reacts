import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//THROUGH this project we learn about the Hooks. Hooks is use to change the vale every where only by one click.
function App() {
     
  let [counter , setCounter] = useState(15)
  //let counter = 5;


  const addValue = () => {
    //counter = counter+1;
    setCounter(counter+1)
    console.log("clicked", counter);
  }


  const removeValue = () => {
    //counter = counter+1;
    setCounter(counter-1)
    console.log("clicked", counter);
  }





  return (
    <>
      <h1>Akhand pratap Singh</h1>


      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>Add value</button>


      <br />
      

      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
