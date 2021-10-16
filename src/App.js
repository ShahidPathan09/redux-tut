import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decNumber, incNumber } from './Action/action';

function App() {
  const myState = useSelector((state) => state.changeNumber)
  console.log("mystate", myState)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div className='container'>
        <h1>Increment/Decrement counter using Redux</h1>
      </div> <br />
      <div>
        <input value={myState} /><br /><br />
        <button style={{ marginRight: '40px' }} onClick={() => { dispatch(decNumber(5)) }}>-</button>
        <button onClick={() => { dispatch(incNumber(5)) }}>+</button>
      </div>
    </div>
  );
}

export default App;
