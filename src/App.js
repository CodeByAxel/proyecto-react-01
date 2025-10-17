
import './App.css';
const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]
function App(props) {
  return (
    <div className="App">
     <h1>Clase 4 del bootcamp</h1>
     <div>{notes.map((note)=>{
      return <p>{note.id} {note.content}</p>;
     })}</div>
    </div>
  );
}

export default App;
