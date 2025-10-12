import Mensaje from "./mensaje.js";
import './App.css';

function App() {
  
  const Description = () =>{
    return <p>Esta es la app de curso fullstack bootcamp</p>
  }
  return (
    <div className="App">
      <h1>titulo de la app</h1>
      <Mensaje color="red" message="Estamos trabajando"/>
      <Mensaje color="green" message="En un curso"/>
      <Mensaje color="yellow" message="De React"/>
      <Description/>
    </div>
  );
}

export default App;
