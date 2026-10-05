# Day 3 Stuck Sheet: "If you see this, do this"

Before you call your instructor, try the fix on this page. Most problems today have a small, known fix.

**First, try these every time:**

1. Save the file (**Ctrl + S**). Check that you saved the **right file** in the **right folder**.
2. If you changed `server.js`, `data.js` or `.env`: press **Ctrl + C** in the terminal, then type `node server.js` again. A running server does not reload by itself.
3. If you changed a file in `public`: refresh the browser with **Ctrl + F5**.
4. Read the **red message** in the terminal or in the browser Console (press **F12**). It usually names the file and the line number.
5. Compare your code with the lab sheet, one line at a time.

---

## Part A: npm and packages

### Problem 1: `'npm' is not recognized as an internal or external command`

**Why it happens:** The terminal does not know about Node.js and npm. It started before they were installed.

**Fix:** Do the same fix as Day 2, Problem 1. Close VS Code completely, open it again, open a new **Command Prompt** terminal, and type `npm -v`.

---

### Problem 2: `npm install express` shows red error lines

**Why it happens:** npm downloads Express from the internet. If the network is slow or busy, the download can fail. The error lines usually start with `npm error` (older versions write `npm ERR!`).

**Fix:**

1. Check that the browser can open a web page on your computer.
2. Wait a little and run `npm install express` again.
3. Still failing? Raise your hand. Your instructor may give you a zipped `node_modules` folder and will tell you the steps.

---

### Problem 3: A red message says `running scripts is disabled on this system`

**Why it happens:** You are in **PowerShell**.

**Fix:** Switch to **Command Prompt**: click the small **down arrow** next to the **+** icon in the terminal panel and choose **Command Prompt**. Then type the command again.

---

### Problem 4: `Error: Cannot find module 'express'`

**Why it happens:** Node.js cannot find the Express package. Usually Express was not installed in this folder, or you are in the wrong folder.

**Fix:**

1. Type `dir`. Do you see `node_modules` and `package.json` in the list?
2. If not, you are in the wrong folder, or Express is not installed. Go to the project folder with `cd` (it is `notes-board`), and run:

```
npm install express
```

3. Run `node server.js` again.

---

### Problem 5: My `node_modules` and `package.json` are in the wrong folder

**Why it happens:** You ran `npm init -y` or `npm install express` from the `Workshop` folder (or another folder) and not from `notes-board`. You can see `node_modules` and `package.json` next to the `notes-board` folder.

**Fix:**

1. In VS Code, delete the wrong `node_modules` folder, the wrong `package.json` and the wrong `package-lock.json` (right-click, then **Delete**). Do **not** delete `notes-board`.
2. In the terminal, type `cd notes-board`, then `dir`. Check that you see `public`.
3. Do Part 2 of the lab sheet again.

---

## Part B: Starting the server

### Problem 6: `Cannot find module 'C:\...\server.js'`

**Why it happens:** You are in the wrong folder. Node.js looks for `server.js` in the current folder.

**Fix:** Type `dir`. If you do not see `server.js`, use `cd` to go to `notes-board`. Also check that `server.js` is not inside `public` or inside another folder.

---

### Problem 7: `Error: Cannot find module './data'`

**Why it happens:** `server.js` asks for `data.js`, and `data.js` is not in the same folder as `server.js`.

**Fix:** Both files must be directly inside `notes-board`. Check that `data.js` is not inside `public`, and that the name is spelled exactly `data.js`.

---

### Problem 8: `NOTES_PASSWORD is not set.`

**Why it happens:** The server could not find a password. This is the safety check working.

**Fix:**

1. Is there a file named exactly `.env` in `notes-board`? (See Problem 9 if it is named `.env.txt`.)
2. Open `.env`. Is the first line `NOTES_PASSWORD=` followed by your password, with no empty value?
3. Is `.env` in `notes-board` and not in `public`?
4. Save the file and run `node server.js` again.

If `.env` does not exist, make it with `copy .env.example .env` and write your own password in it.

