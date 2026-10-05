// server.js (Day 3)
//
// The Notes Board server, written with Express.
// It does two jobs:
//   1. It sends our web pages (the files in the "public" folder).
//   2. It offers an API: a way for JavaScript in the browser to
//      read, add and delete notes.
//
// Run it:   node server.js
// Open it:  http://localhost:3000

const path = require("node:path");
const express = require("express");
const { listNotes, addNote, deleteNote } = require("./data");

// Read the private settings from the .env file, if there is one.
// (On a hosting service the settings come from the service itself.)
try {
  process.loadEnvFile();
} catch (error) {
  console.log("No .env file found. Using the settings of this computer.");
}

const PASSWORD = process.env.NOTES_PASSWORD;
const PORT = process.env.PORT || 3000;

// Stop early with a clear message if the password is missing.
if (!PASSWORD) {
  console.error("NOTES_PASSWORD is not set.");
  console.error("Copy .env.example to .env and write a password in it.");
  process.exit(1);
}

const app = express();

// Let the server read JSON sent by the browser.
app.use(express.json());

// Send the web pages.
app.use(express.static(path.join(__dirname, "public")));

// A small helper: only let a request continue if the password is right.
function requirePassword(request, response, next) {
  if (request.get("x-notes-password") !== PASSWORD) {
    response.status(401).json({ error: "Wrong password." });
    return;
  }
  next();
}

// API 1: read all notes (public, no password).
app.get("/api/notes", async function (request, response) {
  const notes = await listNotes();
  response.json(notes);
});

// API 2: add a note (password needed).
app.post("/api/notes", requirePassword, async function (request, response) {
  const title = String(request.body.title || "").trim();
  const text = String(request.body.text || "").trim();

  if (title === "" || text === "") {
    response.status(400).json({ error: "Please write both a title and a note." });
    return;
  }
  if (title.length > 60 || text.length > 300) {
    response.status(400).json({ error: "The title or the note is too long." });
    return;
  }

  const note = await addNote(title, text);
  response.status(201).json(note);
});

// API 3: delete a note (password needed).
app.delete("/api/notes/:id", requirePassword, async function (request, response) {
  const id = Number(request.params.id);
  const found = await deleteNote(id);

  if (!found) {
    response.status(404).json({ error: "That note does not exist." });
    return;
  }
  response.status(204).end();
});

app.listen(PORT, function (error) {
  if (error) {
    console.error("Could not start the server: " + error.message);
    console.error("Is another server already using port " + PORT + "?");
    process.exit(1);
  }
  console.log("Notes Board is running. Open http://localhost:" + PORT);
});
