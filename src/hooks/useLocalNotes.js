// Note: This is an optional file in the instructions. 
// Thus, its creation is optional, but provided here for potential usage.

import { useState, useEffect } from 'react';

export default function useLocalNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addOrUpdateNote = (note, index = null) => {
    if (index !== null) {
      const updatedNotes = [...notes];
      updatedNotes[index] = note;
      setNotes(updatedNotes);
    } else {
      setNotes([...notes, note]);
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return {
    notes,
    addOrUpdateNote,
    deleteNote,
  };
}