---

### Problem 9: My `.env` file was saved as `.env.txt`

**Why it happens:** Notepad adds `.txt` to a name when it saves. The server looks for a file named exactly `.env`, so it does not find it. You will see `No .env file found.` and then `NOTES_PASSWORD is not set.`

**Fix:**

1. In the VS Code file list, find the file. If you see `.env.txt`, right-click it and choose **Rename**.
2. Change the name to `.env` (no `.txt`).
3. In the future, create it only in VS Code, or with the command `copy .env.example .env`.

Tip: Windows File Explorer can hide file extensions, so a `.txt` at the end may be invisible there. The VS Code file list shows the full name.

---

### Problem 10: I changed `.env` but the server still uses the old password

**Why it happens:** The server reads `.env` only when it **starts**.

**Fix:** Press **Ctrl + C** in the terminal, then run `node server.js` again.

---

### Problem 11: The terminal says `Could not start the server` and `Is another server already using port 3000?`

**Why it happens:** Another program is already using port 3000. Often it is an old copy of your own server, or the `hello.js` server from Day 2, still running in another terminal. You may also see `listen EADDRINUSE: address already in use` in the message. It means the same thing.

**Fix:**

1. Look at **all** terminal tabs in VS Code. The panel may hold several terminals. Find the one where a server is running and press **Ctrl + C**.
2. Close the browser tabs that you do not need.
3. Run `node server.js` again. This time the terminal should stay busy.
4. Still stuck? Open `.env`, change `PORT=3000` to `PORT=3001`, save, run `node server.js` again, and open `http://localhost:3001`.

---

### Problem 12: Windows shows a security or firewall window when the server starts

**Fix:** Do not click anything you do not understand. Raise your hand and ask your instructor. (We have not tested what this window shows on the lab computers.)

---

### Problem 13: `SyntaxError` or `ReferenceError` when I run `node server.js`

**Why it happens:** There is a typing mistake in `server.js` or `data.js`: a missing `}` or `)` or quote, or a name spelled differently.

**Fix:**

1. Read the message. It shows the **file name**, the **line number** and a small `^` mark under the problem.
2. Check that line and the line above it.
3. In VS Code, click next to a `{` or `(`. VS Code highlights its partner. If nothing is highlighted, the partner is missing.
4. For `ReferenceError: something is not defined`: a name is spelled differently from where it was created. JavaScript is case sensitive.

---

## Part C: The page and the API

### Problem 14: The browser shows `Cannot GET /`, or a blank page, or an error page

**Why it happens:** Express could not find `index.html`. Either the file is not in `public`, or `public` is in the wrong place.

**Fix:**

1. In the VS Code file list, check that `index.html` is **inside** `public`, and that `public` is **inside** `notes-board`.
2. Is `public` spelled exactly like that, in `server.js` too: `path.join(__dirname, "public")`?
3. Is the address exactly `http://localhost:3000` (or your own port)?
4. If the page is white and not an error page, press **F12** and read the red message in the **Console**.

---

### Problem 15: The browser says "This site can't be reached" at localhost:3000

**Fix:**

1. Is the server running? The terminal must show `Notes Board is running...` and must **not** show a prompt.
2. Is the address exactly `http://localhost:3000`? It must start with `http://` and not `https://`.
3. Did the server stop with an error? Read the terminal and fix the error first.

---

### Problem 16: The page says `Could not reach the server. Is it running?`

**Why it happens:** The page could not talk to the server.

**Fix:**

1. Is the server running (Problem 15)?
2. Look at the address bar. Does it start with `http://localhost`? If it starts with `file:///`, you double-clicked `index.html`. Close the tab and open `http://localhost:3000` instead.

---

### Problem 17: I changed `server.js` or `data.js`, but nothing changed

**Why it happens:** You did not restart the server. Node.js reads the file only when it starts.

**Fix:** Press **Ctrl + C** in the terminal and run `node server.js` again. Then refresh the browser.

