# Day 1 Stuck Sheet: "If you see this, do this"

Before you call your instructor, try the fix on this page. Most problems today are small and have a simple fix. Your instructor is the only person helping a full room, so this sheet saves everyone's time.

**First, try these three things every time:**

1. Press **Ctrl + S** to save the file in VS Code.
2. Go to the browser and press **F5** to refresh.
3. Look closely at the code for a missing `<`, `>`, `"` or `/`.

---

## Problem 1: I double-click my file and it opens as text, or in Notepad

**Why it happens:** The file was saved as `index.html.txt`. Windows was hiding the `.txt` at the end.

**Fix:**

1. Open File Explorer. Click **View**, then **Show**, then tick **File name extensions**.
2. Look at the file name. If it ends with `.html.txt`, right-click the file, choose **Rename**, and remove `.txt`.
3. Windows asks if you are sure. Choose **Yes**.

---

## Problem 2: The page has no colours or style

**Why it happens:** The browser cannot find or read your CSS file.

**Fix, check in this order:**

1. Is the file really at `notes-board\css\style.css`? The folder must be named `css` and the file must be named `style.css`.
2. In `index.html`, look inside `<head>`. Is this line there, spelled exactly like this?

```html
<link rel="stylesheet" href="css/style.css">
```

3. Did you save `style.css`? A white dot on the file tab in VS Code means "not saved". Press Ctrl + S.
4. Press **F5** in the browser.

---

## Problem 3: My change does not show in the browser

**Fix:**

1. Save the file (Ctrl + S).
2. Refresh the browser (F5).
3. Check that you opened the right file. Your browser may have an old copy of the page open in another tab.
4. Check the file path in the address bar of the browser. It should end with `Workshop/notes-board/index.html`.

---

## Problem 4: Typing `!` and pressing Tab does nothing

**Why it happens:** VS Code does not know the file is an HTML file.

**Fix:**

1. Look at the file name on the tab. It must end with `.html`.
2. Look at the bottom-right of the VS Code window. It should say **HTML**. If it says "Plain Text", click it and choose **HTML**.
3. Try again: type `!`, then press **Tab**.

---

## Problem 5: The page shows strange letters or symbols

**Fix:** Check that this line is inside `<head>`:

```html
<meta charset="UTF-8">
```

---

## Problem 6: Part of my page is missing or looks broken

**Why it happens:** A tag was opened but not closed, or a tag was closed in the wrong place.

**Fix:**

1. Every opening tag such as `<section>` needs a closing tag `</section>`.
2. In VS Code, click right after an opening tag. VS Code highlights its matching closing tag. If nothing is highlighted, the closing tag is missing.
3. Use the `done` folder as a model. Open its file next to yours and compare, line by line.

---

## Problem 7: The About link or the Home link shows "file not found"

**Fix:**

1. Are `index.html` and `about.html` in the **same folder** (`notes-board`)?
2. Is the link spelled exactly `about.html` or `index.html`, in lowercase?

---

## Problem 8: I cannot find my folder

**Fix:**

1. In VS Code, click **File**, then **Open Recent**. Your `Workshop` folder is in the list.
2. Or open File Explorer and go to **Documents**, then **Workshop**.

---

## Problem 9: I am far behind and the others are finished

This is okay. Do not panic.

1. Copy the `starter` folder from your instructor. It gives you the empty page skeleton.
2. Or copy the `done` folder. It is the finished result for today. You can read the code and compare it with the lab sheet.
3. Tomorrow's starter folder has everything from Day 1, so you will be able to join Day 2 on time.

---

## Still stuck?

1. Raise your hand and keep the problem on your screen.
2. While you wait, ask a classmate near you. Explaining a problem to someone often helps you find it.
3. When you ask for help, say what you **expected** and what you **see**. For example: "I expected a blue header, but the header is white."
