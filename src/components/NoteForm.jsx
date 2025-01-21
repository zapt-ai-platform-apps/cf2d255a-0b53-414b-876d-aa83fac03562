import React from 'react';

export default function NoteForm({
  showForm,
  formData,
  setFormData,
  handleSaveNote,
  resetForm,
  selectedNote,
}) {
  if (!showForm) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-11/12 md:w-1/2">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {selectedNote !== null ? 'Edit Note' : 'New Note'}
        </h2>
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full border border-gray-300 rounded p-2 box-border"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-1">Content</label>
          <textarea
            rows="5"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full border border-gray-300 rounded p-2 box-border"
          ></textarea>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={resetForm}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveNote}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}