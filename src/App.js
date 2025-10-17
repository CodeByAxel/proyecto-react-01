import { Note } from './Note';
import { useEffect, useState } from 'react';
import './App.css';
export default function App() {
 const [notes, setNotes] = useState([]);
 const [newNote, setNewNote] = useState("")
 const [loading, setLoading] = useState(false)
 useEffect(()=>{
  console.log("useffect");
  setLoading(true)
  setTimeout(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(json => {
    setNotes(json);
    setLoading(false)
  })
  }, 3000)
  
 }, [])
 const handleChange = (e) =>{
  setNewNote(e.target.value);
 }
 const handleSubmit = (e) =>{
  e.preventDefault()
  const noteToAddToState = {
    id: notes.length + 1,
    title: newNote,
    body: newNote
    
    
  }
  console.log(noteToAddToState);
  setNotes([...notes, noteToAddToState])
  setNewNote("")
 }
  return (
    <div>
      <h1>Notes</h1>
      {loading ? "cargando..." : "" }
      
      <ol>
        {notes
        .map((note)=>(
          <Note key={note.id}{...note}/>
        ))
        }
      </ol>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote}></input>
        <button>Crear nota</button>
      </form>
    </div>
  );
}


