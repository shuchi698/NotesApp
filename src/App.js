import React, {useState, useEffect} from 'react';
import './App.css';

import Header from "./components/Header";
import Form from "./components/Form";
import NotesList from './components/NotesList';

const App=()=> {
  const initialState=JSON.parse(localStorage.getItem("notes"))||[];
  const [input,setInput] = useState("");
  const [notes, setNotes] = useState(initialState);
  const [editNote, setEditNote]=useState(null);

  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notes))
  },[notes])
  return (
    <div className="container">
      <div className="app-wrapper">
      <div>
        <Header />
        </div>
        <div>
        <Form 
        input={input}
        setInput={setInput}
        notes={notes}
        setNotes={setNotes}
        editNote={editNote}
        setEditNote={setEditNote}
        />
      </div>
      <div>
        <NotesList notes={notes}  setNotes={setNotes} setEditNote={setEditNote}/>
      </div>
      </div>
     
    </div>
  );
}

export default App;
