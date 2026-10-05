// app.js (Day 2)
//
// The Notes Board now works in the browser.
// Our notes live in a JavaScript array. When you refresh the page,
// the array is created again and your new notes are lost.
// On Days 3 and 4 we fix this with a server and a database.

// 1. Data: a list (array) of notes. Each note is an object.
const notes = [
  { id: 1, title: "Welcome", text: "This is a sample note. Try adding your own." },
  { id: 2, title: "Study plan", text: "Learn HTML on Monday, CSS on Tuesday, and JavaScript on Wednesday." }
];

let nextId = 3;

// 2. Find the parts of the page we need to change.
const form = document.getElementById("note-form");
const titleInput = document.getElementById("note-title");
const textInput = document.getElementById("note-text");
const charCount = document.getElementById("char-count");
const message = document.getElementById("form-message");
const notesList = document.getElementById("notes-list");
const noteCount = document.getElementById("note-count");

// 3. Show a short message under the form.
function showMessage(text, isError) {
  message.textContent = text;
  message.className = isError ? "message error" : "message ok";
}

// 4. Draw all notes on the page.
function renderNotes() {
  // Remove what is on the page now, then draw again from the array.
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

// 5. Add a note to the array (newest note first).
function addNote(title, text) {
  const note = { id: nextId, title: title, text: text };
  nextId = nextId + 1;
  notes.unshift(note);
  renderNotes();
}

// 6. Remove a note from the array.
function deleteNote(id) {
  const index = notes.findIndex(function (note) {
    return note.id === id;
  });

  if (index !== -1) {
    notes.splice(index, 1);
  }

  renderNotes();
}

// 7. When the form is submitted, check the input and add the note.
form.addEventListener("submit", function (event) {
  // Stop the browser from reloading the page.
  event.preventDefault();

  const title = titleInput.value.trim();
  const text = textInput.value.trim();

  if (title === "" || text === "") {
    showMessage("Please write both a title and a note.", true);
    return;
  }

  addNote(title, text);
  form.reset();
  charCount.textContent = "0";
  showMessage("Note added.", false);
  titleInput.focus();
});

// 8. Show how many characters are used while the user types.
textInput.addEventListener("input", function () {
  charCount.textContent = textInput.value.length;
});

// 9. Draw the notes once when the page opens.
renderNotes();
