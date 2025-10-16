import React, {} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';


const Prueba = (props) => {
  

  const[counters, setCounters] = useState({
    left:0,
    right:0,
    clicks: 0,
    mensaje:"mensaje en el estado"
  })
  const handleClickLeft = () =>{
    const newSetCounters = {
      ...counters,
      left:counters.left + 1,
      clicks:counters.clicks + 1 
    }
    setCounters(newSetCounters)
  }
  const handleClickRight = () =>{
    const newSetCounters1 = {
      ...counters,
      right:counters.right + 1,
      clicks:counters.clicks + 1 
    }
    setCounters(newSetCounters1)
  }

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {counters.right}
      <p>Clicks totales: {counters.clicks}</p>
      <p>{counters.mensaje}</p>
    </div>
  )
    
  ;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Prueba/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
