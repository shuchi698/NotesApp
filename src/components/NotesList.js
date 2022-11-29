import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NotesList = ({notes,setNotes,setEditNote}) =>{
    const handleEdit =({id})=>{
        const findNote=notes.find((note)=>note.id===id);
        setEditNote(findNote);
    }
    const handleDelete=({id})=>{
        setNotes(notes.filter((note)=>note.id !==id))
    }

    return(
        <div>
           {notes.map((note)=>(
            <li className="list-item" key={note.id}>
                <input 
                type="text" 
                value={note.title} 
                className="list" 
                onChange={(event)=>event.preventDefault()}
                />
                <div>
                    <button className="button-edit task-button" onClick={()=>handleEdit(note)}>
                    <i className="fa fa-edit"/>
                    </button>
                    <button className="button-delete task-button" onClick={()=>handleDelete(note)}>
                    <i className="fa fa-trash" />
                    </button>
                </div>
            </li>
           ))}
        </div>
    )
}

export default NotesList;