You may also see `Cannot POST /api/notes` or a 404 error when you add a note. This means the running server does not yet have your new POST route. Restart it.

---

### Problem 18: The page looks like Day 2: no Password box, or notes vanish on refresh

**Why it happens:** The browser is showing an old copy of the page or the old JavaScript, or you edited a file that is not inside `public`.

**Fix:**

1. Press **Ctrl + F5** in the browser.
2. Open `public\index.html` and `public\js\app.js` in VS Code. Are these the files you edited? There must be no `index.html` or `js` folder directly inside `notes-board`.
3. Is the browser address `http://localhost:3000`?

---

### Problem 19: Console says `Cannot read properties of null (reading 'value')` or `(reading 'addEventListener')`

**Why it happens:** JavaScript looked for an element by its `id`, and the page has no such element. Most often the password box is missing in `index.html`, or its `id` is spelled differently.

**Fix:**

1. Check that `index.html` has `id="note-password"` exactly.
2. Check the spelling in `app.js`: `getElementById("note-password")`.
3. Save both files and press **Ctrl + F5**.

---

### Problem 20: `401` or the message `Wrong password.`

**Why it happens:** The password in the page box is not the same as `NOTES_PASSWORD` in `.env`. This is the password check working correctly.

**Fix:**

1. Open `.env` and read the value after `NOTES_PASSWORD=`. Type exactly that into the Password box. Capital letters count.
2. Did you change `.env` after you started the server? Restart the server (Problem 10).
3. Did you keep the sample password? Then the password is `change-this-password`.
4. Is the Password box empty? It must not be.

---

### Problem 21: `Please write both a title and a note.` or `The title or the note is too long.`

**Why it happens:** The server answered with status 400. The title or the note is empty, or the title is longer than 60 letters, or the note is longer than 300 letters.

**Fix:** Write a title and a note that fit the limits.

---

### Problem 22: `That note does not exist.` when I click Delete

**Why it happens:** The server answered with status 404. Often the server was restarted, so the notes on the server are not the same as the notes the page is still showing.

**Fix:** Refresh the page with **F5**.

---

### Problem 23: A JSON error such as `Unexpected token '<', "<!DOCTYPE "... is not valid JSON`

**Why it happens:** The page asked the server for JSON, but the server sent an HTML error page (which starts with `<`). The exact words depend on the browser. Usual causes:

- The route is missing because you did not restart the server (Problem 17).
- The address in `app.js` is spelled differently from the route in `server.js`. Check `/api/notes`.
- `server.js` has an error. Look at the terminal.

**Fix:**

1. Open the address in the browser, for example `http://localhost:3000/api/notes`. Do you see JSON or an error page?
2. Read the terminal where the server runs. An error with a line number may be there.
3. Fix the spelling or the restart problem.

---

### Problem 24: `TypeError: listNotes is not a function` (the browser shows a page with this text)

**Why it happens:** The last line of `data.js`, `module.exports = { listNotes, addNote, deleteNote };`, is missing or misspelled, so `server.js` cannot get the functions.

**Fix:** Check the last line of `data.js`. Save it, then restart the server.

---

### Problem 25: My notes disappeared after I restarted the server

**This is not a bug.** The notes are kept in the memory of the server program. When the server stops, they are gone. This is today's lesson. On Day 4 we store the notes in a database.

---

## I am far behind

This is okay.

1. Copy the **done** folder for Day 3 from your instructor. It has `notes-board` with all the files. It does not have a `.env` file, and it may not have a `node_modules` folder, so you must make them:
2. In the terminal, go into the copied `notes-board` folder with `cd`. Then run:

```
npm install
```

3. Make your private password file and edit it:

```
copy .env.example .env
```

4. Open `.env` and write your own password. Save.
5. Start the server:

```
node server.js
```

6. Open `http://localhost:3000`. Read the code and compare it with your own work.
7. Tomorrow's starter folder has everything from Day 3, so you can join Day 4 on time.
8. The most important parts of today are Parts 3 to 7: a running Express server, the API, and the password check.
