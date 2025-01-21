import React from 'react';

export default function NoteList({ notes, handleEditNote, handleDeleteNote }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {notes.map((note, index) => (
        <div key={index} className="p-4 bg-white rounded shadow">
          <h2 className="font-bold text-lg">{note.title}</h2>
          <p className="text-sm text-gray-600 mt-2">{note.content}</p>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={() => handleEditNote(index)}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteNote(index)}
              className="text-red-600 hover:underline cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}