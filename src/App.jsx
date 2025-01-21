import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', content: '' });

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleSaveNote = () => {
    if (selectedNote !== null) {
      const updatedNotes = [...notes];
      updatedNotes[selectedNote] = {
        title: formData.title,
        content: formData.content,
      };
      setNotes(updatedNotes);
    } else {
      setNotes([...notes, { title: formData.title, content: formData.content }]);
    }
    resetForm();
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const handleEditNote = (index) => {
    setSelectedNote(index);
    setFormData({ ...notes[index] });
    setShowForm(true);
  };

  const handleNewNote = () => {
    resetForm();
    setShowForm(true);
  };

  const resetForm = () => {
    setSelectedNote(null);
    setFormData({ title: '', content: '' });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">My Notes</h1>
      </header>

      <NoteList
        notes={notes}
        handleEditNote={handleEditNote}
        handleDeleteNote={handleDeleteNote}
      />

      <button
        onClick={handleNewNote}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 text-2xl flex items-center justify-center cursor-pointer"
      >
        +
      </button>

      <NoteForm
        showForm={showForm}
        formData={formData}
        setFormData={setFormData}
        handleSaveNote={handleSaveNote}
        resetForm={resetForm}
        selectedNote={selectedNote}
      />
    </div>
  );
}