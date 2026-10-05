// data.js (Day 4)
//
// The notes now live in a real database: SQLite.
// SQLite keeps everything in one file (notes.sqlite), so the notes
// stay even when the server stops.
//
// The three functions have the same names as on Day 3,
// so server.js only needs a small change.

const { DatabaseSync } = require("node:sqlite");

const databaseFile = process.env.DATABASE_FILE || "notes.sqlite";
const db = new DatabaseSync(databaseFile);

// Create the table (if it does not exist yet) and add 3 starter notes
// when the table is empty. This also makes a fresh server useful at once.
async function init() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      text TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const row = db.prepare("SELECT COUNT(*) AS total FROM notes").get();
  if (row.total === 0) {
    const insert = db.prepare("INSERT INTO notes (title, text) VALUES (?, ?)");
    insert.run("Welcome", "This note is stored in a SQLite database.");
    insert.run("Study plan", "Learn HTML on Monday, CSS on Tuesday, and JavaScript on Wednesday.");
    insert.run("Idea", "Add your own notes. They stay after you restart the server.");
  }
}

// Give back all notes, newest first.
async function listNotes() {
  return db.prepare("SELECT id, title, text FROM notes ORDER BY id DESC").all();
}

// Save a new note and give it back (with its new id).
async function addNote(title, text) {
  const result = db
    .prepare("INSERT INTO notes (title, text) VALUES (?, ?)")
    .run(title, text);
  return { id: Number(result.lastInsertRowid), title: title, text: text };
}

// Remove a note. Gives back true if it existed, false if it did not.
async function deleteNote(id) {
  const result = db.prepare("DELETE FROM notes WHERE id = ?").run(id);
  return result.changes > 0;
}

module.exports = { init, listNotes, addNote, deleteNote };
