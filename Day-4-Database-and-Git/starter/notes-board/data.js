// data.js (Day 3)
//
// This file keeps the notes in memory (a JavaScript array).
// When the server stops, the notes are gone. On Day 4 we replace
// the inside of these three functions with a real database.
// The names stay the same, so server.js does not need to change much.

const notes = [
  { id: 1, title: "Welcome", text: "This note came from the server." },
  { id: 2, title: "Study plan", text: "Learn HTML on Monday, CSS on Tuesday, and JavaScript on Wednesday." }
];

let nextId = 3;

// Give back all notes, newest first.
async function listNotes() {
  return [...notes].sort(function (a, b) {
    return b.id - a.id;
  });
}

// Save a new note and give it back (with its new id).
async function addNote(title, text) {
  const note = { id: nextId, title: title, text: text };
  nextId = nextId + 1;
  notes.push(note);
  return note;
}

// Remove a note. Gives back true if it existed, false if it did not.
async function deleteNote(id) {
  const index = notes.findIndex(function (note) {
    return note.id === id;
  });

  if (index === -1) {
    return false;
  }

  notes.splice(index, 1);
  return true;
}

module.exports = { listNotes, addNote, deleteNote };
