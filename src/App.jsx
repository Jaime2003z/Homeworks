import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <>
      <div className="card">
        <h1>Counter</h1>
        <p>{counter}</p>
        <button style={{width:"150px"}} onClick={handleSubstract}>SUBTRACTION</button>
        <button style={{marginLeft:"10px", width:"150px"}} onClick={() => setCounter((count) => count + 1)}>ADDITION</button>
        <br /> <br />
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default App
