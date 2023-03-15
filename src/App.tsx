import React from 'react';import './App.css';
import { useSelector } from 'react-redux';
import { NewNoteInput } from './NewNoteInput';
import { NotesState } from './noteReducer';
import { useDispatch } from 'react-redux';
import { addNote } from './actions';

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)
  const dispatch = useDispatch();

  const onAddNote = (note:string) => {
    dispatch(addNote(note))
  }

  return (
    <div className="App">
      <NewNoteInput addNote={onAddNote}/>
      <hr />
      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
        <li>Some Notes</li>
      </ul>
    </div>
  );
}

export default App;
