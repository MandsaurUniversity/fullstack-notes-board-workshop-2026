# Day 3: A Server with Node.js and Express

**Goal:** Students build the Notes Board server with Express. The notes live on the server and the page reads, adds and deletes them with `fetch`. Reading is public. Adding and deleting need a password that is kept in a private `.env` file and never committed to Git.

| Folder | Files |
|--------|-------|
| `notes/` | `Day-3-Theory` (read before class) |
| `lab/` | `Day-3-Lab-Sheet` (10 parts, plus Part 0) |
| `help/` | `Day-3-Stuck-Sheet` |
| `starter/` | Everything finished up to Day 2 (`notes-board`, `hello-server`, `setup-check.js`) |
| `done/` | `notes-board` with `server.js`, `data.js`, `package.json`, `.env.example`, `.gitignore` and the `public` folder |

## Highest risk of the day

`npm install express` on 30 to 60 computers at the same time over the lab network. Do Pilot B in `../INSTRUCTOR-PILOT-CHECKLIST.md` before this class. The instructor sheet for the day (with the fallback plan) is in `../00-Instructor-Kit/instructor-sheets/Day-3-Run-Sheet.md`.

## What to know about the `done` folder

- In the Git repository it has **no** `node_modules` folder and **no** `.env` file, because Git ignores both. (A copy on the instructor's computer may still hold a `node_modules` folder left from testing. Give students a clean copy without it, so that they practise `npm install`.) Students run `npm install` and copy `.env.example` to `.env` (the Stuck Sheet has the steps).
- At the end of Day 3 the notes are kept in the memory of the server. They are lost when the server stops. This is on purpose: it is the reason for the database on Day 4.

## Homework for Day 4

1. Students check that their GitHub account exists and write down the username.
2. Students run their Notes Board once more and add a note with their password.
3. Students answer the "Check yourself" questions in the Day 3 Theory.
4. Students try the extra challenges.
5. Students write down at least two questions.
