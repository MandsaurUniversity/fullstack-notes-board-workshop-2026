# Day 2 Instructor Run Sheet (120 minutes)

For the instructor only. Teach in Hindi. All written material stays in English. Day 2 has the highest risk of the week, because 30 to 60 computers install software at the same time with one instructor. Plan for it.

## Before the class (do these first)

- [ ] Do the clean-machine pilot from `INSTRUCTOR-PILOT-CHECKLIST.md`, on a Windows 11 Home PC that does not have Node.js installed. Time the installs.
- [ ] Put the installers on the LAN share and on two spare USB sticks (in case the LAN fails). Write the share path on the board.
- [ ] Put `setup-check.js`, the Day 2 `starter` folder and the Day 2 `done` folder on the same share.
- [ ] Ask the lab attendant to make sure that students can run installers (administrator rights), and that Windows Update is not about to restart the machines.
- [ ] Zoom VS Code and the terminal (**Ctrl and +**) so that the back row can read.

## Timeline

| Minutes | What | Notes |
|---------|------|-------|
| 0 to 8 | Check: installer folder, questions from the homework | Walk the room. Count the folders: every student should show `Workshop-Installers`. Fix missing files now (LAN or USB) |
| 8 to 18 | Talk: the terminal, PATH, what Node.js, npm and Git are | "Black window" demo on the projector. Show `cd`, `dir`, `mkdir` |
| 18 to 45 | Lab Parts 1 to 3: install Node.js and Git, restart VS Code, open the terminal | You install on the projector at the same time, one step at a time. Pause at every screen. Use Command Prompt, not PowerShell |
| 45 to 55 | Lab Part 4: `node -v`, `npm -v`, `git --version`, `setup-check.js` | **Gate:** do not go on until most students have four PASS lines. Use pods of six: the first student with all PASS helps the others in the pod |
| 55 to 60 | Lab Part 5: terminal practice (short) | `cd`, `dir`, `mkdir`, `echo`, `type`. Two minutes of Tab and Up arrow |
| 60 to 70 | Talk and Lab Part 6: JavaScript basics in the console | Live: variable, array, object, function |
| 70 to 100 | Lab Part 7: the Notes Board | Walk through sections 1 to 9 of `app.js`, a few lines at a time. Say "keep the data in one place, draw the page from the data" |
| 100 to 108 | Lab Part 8: About page details | Use copy-paste for `about.js`. Students type `student-details.js` and choose their own details |
| 108 to 115 | Lab Part 9: first server | Demo on the projector. Students follow if time allows |
| 115 to 120 | Quiz or homework, backup | |

## Cut lines (if the installs take long)

Installs are the priority. If they run past minute 55:

1. **Move Part 9 (hello server) to the start of Day 3.** This is the first thing to cut.
2. **Part 8:** students only edit their details in the `done` version of `student-details.js` and `about.js` (copy them in).
3. **Part 6:** do it as a demo on the projector only.
4. **Quiz:** move to the start of Day 3.

Do not cut: Parts 1 to 4 (everything installed and checked), the notes board in Part 7, and the backup.

## If installs fail for some students

- Use the spare USB sticks for the installers.
- If a student's computer still fails, pair that student with a neighbour. They can write code on the neighbour's computer and fix their own installation after the class.
- Make a list of those students. Check them first on Day 3 morning.

## What to say about the shared setup problems

- "A terminal reads PATH only when it starts. Close VS Code and open it again."
- "Use Command Prompt. If you see 'scripts disabled', you are in PowerShell."
- "Everything in the red text is a clue, not an insult. Read it."

## Talk points for the JavaScript part

- JavaScript is how a page reacts: a click, a key, a form.
- The data is in an array. The page is drawn from the array.
- `textContent` is safe. `innerHTML` with user text is not. Show `<b>bold</b>` appearing as plain letters.
- After a refresh, notes are lost. This is on purpose, so that students feel the need for a server and a database.

## Before ending the class

- [ ] Everyone who could install has `node -v` showing 22 and four PASS lines.
- [ ] Students with problems are on your list.
- [ ] Students know to bring GitHub account details tomorrow, and to read the Day 3 theory once.
- [ ] Backup done.

## Notes for your own preparation tonight (Day 3)

- Day 3 needs `npm install express`. Check whether the lab network can reach the npm registry from 30 to 60 computers at the same time. If not, use the offline `node_modules` plan in `INSTRUCTOR-PILOT-CHECKLIST.md`.
- The Day 3 starter folder must be a copy of the Day 2 `done` folder.
