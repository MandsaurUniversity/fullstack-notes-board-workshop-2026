// optional-postgres/data.js (Day 4, Track B)
//
// This file does the same job as data.js, but it uses PostgreSQL
// instead of SQLite. To use it:
//   1. Install PostgreSQL and create a database (see the lab sheet, Track B).
//   2. Run: npm install pg
//   3. Put DATABASE_URL in your .env file.
//   4. Copy THIS file over data.js (keep a copy of the SQLite version first).
//
// The function names are the same, so server.js does not change.

const { Pool } = require("pg");

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set. Add it to your .env file.");
  process.exit(1);
}

// Some hosting services need an encrypted connection.
// Set DATABASE_SSL=true in .env only if your host tells you to.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : false
});

async function init() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS notes (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      text TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  const result = await pool.query("SELECT COUNT(*)::int AS total FROM notes");
  if (result.rows[0].total === 0) {
    const insert = "INSERT INTO notes (title, text) VALUES ($1, $2)";
    await pool.query(insert, ["Welcome", "This note is stored in a PostgreSQL database."]);
    await pool.query(insert, ["Study plan", "Learn HTML on Monday, CSS on Tuesday, and JavaScript on Wednesday."]);
    await pool.query(insert, ["Idea", "Add your own notes. They stay after you restart the server."]);
  }
}

async function listNotes() {
  const result = await pool.query("SELECT id, title, text FROM notes ORDER BY id DESC");
  return result.rows;
}

async function addNote(title, text) {
  const result = await pool.query(
    "INSERT INTO notes (title, text) VALUES ($1, $2) RETURNING id, title, text",
    [title, text]
  );
  return result.rows[0];
}

async function deleteNote(id) {
  const result = await pool.query("DELETE FROM notes WHERE id = $1", [id]);
  return result.rowCount > 0;
}

module.exports = { init, listNotes, addNote, deleteNote };
