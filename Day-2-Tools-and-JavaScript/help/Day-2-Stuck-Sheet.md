# Day 2 Stuck Sheet: "If you see this, do this"

Before you call your instructor, try the fix on this page. Most problems today have a small, known fix.

**First, try these every time:**

1. Save the file (**Ctrl + S**). Refresh the browser (**F5**).
2. Read the **red message** in the browser Console (press **F12**) or in the terminal. It usually names the file and the line number.
3. Compare your code with the lab sheet, one line at a time.

---

## Part A: Installing and the terminal

### Problem 1: `'node' is not recognized as an internal or external command`

**Why it happens:** The terminal started before Node.js was installed, so it does not know about it.

**Fix:**

1. Close the terminal panel.
2. **Close VS Code completely**, then open it again.
3. Open a **new** terminal (Terminal, then New Terminal) and type `node -v` again.
4. Still the same? Restart the computer once, then try again.
5. Still the same? Run the Node.js installer again and choose **Repair** if it is offered. Then repeat steps 1 to 3.

The same fix works for `git` and `npm`.

---

### Problem 2: A red message says `running scripts is disabled on this system`

**Why it happens:** You are in **PowerShell**, and PowerShell blocks some scripts by default.

**Fix:** Switch to **Command Prompt**.

1. In the terminal panel, click the small **down arrow** next to the **+** icon.
2. Choose **Command Prompt**.
3. Type your command again.

---

### Problem 3: Windows shows "Windows protected your PC" when I run an installer

**Fix:** This message can appear for any installer. Only continue if the file came from the workshop folder given by your instructor.

1. Click **More info**.
2. Click **Run anyway**.

If you are not sure about the file, ask your instructor first.

---

### Problem 4: The installer asks for an administrator password

**Fix:** Tell your instructor. Lab computers should allow installation with administrator rights.

---

### Problem 5: `node setup-check.js` says `Cannot find module`

**Why it happens:** You are in the wrong folder. The terminal looks for the file in the current folder.

**Fix:**

1. Type `dir`. Do you see `setup-check.js` in the list?
2. If not, use `cd` to go to the folder where you saved it, or copy the file into your `Workshop` folder.

---

### Problem 6: A line says `FAIL` in the setup check

**Fix:** Read the **Hint** under that line. The usual causes:

- **Node.js version is not 24:** install the Node.js 24 LTS file from the workshop folder, not another version.
- **Git is not available:** install Git, then open a new terminal.
- **Port 3000 is not free:** an old server is still running. Find its terminal window and press **Ctrl + C**.

---

## Part B: JavaScript and the Notes Board

### Problem 7: I click "Add note" and the page just reloads

**Why it happens:** `app.js` is not running, so the browser uses the default form behaviour.

**Fix:**

1. At the end of `index.html`, is there a line `<script src="js/app.js"></script>` just before `</body>`?
2. Is the file really at `notes-board\js\app.js`? Check the folder name and the file name.
3. Press **F12**, open the **Console** tab, and read any red error.

---

### Problem 8: Console says `Cannot read properties of null (reading 'addEventListener')`

**Why it happens:** JavaScript looked for an element by its `id`, and the page has no element with that `id`. Usually the `id` in the HTML and the `id` in the JavaScript are spelled differently.

**Fix:**

1. Look at the line number in the error.
2. Check the `id` inside the quotes of `getElementById("...")`.
3. Check the same `id` in `index.html`. The spelling must match exactly, including `-` and capital letters.

---

### Problem 9: Console says `Uncaught SyntaxError`

**Why it happens:** Something is missing in the code, for example a closing `}` or `)` or a quote.

**Fix:**

1. Look at the line number in the error.
2. Check that line and the line above it.
3. In VS Code, click next to a `{` or `(`. VS Code highlights its matching partner. If nothing is highlighted, the partner is missing.

---

### Problem 10: Console says `something is not defined`

**Why it happens:** A name is spelled differently from where it was created, for example `notesList` and `noteslist`. JavaScript is **case sensitive**.

**Fix:** Search for the name in your file (**Ctrl + F**) and make every copy match.

---

### Problem 11: My notes show, but there are no buttons or the page looks plain

**Fix:**

1. Did you paste the Day 2 CSS block at the end of `style.css`?
2. Save `style.css`, and refresh with **F5**.

---

### Problem 12: The About page is empty, or it shows nothing from my details

**Fix:**

1. Are both script lines at the end of `about.html`? Is `student-details.js` **before** `about.js`?
2. Open the Console (F12). Read the red error.
3. Did you leave `studentDetails` values empty? Empty values are hidden on purpose. Type something and refresh.

---

## Part C: The first server

### Problem 13: `Error: listen EADDRINUSE: address already in use :::3000`

**Why it happens:** Another program is already using port 3000. Often it is your own old server, still running.

**Fix:**

1. Find the terminal where the old server runs. Press **Ctrl + C**.
2. Check all terminal tabs in VS Code. The panel may show several terminals.
3. Run `node hello.js` again.

---

### Problem 14: The browser says "This site can't be reached" at localhost:3000

**Fix:**

1. Is the server still running? The terminal must show `Server is running...` and must not show a prompt.
2. Is the address exactly `http://localhost:3000`? It must start with `http://` and not `https://`.
3. Did the server stop with an error? Read the terminal and fix the error first.

---

### Problem 15: `Cannot find module 'C:\...\hello.js'`

**Fix:** You are in the wrong folder. Type `cd hello-server` (from `Workshop`), then try again. Use `dir` to see the files in your current folder.

---

### Problem 16: I changed `hello.js` but the browser shows the old message

**Fix:** A running server does not reload by itself. Press **Ctrl + C** to stop it, run `node hello.js` again, and refresh the browser.

---

## I am far behind

This is okay.

1. Copy the **done** folder for Day 2 from your instructor. Read it and compare it to your own work.
2. Tomorrow's starter folder has everything from Day 2, so you can join Day 3 on time.
3. Installing Node.js and Git is the most important part of today. Make sure `node setup-check.js` shows four PASS lines before you leave.
