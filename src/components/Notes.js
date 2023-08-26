import React, { useState } from 'react';

function Notes() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div>
      <h3>Notas</h3>
      {notes.map((note, index) => (
        <p key={index}>{note}</p>
      ))}
      <button onClick={() => addNote('Nova Nota')}>Adicionar Nota</button>
    </div>
  );
}

export default Notes;
