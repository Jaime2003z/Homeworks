import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store/counterSlice';
import './App.css';
export const App = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [incrementValue, setIncrementValue] = useState(0);

  const handleIncrementBy = () => {
    if (incrementValue !== 0) {
      dispatch(incrementByAmount(Number(incrementValue)));
    }
  };

  return (
    <div className='App-header'>
      <h2>Counter with increment by a choose value</h2>
      <br />


      <div className='counter'>
        <button onClick={() => dispatch(decrement())}>
          -
        </button>
        <span>Counter: {counter}</span>
        <button onClick={() => dispatch(increment())}>
          +
        </button>
      </div>

      <div>
        <input
          type="number"
          value={incrementValue}
          onChange={(e) => setIncrementValue(e.target.value)}
        />
        <button onClick={handleIncrementBy}>
          Choose Value
        </button>
      </div>
    </div>
  );
};

export default App;

