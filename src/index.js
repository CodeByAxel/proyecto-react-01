import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';
function Prueba(props) {
  const [contador, updateContador] = useState(0);
  //const contador = useState(0)
  //const contadorValue =  contador[0];
  //const updateContador =  contador[1];
  setInterval(()=>{
    updateContador(contador + 1)
  },2000)

  return (
    <div className="App">
     <h1>{contador}</h1>
    </div>
  );
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
