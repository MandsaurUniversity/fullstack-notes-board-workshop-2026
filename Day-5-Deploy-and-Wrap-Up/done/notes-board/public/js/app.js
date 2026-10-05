// app.js (Day 4)
//
// The Notes Board now talks to the server.
// The notes are kept on the server, not in this file.
// We use fetch() to ask the server for notes, to add a note and to delete one.
// The notes now stay when you refresh the page.
// The server now keeps the notes in a SQLite database, so they survive a restart.

// 1. Find the parts of the page we need to change.
const form = document.getElementById("note-form");
const titleInput = document.getElementById("note-title");
const textInput = document.getElementById("note-text");
const passwordInput = document.getElementById("note-password");
const charCount = document.getElementById("char-count");
const message = document.getElementById("form-message");
const notesList = document.getElementById("notes-list");
const noteCount = document.getElementById("note-count");

// 2. Show a short message under the form.
function showMessage(text, isError) {
  message.textContent = text;
  message.className = isError ? "message error" : "message ok";
}

// 3. Draw a list of notes on the page.
function renderNotes(notes) {
  notesList.textContent = "";

  if (notes.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "No notes yet. Add your first note above.";
    notesList.appendChild(empty);
  }

  for (const note of notes) {
    const article = document.createElement("article");
    article.className = "note";

    const heading = document.createElement("h3");
    heading.textContent = note.title;

    const body = document.createElement("p");
    body.textContent = note.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteNote(note.id);
    });

    article.appendChild(heading);
    article.appendChild(body);
    article.appendChild(deleteButton);
    notesList.appendChild(article);
  }

  noteCount.textContent = notes.length;
}

// 4. Ask the server for all notes, then draw them.
async function loadNotes() {
  try {
    const response = await fetch("/api/notes");
    const notes = await response.json();
    renderNotes(notes);
  } catch (error) {
    showMessage("Could not reach the server. Is it running?", true);
  }
}

// 5. Send a new note to the server.
async function addNote(title, text) {
  const response = await fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-notes-password": passwordInput.value
    },
    body: JSON.stringify({ title: title, text: text })
  });

  if (!response.ok) {
    const problem = await response.json();
    throw new Error(problem.error);
  }
}

// 6. Ask the server to delete a note.
async function deleteNote(id) {
  try {
    const response = await fetch("/api/notes/" + id, {
      method: "DELETE",
      headers: { "x-notes-password": passwordInput.value }
    });

    if (!response.ok) {
      const problem = await response.json();
      throw new Error(problem.error);
    }

    showMessage("Note deleted.", false);
    loadNotes();
  } catch (error) {
    showMessage(error.message, true);
  }
}

// 7. When the form is submitted, check the input and send the note.
form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  const text = textInput.value.trim();

  if (title === "" || text === "") {
    showMessage("Please write both a title and a note.", true);
    return;
  }

  try {
    await addNote(title, text);
    titleInput.value = "";
    textInput.value = "";
    charCount.textContent = "0";
    showMessage("Note added.", false);
    titleInput.focus();
    loadNotes();
  } catch (error) {
    showMessage(error.message, true);
  }
});

// 8. Show how many characters are used while the user types.
textInput.addEventListener("input", function () {
  charCount.textContent = textInput.value.length;
});

// 9. Load the notes once when the page opens.
loadNotes();
